// toggle icon navbar
let menuIcon = document.getElementById('menu-icon');
let navbar = document.getElementsByClassName('navbar')[0];


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // sticky header 
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        console.log(id, top, offset, height, offset+height)
        if (top >= offset && top < offset + height) {
            // Active navbar links 
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
            // animation 
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    // remove toggle 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation Footer
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}