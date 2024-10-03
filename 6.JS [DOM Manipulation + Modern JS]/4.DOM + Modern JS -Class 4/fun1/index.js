// let meraPromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('inside setTimeout - meraPromise1');
//     },5000);
//     reject(new Error('bhai saheb erroe aa gaya !!'));
// });
 
// meraPromise1.then((val)=> {console.log(val)},(error)=>{console.log('i received error !!!')}) ;

// console.log('i AM first');

let p=new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("hi i am setTimeout function ,p")
    }, 5000);
    reject(new Error('bhai saheb erroe aa gaya !!'));
});

p.then(function(val){
    console.log(val);
},function(error){
    console.log('i received error!!')
});

console.log('i AM first');