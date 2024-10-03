let links=document.querySelectorAll('a');

let thirdLink=links[2];

thirdLink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('link ko block kar dega');
});