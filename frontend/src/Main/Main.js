import Profiles from './Profiles'
import TextFilter from './TextFilter'
import Bar from '../Common/Bar'
import CardCreator from './CardCreator'
import { useState, useEffect } from 'react'

function Main() {

    function GetBackData() {
        var [data, setData] = useState([{}])
        function getProducts(route) {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch(route, requestOptions)
                .then(res => res.json())
                .then(res => setData(res));
        }

        useEffect(() => {
            getProducts("http://localhost:9000/getData")
        }, [])

        return (data)
    }

    var [textFilter, setTextFilter] = useState("", "")
    
    var data = []
    data = GetBackData()

    if (textFilter != ""){
        var newData = []
        data.map(function (i,n){
            if (i["name"].toLowerCase().search(textFilter.toLowerCase()) != -1){
                newData.push(i)
            }      
        })
        data = newData
    }

    return (
        <>
            <Bar />
            <TextFilter filtering={setTextFilter}/>
            <Profiles />
            <CardCreator data={data} />
        </>
    )
}

export default Main