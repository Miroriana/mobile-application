const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];
// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
const lowestPrice =  items.filter((item)=> item.price <= 10)
console.log(lowestPrice);

// 2. Filter and show the product that will be expensive in the array
const highestPrice =  items.filter((item)=> item.price >= 500)
console.log(highestPrice);

// 3. Calculate the full price of all products combined
var totalSum=0
items.forEach(element => {
    totalSum += element.price 
});
console.log(totalSum);

// 4. Calculate the full price of all products combined and remove products that are under $10
var sum=0
items.forEach(ele =>{
    if(ele.price>=10){
        sum += ele.price;
    };
    
});
console.log(sum);

// 5. Filter and show the product that will be start with letter b at first postion

var foundProducts=items.filter(ele=>ele.name.startsWith('B')||ele.name.startsWith('b'));

console.log(foundProducts);