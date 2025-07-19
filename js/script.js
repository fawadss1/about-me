// Performance optimization
function optimizeForDevice() {
    const isMobile = window.innerWidth <= 768;
    const isLowPowerDevice = navigator.hardwareConcurrency <= 2;
    
    if (isMobile || isLowPowerDevice) {
        // Disable resource-intensive effects
        const quantumMatrix = document.querySelector('.quantum-matrix');
        const quantumParticles = document.querySelector('.quantum-particles');
        const matrixCanvas = document.getElementById('quantum-matrix-canvas');
        
        if (quantumMatrix) quantumMatrix.style.display = 'none';
        if (quantumParticles) quantumParticles.style.display = 'none';
        if (matrixCanvas) matrixCanvas.remove();
        
        // Reduce animation complexity
        document.body.style.setProperty('--animation-duration', '10s');
    }
}

// Call optimization on load and resize
optimizeForDevice();
window.addEventListener('resize', optimizeForDevice);

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Function to ensure quantum effects don't interfere with footer
function getContentHeight() {
    const footer = document.getElementById('footer');
    if (footer) {
        const footerRect = footer.getBoundingClientRect();
        return window.innerHeight - footerRect.height - 20; // 20px margin
    }
    return window.innerHeight - 100; // fallback
}

// Create advanced quantum effects
function createQuantumParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'quantum-particles';
    particleContainer.style.height = getContentHeight() + 'px';
    document.body.appendChild(particleContainer);

    // Create DNA Helix
    const dnaHelix = document.createElement('div');
    dnaHelix.className = 'dna-helix';
    dnaHelix.innerHTML = '<div class="dna-strand"></div><div class="dna-strand"></div>';
    document.body.appendChild(dnaHelix);

    // Create Quantum Tunnel
    const quantumTunnel = document.createElement('div');
    quantumTunnel.className = 'quantum-tunnel';
    document.body.appendChild(quantumTunnel);

    // Create optimized Matrix Rain (reduced elements)
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'quantum-matrix';
    matrixContainer.style.height = getContentHeight() + 'px';
    document.body.appendChild(matrixContainer);

    // Create fewer matrix columns for better performance
    for (let i = 0; i < 8; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * 100 + 'vw';
        column.style.animationDelay = Math.random() * 10 + 's';
        column.style.animationDuration = (10 + Math.random() * 5) + 's';
        column.style.height = (30 + Math.random() * 50) + 'px';
        matrixContainer.appendChild(column);
    }

    // Reduced particle count for better performance
    const particleCount = 25;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (12 + Math.random() * 8) + 's';
        
        // Simplified quantum colors for better performance
        const colors = [
            'var(--quantum-primary)', 
            'var(--quantum-secondary)'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = randomColor;
        
        // Smaller, simpler particles
        const size = 1 + Math.random() * 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particleContainer.appendChild(particle);
    }
}

// Enhanced scroll animations with quantum effects
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            
            // Add quantum glow effect to cards
            if (entry.target.classList.contains('card-custom')) {
                setTimeout(() => {
                    entry.target.style.boxShadow = 'var(--quantum-glow-primary)';
                }, 300);
            }
        }
    });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
elementsToAnimate.forEach(el => observer.observe(el));

// Remove 'no-js' and add 'js' class to html for JS-specific styles
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

// Smooth scroll for navigation links with quantum effects
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            // Add quantum ripple effect
            createQuantumRipple(e.clientX, e.clientY);
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Quantum ripple effect
function createQuantumRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.background = 'radial-gradient(circle, var(--quantum-primary) 0%, transparent 70%)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '9999';
    ripple.style.animation = 'quantumRipple 0.6s ease-out forwards';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add quantum ripple keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes quantumRipple {
        0% {
            width: 10px;
            height: 10px;
            opacity: 1;
        }
        100% {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Mouse trail effect
let mouseTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', (e) => {
    mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (mouseTrail.length > maxTrailLength) {
        mouseTrail.shift();
    }
    
    updateMouseTrail();
});

function updateMouseTrail() {
    const existingTrails = document.querySelectorAll('.mouse-trail');
    existingTrails.forEach(trail => trail.remove());
    
    mouseTrail.forEach((point, index) => {
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.position = 'fixed';
        trail.style.left = point.x + 'px';
        trail.style.top = point.y + 'px';
        trail.style.width = '4px';
        trail.style.height = '4px';
        trail.style.background = `rgba(0, 255, 255, ${index / maxTrailLength})`;
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '1000';
        trail.style.transform = 'translate(-50%, -50%)';
        trail.style.boxShadow = `0 0 ${index * 2}px rgba(0, 255, 255, ${index / maxTrailLength})`;
        
        document.body.appendChild(trail);
    });
}

// Quantum typing effect for section titles
function quantumTypeEffect(element, text, speed = 100) {
    element.innerHTML = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed + Math.random() * 50);
        }
    }
    
    type();
}

