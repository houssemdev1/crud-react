import React, { Component } from 'react'
import './App.css'
class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      job: '',
    }

    this.state = this.initialState
  }
  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const { name, job } = this.state;
  
    return (
        <div className="container input-container">
          




<div className="d-flex justify-content-center">
      <form >
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control input-job"
          value={name}
          onChange={this.handleChange} />
        <label>Job</label>
        <input
          type="text"
          name="job"
          className="form-control input-job"
          value={job}
          
          onChange={this.handleChange} />
            <div className="d-flex ">
      <input className="btn btn-success" type="button" value="Submit" onClick={this.submitForm} />
     
      </div>
      </form>
      </div>
  </div>
    );
  }
}
  export default Form;
  
