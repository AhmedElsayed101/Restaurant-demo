import React, {Component, Fragment} from 'react'
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap'


class Header extends Component {

    render () {

        return (
            <Fragment>
                <Navbar  dark>
                    <div className="container">
                        <NavbarBrand href= "/" >Restaurant Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    
                </Jumbotron>
            </Fragment>
        )
    }
}

export default Header