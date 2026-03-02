 let arr = [1,2,3,4];

// arr.forEach((num, index) => {
//    if(num === 2) return;
//    console.log(num);
// });
// const result = arr.forEach((n,i,a)=>{
//     n = n*i;
//     if(n==i+1)return
//     process.stdout.write(`n = ${n} i= ${i} a= ${a}`)
//     console.log()
// })

// console.log(result)

arr.forEach((value, index, array) => {
   array[index] = value * 10;
});

console.log(arr);