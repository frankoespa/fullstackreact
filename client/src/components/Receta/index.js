import React, { Component } from 'react';

class Receta extends Component {
    render() {
        let {id,name,tag,ingredients} = this.props.receta;
        return (
            <div className="column is-12-mobile is-6-tablet is-3-desktop">
                <div className="card">
                    <div className="card-header has-background-primary">
                        <p className="card-header-title has-text-white">{name}</p>
                    </div>
                    <div style={{ minHeight: '150px' }} className="card-content has-text-centered">
                        <p>
                            {ingredients}
                        </p>
                    </div>
                    <div className="card-footer">

                        <p className="card-footer-item is-uppercase">
                            <span className="tag is-dark">{tag}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Receta;