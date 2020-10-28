import React from "react";
import "./style.css";

function Search (props) {

    return (
      <div>
       <h1>Current Employees</h1>
        
       <div class="entertext">
        <form className="form">
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.changeInput}
            type="text"
          />
         <br></br>
          <button onClick={props.submitForm}>Search</button>
        </form>
        </div>
      </div>
    );
  
}

export default Search;