/**
 * La Imperial - Premium Home Appliances
 * Main Application JavaScript
 */

$(document).ready(function() {
    // 1. Initialize Carousels
    $('.product-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
        margin: 20,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1024: { items: 3 }
        }
    });

    // 2. Sticky Navbar on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const menuList = document.getElementById("menuList");
    const toggleBtn = document.querySelector(".navbar__toggle");

    window.toggleMenu = function() {
        if (menuList.classList.contains("navbar__menu--active")) {
            menuList.classList.remove("navbar__menu--active");
        } else {
            menuList.classList.add("navbar__menu--active");
        }
    }

    // 4. Smooth Scrolling for Nav Links
    document.querySelectorAll('.navbar__link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                menuList.classList.remove("navbar__menu--active");
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
});
