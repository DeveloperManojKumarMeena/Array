let arr = [28,83,74,48,84,38];

// let max = Math.max(arr[0],arr[1]);
// let smax = Math.min(arr[0,arr[1]])

// for(let i = 2; i<arr.length;i++){
//     if(arr[i]>max){
//         smax = max ;
//         max = arr[i]
//     }else if(arr[i]>smax){
//         smax = arr[i]
//     }
// }
// console.log(`second max number ${smax}`)

let max = Math.max(...arr);

console.log(max)