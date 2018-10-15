import React, { Component } from 'react';

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
        }
    }

    handleFilms(){
        
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((res) => res.json())
            .then((films) => {
                this.setState({
                    films,
                })
            })
    }

    render() {
        return this.state.films.map((film) => {
                return (
                    <div key={film.id}>
                        <h5 onClick={this.handleFilms} className="text-center">{film.title}</h5>
                    </div>
                )
            })

    }

}

export default Movies;