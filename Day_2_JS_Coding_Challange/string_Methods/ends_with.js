// endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It return
// string.endsWith(substring)
let string = "Love is the best to in this world";
console.log(string.endsWith("world")); // true
console.log(string.endsWith("love")); // false
console.log(string.endsWith("in this world"));

let country = "Kenya";
console.log(country.endsWith("nya")); // true
console.log(country.endsWith("Ke")); // false
console.log(country.endsWith("ke")); //  false
