import React from 'react';
import { Routes, Route } from "react-router-dom"
import NavBar from './Header';
import Footer from './Footer';
import Home from './Home';
import {CATS} from "../app/cats";
import {PROMOS} from "../app/promotions";
import {STAFF} from "../app/staff";

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cats: CATS,
            promos: PROMOS,
            staff: STAFF
        }
    }

    render() {
        return (
            <>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home cats={this.state.cats} promos={this.state.promos} staff={this.state.staff}/>} />
                </Routes>
                <Footer/>
            </>
        )
    }
}