import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    button: {
        marginTop: 70,
    },
    initLable: {
        fontSize: 23
    },
    initForm: {
        width: 170,
    }
});


function Init({ value, Change, submit, classes }) {

    return (
        <form className="InitBox" onSubmit={submit} >
            <h2 className="Welcome">welcome to news pages</h2>
            <FormControl className={classes.initForm}>
                <InputLabel className={classes.initLable} >your country</InputLabel>
                <Select
                    onChange={Change}
                    value={value}
                >
                    <MenuItem value={'kr'}>korea</MenuItem>
                    <MenuItem value={'gb'}>United Kingdom</MenuItem>
                    <MenuItem value={"us"}>United States</MenuItem>
                </Select>
                <Button type="submit" color="primary" variant="contained" className={classes.button}>설정</Button>
            </FormControl>
        </form>
    )
}

export default withStyles(styles)(Init)
