console.log('hello');

let recatangle={
    lenght:1,
    breadth:3,

    draw:function() {
        console.log('deawing rectangle');
    }

};

//factory function
console.log('---------factory function-------------');
function recatangle1(){

    return recatangle={
        lenght:1,
        breadth:3,
    
        draw() {
            console.log('deawing rectangle');
        }
    
    };
}

let recatangle1Obj=recatangle1();

//factory function2 ,taking input as parameter
console.log('---------factory function-------------');
function recatangle2(lenght,breadth){

    return recatangle={
        lenght:lenght,
        breadth:breadth,
    
        draw() {
            console.log('deawing rectangle');
        }
    
    };
}

let recatangle2Obj=recatangle2(4,5);

