const boxes = document.querySelectorAll('.faq-box');

boxes.forEach((box)=> {
    box.addEventListener("click", function(event) {
        boxes.forEach((box)=>{
            if(box.querySelector('.faq-ans').classList.contains("faq-ans-active")){
                box.querySelector('.faq-ans').classList.remove('faq-ans-active');
            }
        });
        event.target.querySelector('.faq-ans').classList.add('faq-ans-active');
    });
});