import React from "react";
import Styles from './Logo.module.css';

function Logo(){
    return(
        <div>
            <img className={Styles.Logo} src={require('../../assets/logo/logo.png')} alt="logo" />
        </div>

        

    );
}

export default Logo;