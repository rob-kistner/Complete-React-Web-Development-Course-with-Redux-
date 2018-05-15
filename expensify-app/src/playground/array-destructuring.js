const sep = () => {
  console.log("- - - - - - - - - - - - - - - - -");
};


// Array Destructuring

const address = [
  '11611 S. Normandy Ave', 
  'Worth',
  'Illinois',
  '60482'
];

// standard method
console.log(`You are in ${address[1]}, ${address[2]}`);

sep();

// must use square brackets for arrays
//
// const [street, city, state, zip] = address;
// console.log(`You are in ${street}, ${city}`);

// you don't need to create variables for everything
// present in the array
//
const [ , , , , apt = '204'] = address;

console.log(`You are in apartment #${apt}`);

sep();

// challenge
const item = [
  'Coffee (Hot)',
  '$2.00',
  '$2.50',
  '$2.75'
];

const [ coffeeHot, , priceMed, , coffeeIced = 'Coffee (Iced)' ] = item;

// (1) 1st and 3rd items using array destructuring
// (2) Add a Coffee (Iced) default array member to pull out
console.log(`A medium ${coffeeHot} costs ${priceMed}`);
console.log(`A medium ${coffeeIced} costs ${priceMed}`);

