/*=============================Contact form validation================================= */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms.validateForm;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        try {
            const response = await fetch('/submit-form', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                // You can handle the success response here
            } else {
                console.error('Form submission failed');
                // Handle the failure case
            }
        } catch (error) {
            console.error('Error occurred during form submission:', error);
        }
    });
});


/*===============toggle icon navbar=============================== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};




/*================Scroll section active link================================= */

let sections = document.querySelectorAll('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetHeight - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });

    /*=================================Stricly navbar=========================== */

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);

    /*===========================remove toggle icon and navbar when click navbar link scroll================ */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*=========================Scroll reveal================ */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .skills-container, .education-box, .contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});

/*===================type js====================== 

const typed = new typed('.multiple-text', {
    strings: ['Web Devloper', 'Java Devloper', 'C/C++ Devloper', 'MEAN Stack Devloper', 'Web Designer' ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});*/
