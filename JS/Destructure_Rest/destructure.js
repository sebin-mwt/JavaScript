const array1=[10,20,30,40]

const array2=[5,15]

const outArray=[...array1,...array2]  // output [ 10, 20, 30, 40, 5, 15 ]

const outArray2=[...array1];  // shallow copy the datas


outArray2.push(8);

// console.log(outArray);
// console.log(outArray2);

const [ten,twnty,thrty,...arr2]=array1;

console.log(arr2);
