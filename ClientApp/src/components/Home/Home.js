import React, { Component } from 'react';
import './styles.css';
import Formulario from '../Formulario/Formulario';
import Lateral from '../Lateral/Lateral';
import Input from '../Input/Input';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <>
               
                <div className="container">
                    <div className="lateral">
                        <Lateral />
                    </div>

                    <div className="formulario">
                        <Formulario className="form" /></div>

                </div>

            </>
               


                    







            
             
       
         
        );
    }
}
