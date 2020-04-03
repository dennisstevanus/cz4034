import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {FormControlLabel, FormLabel, FormControl, RadioGroup, Radio} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        margin: "10px"
    },
}));

const RadioSidebar = props => {
    const classes = useStyles();
    const [radioSideBar, setRadioSidebar] = useState(props);
    const [radioValue, setRadioValue] = useState();

    const handleChange = event => {
        setRadioValue(event.target.value);
    };

    return (
        <FormControl className={classes.root} component="fieldset">
            <FormLabel component="legend">{radioSideBar.title}</FormLabel>
            <RadioGroup aria-label="radioSidebarGroup" value={radioValue} onChange={handleChange}>
                {radioSideBar.objects.map((component) =>
                    <FormControlLabel control={<Radio />} label={component.label} value={component.value} />
                )}
            </RadioGroup>
        </FormControl>
    )
};

export default RadioSidebar
