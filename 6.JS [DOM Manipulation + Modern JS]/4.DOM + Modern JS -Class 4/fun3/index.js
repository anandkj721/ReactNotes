// async function fun1(){
//     return 7;
// }

async function utility(){

    let mumbaiMausam=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('rainy season in mumbai ');
        },5000);
    });
    
    let delhiMausam=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('hot season in delhi ');
        },6000);
    });
    
    let mm=mumbaiMausam;
    let dm=delhiMausam;
    return [mm,dm];
}
