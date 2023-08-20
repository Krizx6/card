const details = document.querySelector('.details');
const shoe = document.querySelector('.shoe');

shoe.addEventListener('click', ()=>{
    details.classList.toggle("showHide");
});