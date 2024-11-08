import { names, products, provinces } from "./arrays.js";

//EXCERCISES 

//1. `forEach` to log each name and each province.

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
// `map` to create an array of strings, where each name is combined with its corresponding province
const combine = arr1.map((item ,index) => 
// Format each pair as "Name (Province)" using template literals  
    `"${item} (${arr2[index]})"`)
// `forEach` to log each formatted "Name (Province)" string to the console
return combine.forEach(item => {
    console.log(item)
})
}
// Call the function with the `names` and `provinces` arrays to output each pair
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
    // Split the name into an array of letters and use `some` to check if any letter is 's' or 'S'.
    // `some` returns `true` if at least one letter matches, otherwise `false`.
    return name.split("").some(letter => letter === "s" || letter === "S")}
)
console.log(hasS)

//7.Use `reduce` to transform the names array into an object mapping names to their respective provinces.

const obj = names.reduce((acc, key, index) =>{
     // Set the current name (key) as a property in the accumulator object
     // Assign the corresponding province (from the provinces array) as the value
    acc[key] = provinces[index]
    // Return the accumulator object to continue building it in each iteration
    return acc
},{}) // Initialize the accumulator as an empty object

console.log(obj)


//----------------------------------------------------------------------


//ADVANCED EXCERCISES 
//For these exercises, wrap your logic in a single `console.log` statement:

//1. Iterate over the products array, logging each product name.

console.log(products.map(item => item.product))

//2.  Filter out products with names longer than 5 characters.

console.log(products.filter(name => name.product.length < 5))

//3. Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.

console.log(
    //Filter out products that don't have a valid price (empty strings or missing values).
    products.filter(item => item.price && item.price !==" ")
             // Use `map` to create a new array where all `price` values are converted to numbers.
                .map(item =>({
                ...item,
                // Convert `price` to a number if it's a string, using `parseFloat`
                price : typeof item.price === "string" ? parseFloat(item.price) : item.price}))
            //Use `reduce` to accumulate the total of all `price` values.
                .reduce((acc, currentVal)=> 
                    acc + currentVal.price ,0)// Add the current item's `price` to the accumulator and initialize it as 0
        )

//4. Use `reduce` to concatenate all product names into a single string.

console.log(products.reduce((item, itemName) => item + itemName.product + ' ' ," "))


//5. Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
    // ...products.map creates a new array of prices, converting each price to a number with `parseFloat`.
    // - If a price is invalid (e.g., an empty string), it defaults to -Infinity in max or 
    //Infinity in min to exclude it from the calculation.

console.log(`
    Highest: ${Math.max(...products.map(item => parseFloat(item.price) || -Infinity))}. 
    Lowest: ${Math.min(...products.map(item => parseFloat(item.price) || Infinity))}.`

) 


//6.  Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost',
// maintaining their original values.

console.log(
    // Using `map` to iterate over each product object in the `products` array
    products.map(item =>
        // `Object.entries` turns each product object into an array of [key, value] pairs
        Object.entries(item).reduce((acc, [key, value]) =>{
            // Check if the key is 'product'; if so, set the 'name' key in the accumulator
            if (key === 'product') acc.name = value
            // Check if the key is 'price'; if so, set the 'cost' key in the accumulator,
            // converting `value` to a number with `parseFloat` and defaulting to 0 if invalid
            if (key === 'price') acc.cost = parseFloat(value) || 0
            // Return the accumulator object with the new 'name' and 'cost' keys
            return acc
        }, {}) // Initialize the accumulator as an empty object for each item
    )
)