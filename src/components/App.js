import React, {Component} from 'react';
import '../styles/App.css';
import Header from './Header';
import Form from './Form';
import VehicleList from './VehicleList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      pilot: ""
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUpdate = (event) => {
    this.setState({ value: this.state.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ pilot: this.state.value });
    this.setState({ value: "" })
  }
  render() {
    return (
      <div className="App">
          <Header />
          <Form handleUpdate={this.handleUpdate} handleSubmit={this.handleSubmit}/>
          <VehicleList />
      </div>
    );
  }
}

export default App;