// Initialize quantum effects when page loads
document.addEventListener('DOMContentLoaded', () => {
    createQuantumParticles();
    createQuantumConstellation();
    
    // Add quantum glitch effect to titles
    const titles = document.querySelectorAll('h1, h2, h3');
    titles.forEach(title => {
        createQuantumGlitch(title);
    });
    
    // Enhanced quantum typing effect for main title
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        setTimeout(() => {
            quantumTypeEffect(mainTitle, originalText, 100);
        }, 1000);
    }
    
    // Add quantum pulse to badges
    const badges = document.querySelectorAll('.badge-tech');
    badges.forEach((badge, index) => {
        setTimeout(() => {
            badge.style.animation = `quantumPulse 2s ease-in-out infinite`;
            badge.style.animationDelay = (index * 0.1) + 's';
        }, 2000);
    });
});

// Enhanced Quantum Button Effects
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-primary-custom, .btn-secondary-custom, .btn-outline-light-custom');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.filter = 'brightness(1.2) saturate(1.3)';
            
            // Create quantum ripple on hover
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.top = '50%';
            ripple.style.left = '50%';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'quantumButtonRipple 0.6s ease-out';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.filter = 'brightness(1) saturate(1)';
        });
    });
});

// Enhanced Quantum Card Parallax Effect
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-custom');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
        });
    });
});

// Quantum Text Glitch Effect
function createQuantumGlitch(element) {
    const originalText = element.textContent;
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
    
    let isGlitching = false;
    
    element.addEventListener('mouseenter', () => {
        if (isGlitching) return;
        isGlitching = true;
        
        let iterations = 0;
        const maxIterations = originalText.length;
        
        const glitchInterval = setInterval(() => {
            element.textContent = originalText
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                })
                .join('');
            
            iterations += 1;
            
            if (iterations > maxIterations) {
                clearInterval(glitchInterval);
                element.textContent = originalText;
                isGlitching = false;
            }
        }, 30);
    });
}

// Quantum Constellation Background
function createQuantumConstellation() {
    const constellation = document.createElement('div');
    constellation.style.position = 'fixed';
    constellation.style.top = '0';
    constellation.style.left = '0';
    constellation.style.width = '100%';
    constellation.style.height = '100%';
    constellation.style.pointerEvents = 'none';
    constellation.style.zIndex = '-1';
    constellation.style.opacity = '0.3';
    
    const stars = [];
    const numStars = 100;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'rgba(0, 255, 255, 0.8)';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.5)';
        
        constellation.appendChild(star);
        stars.push({
            element: star,
            x: parseFloat(star.style.left),
            y: parseFloat(star.style.top)
        });
    }
    
    // Create connections between nearby stars
    for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
            const distance = Math.sqrt(
                Math.pow(stars[i].x - stars[j].x, 2) + 
                Math.pow(stars[i].y - stars[j].y, 2)
            );
            
            if (distance < 15) {
                const line = document.createElement('div');
                line.style.position = 'absolute';
                line.style.height = '1px';
                line.style.background = 'linear-gradient(90deg, rgba(0, 255, 255, 0.3), transparent)';
                line.style.transformOrigin = 'left';
                line.style.left = stars[i].x + '%';
                line.style.top = stars[i].y + '%';
                
                const angle = Math.atan2(stars[j].y - stars[i].y, stars[j].x - stars[i].x);
                line.style.transform = `rotate(${angle}rad)`;
                line.style.width = distance + 'vw';
                
                constellation.appendChild(line);
            }
        }
    }
    
    document.body.appendChild(constellation);
}

// Optimized Quantum Matrix Rain Effect
function createQuantumMatrix() {
    // Only create matrix on larger screens
    if (window.innerWidth < 768) return;
    
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = getContentHeight() + 'px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.05';
    canvas.id = 'quantum-matrix-canvas';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = getContentHeight();

    const matrix = "01";
    const matrixArray = matrix.split("");

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize / 2); // Reduce columns
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ffff';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize * 2, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 100); // Slower refresh rate

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = getContentHeight();
        canvas.style.height = getContentHeight() + 'px';
    });
}

// Optimized Cursor Trail (disabled on mobile)
let quantumTrails = [];
const maxQuantumTrails = 8; // Reduced for performance

if (window.innerWidth > 768) { // Only on desktop
    document.addEventListener('mousemove', (e) => {
        // Throttle mousemove events
        if (Math.random() > 0.7) return;
        
        quantumTrails.push({
            x: e.clientX,
            y: e.clientY,
            life: 1.0,
            size: 2
        });

        if (quantumTrails.length > maxQuantumTrails) {
            quantumTrails.shift();
        }

        updateQuantumTrails();
    });
}

