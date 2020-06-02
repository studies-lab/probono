import React, { Component } from "react";
import LawerDataService from "../services/lawer.service";

export default class AddLawer extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.saveLawer = this.saveLawer.bind(this);
    this.newLawer = this.newLawer.bind(this);

    this.state = {
      id: null,
      email: "",
      password: "", 

      submitted: false
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  saveLawer() {
    var data = {
      email: this.state.email,
      password: this.state.password
    };

    LawerDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          email: response.data.email,
          password: response.data.password,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newLawer() {
    this.setState({
      id: null,
      email: "",
      password: "",
      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newLawer}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Digite um email"
                  className="form-control"
                  id="email"
                  required
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  name="Email"
                />
              </div>
  
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Digite uma senha"
                  className="form-control"
                  id="password"
                  required
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  name="password"
                />
              </div>
  
              <button onClick={this.saveLawer} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    }
}