console.log('---------cunstuctor function-------------');
function Reactancle(lenght,breadth){
    this.lenght=lenght;
    this.breadth=breadth;

    this.draw=function(){
        console.log('constructotr function - Drawing')
    }
}

let reactancleObj=new Reactancle(4,5);

//add propertices
reactancleObj.color='green';
console.log(reactancleObj);

//delete propertices
delete reactancleObj.color;
console.log(reactancleObj);