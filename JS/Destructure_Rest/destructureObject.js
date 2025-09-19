const person={
    namePerson:"sebin",
    age:23,
    place:"Kochi",
    job:"Btech"
}

const car={
    car_name:"swift",
    engine:"petrol",
    power:"1000cc",
    gear:"auto",
}

const house={ ...person,...car }
console.log(house);

const {namePerson,car_name,place,...rest}=house;
console.log(namePerson,car_name,rest);
