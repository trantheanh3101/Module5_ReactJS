import React, { useState } from "react";

function Submit() {
    const [state, setState] = useState({
        username: "",
        age: null
    });

    const submitHandler = event => {
        event.preventDefault();
        alert("You are submitting " + state.username);
    };
    const handleChange = event =>
        setState({ ...state, [event.target.name]: event.target.value });
    return (
        <form onSubmit={submitHandler}>
            <h1>
                Hello {state.username} {state.age}
            </h1>
            <p>Enter your name:</p>
            <input type="text" name="username" onChange={handleChange} />
            <p>Enter your age:</p>
            <input type="text" name="age" onChange={handleChange} />
            <input type="submit" />
        </form>
    );
}

export default Submit;