const leoName = "Leo Musvaire";
const leoNumber = "2";
const leoStreet = "Church St.";
const leoPostal = "3105";
const leoBalance = "-10";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";
const sarahNumber = "13";
const sarahStreet = "William Close";
const sarahPostal = "0310";

// Only change below this line

// -----------------------------------------------------------

/* - Changed all of the "=" symbols to the correct ":" symbols on the keys
   - Added "," after every key 
*/

// Turned their balances into float number values, better readability in the console imo

const leoFloat = parseFloat(leoBalance);
const sarahFloat = parseFloat(sarahBalance);

const leo = {
  // Added = symbol
  firstName: leoName, // Changed name to firstName and removed "+ leoSurname" (His surname is included in leoName)
  balance: leoFloat,
  accessID: "47afb389-8014-4d0b-aff3-e40203d2107f", // Changed "access id" to camel case and changed the ID to a string
  age: 24,
  address: {
    number: leoNumber,
    street: leoStreet,
    postalCode: leoPostal, // Changed "postal-code" to camel case
  },
};

const sarah = {
  // Added = symbol
  firstName: sarahName + sarahSurname, // Changed name to firstName and fixed spelling (missing the h in sarah)
  balance: sarahFloat,
  accessID: "6b279ae5-5657-4240-80e9-23f6b635f7a8", // Changed "access id" to camel case and changed the ID to a string
  age: 62,
  address: {
    number: sarahNumber,
    street: sarahStreet,
    postalCode: sarahPostal, // Changed "postal-code" to camel case
  },
};

// Fixed the below from [brackets] to "." dots to pull from the object(s)

console.log(leo, leo.address.postalCode);
console.log(sarah, sarah.address.postalCode);