function updateQuantumTrails() {
    const existingTrails = document.querySelectorAll('.quantum-cursor-trail');
    existingTrails.forEach(trail => trail.remove());

    quantumTrails.forEach((trail, index) => {
        const trailElement = document.createElement('div');
        trailElement.className = 'quantum-cursor-trail';
        trailElement.style.position = 'fixed';
        trailElement.style.left = trail.x + 'px';
        trailElement.style.top = trail.y + 'px';
        trailElement.style.width = trail.size + 'px';
        trailElement.style.height = trail.size + 'px';
        trailElement.style.borderRadius = '50%';
        trailElement.style.background = `radial-gradient(circle, 
            rgba(0, 255, 255, ${trail.life}) 0%, 
            rgba(255, 0, 255, ${trail.life * 0.5}) 50%, 
            transparent 100%)`;
        trailElement.style.pointerEvents = 'none';
        trailElement.style.zIndex = '1000';
        trailElement.style.transform = 'translate(-50%, -50%)';
        trailElement.style.animation = `quantumTrailFade 1s ease-out forwards`;

        document.body.appendChild(trailElement);

        // Fade trail
        trail.life -= 0.05;
        if (trail.life <= 0) {
            quantumTrails.splice(index, 1);
        }
    });
}

// Add quantum trail fade animation
const quantumStyle = document.createElement('style');
quantumStyle.textContent += `
    @keyframes quantumTrailFade {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
    }
`;
document.head.appendChild(quantumStyle);

// Quantum Card Interaction
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-custom');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            // Create quantum ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'quantumCardRipple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add card ripple animation
quantumStyle.textContent += `
    @keyframes quantumCardRipple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

// Initialize quantum matrix on load
document.addEventListener('DOMContentLoaded', () => {
    createQuantumMatrix();
    
    // Add quantum glow to section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.classList.add('quantum-text-glow');
    });
});

// Enhanced Contact Section Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Contact form animation and validation
    const contactItems = document.querySelectorAll('.contact-info-item');
    const socialCards = document.querySelectorAll('.social-platform-card');
    const contactButtons = document.querySelectorAll('.contact-actions .btn');
    
    // Enhanced contact item interactions
    contactItems.forEach((item, index) => {
        // Staggered animation on scroll
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        
        // Add hover sound effect (visual feedback)
        item.addEventListener('mouseenter', function() {
            this.style.animation = 'contactItemPulse 0.3s ease';
        });
        
        item.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
    
    // Social platform card enhancements
    socialCards.forEach((card, index) => {
        const platform = card.dataset.platform;
        
        // Platform-specific color themes
        const platformColors = {
            github: { primary: '#333', secondary: '#24292e' },
            linkedin: { primary: '#0077b5', secondary: '#005885' },
            twitter: { primary: '#1da1f2', secondary: '#0d8bd9' },
            pypi: { primary: '#3775a9', secondary: '#2c5d87' }
        };
        
        // Apply platform-specific hover effects
        card.addEventListener('mouseenter', function() {
            if (platformColors[platform]) {
                const colors = platformColors[platform];
                this.style.setProperty('--platform-primary', colors.primary);
                this.style.setProperty('--platform-secondary', colors.secondary);
                this.style.borderColor = colors.primary;
            }
        });
        
        // Add click tracking for analytics (visual feedback)
        card.addEventListener('click', function(e) {
            // Create click ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(0, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'socialRipple 0.6s linear';
            ripple.style.left = (e.clientX - this.offsetLeft) + 'px';
            ripple.style.top = (e.clientY - this.offsetTop) + 'px';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);
        });
    });
    
    // Contact button enhancements
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent multiple rapid clicks
            if (this.classList.contains('processing')) return;
            
            this.classList.add('processing');
            const originalText = this.innerHTML;
            
            // Show loading state for email button
            if (this.href && this.href.startsWith('mailto:')) {
                this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Opening Email...';
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.classList.remove('processing');
                }, 1500);
            }
        });
    });
    
    // Intersection Observer for contact section animations
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate contact items
                contactItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                
                // Animate social cards
                socialCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, (contactItems.length * 100) + (index * 80));
                });
            }
        });
    }, { threshold: 0.3 });
    
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactObserver.observe(contactSection);
    }
    

    
    // Email validation helper
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    // Copy email to clipboard functionality
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        // Add copy button next to email
        const copyBtn = document.createElement('button');
        copyBtn.className = 'btn btn-sm btn-outline-light-custom ms-2';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        copyBtn.title = 'Copy email address';
        copyBtn.style.padding = '0.25rem 0.5rem';
        
        copyBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const email = link.href.replace('mailto:', '');
            try {
                await navigator.clipboard.writeText(email);
                copyBtn.innerHTML = '<i class="fas fa-check text-success"></i>';
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            } catch (err) {
                console.warn('Copy to clipboard failed:', err);
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                copyBtn.innerHTML = '<i class="fas fa-check text-success"></i>';
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            }
        });
        
        link.parentNode.appendChild(copyBtn);
    });
});
