import React, { Component } from 'react';
import Receta from '../Receta';

class AllRecetas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recetas: []
        }
    }
    

    componentDidMount(){
        fetch('/api/recetas')
        .then(res=>(res.json()))
        .then(recetas=>{
            console.log(recetas);
            this.setState({recetas})
        })
    }

    render() {
        return (
            <div className="section">

                <div className="columns is-mobile is-multiline">
                    {this.state.recetas.length!==0 && this.state.recetas.map(receta=>{
                        return (
                            
                            <Receta receta={receta}></Receta>
            
                        )
                    } ) }
                    
    
                </div>

            </div>
        );
    }
}

export default AllRecetas;

