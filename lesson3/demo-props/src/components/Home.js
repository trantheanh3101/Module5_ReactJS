import React from 'react';

function Home(props) {
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <h1>Welcome</h1>
                <button onClick={props.onLogOut}>Log out</button>
            </div>
        </div>
    );
}

export default Home;
