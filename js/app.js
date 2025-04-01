// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .product-item, .benefit-item');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Mobile menu toggle
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');

    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-button');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';

    nav.insertBefore(menuButton, navLinks);

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
};

// Initialize mobile menu on small screens
if (window.innerWidth <= 768) {
    createMobileMenu();
}

// Form validation for contact form (if added later)
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
};

// Add loading animation to CTA buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        button.classList.add('loading');

        // Simulate loading (remove in production)
        setTimeout(() => {
            button.classList.remove('loading');
        }, 1000);
    });
});
