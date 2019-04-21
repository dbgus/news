import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from "@material-ui/core/FormControl";


function Init({ value, InitHandleChange }) {

    return (
        <form>
            <FormControl className="IntiForm">
                <InputLabel>your country</InputLabel>
                <Select
                    onChange={InitHandleChange}
                    value={value}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'kr'}>korea</MenuItem>
                    <MenuItem value={'gb'}>UK</MenuItem>
                    <MenuItem value={"us"}>US</MenuItem>

                </Select>
            </FormControl>
        </form>
    )
}

export default Init
