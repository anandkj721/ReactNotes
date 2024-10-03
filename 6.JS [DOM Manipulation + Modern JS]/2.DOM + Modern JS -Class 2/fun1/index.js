
function clickEventListner1(){
    console.log('I have clicked on documents ');
}

document.addEventListener('click',clickEventListner1);

//apply remove event listner

document.removeEventListener('click',clickEventListner1);