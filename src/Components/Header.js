import React, { Component } from 'react'
import '../Style/header.css'

import logo from '../Img/logo.png'

export default class Header extends Component {
    render() {
        return (
            <header>

                <img src={logo}  alt="logo" id="logo"/>

                <p id="HeaderText">#DeuTrabalhoMasOFooterTaSaindo</p>
            </header>
        );
    }
}