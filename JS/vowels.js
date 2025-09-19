var word="hai this is sebin from mwt technologies";

const vowels="aeiou";

let vowel_count=0;
let cons_count=0;

for(let ch of word){

    // console.log(ch);
    if (vowels.includes(ch)){
        vowel_count++;
    }

    else if (ch != " "){

        cons_count+=1

    }
    
}

console.log(vowel_count);
console.log(cons_count);

