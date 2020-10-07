import React, { Component,Fragment } from "react";
import Menu from "./MenuListComponent";
import Header from './HeaderComponent'
import Footer from './FooterComponent'
class Main extends Component {
    


    render () {

        return (
            <Fragment >
                <Header/>
                <Menu/>
                <Footer/>
            </Fragment>
        )
    }
}

export default Main