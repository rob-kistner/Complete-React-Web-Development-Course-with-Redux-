
const person = {
  name: 'Rob',
  age: 48,
  location: {
    city: 'Oak Park',
    temp: 72
  }
};

// ----- destructured
const { name, age } = person;

console.log( `${name} is ${age}.` );


// ----- standard
if (person.location.city && person.location.temp) {
  console.log( `It's ${person.location.temp} in ${person.location.city}` );
}

// ----- destructured
// const {city, temp} = person.location;
// ----- 2nd var is renamed to localtemp
const {city, temp: localtemp} = person.location;

// ... is a little easier to read
if (city && localtemp) {
  console.log( `It's ${localtemp} in ${city}` );
}

// ----- setting a default value for missing city
// const {city = 'Home', temp} = person.location;
