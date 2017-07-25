import React, {Component} from 'react';
import '../styles/App.css';

class Vehicle extends Component {
  render() {
    const vehicle = this.props.vehicle;
    return (
      <div className="col-sm-4" key={vehicle.name}>
        { vehicle ?
          <div className="card p-3">
            <h5>Vehicle: {vehicle.name}</h5>
            <h6 className="text-muted">Model: {vehicle.model}</h6>
            <div className="container">
              <ul className="list-group">
                <h6 className="list-group-item text-muted">Specs</h6>
                <li className="list-group-item small">Manufacturer: {vehicle.manufacturer}</li>
                <li className="list-group-item small">Class: {vehicle.vehicle_class}</li>
                <li className="list-group-item small">Passengers: {vehicle.passengers}</li>
                <li className="list-group-item small">Crew: {vehicle.crew}</li>
                <li className="list-group-item small">Length: {vehicle.length}</li>
                <li className="list-group-item small">Max Speed: {vehicle.max_atmosphering_speed}</li>
                <li className="list-group-item small">Cargo Capacity: {vehicle.cargo_capacity}</li>
              </ul>
            </div>
          </div>
        : <div>No Pilots</div> }
      </div>
    );
  }
}


export default Vehicle;
