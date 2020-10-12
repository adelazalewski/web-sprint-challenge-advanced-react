import React, { useState } from 'react';

const NavBarDiv = (props) => {
    const toggleMode = e => {
        e.preventDefault();
        props.setDarkMode(!props.darkMode);
    };
    return(
        <div div className="dark-mode__toggle"> 
            <div onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}></div>
        </div>
    )
};

export default NavBarDiv;