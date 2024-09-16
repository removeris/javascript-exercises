const findTheOldest = function(people) {

/*
people {
    name:
    yearOfBirth:
    yearOfDeath:
}*/

let oldestPerson = people[0];

if(!("yearOfDeath" in oldestPerson)){
    oldestPerson.yearOfDeath = parseInt(new Date().getFullYear());
}

people.forEach((person) => {

    if(!("yearOfDeath" in person)){
        console.log("Hello");
        person.yearOfDeath = new Date().getFullYear();
    }
    const currentPersonAge = person.yearOfDeath - person.yearOfBirth;
    const oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;

    console.log(`Current Oldest: ${oldestPerson.name} ${oldestPersonAge}`);

    if(currentPersonAge > oldestPersonAge)
        oldestPerson = person;
})

console.log(oldestPerson);

return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
