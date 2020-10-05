import React from 'react';
import "./Home.scss"

const Home = () => {
    return(
        <div className="container">
            <h1 className="title">
                All users
            </h1>
            <ul className="users">
                <li>Name: John / Email: john@email.com</li>
                <li>Name: John / Email: john@email.com</li>
            </ul>
        </div>
    )
}

export default Home