var fruits=['apple','orange','grapes','mango'];

// typeof
console.log(typeof(fruits));

// push
fruits.push("Jack Fruit");
console.log(fruits);

// pop

fruits.pop();
console.log(fruits);

// unshift()   --> to add element at the starting position
fruits.unshift("Kiwi")
console.log(fruits);

// shift() removes first element from the array
let first_element=fruits.shift()

console.log(first_element);
console.log(fruits);

// includes()  
let flag= fruits.includes("apple");
console.log(flag);

// indexof()
let index=fruits.indexOf("orange")
console.log(index);
