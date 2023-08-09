import React from 'react';
import './navbar.css';
import logo from '../../vscode_img.png'
import { useState } from 'react'
// import { Search } from '@material-ui/icons'
import SearchIcon  from '@material-ui/icons/Search'
function Navbar() {
    let [isOpen, setIsOpen] = useState(false)
    let [close, setClose] = useState(false)

    const handleMenuClick = () => {
        setIsOpen(!isOpen)
    }

    const handleClose = () => {
        setClose(true)
    }
    return (
        <div>
            <div className="navbar_container">
                <div className="wrapper">
                    <div className="navbar_left">
                        <img className="brand_logo" src={logo} alt="vscodelogo" />
                        <span className="brand_name">Visual Studio Code</span>
                    </div>
                    <div className="navbar_right">
                        <div className="menubutton" onClick={handleMenuClick}>
                            <div className="horizontal_bar"></div>
                            <div className="horizontal_bar"></div>
                            <div className="horizontal_bar"></div>
                        </div>
                    </div>
                </div>
                
                <div className="menu_container" style={{height: isOpen === true ? "350px" : "0px", overflow: isOpen === true ? "auto" : "none"}}>
                    <span className="menu_item">Docs</span>
                    <span className="menu_item">Updates</span>
                    <span className="menu_item">API</span>
                    <span className="menu_item">Learn</span>
                    <span className="menu_item">Search</span>
                    <span className="menu_item">FAQ</span>
                    <span className="menu_item">Extensions</span>
                    <span className="menu_item download">Download</span>
                </div>
                {/* style={{display: close === true ? "none" : ""}} */}
                { !close &&
                    <div className="additional_info">
                        <div className="version_info">
                            <a href="#">Version 1.68</a> is now available! Read about the new features and fixes from May.
                        </div>
                        <div className="cancel_btn" onClick={handleClose}>
                            <div className="left cross"></div>
                            <div className="right cross"></div>
                        </div>
                        {/* <Search /> */}
                        <SearchIcon />
                    </div>
                }
            </div>
        </div>
    );
}

export default Navbar;