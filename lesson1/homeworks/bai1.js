// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.

const array = [2, 7, 1, 8, 3, 9];
const newArray = array.filter(num => num > 5);
console.log(newArray);