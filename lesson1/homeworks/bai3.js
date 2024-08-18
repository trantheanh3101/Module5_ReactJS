// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".

const array = [1, 2, 3, 4, 5];
const V = 3;
const result = array.includes(V) ? V : "không tìm thấy";
console.log(result);