// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first"
//          và các phần tử còn lại vào một mảng mới "rest".

const array = [1, 2, 3, 4, 5];
const [first, ...rest] = array;
console.log(first);
console.log(rest);