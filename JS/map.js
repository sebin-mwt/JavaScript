// add five to each number

let arr=[3,4,5,6,7]

// let sums=arr.map(sumNumber);

// function sumNumber(n1){

//     return n1+5

// }

let sums=arr.map((num)=>num+5)

console.log(sums);


// find cube of array sums

let cube=sums.map((n1)=> n1**3)
console.log(cube);


words=["am","pm","goodmorning","technology","cat","ight"]

vowels="aeiou"
// convert to uppper case

let upppercase=words.map((w)=>w.toUpperCase())
console.log(upppercase);

