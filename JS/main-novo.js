/**
 * MODERN PORTFOLIO JAVASCRIPT
 * Victor Tuy - V.H.T.C
 * Enhanced with modern animations and interactions
 */

// ========================
// GLOBAL VARIABLES
// ========================
let isLoading = true;
let currentSection = 'home';
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const loadingScreen = document.getElementById('loading-screen');

// ========================
// INITIALIZATION
// ========================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize particles
    initParticles();
    
    // Initialize typing effect
    initTypingEffect();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize portfolio filters
    initPortfolioFilters();
    
    // Initialize contact form
    initContactForm();
    
    // Hide loading screen
    setTimeout(hideLoadingScreen, 2000);
    
    // Initialize smooth scrolling
    initSmoothScrolling();
}

// ========================
// LOADING SCREEN
// ========================
function hideLoadingScreen() {
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            isLoading = false;
            // Trigger entrance animations
            triggerEntranceAnimations();
        }, 500);
    }
}

function triggerEntranceAnimations() {
    // Animate navbar
    gsap.from(navbar, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
    
    // Animate hero content
    gsap.from(".hero-text", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });
    
    gsap.from(".hero-image", {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
    });
}

// ========================
// PARTICLES SYSTEM
// ========================
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#00ff41"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00ff41",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ========================
// TYPING EFFECT
// ========================
function initTypingEffect() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    
    if (!typedTextSpan || !cursorSpan) return;
    
    // Usar textos do config.js ou fallback se não estiver disponível
    const textArray = (typeof PORTFOLIO_CONFIG !== 'undefined' && PORTFOLIO_CONFIG.typingTexts) 
        ? PORTFOLIO_CONFIG.typingTexts 
        : [
            "Cientista da Computação",
            "Desenvolvedor Full Stack",
            "Designer Gráfico",
            "Game Developer",
            "Freelancer Criativo",
            "Professor Tech"
        ];
    
    // Usar configurações do config.js ou valores padrão
    const typingDelay = (typeof PORTFOLIO_CONFIG !== 'undefined' && PORTFOLIO_CONFIG.animations) 
        ? PORTFOLIO_CONFIG.animations.typingSpeed 
        : 100;
    const erasingDelay = (typeof PORTFOLIO_CONFIG !== 'undefined' && PORTFOLIO_CONFIG.animations) 
        ? PORTFOLIO_CONFIG.animations.eraseSpeed 
        : 50;
    const newTextDelay = (typeof PORTFOLIO_CONFIG !== 'undefined' && PORTFOLIO_CONFIG.animations) 
        ? PORTFOLIO_CONFIG.animations.newTextDelay 
        : 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) {
                cursorSpan.classList.add("typing");
            }
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) {
                cursorSpan.classList.add("typing");
            }
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay);
        }
    }

    // Start the typing effect
    setTimeout(type, 1000);
}

// ========================
// NAVIGATION
// ========================
function initNavigation() {
    // Hamburger menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Scroll spy
    window.addEventListener('scroll', updateActiveNavigation);
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
}

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function handleNavigation(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
        
        // Smooth scroll to section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Update active link immediately
        updateActiveLink(e.currentTarget.dataset.section);
    }
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            updateActiveLink(sectionId);
        }
    });
}

function updateActiveLink(activeSection) {
    if (currentSection === activeSection) return;
    
    currentSection = activeSection;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === activeSection) {
            link.classList.add('active');
        }
    });
}

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ========================
// SCROLL ANIMATIONS
// ========================
function initScrollAnimations() {
    // Register ScrollTrigger plugin
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate sections on scroll
        gsap.utils.toArray('section').forEach((section, i) => {
            if (section.id === 'home') return; // Skip hero section
            
            gsap.fromTo(section.querySelector('.section-header'), {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
        });
        
        // Animate stats
        animateStats();
        
        // Animate skills
        animateSkills();
        
        // Animate portfolio items
        animatePortfolioItems();
        
        // Animate timeline items
        animateTimelineItems();
    }
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent.replace(/\D/g, '');
        if (finalValue) {
            gsap.fromTo(stat, {
                innerHTML: 0
            }, {
                innerHTML: finalValue,
                duration: 2,
                ease: "power2.out",
                snap: { innerHTML: 1 },
                stagger: 0.2,
                scrollTrigger: {
                    trigger: stat,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                onUpdate: function() {
                    stat.innerHTML = Math.ceil(stat.innerHTML) + (stat.textContent.includes('+') ? '+' : '') + (stat.textContent.includes('%') ? '%' : '');
                }
            });
        }
    });
}

function animateSkills() {
    gsap.utils.toArray('.skill-category').forEach((category, i) => {
        gsap.fromTo(category, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: category,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

function animatePortfolioItems() {
    gsap.utils.toArray('.portfolio-item').forEach((item, i) => {
        gsap.fromTo(item, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

function animateTimelineItems() {
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.fromTo(item.querySelector('.timeline-content'), {
            x: i % 2 === 0 ? -50 : 50,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

// ========================
// PORTFOLIO FILTERS
// ========================
function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items
            portfolioItems.forEach(item => {
                const categories = item.dataset.category.split(' ');
                
                if (filter === 'all' || categories.includes(filter)) {
                    gsap.to(item, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.3,
                        display: 'block'
                    });
                } else {
                    gsap.to(item, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        onComplete: () => {
                            item.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// ========================
// CONTACT FORM
// ========================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    showNotification('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
    
    // Reset form
    e.target.reset();
}

// ========================
// NOTIFICATIONS
// ========================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check' : 'info'}-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00ff41' : '#4445a3'};
        color: ${type === 'success' ? '#000' : '#fff'};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// ========================
// SMOOTH SCROLLING
// ========================
function initSmoothScrolling() {
    // Smooth scroll for all internal links
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
}

// ========================
// UTILITY FUNCTIONS
// ========================
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// ========================
// PERFORMANCE OPTIMIZATIONS
// ========================
// Optimize scroll events with debouncing
const debouncedScrollHandler = debounce(() => {
    updateActiveNavigation();
    handleNavbarScroll();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ========================
// ACCESSIBILITY IMPROVEMENTS
// ========================
function initAccessibility() {
    // Skip to main content
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Pular para o conteúdo principal';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: var(--background-dark);
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10002;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Keyboard navigation for portfolio filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
}

// ========================
// THEME SWITCHING (Future enhancement)
// ========================
function initThemeSwitch() {
    // This can be implemented later for light/dark theme switching
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Listen for theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        // Handle theme change
        console.log('Theme preference changed:', e.matches ? 'dark' : 'light');
    });
}

// ========================
// ERROR HANDLING
// ========================
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Optionally show user-friendly error message
});

// ========================
// INITIALIZE ADDITIONAL FEATURES
// ========================
document.addEventListener('DOMContentLoaded', () => {
    initLazyLoading();
    initAccessibility();
    initThemeSwitch();
});

// ========================
// EXPORT FUNCTIONS (if using modules)
// ========================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        showNotification,
        toggleMobileMenu
    };
}