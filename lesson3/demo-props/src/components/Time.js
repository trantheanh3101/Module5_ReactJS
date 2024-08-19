import React, { useState, useEffect } from 'react';

function Time() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timerID); // Dọn dẹp interval khi component bị unmount
    }, []);

    return <h2>It is {currentTime.toLocaleTimeString()}</h2>;
}

export default Time;
