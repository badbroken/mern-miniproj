import React from 'react';
import "./Form.scss"

const Form = () => {
    return (
        <div className="container">
            <h1 className="title">
                Register User
            </h1>
            <form action="">
                <label>Name:</label>
                <input type="text" id="userName" name="userName" required/>
                <br/>
                <label>Email:</label>
                <input type="email" id="userEmail" name="userEmail" required/>
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Form;