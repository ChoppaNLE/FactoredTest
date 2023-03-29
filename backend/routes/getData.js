var express = require('express');
var router = express.Router();

const { createPool } = require("mysql2/promise")

var conn = 0
var rows = 0
var rows2 = 0
var data = []
var count = 0

router.use((req, res, next) => {
    conn = createPool({
        database: 'factoreddb',
        user: 'zo2bfedz8thpo3ccsg0v',
        host: 'us-east.connect.psdb.cloud',
        password: 'pscale_pw_rY6J8r8XSbS1YwlRzf3xi4ldN2LB5Hee0PrylJCWtKn',
        ssl: {
            rejectUnauthorized: false
        }
    });
    next();
})

router.use(async (req, res, next) => {
    rows = await conn.query("SELECT * FROM PROFILE")
    next();
})

router.use(async (req, res, next) =>{

    rows[0].map(async (element) => {
        rows2 = await conn.query("SELECT * FROM POSITIONC WHERE id_positionc = " + element.id_positionc)
        rows3 = await conn.query("SELECT PROFILE.id_profile, name, language, value FROM PROFILEXSKILL INNER JOIN PROFILE ON PROFILE.id_profile = PROFILEXSKILL.id_PROFILE INNER JOIN SKILL ON PROFILEXSKILL.id_skill = SKILL.id_skill;")

        rows2[0].map(async (element2) => {
            finalElement = {
                id: "",
                name: "",
                position: "",
                personxskill: {},
                avatar: "",
            }

            finalElement.id = element.id_profile
            finalElement.name = element.name
            finalElement.avatar = element.avatar
            finalElement.position = element2.positionc_name
            data.push(finalElement)
        })

        habilitiesElement = {}
        rows3[0].map(async (element3) => {

            if (element3.id_profile == element.id_profile){
                habilitiesElement[element3.language] = element3.value
            }
            
        })

        data[count].personxskill = habilitiesElement
        
        count += 1
        if (count == rows[0].length){
            next()
        }
    })
})

router.get('/', function (req, res) {
    res.send(JSON.stringify(data));
    data = []
    count = 0
});

module.exports = router;



