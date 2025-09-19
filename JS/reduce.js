arr=[10,20,25,30,35,44,47,50]

// find sum of the array

let totalSum=arr.reduce((n1,n2)=> n1+n2)
console.log(totalSum);

// find Largest number

let largestNo=arr.reduce((n1,n2)=> n1>n2?n1:n2)
console.log(largestNo);

//find smallest number

let smallestNo=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(smallestNo);

//sorting in ascending order
