// let arr = [1,2,3];

// let result = arr.map(num => {
//   return num * 2;
// });

// console.log(result);

// let arr = [1,2,3,4];

// let result = arr.map(num => {
//    if(num > 2) return num * 2;
//    return num;
// });
// console.log(result)

// let arr = [1,2,3];

// let result = arr.map(num => {
//    if(num > 1) return num;
// });
// console.log(result)

let arr = [1,2,3,4];

let result = arr.map((num, index) => {
   return index;
});

console.log(result);