import React, { Component } from "react";
import { HttpService } from "./Services/httpService";
import Header from "./Header/header";
import Table from "./Table/Table";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employees: [],
      name: "",
      role: "",
      id: '',
      editFlag: false
    };

    this.serv = new HttpService();
    this.deleteHandler = this.deleteHandler.bind(this);
    this.edit = this.edit.bind(this);    
  }

  componentDidMount() {
    this.getUsersData();
  }

  getUsersData() {
    axios
      .get("getUsers")
      .then(response => {
        console.log("22 json.......", response);
        this.setState({ Employees: response.data });
      })
      .catch(err => {
        console.log("333error", err);
      });
  }

  deleteHandler(id) {
    console.log("deleteHandler", id);
    axios
      .delete(`deleteUsers?id=${id}`)
      .then(res => {
        console.log("1 deleteUsers.......", res);
        alert("Employee record has been deleted.");
        this.getUsersData();
      })
      .catch(err => {
        console.log("deleteUsers err", err);
      });
  }

  editHandler(e) {
    console.log("editHandler", this.state);
    axios
      .put(`updateUsers?id=${this.state.id}&name=${this.state.name}&role=${this.state.role}`)
      .then(res => {
        console.log("1 addHandler.......", res);
        alert("Employee record has been added.");
        this.getUsersData();
      })
      .catch(err => {
        console.log("addHandler err", err);
      });
  }

  addHandler(e) {
    console.log("addHandler", this.state);
    axios
      .post(`addUsers?name=${this.state.name}&role=${this.state.role}`)
      .then(res => {
        console.log("1 addHandler.......", res);
        alert("Employee record has been added.");
        this.getUsersData();
      })
      .catch(err => {
        console.log("addHandler err", err);
      });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleRoleChange(e) {
    this.setState({ role: e.target.value });
  }

  edit(emp) {
    console.log('edit.....',emp)
    this.setState({
      editFlag: true,
      name: emp.name,
      role: emp.role,
      id: emp.id
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Table
          empData={this.state.Employees}
          deleteHandler={this.deleteHandler}
          editHandler={this.edit}
        />
        <br />
        <br />
        {
          (this.state.editFlag) ?
          <div>
          <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
          <input type="text" value={this.state.role} onChange={this.handleRoleChange.bind(this)} />
          <input
            type="button"
            value="Save"
            onClick={this.editHandler.bind(this)}
          />
        </div> :
        <div>
        <input type="text" placeholder="name" onChange={this.handleNameChange.bind(this)} />
        <input type="text" placeholder="role" onChange={this.handleRoleChange.bind(this)} />
        <input
          type="button"
          value="Add Employee"
          onClick={this.addHandler.bind(this)}
        />
      </div>
        }
        <br />
      </div>
    );
  }
}

export default App;
