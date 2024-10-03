let myDiv=document.createElement('div');


function paraStatus(event){
    console.log('para'+event.target.textContent);
}

myDiv.addEventListener('click',paraStatus);

for(let i=1;i<=10;i++){
    let paraElement=document.createElement('p');

    paraElement.textContent='hi trisha'+i;

    myDiv.appendChild(paraElement);
}

document.body.appendChild(myDiv);