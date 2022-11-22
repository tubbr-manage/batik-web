
// Add Event Listner to CTA Buttons
let buttons = document.querySelectorAll('.btn-cta');

buttons.forEach((button)=> {
    button.addEventListener("click", function() {
        openModal();
    });
});


// Add Event Listner to Close Btn
document.querySelector('.close-btn').addEventListener("click", ()=> closeModal());

// Add Event Listner to Close Btn
document.querySelector('#form-btn').addEventListener("click", ()=> formSubmit());



function openModal(){
    window.scrollTo(0,0);
    document.body.style.overflowY='hidden';
    let modal = document.querySelector('.modal-container');
    modal.style.display='block';
}

function closeModal(){
    document.body.style.overflowY='visible';
    let modal = document.querySelector('.modal-container');
    modal.style.display='none';
}

function formSubmit(){
    let form = document.querySelector('.form');
    form.reset();
}