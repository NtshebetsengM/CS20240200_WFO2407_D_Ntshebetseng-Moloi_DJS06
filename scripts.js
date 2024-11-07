import { names, products, provinces } from "./arrays.js";

//excercises 

//1. `forEach` to log each name and each province.

/**
 * for each item in the array it console logs it
 * @param {Array} arr recieves an array as a parameter
 */
const logNames = (arr) => {
arr.forEach( item => {
    console.log(item)
});
}
//calling the function with the two arrays as parameters
logNames(names)
logNames(provinces)

// log each name with a matching province in the format "Name (Province)"

const nameProvince = (arr1, arr2) => {
const combine = arr1.map((item ,index) => 
    `"${item} (${arr2[index]})"`)
return combine.forEach(item => {
    console.log(item)
})
}

nameProvince(names, provinces)

//2.Use `map` to create a new array of province names in all uppercase. Log the new array to the console.

const uppercaseProvince = provinces.map(item => item.toUpperCase())
console.log(uppercaseProvince)

//3. Create a new array using `map` that contains the length of each name.

const checkNameLength = names.map( name => {
    return name.length;
})
console.log(checkNameLength)

//4. Use `sort` to alphabetically sort the provinces. 
const alphabeticalProvinces = provinces.sort()
console.log(alphabeticalProvinces)

//5. Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.

const noCape = provinces.filter(place => !place.includes("Cape") )
console.log(noCape.length)

//6. Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.

const hasS = names.map(name =>{
    return name.split("").some(letter => letter === "s" || letter === "S")}
)
console.log(hasS)

//7.Use `reduce` to transform the names array into an object mapping names to their respective provinces.

const obj = names.reduce((acc, key, index) =>{
    acc[key] = provinces[index]
    return acc
},{})
console.log(obj)

//advanced excercises

