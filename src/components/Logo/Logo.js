import React from 'react';
import BurgerLogo from '../../../src/Assets/images/27.1 burger-logo.png.png';
import classes from './Logo.module.css';
const logo = (props)=>(
    <div className={classes.Logo} style= {{height: props.height}}>
        <img src={BurgerLogo} alt = "We serve you eat." />
    </div>
);

export default logo;