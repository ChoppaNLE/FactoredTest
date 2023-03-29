import { TextField, Box } from '@mui/material'
import { useState } from "react"

function TextFilter({filtering}) {

    return (
        <>
            <div className='container-fluid' id="container_form">
                <div className='row justify-content-center' id="separed_row">
                    <div className='col-4'>
                        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                            <div>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Filter name"
                                    multiline
                                    maxRows={4}
                                    onChange={(e) => filtering(e.target.value)}
                                />
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextFilter