import React, { Component } from "react";
import Employee from "./components/employee";
import currentEmp from "./components/workerDir.json"
import Search from "./components/search";

class App extends Component {
  state = {
    ordered: currentEmp,
    firstName: "",
    lastName: ""
  }
  changeInput = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  submitForm = event => {
    event.preventDefault();

    let findFirstName = new Array(...currentEmp)
    console.log(findFirstName)
    let arrayReturn = findFirstName.filter(employee => {
      console.log(employee.firstName.includes(this.state.firstName))
      return employee.firstName.includes(this.state.firstName)
        || employee.lastName.includes(this.state.firstName)
    })
    //setState 
    this.setState({ ordered: arrayReturn })



    this.setState({
      firstName: "",
      lastName: ""
    });
  };
  sortName = () => {
    let initial = new Array(...currentEmp)
    let onSort = initial.sort((a, b) => {
      return (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0)
    })
    this.setState({ ordered: onSort })
  }

  render() {
    return (

      <div stylle="text-align: center">

        <Search
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          changeInput={this.changeInput}
          submitForm={this.submitForm}
        />

        <button onClick={
          this.sortName
        }>Alphabetical Order</button>

        <Employee currentEmp={this.state.ordered} />

      </div>
    )
  }
}
export default App;