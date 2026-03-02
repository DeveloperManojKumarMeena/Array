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

let arr = [10,20,30,4];

// let result = arr.map((num, index) => {
//    return index;
// });

// console.log(result);

//Q. Sum of Array's Element

let sum = 0;
let max = 0
arr.forEach((n)=>{
   //sum +=n
   if(max<n)max=n
})
// console.log('sum of array elements are : ' + sum)
console.log('max element of array is :' + max)