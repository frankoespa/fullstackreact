import React, { Component } from 'react';

class Hola extends Component {

    componentDidMount(){
        console.log('Estoy Cargado');
    }

    render() {
        return (
            <h1 className="title">Hola soy los Profes</h1>
        );
    }
}

export default Hola;