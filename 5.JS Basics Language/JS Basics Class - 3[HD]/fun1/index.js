// //callback function objct mai search karna

// let city=[
//     {no:1,name:'mumbai'},
//     {no:2,name:'kerla'},
//     {no:3,name:'goa'}
// ];

// let cityData=city.find(function(cities){
//     return cities.name=='kerla';
// });

// console.log(cityData);


// //using arrow function
// let cityData2=city.find(cities=>
//      cities.name=='mumbai'
// );

// console.log(cityData2);


// let arr=[1,2,3,4,5];

// //using for-of 
// for(let value of arr){
//     console.log(value);
// }

// console.log('------------------');

// //using foreach

// arr.forEach(function(number){
//     console.log(number);
// });

// console.log('------------------');

// //same using arraow function

// arr.forEach(number=>
//     console.log(number)
// );

//using mapping

// let numbers=[2,1,-9,3,-7];

// let filteres1=numbers.filter(value=>value>=0);
// console.log(filteres1);

// console.log('-----------------------');

// let map1=filteres1.map(function(val){
//     return {id:val};
// });

// console.log(map1);

// console.log('-----------------------');

// let map2=filteres1.map(val2=> {id:val2} );

// console.log(map2);

//chaining function

// let numbers=[2,1,-9,3,-7];

// let items=numbers.filter( val=>val>=0 );

// console.log(items);

// let map1=items.map( mapItems=> { id:mapItems} );

// console.log(map1);

// using map and filter both
let numbers = [1,2,-6,-9];

let items = numbers
            .filter(value => value >= 0)
            .map(num => {value: num});

console.log(items);