const avatar = "" + generateDiceBearBottts(Math.random())
console.log(avatar)

conn = createPool({
    database: 'factoreddb',
    user: 'zo2bfedz8thpo3ccsg0v',
    host: 'us-east.connect.psdb.cloud',
    password: 'pscale_pw_rY6J8r8XSbS1YwlRzf3xi4ldN2LB5Hee0PrylJCWtKn',
    ssl: {
        rejectUnauthorized: false
    }
});

conn.query(		"INSERT INTO PROFILE (name, avatar, id_positionc) VALUES ('Pedro Perez'," + "'"+generateDiceBearBottts(Math.random())+"'" + ", '1');")
conn.query(		"INSERT INTO PROFILE (name, avatar, id_positionc) VALUES ('Luisa Rodriguez'," + "'"+generateDiceBearBottts(Math.random())+"'" + ", '2');")
conn.query(		"INSERT INTO PROFILE (name, avatar, id_positionc) VALUES ('Juan Gonzales'," + "'"+generateDiceBearBottts(Math.random())+"'" + ", '2');")
conn.query(		"INSERT INTO PROFILE (name, avatar, id_positionc) VALUES ('Ana Bray'," + "'"+generateDiceBearBottts(Math.random())+"'" + ", '3');")
conn.query(		"INSERT INTO PROFILE (name, avatar, id_positionc) VALUES ('Laura Gomez'," + "'"+generateDiceBearBottts(Math.random())+"'" + ", '2');")
conn.query(		"INSERT INTO PROFILE (name, avatar, id_positionc) VALUES ('Lucas Paqueta'," + "'"+generateDiceBearBottts(Math.random())+"'" + ", '3');")
conn.query(		"INSERT INTO PROFILE (name, avatar, id_positionc) VALUES ('Juan Rueda'," + "'"+generateDiceBearBottts(Math.random())+"'" + ", '2');")