import React, {Component} from 'react';
import '../styles/App.css';
import Vehicle from './Vehicle'

class VehicleList extends Component {
  constructor() {
    super()
    this.state = {
      vehicles: []
    };
  }
  async componentDidMount() {
    const vehicleData = await fetch('https://swapi.co/api/vehicles/')
      .then(data => data.json())
      .catch(err => console.log(err))
      const vehicles = vehicleData.results.map(items => {
        return items
      })
      this.setState({vehicles});
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          { this.state.vehicles && this.state.vehicles.map(vehicle => {
            return <Vehicle vehicle={vehicle} />
          })}
        </div>
      </div>
    );
  }
}

export default VehicleList;
