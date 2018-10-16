import React, { Component } from 'react';

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then((res) => res.json())
            .then((people) => {
                this.setState({
                    people,
                })
            })
    }

    render() {
        return this.state.people.map((person) => {
            return (
                <div className="row">
                    <div className="card col-3" key={person.id}>
                        <div className="card-body">
                            <h5 className="card-title">{person.name}</h5>
                            <a href="#" className="btn btn-primary">Person Info</a>
                        </div>
                    </div>
                </div>
            )
        })

    }

}

export default People;