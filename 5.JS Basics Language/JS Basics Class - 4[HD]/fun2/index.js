// function sum(a,b){
//     let total=0;
//     for(let value of arguments){
//         total=total+value;
//     }
//     return total;
// }

// let total=sum(1,2,5);
// console.log(total);

//rest parameter

// function sum(...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6,2);


// function rest1(a,...args){
//     console.log(args);
// }

// rest1(1,2,3,4,5,6,2);

// let person={
//     firstName:'anand',
//     lastName:'kumar',

//     get fullName(){
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(val){
//         if( typeof val!==String){
//             throw new Error("you have not sent words ");
//         }
//         let parts=val.split(' ');
//         this.firstName=parts[0];
//         this.lastName=parts[1];
//     }
// };



// try {
//     person.fullName=true;

// } catch (e) {
//     alert(e);
// } 

// console.log(person.fullName);

//reduce 

let arr=[1,2,6,5];

let total=arr.reduce((val1,val2)=>val1+val2,0);
console.log('total is ' +total);