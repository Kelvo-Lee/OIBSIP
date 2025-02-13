var typed = new Typed('.multiple-text', {
  strings: ['Software Developer.', 'UI/UX Designer.'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

  $(document).ready(function () {
    $("#read-more-btn").click(function (event) {
      event.preventDefault();
      $("#hidden-text").fadeToggle();
  });
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar'); 

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('fa-x');
  navbar.classList.toggle('active');
};


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        });
     };
  });

  menuIcon.classList.remove('fa-x');
  navbar.classList.remove('active');
};

ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });





