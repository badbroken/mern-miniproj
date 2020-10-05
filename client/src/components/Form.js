import React, {useState} from 'react';
import "./Form.scss"
import axios from 'axios';

const Form = () => {
    // Creating a state on react
    const [userDetails, setUserDetails] = useState({
        userName: '',
        userEmail: '',
        message: ''
    })

    const formValues = (event) => {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        })
    }

    const register = async (event) => {
        event.preventDefault();
        // When sending data from Front to Back, it should be sent as JSOn format
        const body = JSON.stringify({
            userName: userDetails.userName,
            userEmail: userDetails.userEmail,
        })
        const res = await axios.post("/api/register", body , {
            headers: {
                'Content-type':'application/json'
            }
        })

        console.log(res)
    }


    return (
        <div className="container">
            <h1 className="title">
                Register User
            </h1>
            <form onSubmit={register}>
                <label>Name:</label>
                <input type="text" id="userName" name="userName" required onChange={formValues}/>
                <br/>
                <label>Email:</label>
                <input type="email" id="userEmail" name="userEmail" required onChange={formValues}/>
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Form;