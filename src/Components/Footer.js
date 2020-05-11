import React, { Component } from 'react'
import '../Style/footer.css'

import CliqueAnimation from '../Components/CliqueAnimation.js'

import AvatarVinicius from '../Img/vinicius.jpeg'

export default class Footer extends Component {
    render() {
        return (
            <div>
                
                <p id="copyright">Desenvolvida por:</p>

                <div id="AvatarDescription">

                    
                    <img src={AvatarVinicius} alt="Vine Avatar" id="Avatar" onClick={CliqueAnimation}/>

                    <div id="description">Vinicius Jacik<br/>
                    <p>Estudante de Engenharia de Software</p></div>
                        

                </div>
                

                <p id="copyright">&copy; Copyright 2020 Even Better Events - Vinicius Jacik</p>

            </div>
        );
    }
}