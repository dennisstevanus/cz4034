import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {FormControlLabel, FormLabel, FormControl, FormGroup, Radio, Checkbox} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        margin: "10px",
    },
}));

const CheckSidebar = props => {
    const classes = useStyles();
    const [checkSidebar, setCheckSidebar] = useState(props);
    const [checkValue, setCheckValue] = useState(checkSidebar.objects);

    const addItem = () => {
        checkSidebar.objects.map((component) => {
            setCheckValue([
                ...checkValue,
                {
                    label: component.label,
                    value: component.value,
                }
            ]);
        })
    };

    const handleChange = event => {
        setCheckValue({...checkValue, [event.target.name]: event.target.checked});
        console.log(checkValue);
    };

    return (
        <div>
            <FormControl className={classes.root} component="fieldset">
                <FormLabel component="legend">{checkSidebar.title}</FormLabel>
                <FormGroup>
                    {checkSidebar.objects.map((component) =>
                        <div onLoad={addItem}>
                            <FormControlLabel
                                control={<Checkbox checked={component.value} onChange={handleChange} name={component.value} />}
                                label={component.label}
                            />
                        </div>
                    )}
                </FormGroup>
            </FormControl>
        </div>
    )
};

export default CheckSidebar
