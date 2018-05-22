import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { getFlightData } from './flights'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [{
        "dest": "no dest defined",
        "price": "no price defined",
      }],
    }
    this.handleFlightDisplay = this.handleFlightDisplay.bind(this);
  }

  populateflights(flightData) {
    this.setState({
      flights: flightData
    })
  }

  handleFlightDisplay() {
    getFlightData()
      .then((res) => {
        return res.json()
        .then((json) => {
          let returnArray = json.results.slice(0,10);
          console.log(returnArray);
          this.populateflights(returnArray)
        })
    })
  };

  log(whatever) {
    console.log(whatever);
  }

  render() {

    const flightsData = this.state.flights.map((flight, i) => {
      return(
        <div key={i}>
          <p>{flight.destination}</p>
          <p>{flight.price}</p>
          <p>{flight.departure_date}</p>
          <p>{flight.return_date}</p>
        </div>
      )
    });

    return (
      <div>
        <button onClick={this.handleFlightDisplay}>Populate</button>
        <div className="c-dashboard">
          {flightsData}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Dashboard />,
  document.getElementById('root')
);
