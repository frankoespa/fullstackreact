import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import All from './components/AllRecetas';
import Preferidas from './components/Preferidas';
import Mejores from './components/Mejores';
import logo from './asset/recetas.svg';

class App extends Component {

    render() {
        return (
            <div id="app">
                <nav className="navbar is-transparent" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <img src={logo} alt="Recetas para Vos"/>
                        </Link>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">

                            <Link to="/mispreferidas" className="navbar-item">Mis Preferidas</Link>

                            <Link to="/mejores" className="navbar-item">Las Mejores</Link>

                        </div>
                    </div>
                </nav>
                <Route exact path="/" component={All}></Route>
                <Route path="/mispreferidas" component={Preferidas}></Route>
                <Route path="/mejores" component={Mejores}></Route>
            </div>
        );
    }
}

export default App;
