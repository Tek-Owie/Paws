import React from 'react';
import { Routes, Route } from "react-router-dom"
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from "./About"
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
                <Header />
                <Routes>
                    <Route path="/" element={<Home cats={this.state.cats} promos={this.state.promos} staff={this.state.staff}/>} />
                    <Route exact path="/about" element={<About/>} />
                </Routes>
                <Footer/>
            </>
        )
    }
}