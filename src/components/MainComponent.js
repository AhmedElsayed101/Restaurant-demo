import React, { Component } from "react";
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from "./MenuListComponent";


class Main extends Component {
    


    render () {

        return (
            <div >
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href= "/" >Restaurant Con Fusion</NavbarBrand>
                </div>
                </Navbar>
                <Menu></Menu>
            </div>
        )
    }
}

export default Main