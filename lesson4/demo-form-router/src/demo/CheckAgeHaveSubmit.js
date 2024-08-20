import React, { useState } from "react";

function CheckAgeHaveSubmit() {
    const [state, setState] = useState({
        username: "",
        age: null
    });

    const handleChange = event =>
        setState({ ...state, [event.target.name]: event.target.value });

    const handleSubmit = event => {
        event.preventDefault();
        if (!Number(state.age)) {
            alert("Your age must be a number");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>
                Hello {state.username} {state.age}
            </h1>
            <p>Enter your name:</p>
            <input type="text" name="username" onChange={handleChange} />
            <p>Enter your age:</p>
            <input type="text" name="age" onChange={handleChange} />
            <br />
            <br />
            <input type="submit" />
        </form>
    );
}

export default CheckAgeHaveSubmit;