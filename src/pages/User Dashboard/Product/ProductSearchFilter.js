import React, { useEffect, useState } from "react";
// import ProductResult from "./ProductResult";
import "./product.css";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
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

function ProductSearchFilter(props) {
    const classes = useStyles();
    const [plantingSeason, setSeason] = React.useState('');
    const [color, setColor] = React.useState('');
    const [inStock, setInStock] = React.useState('');
    const [sale, setSale] = React.useState('');
    const [sun, setSun] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [availableToShip, setavailableToShip] = React.useState('');

    // const handleChange = (value) => {
    //     props.handleDropdownChange(value);
    //     // setSeason(event.target.value);
    //     // setColor(event.target.value);
    //     // setInStock(event.target.value);
    //     // setSale(event.target.value);
    //     // setSun(event.target.value);
    // };

    return (
        <>
            <div>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-select-native">Category</InputLabel>
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={category}
                        name="categoryName"
                        onChange={(event) => {setCategory(event.target.value)
                            props.handleDropdownChange(event)
                        }}
                        input={<InputStyle />}
                    >
                        <option aria-label="None" value="" />
                        <option selected value="All Category">All Category</option>
                        <option value="Bulbs">Bulbs</option>
                        <option value="Fresh Cut Flowers">Fresh Cut Flowers</option>
                        <option value="Potted Plants">Potted Plants</option>
                        <option value="Extra Supplies">Extra Supplies</option>
                        <option value="Floral Arrangements">Floral Arrangements</option>
                        <option value="Fall">Fall</option>
                        <option value="Spring">Spring</option>
                        <option value="Available to Ship">Available to Ship</option>

                    </NativeSelect>
                </FormControl>
                {/* <FormControl className={classes.margin}>
                    <InputLabel id="demo-customized-select-label">Color</InputLabel>
                    <NativeSelect
                        labelId="demo-customized-select-label"
                        id="demo-customized-select-native"
                        value={color}
                        name= "colorName"
                        onChange={(event) => {setColor(event.target.value)
                            props.handleDropdownChange(event)
                        }}
                        input={<InputStyle />}
                    >
                        <option aria-label="None" value="" />
                        <option selected value="All Color">All Color</option>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="yellow">yellow</option>
                        <option value="blue">blue</option>
                        <option value="white">white</option>
                        <option value="pink">pink</option>
                        <option value="purple">purple</option>
                    </NativeSelect>
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-select-native">Season</InputLabel>
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={plantingSeason}
                        name= "seasonName"
                        onChange={(event) => {setSeason(event.target.value)
                            props.handleDropdownChange(event)
                        }}
                        input={<InputStyle />}
                    >
                        <option aria-label="None" value="" />
                        <option selected value="All Seasons">All Seasons</option>
                        <option value="Fall">Fall</option>
                        <option value="Spring">Spring</option>
                    </NativeSelect>
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-select-native">Stock</InputLabel>
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={inStock}
                        name="stockName"
                        onChange={(event) => {setInStock(event.target.value)
                            props.handleDropdownChange(event)
                        }}
                        input={<InputStyle />}
                    >
                        <option aria-label="None" value="" />
                        <option value="inStock">In Stock</option>
                    </NativeSelect>
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-select-native">Sale</InputLabel>
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={sale}
                        name="saleName"
                        onChange={(event) => {setSale(event.target.value)
                            props.handleDropdownChange(event)
                        }}
                        input={<InputStyle />}
                    >
                        <option aria-label="None" value="" />
                        <option value="sale">Currenty Sale</option>
                    </NativeSelect>
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-select-native">Sun</InputLabel>
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={sun}
                        name="sunName"
                        onChange={(event) => {setSun(event.target.value)
                            props.handleDropdownChange(event)
                        }}
                        input={<InputStyle />}
                    >
                        <option aria-label="None" value="" />
                        <option value="sun">Need Sun</option>
                    </NativeSelect>
                </FormControl> */}
            </div>
        </>
    )
}

export default ProductSearchFilter