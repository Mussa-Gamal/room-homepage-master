let isHamburgerClickable = true;

const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger .hamburger-icon');
const closeIcon = document.querySelector('.hamburger .close-icon');
const nav = document.querySelector('nav');
const navItems = document.querySelector('.nav-items');
const logo = document.querySelector('.logo');
const whiteSpace = document.querySelector('.white-space');
const main = document.querySelector('.main');

// Display the Nav items when clicking on the hamburger icon
hamburger.onclick = function() {
    if (isHamburgerClickable) {
        isHamburgerClickable = false;

        if (navItems.classList.contains('d-none')) {
            logo.classList.toggle('d-none'); // Hide the logo
            whiteSpace.style.animation = 'slide-down 1s 0.3s forwards ease-in-out';
            hamburgerIcon.style.display = 'none'; // Hide the hamburger icon
            closeIcon.style.display = 'block'; // Show the close icon
            navItems.classList.remove('d-none');
            navItems.classList.toggle('d-flex'); // Show Nav items
            navItems.style.animation = 'fade-in 1s 1s forwards';
            nav.style.padding = `57px 60px`;
            document.body.style.overflow = 'hidden'; // Disable scrolling when the Navbar is opened
            main.style.animation = 'darken 1s forwards';
        } else {
            hamburgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            setTimeout(() => {
                navItems.classList.remove('d-flex');
                navItems.classList.toggle('d-none');
                whiteSpace.style.animation = 'slide-up 1s forwards ease-in-out';
                document.body.style.overflow = 'auto';
                document.body.style.opacity = '1';
                main.style.animation = 'lighten 1s forwards';
            }, 1000);
            navItems.style.animation = 'fade-out 1s forwards';
            nav.style.padding = `45px 60px`;
            logo.classList.remove('d-none');
        }

        setTimeout(function() {
            isHamburgerClickable = true;
        }, 2000); 
    }
};

// Make the Navbar disappear when scrolling down and reappear when scrolling up
let prevScrollpos = window.scrollY;
window.onscroll = () => {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos || currentScrollPos <= 30) {
        nav.style.display = "block";
        nav.style.opacity = "1";
      } else {
        nav.style.display = "none";
        nav.style.opacity = "0";
      }

    prevScrollpos = currentScrollPos;
}

// Change the images and hero content when clicking on any of the navigation arrows

// Desktop image array
let imgArr = [
    'desktop-image-hero-1.jpg',
    'desktop-image-hero-2.jpg',
    'desktop-image-hero-3.jpg'
];

// Mobile image array
let mobileImgArr = [
    'mobile-image-hero-1.jpg',
    'mobile-image-hero-2.jpg',
    'mobile-image-hero-3.jpg'
];

// H1 array
let h1Arr = [
    'Discover innovative ways to decorate',
    'We are available all across the globe',
    'Manufactured with the best materials'
];

// P array
let pArr = [
    'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.',
    'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
];

let i = 0;

// Change the image array based on screen width
function updateImageArray() {
    if (window.innerWidth < 400) {
        imgArr = mobileImgArr;
    } else {
        imgArr = [
            'desktop-image-hero-1.jpg',
            'desktop-image-hero-2.jpg',
            'desktop-image-hero-3.jpg'
        ];
    }
}

function slide() {
    updateImageArray();
    document.querySelector('.slider-hero .image-container img').src = 'images/' + imgArr[i];
    document.querySelector('.slider-hero .hero-content h1').innerHTML = h1Arr[i];
    document.querySelector('.slider-hero .hero-content p').innerHTML = pArr[i];
}

function handleResize() {
    slide();
}

window.addEventListener('resize', handleResize);

document.querySelectorAll('.left').forEach(leftArrow => {
    leftArrow.addEventListener('click', () => {
        i--;
        if (i < 0) {
            i = imgArr.length - 1;
        }
        slide();
    });
});

document.querySelectorAll('.right').forEach(rightArrow => {
    rightArrow.addEventListener('click', () => {
        i++;
        if (i >= imgArr.length) {
            i = 0;
        }
        slide();
    });
});  


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        i--;
        if (i < 0) {
            i = imgArr.length - 1;
        }
        slide();
    } else if (event.key === 'ArrowRight') {
        i++;
        if (i >= imgArr.length) {
            i = 0;
        }
        slide();
    }
});


AOS.init({
    duration: 1700,
    once: true
});
