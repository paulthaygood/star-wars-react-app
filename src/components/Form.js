import React, {Component} from 'react';
import '../styles/App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      pilot: ""
    };
  }
  handleUpdate = (event) => {
    this.setState({ value: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ pilot: this.state.value });
    this.setState({ value: "" })
  }
  render() {
    return (
      <div className="container">
        <div className="card p-3 text-center">
        <h2 className="display-5 mx-auto">What is your name, pilot?</h2>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleUpdate} value={this.state.value} type="text" className="form-control mx-auto" placeholder="Enter your name" />
            <button type="submit" className="btn btn-primary mx-auto">Submit</button>
          </form>
          <p>
            { this.state.pilot }
          </p>
          </div>
      </div>
    );
  }
}

export default Form;
