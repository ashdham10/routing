import React, { Component } from 'react';

class SingleMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {}
        };
    }
    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then((res) => res.json())
            .then((film) => {
                this.setState({
                    film
                })
            })
    }

    render() {
        return (
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{this.state.film.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Directed by: {this.state.film.director}</h6>
                    <p className="card-text">{this.state.film.description}</p>
                    <p className="card-text">Release Date: {this.state.film.release_date}</p>
                </div>
            </div>
        )
    }
}

export default SingleMovie;