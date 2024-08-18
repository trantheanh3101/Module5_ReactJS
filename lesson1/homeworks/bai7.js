// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".

const people = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }];
const [{ name: firstName, age: firstAge }, { name: secondName, age: secondAge }] = people;
console.log(firstName, firstAge);
console.log(secondName, secondAge);