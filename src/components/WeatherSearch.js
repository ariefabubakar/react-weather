import React from 'react';

class WeatherSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            city: ""
        }
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search city" value={this.state.city} name="city" onChange={this.handleChange} />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={() => this.props.handleSearch(this.state.city)}>Search</button>
                </div>
            </div>
        );
    }
}

export default WeatherSearch;