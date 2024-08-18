// const students = [
//     { name: 'Alice', score: 85 },
//     { name: 'Bob', score: 92 },
//     { name: 'Charlie', score: 78 }
// ];
// students.forEach((student, index, array) => {
//     console.log(`Student #${index + 1}: ${student.name} scored ${student.score}`);
// });

// let hello = name => console.log('Hello ' + name);
// hello('Thế Anh');


// let hi = (s1 ,s2) => console.log("Chào" + s1 + ", bạn là " + s2);
// hi('thế anh', 'việt nam');
//
//
// //ES5
// let first = "Tran Van";
// let last = "My";
// let name = 'Ten cua minh la:' + first + ' ' + last + '.'
// console.log(name);
//
// //ES6
// let first1 = "Tran Van";
// let last1 = "My";
// let name1 = `Ten cua minh la: ${first1} ${last1}.`
// console.log(name1);
//
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator - currentValue, 0);
// console.log(sum);

const obj = {
    id: 1,
    name: "the anh"
}
let {id,name} = obj
let myClass =class {
    constructor() {
        this.id = 1;
    }
}
const obj1 = new myClass();
console.log(obj1)


