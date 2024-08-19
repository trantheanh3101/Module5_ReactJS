import React, { useState } from 'react';
import Home from "./Home";

function Log() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogIn = () => {
        setIsLoggedIn(true);
    };

    const handleLogOut = () => {
        setIsLoggedIn(false);
    };

    // if (isLoggedIn) return (<Home onLogOut={handleLogOut} />);
    if (isLoggedIn) return (
        <div style={{textAlign: 'center'}}>
        <div>
            <h1>Welcome</h1>
            <button onClick={handleLogOut}>Log out</button>
        </div>
    </div>);

    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <h1>Please Log in</h1>
                <button onClick={handleLogIn}>Log in</button>
            </div>
        </div>
    );
}

export default Log;
