// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.

function sumNumbers(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5));