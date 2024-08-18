// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.

const array = [1, 2, 3, 4, 5];
const array2 = [1, -2, 3, 4, 5];
const allPositive = array.every(num => num > 0);
const allNative = array2.every(num => num < 0);
console.log(allPositive);
console.log(allNative);
