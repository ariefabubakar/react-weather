import React from 'react';

function WeatherDetail({ selectedDay }) {
    return (
        <div className="card my-3 p-3">
            {/* <div className="container">
                <div className="row">
                    <div className="col-1">
                        <img src={`http://openweathermap.org/img/wn/${selectedDay.weather[0].icon}@2x.png`} height={50} width={50} />
                    </div>
                    <div className="col-11">
                        <span className="font-weight-bold">{selectedDay.weather[0].description.charAt(0).toUpperCase()}{selectedDay.weather[0].description.slice(1)}</span><br />
                        <span>The high will be {selectedDay.temp.max.toFixed(0)}°C, the low will be {selectedDay.temp.min.toFixed(0)}°C</span>
                    </div>
                </div>
            </div> */}
            <div style={{display: "flex"}}>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${selectedDay.weather[0].icon}@2x.png`} height={50} width={50} />
                </div>
                <div style={{flexGrow: 1}}>
                    <span className="font-weight-bold">{selectedDay.weather[0].description.charAt(0).toUpperCase()}{selectedDay.weather[0].description.slice(1)}</span><br />
                    <span>The high will be {selectedDay.temp.max.toFixed(0)}°C, the low will be {selectedDay.temp.min.toFixed(0)}°C</span>
                </div>
            </div>
            <table className="table py-6">
                <thead>
                    <tr>
                        <th></th>
                        <th>Morning</th>
                        <th>Afternoon</th>
                        <th>Evening</th>
                        <th>Night</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ color: "#8a8a8a" }}>TEMPERATURE</td>
                        <td>{selectedDay.temp.morn.toFixed(0)}°C</td>
                        <td>{selectedDay.temp.day.toFixed(0)}°C</td>
                        <td>{selectedDay.temp.eve.toFixed(0)}°C</td>
                        <td>{selectedDay.temp.night.toFixed(0)}°C</td>
                    </tr>
                    <tr>
                        <td style={{ color: "#8a8a8a" }}>FEELS LIKE</td>
                        <td>{selectedDay.feels_like.morn.toFixed(0)}°C</td>
                        <td>{selectedDay.feels_like.day.toFixed(0)}°C</td>
                        <td>{selectedDay.feels_like.eve.toFixed(0)}°C</td>
                        <td>{selectedDay.feels_like.night.toFixed(0)}°C</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WeatherDetail;