let arr = [1,2,3,4];

arr.forEach((num, index) => {
   if(num === 2) return;
   console.log(num);
});