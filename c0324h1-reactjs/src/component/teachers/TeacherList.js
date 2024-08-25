import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";

// useState Hook: Thay thế cho this.state và this.setState.
// Bạn sử dụng useState để khai báo biến trạng thái và hàm cập nhật nó.

function TeacherList() {
    // khai báo trạng thái number với giá trị khởi tạo là 0,
    // và setNumber là hàm dùng để cập nhật giá trị của number.
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(prevNumber => prevNumber + 1);
    };

    const decrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    };

    return (

        <div style={{textAlign: "center", padding: 30}}>
            <button onClick={decrease}>Decrease</button>
            <span style={{padding: 10}}>{number}</span>
            <button onClick={increase}>Increase</button>
            {/*<button className="btn btn-success mx-2" onClick={() => window.location.href = '/listStudent'}>ListStudent</button>*/}
            <Link className="btn btn-primary" to="/listStudent">ListStudent</Link>
        </div>
    );
}

export default TeacherList;
