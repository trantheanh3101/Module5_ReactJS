import React, { useState } from 'react';

function SelectedCar() {
    const carList = ["Toyota", "Honda", "Ford"];
    const colorList = ["Red", "Blue", "Green"];

    const [selectedCar, setSelectedCar] = useState({
        car: carList[0],
        color: colorList[0]
    });

    // Xử lý khi người dùng thay đổi giá trị của car
    const handleCarChange = (event) => {
        const newCar = event.target.value;
        setSelectedCar(previousState => {
            return {
                ...previousState, // Giữ lại giá trị color đã chọn trước đó
                car: newCar // Cập nhật giá trị mới cho car
            };
        });
    };

    // Xử lý khi người dùng thay đổi giá trị của color
    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setSelectedCar(previousState => {
            return {
                ...previousState, // Giữ lại giá trị car đã chọn trước đó
                color: newColor // Cập nhật giá trị mới cho color
            };
        });
    };

    return (
        <div>
            <h2>Select your car</h2>

            <p>Selected Car:
                <select value={selectedCar.car} onChange={handleCarChange}>
                    {carList.map((car, index) => (
                        <option key={index} value={car}>
                            {car}
                        </option>
                    ))}
                </select>
            </p>
            <p>Selected Color:
                <select value={selectedCar.color} onChange={handleColorChange}>
                    {colorList.map((color, index) => (
                        <option key={index} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </p>
            <p>Your selected car is a {selectedCar.color} - {selectedCar.car}</p>
        </div>
    );
}

export default SelectedCar;
