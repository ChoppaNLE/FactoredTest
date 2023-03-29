import Profiles from './Profiles'
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

    return (
        <>
            <Bar />
            <Profiles />
            <CardCreator data={GetBackData()} />
        </>
    )
}

export default Main