import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { handleFlights } from './flights'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dest: null,
    }
  }

  cheeseburger() {
    console.log('dogs');
  }

  render(props) {
    { handleFlights() }
    return (
      <div className="c-dashboard">
        <p>{this.props.dest}</p>
        <p>price</p>
        <p>time</p>
      </div>
    )
  }
}


ReactDOM.render(
  <Dashboard dest="Hangzhou"/>,
  document.getElementById('root')
);
