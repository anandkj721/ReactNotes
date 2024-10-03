let element=document.querySelector('#wrapper');
element.addEventListener('click',function(event){
    if(event.target.nodeName==='SPAN'){
        console.log('apan par click hua hai' +event.target.textContent);
    }
});