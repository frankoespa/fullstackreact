import React, { Component } from 'react';

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
                            
                            <div className="column is-12-mobile is-6-tablet is-3-desktop">
                                <div className="card">
                                    <div className="card-header has-background-primary">
                                        <p className="card-header-title has-text-white">{receta.name}</p>
                                    </div>
                                    <div style={{minHeight:'150px'}} className="card-content has-text-centered">
                                        <p>
                                            {receta.ingredients}
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        
                                        <p className="card-footer-item is-uppercase">
                                            <span className="tag is-dark">{receta.tag}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
            
                        )
                    } ) }
                    
    
                </div>

            </div>
        );
    }
}

export default AllRecetas;

