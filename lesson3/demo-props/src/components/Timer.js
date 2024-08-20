import React, { useState, useEffect } from 'react';

function Timer() {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        // Hàm để giảm giá trị của timer mỗi giây
        const intervalId = setInterval(() => {
            setTimer(prevTimer => {
                // Nếu timer đã về 0, dừng interval
                if (prevTimer <= 0) {
                    clearInterval(intervalId);
                    alert("Time’s up");
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h2>Countdown Timer</h2>
            <p>{timer} seconds</p>
        </div>
    );
}

export default Timer;
