import React, { useEffect, useState } from "react";
// import ProductResult from "./ProductResult";
import "./product.css";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const InputStyle = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

function ProductSearchFilter() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [color, setColor] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        setColor(event.target.value);
    };

    return (
        <>
            <div>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-textbox">Name</InputLabel>
                    <InputStyle id="demo-customized-textbox" />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel id="demo-customized-select-label">Color</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={color}
                        onChange={handleChange}
                        input={<InputStyle />}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem >Red</MenuItem>
                        <MenuItem >Green</MenuItem>
                        <MenuItem >Yellow</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={age}
                        onChange={handleChange}
                        input={<InputStyle />}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
            </div>

            {/* <ProductResult /> */}
        </>
    )
}

export default ProductSearchFilter