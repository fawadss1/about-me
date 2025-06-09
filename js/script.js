// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Scroll animations using Intersection Observer
const observerOptions = {
    root: null, // relative to document viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of item visible
};

function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: unobserve after animation if you only want it to run once
            // observer.unobserve(entry.target);
        } else {
            // Optional: remove class if you want animation to replay on scroll up
            // entry.target.classList.remove('is-visible');
        }
    });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
elementsToAnimate.forEach(el => observer.observe(el));

// Remove 'no-js' and add 'js' class to html for JS-specific styles
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');


// Smooth scroll for navigation links with fixed header offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Calculate offset for fixed navbar
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
