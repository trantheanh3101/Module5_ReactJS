import React, { useState } from "react";

function CheckAge() {
    const [state, setState] = useState({
        username: "",
        age: null
    });
    const handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "age") {
            if (!Number(val)) {
                alert("Your age must be a number");
            }
        }
        setState({ ...state, [nam]: val });
    };

    return (
        <form>
            <h1>
                Hello {state.username} {state.age}
            </h1>
            <p>Enter your name:</p>
            <input type="text" name="username" onChange={handleChange} />
            <p>Enter your age:</p>
            <input type="text" name="age" onChange={handleChange} />
        </form>
    );
}

export default CheckAge;