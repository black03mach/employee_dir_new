
import React from "react";
import "./style.css";


function employee(props) {

    return (
        <div>
            {props.currentEmp.length ? (
                <ul className="list-group">

                    {props.currentEmp.map(result => (
                        <li className="list-item" key={result.id}>
                                <div id="name">{result.firstName} {result.lastName}</div>
                                <div id="role">Role:{result.role} </div>
                                <div id="email">Email: {result.email} </div>
                                <div id="phone">Phone:{result.phone} </div>
                                <div id="dept">Department:{result.dept} </div>
                        </li>
                    ))}
                </ul >
            ) : (
                    <h2>Please check spelling</h2>
                )}
        </div>
    )
}

export default employee;