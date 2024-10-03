let waada1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('setTimeout1-waada1');
    },2000);
    resolve(true);
});

let output=waada1.then(function(){
    let waada2=new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('setTimeout2-waada2');
        },3000);
        resolve('waada2 resolved');
    });
    return waada2;
});

output.then((value)=>console.log(value));