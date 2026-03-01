let arr= [3,1,4,2];
arr.sort()
console.log(arr)

let arr2= [10,2,5];
//it's use for normal sort we can say string shorting...
arr2.sort()
console.log(arr2)
//if we want sort number's we use this methode...

//following methode for the ascending order
console.log(arr2.sort((a,b)=>a-b))

//and this sort code for descending order number sorting
console.log(arr2.sort((a,b)=>b-a))