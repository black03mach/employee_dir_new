
import React from "react";

function employee(props) {

    return (
        <div>
            {props.currentEmp.length ? (
                <ul className="list-group">

                    {props.currentEmp.map(result => (
                        <li className="list-item" key={result.id}>
                                <div>{result.firstName} {result.lastName}</div>
                                <div>Role:{result.role} </div>
                                <div>Email: {result.email} </div>
                                <div>Phone:{result.phone} </div>
                                <div>Department:{result.dept} </div>
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