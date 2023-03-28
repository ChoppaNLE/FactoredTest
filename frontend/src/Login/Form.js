import { BsFillPersonFill } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Form() {
    return (
        <>
            <div className='container-fluid' id="container_form">
                <div className='row justify-content-center' id="separed_row">
                    <div className='col-2'>
                        <h3 class="elementor-heading-title elementor-size-default">
                            Please LogIn
                        </h3>
                    </div>
                </div>
                <div className='row justify-content-center' id="separed_row">
                    <div className='col-2'>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Email:
                        </InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <BsFillPersonFill />
                                </InputAdornment>
                            }
                        />
                    </div>
                </div>
                <div className='row justify-content-center' id="separed_row">
                    <div className='col-2'>
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Password:
                        </InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            type="password"
                            startAdornment={
                                <InputAdornment position="start">
                                    <BsFillLockFill />
                                </InputAdornment>
                            }
                        />
                    </div>
                </div>
                <div className='row justify-content-center' id="separed_row">
                    <div className='col-1'>
                        <Link to='/Profiles'>
                            <Button variant="contained" color="success">LogIn</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form