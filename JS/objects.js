var person={
    name:"sebin",
    age:23,
    place:"pvm",
    salary:10000
}

// console.log(person["name"])
console.log(person.name);

// to add a new feild
person.edu="btech"

console.log(person);

// to set salary if not there else add 2000

if ("salary" in person){

    person.salary+=2000
}

else{
    person.salary=50000
}

console.log(person);
