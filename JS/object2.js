var words="hai hello hai sebin hello hai"

var countss={

}

let wrdArray=words.split(" ")
// console.log(wrdArray);


for(let w of wrdArray){

    if(w in countss){   

            countss[w]+=1
    }

    else {
        countss[w]=1
    }

}

console.log(countss);