var nums=[45,22,5,7,3,2,9];

// sort in ascending order
//   this means if n1<n2 return n1 else n2

nums.sort((n1,n2)=> n1-n2);
console.log(nums);

// sort in descending order

nums.sort((n1,n2)=>n2-n1);
console.log(nums);
