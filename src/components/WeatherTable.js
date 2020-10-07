import React from 'react';

function WeatherTable({ list, city, country, handleSelected }) {
    return (
        <div className="card p-3">
            <h2>7-day forecast for {city}, {country}</h2>
            <table className="table table-hover table-striped">
                <tbody>
                    {
                        list.map((item, index) =>
                            <tr key={index} onClick={() => handleSelected(item)} style={{cursor: "pointer"}}>
                                <td>{new Date(item.dt * 1000).toDateString()}</td>
                                <td><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} height={50} width={50} /> {item.temp.day.toFixed(0)}°C / {item.temp.min.toFixed(0)}°C</td>
                                <td>{item.weather[0].description}</td>
                                {/* <td>{item.assignee}</td> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default WeatherTable;