import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//import Post from './components/Post';
//import Teacher from './components/Teacher';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';

class App extends Component {
  state = {
    employees: [
      { id: 1, name: 'Landrine', email: 'landrine@gmail.com', phone: '93542058' },
      { id: 2, name: 'Stéphane', email: 'stephane@gmail.com', phone: '92655030' },
      { id: 3, name: 'Gildas', email: 'gildas@gmail.com', phone: '90460615' }
    ]
  }
  addEmployee = (employee)=>{
    employee.id = Math.random();
    let employees = [...this.state.employees,employee]
    this.setState({
      employees:employees
    })
  }
  render() {
    return (
      <div className="App">
        {/* <Post />
        <Teacher name="GBODUI" email="gbodui@gmail.com" phone="12345678" /> */}
        <AddEmployee addEmployee={this.addEmployee} />
        <Employee employees={this.state.employees} />
      </div>
    );
  }

}

export default App;
