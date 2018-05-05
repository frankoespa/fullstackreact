import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Hola from './components/Hola'
import './App.css';

class App extends Component {

    render() {
        return (
            <div id="app">
                <nav className="navbar is-transparent" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                                
                                <Link to="/profes" className="navbar-item"> Profes</Link>
                            
                            <a className="navbar-item">
                                Localidades
                            </a>
                            <a className="navbar-item">
                                Clases
                            </a>
                        </div>
                    </div>
                </nav>
                <Route path="/profes" component={Hola}></Route>
            </div>
        );
    }
}

export default App;
