words=["am","pm","goodmorning","technology","cat","ight"]

vowels="aeiou"

// convert to uppper case

let upppercase=words.map((w)=>w.toUpperCase())
console.log(upppercase);

// length less than 6

let selectedwrds=words.filter((w)=>w.length<6)
console.log(selectedwrds);

// words starts with vowels

let vowelstart=words.filter((w)=>vowels.includes(w[0]))
console.log(vowelstart);


nums=[2,4,66,78,90,0]

//  longest word

let longest=words.reduce((w1,w2)=> w1.length>w2.length?w1:w2)
console.log(longest);
