import React, { Component }from 'react';

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
                    <div key={person.id}>
                        <h5 className="text-center">{person.name}</h5>
                    </div>
                )
            })

    }

}

export default People;