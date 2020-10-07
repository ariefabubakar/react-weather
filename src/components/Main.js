import React from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherDetail from './WeatherDetail';
import WeatherTable from './WeatherTable';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoaded: true,
            weather: null,
            selectedDay: null
        }
    }

    handleSearch = (city) => {
        this.setState({
            isLoaded: false,
            weather: null,

        });

        fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2&units=metric`)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.cod === "200") {
                        this.setState({
                            isLoaded: true,
                            weather: result,
                        });
                    }
                    else {
                        this.setState({
                            isLoaded: true,
                            weather: null,
                        });
                    }
                }
            );
    }

    handleSelected = (item) => {
        this.setState({
            selectedDay: item
        });
    }

    render() {
        return (
            <main className="container py-3">
                <WeatherSearch handleSearch={this.handleSearch} />
                {this.state.isLoaded ? (this.state.weather &&
                    <WeatherTable
                        list={this.state.weather.list}
                        city={this.state.weather.city.name}
                        country={this.state.weather.city.country}
                        handleSelected={this.handleSelected} />) :
                    <span>Loading...</span>
                }
                {this.state.selectedDay &&
                    <WeatherDetail selectedDay={this.state.selectedDay} />
                }
            </main>
        );
    }
}

export default Main;