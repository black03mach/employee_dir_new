import React from "react";

function Search (props) {

    return (
      <div>
       <h1>Current Employees</h1>
        
       <div>
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