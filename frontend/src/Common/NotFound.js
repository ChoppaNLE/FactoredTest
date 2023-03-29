import Bar from './Bar'
import { BsBug } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function NotFound() {
    return (
        <>
            <Bar />
            <div className='row justify-content-center'>
                <div className='col-2' id='col_mainproducts'>
                    <div id="errorMessage1">
                        <BsBug /> Error 404
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-3' id='col_mainproducts'>
                    <div id="errorMessage2">
                        Didn't found that page
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-3' id='col_mainproducts'>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <Button variant="contained" color="error">Return</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFound