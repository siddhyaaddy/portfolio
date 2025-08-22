// Enhanced Data Science Portfolio JavaScript
class DataSciencePortfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupLoadingScreen();
        this.setupParticles();
        this.setupDataVisualization();
        this.setupNavigation();
        this.setupHeroAnimations();
        this.setupTypewriter();
        this.setupScrollAnimations();
        this.setupProjectFilters();
        this.setupSkillAnimations();
        this.setupContactForm();
        this.setupScrollToTop();
        this.setupPerformanceOptimizations();
        this.setupAccessibility();
    }

    // Enhanced Loading Screen
    setupLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const progressBar = document.querySelector('.loading-progress');
        
        if (!loadingScreen || !progressBar) return;

        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            progressBar.style.width = progress + '%';
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                        this.triggerEntranceAnimations();
                    }, 500);
                }, 800);
            }
        }, 100);
    }

    // Enhanced Particle System
    setupParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const particleCount = window.innerWidth < 768 ? 30 : 60;
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 15 + 20) + 's';
            particle.style.animationDelay = Math.random() * 20 + 's';
            
            particlesContainer.appendChild(particle);
            particles.push(particle);
        }

        // Dynamic particle generation
        setInterval(() => {
            if (particles.length < particleCount) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 15 + 20) + 's';
                particlesContainer.appendChild(particle);
                particles.push(particle);
            }
        }, 5000);
    }

    // Advanced Data Visualization Canvas
    setupDataVisualization() {
        const canvas = document.getElementById('dataVisualization');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const nodes = [];
        const connections = [];
        const nodeCount = 50;

        // Create nodes
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 3 + 1,
                alpha: Math.random() * 0.5 + 0.3
            });
        }

        // Create connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const distance = Math.sqrt(
                    Math.pow(nodes[i].x - nodes[j].x, 2) + 
                    Math.pow(nodes[i].y - nodes[j].y, 2)
                );
                if (distance < 150) {
                    connections.push({ nodeA: i, nodeB: j, distance });
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw nodes
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 212, 255, ${node.alpha})`;
                ctx.fill();
            });

            // Draw connections
            connections.forEach(connection => {
                const nodeA = nodes[connection.nodeA];
                const nodeB = nodes[connection.nodeB];
                const currentDistance = Math.sqrt(
                    Math.pow(nodeA.x - nodeB.x, 2) + 
                    Math.pow(nodeA.y - nodeB.y, 2)
                );

                if (currentDistance < 150) {
                    const alpha = 1 - (currentDistance / 150);
                    ctx.beginPath();
                    ctx.moveTo(nodeA.x, nodeA.y);
                    ctx.lineTo(nodeB.x, nodeB.y);
                    ctx.strokeStyle = `rgba(124, 58, 237, ${alpha * 0.3})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // Enhanced Navigation
    setupNavigation() {
        const nav = document.querySelector('nav');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navUl = document.querySelector('nav ul');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');

        // Scroll effect
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            // Hide/show nav on scroll
            if (window.scrollY > lastScrollY && window.scrollY > 200) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
            lastScrollY = window.scrollY;
        });

        // Mobile menu
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                navUl.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
            });
        }

        // Smooth scrolling and active states
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }

                if (navUl.classList.contains('active')) {
                    navUl.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            });
        });

        // Active section highlighting
        const sections = document.querySelectorAll('section[id]');
        const observerOptions = {
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const navLink = document.querySelector(`nav a[href="#${id}"]`);
                
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (navLink) navLink.classList.add('active');
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    // Hero Chart Animation
    setupHeroAnimations() {
        const heroChart = document.getElementById('heroChart');
        if (!heroChart) return;

        const ctx = heroChart.getContext('2d');
        const rect = heroChart.getBoundingClientRect();
        heroChart.width = rect.width;
        heroChart.height = rect.height;

        const data = Array.from({ length: 20 }, () => Math.random() * 80 + 20);
        let animationProgress = 0;

        const drawChart = () => {
            ctx.clearRect(0, 0, heroChart.width, heroChart.height);
            
            const barWidth = heroChart.width / data.length;
            const maxHeight = heroChart.height - 20;

            data.forEach((value, index) => {
                const barHeight = (value / 100) * maxHeight * animationProgress;
                const x = index * barWidth;
                const y = heroChart.height - barHeight - 10;

                // Gradient
                const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
                gradient.addColorStop(0, '#00d4ff');
                gradient.addColorStop(1, '#7c3aed');

                ctx.fillStyle = gradient;
                ctx.fillRect(x + 2, y, barWidth - 4, barHeight);

                // Glow effect
                ctx.shadowColor = '#00d4ff';
                ctx.shadowBlur = 10;
                ctx.fillRect(x + 2, y, barWidth - 4, 2);
                ctx.shadowBlur = 0;
            });

            if (animationProgress < 1) {
                animationProgress += 0.02;
                requestAnimationFrame(drawChart);
            } else {
                // Add real-time updates
                setInterval(() => {
                    data.forEach((_, index) => {
                        data[index] += (Math.random() - 0.5) * 10;
                        data[index] = Math.max(10, Math.min(90, data[index]));
                    });
                    drawChart();
                }, 2000);
            }
        };

        // Start animation when hero is visible
        const heroObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(() => drawChart(), 1000);
                heroObserver.disconnect();
            }
        });

        const heroSection = document.getElementById('home');
        if (heroSection) heroObserver.observe(heroSection);
    }

    // Advanced Typewriter Effect
setupTypewriter() {
    const typewriter = document.getElementById('typewriter');
    if (!typewriter) return;

    const roles = [
        'Engineer',
        'Analyst', 
        'Researcher',
        'Innovator',
        'Problem Solver',
        'ML Engineer'
    ];

    let currentRole = 0;
    let currentChar = 0;
    let isDeleting = false;

    const type = () => {
        const fullText = roles[currentRole];

        if (!isDeleting) {
            typewriter.textContent = fullText.substring(0, currentChar + 1);
            currentChar++;
            if (currentChar === fullText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 1700); // Brief pause at full word
                return;
            }
        } else {
            typewriter.textContent = fullText.substring(0, currentChar - 1);
            currentChar--;
            if (currentChar === 0) {
                isDeleting = false;
                currentRole = (currentRole + 1) % roles.length;
            }
        }

        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed + Math.random() * 50);
    };

    type(); // Start immediately
}


    // Enhanced Scroll Animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const animateOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Special handling for different elements
                    if (entry.target.classList.contains('skill-progress')) {
                        const level = entry.target.dataset.level;
                        entry.target.style.setProperty('--skill-level', level + '%');
                        entry.target.style.width = level + '%';
                    }
                    
                    if (entry.target.classList.contains('metric-card')) {
                        this.animateCounter(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe elements
        const elementsToAnimate = document.querySelectorAll(`
            .timeline-item, .project-card, .skill-category, 
            .about-text p, .contact-card, .metric-card,
            .skill-progress, .experience-item
        `);

        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s ease';
            animateOnScroll.observe(el);
        });

        // // Parallax effects
        // window.addEventListener('scroll', this.throttle(() => {
        //     const scrolled = window.pageYOffset;
        //     const parallaxElements = document.querySelectorAll('.hero, .hero-visual');
            
        //     parallaxElements.forEach(element => {
        //         const speed = element.dataset.speed || 0.5;
        //         element.style.transform = `translateY(${scrolled * speed}px)`;
        //     });
        // }, 16));
    }

    // Animate counters
    animateCounter(element) {
        const valueElement = element.querySelector('.metric-value, .stat-number');
        if (!valueElement) return;

        const finalValue = valueElement.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
        const suffix = finalValue.replace(/[\d.]/g, '');
        
        if (isNaN(numericValue)) return;

        let currentValue = 0;
        const increment = numericValue / 60; // 60 frames for 1 second
        
        const counter = () => {
            currentValue += increment;
            if (currentValue < numericValue) {
                valueElement.textContent = Math.floor(currentValue) + suffix;
                requestAnimationFrame(counter);
            } else {
                valueElement.textContent = finalValue;
            }
        };

        counter();
    }

    // Project Filtering System
    setupProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter projects
                projectCards.forEach(card => {
                    const categories = card.dataset.category ? card.dataset.category.split(' ') : ['all'];
                    
                    if (filter === 'all' || categories.includes(filter)) {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                        card.style.display = 'block';
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            if (card.style.opacity === '0') {
                                card.style.display = 'none';
                            }
                        }, 300);
                    }
                });

                // Animate visible cards
                setTimeout(() => {
                    const visibleCards = Array.from(projectCards).filter(card => 
                        card.style.display !== 'none'
                    );
                    
                    visibleCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1) translateY(0)';
                        }, index * 100);
                    });
                }, 100);
            });
        });
    }

    // Enhanced Skill Animations
    setupSkillAnimations() {
        // Animate skill bars when they come into view
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
                    const level = entry.target.dataset.level;
                    entry.target.classList.add('animate');
                    
                    // Use setTimeout to ensure the animation triggers
                    setTimeout(() => {
                        entry.target.style.width = level + '%';
                    }, 100);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        });

        skillBars.forEach(bar => {
            observer.observe(bar);
        });

    
        const skillCategories = document.querySelectorAll('.skill-category');
        
        skillCategories.forEach(category => {
            category.addEventListener('mouseenter', () => {
                const skillTags = category.querySelectorAll('.skill-tag');
                skillTags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.style.transform = 'scale(1.1) translateY(-2px)';
                    }, index * 50);
                });
            });

            category.addEventListener('mouseleave', () => {
                const skillTags = category.querySelectorAll('.skill-tag');
                skillTags.forEach(tag => {
                    tag.style.transform = 'scale(1) translateY(0)';
                });
            });
        });

        // Skill progress bars animation
        const progressBars = document.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
            const level = bar.dataset.level;
            bar.style.setProperty('--skill-level', level + '%');
        });
    }

    // Enhanced Contact Form (if added)
    setupContactForm() {
        const contactCards = document.querySelectorAll('.contact-card');
        
        contactCards.forEach(card => {
            card.addEventListener('click', () => {
                const link = card.querySelector('a');
                if (link) {
                    // Add click animation
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.transform = '';
                        if (link.href.startsWith('mailto:')) {
                            window.location.href = link.href;
                        } else {
                            window.open(link.href, '_blank');
                        }
                    }, 150);
                }
            });
        });
    }

    // Scroll to Top Button
    setupScrollToTop() {
        const scrollToTopBtn = document.getElementById('scrollToTop');
        if (!scrollToTopBtn) return;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Performance Optimizations
    setupPerformanceOptimizations() {
        // Lazy load images
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));

        // Reduce motion for users who prefer it
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        }

        // Optimize scroll performance
        let ticking = false;
        const updateScrollEffects = () => {
            // Your scroll effects here
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }

    // Accessibility Enhancements
    setupAccessibility() {
        // Focus management
        const focusableElements = document.querySelectorAll(`
            a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])
        `);

        // Add skip link functionality
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: var(--bg-primary);
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            transition: top 0.3s;
        `;
        document.body.insertBefore(skipLink, document.body.firstChild);

        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });

        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        // Keyboard navigation for project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const link = card.querySelector('.project-link');
                    if (link) link.click();
                }
            });
        });

        // Announce page changes for screen readers
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.style.cssText = `
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        `;
        document.body.appendChild(announcer);

        // Update announcer when sections change
        const sections = document.querySelectorAll('section[id]');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionTitle = entry.target.querySelector('h2');
                    if (sectionTitle) {
                        announcer.textContent = `Now viewing ${sectionTitle.textContent} section`;
                    }
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => sectionObserver.observe(section));
    }

    // Utility Functions
    throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    debounce(func, wait, immediate) {
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

    // Trigger entrance animations
    triggerEntranceAnimations() {
        const hero = document.querySelector('.hero');
        if (hero) {
            const elements = hero.querySelectorAll('.greeting, h1, .role-container, .subtitle, .hero-buttons, .hero-stats');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    }

    // Initialize particle interactions
    setupParticleInteractions() {
        const canvas = document.getElementById('dataVisualization');
        if (!canvas) return;

        let mouseX = 0;
        let mouseY = 0;

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });

        // Add mouse interaction to particles
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.addEventListener('mouseenter', () => {
                particle.style.transform = 'scale(2)';
                particle.style.filter = 'brightness(1.5)';
            });

            particle.addEventListener('mouseleave', () => {
                particle.style.transform = 'scale(1)';
                particle.style.filter = 'brightness(1)';
            });
        });
    }

    // Advanced project card interactions
    setupProjectCardInteractions() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            let isHovering = false;
            
            card.addEventListener('mouseenter', () => {
                isHovering = true;
                this.animateProjectCard(card, true);
            });

            card.addEventListener('mouseleave', () => {
                isHovering = false;
                this.animateProjectCard(card, false);
            });

            card.addEventListener('mousemove', (e) => {
                if (!isHovering) return;
                
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `
                    translateY(-10px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg)
                    scale(1.02)
                `;
            });
        });
    }

    animateProjectCard(card, isEntering) {
        if (isEntering) {
            card.style.transform = 'translateY(-10px) rotateX(0deg) rotateY(0deg) scale(1.02)';
            card.style.boxShadow = '0 25px 50px rgba(0, 212, 255, 0.3)';
            
            // Animate tech tags
            const techTags = card.querySelectorAll('.tech-tag');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-2px) scale(1.05)';
                }, index * 50);
            });
        } else {
            card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
            card.style.boxShadow = '';
            
            // Reset tech tags
            const techTags = card.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.style.transform = 'translateY(0) scale(1)';
            });
        }
    }

    // Setup theme switching (if implemented)
    setupThemeSwitch() {
        const themeSwitch = document.getElementById('themeSwitch');
        if (!themeSwitch) return;

        const currentTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);

        themeSwitch.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Animate theme transition
            document.body.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }

    // Setup advanced analytics tracking
    setupAnalytics() {
        // Track section views
        const sections = document.querySelectorAll('section[id]');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.trackEvent('section_view', {
                        section: entry.target.id,
                        timestamp: new Date().toISOString()
                    });
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => sectionObserver.observe(section));

        // Track project interactions
        const projectLinks = document.querySelectorAll('.project-link');
        projectLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const projectName = link.closest('.project-card').querySelector('h3').textContent;
                this.trackEvent('project_click', {
                    project: projectName,
                    link_type: link.textContent.trim(),
                    url: link.href
                });
            });
        });

        // Track contact interactions
        const contactLinks = document.querySelectorAll('.contact-card a, .contact-button');
        contactLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.trackEvent('contact_click', {
                    contact_type: link.textContent.trim(),
                    url: link.href
                });
            });
        });
    }

    trackEvent(eventName, data) {
        // Implementation depends on your analytics provider
        // Example for Google Analytics 4:
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, data);
        }
        
        // Example for custom analytics:
        console.log(`Event: ${eventName}`, data);
    }

    // Setup error handling
    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('JavaScript Error:', e.error);
            // You could send this to an error tracking service
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled Promise Rejection:', e.reason);
            // You could send this to an error tracking service
        });
    }

    // Setup performance monitoring
    setupPerformanceMonitoring() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            const navigation = performance.getEntriesByType('navigation')[0];
            const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
            
            console.log(`Page load time: ${loadTime}ms`);
            
            // Track Core Web Vitals
            this.measureCoreWebVitals();
        });
    }

    measureCoreWebVitals() {
        // Largest Contentful Paint (LCP)
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach(entry => {
                console.log('FID:', entry.processingStart - entry.startTime);
            });
        }).observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                }
            }
            console.log('CLS:', clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
    }

    // Setup progressive enhancement
    setupProgressiveEnhancement() {
        // Check for various capabilities and enhance accordingly
        if ('IntersectionObserver' in window) {
            // Enhanced scroll animations are already set up
        } else {
            // Fallback for older browsers
            this.setupFallbackAnimations();
        }

        if ('requestAnimationFrame' in window) {
            // Advanced animations are available
        } else {
            // Fallback to simpler animations
            document.documentElement.classList.add('no-raf');
        }

        // Check for touch support
        if ('ontouchstart' in window) {
            document.documentElement.classList.add('touch');
            this.setupTouchInteractions();
        }
    }

    setupFallbackAnimations() {
        // Simple CSS-only animations for older browsers
        const elements = document.querySelectorAll('.timeline-item, .project-card, .skill-category');
        elements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }

    setupTouchInteractions() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('touchstart', () => {
                card.style.transform = 'scale(0.98)';
            });

            card.addEventListener('touchend', () => {
                card.style.transform = 'scale(1)';
            });
        });
    }

    // Setup keyboard shortcuts
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Alt + number keys to navigate sections
            if (e.altKey && e.key >= '1' && e.key <= '7') {
                e.preventDefault();
                const sectionIndex = parseInt(e.key) - 1;
                const sections = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];
                const targetSection = document.getElementById(sections[sectionIndex]);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }

            // Escape key to close mobile menu
            if (e.key === 'Escape') {
                const navUl = document.querySelector('nav ul');
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                if (navUl && navUl.classList.contains('active')) {
                    navUl.classList.remove('active');
                    if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
                }
            }
        });
    }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DataSciencePortfolio();
});

// Add additional initialization after window loads
window.addEventListener('load', () => {
    // Initialize any remaining features that require full page load
    const portfolio = new DataSciencePortfolio();
    portfolio.setupProjectCardInteractions();
    portfolio.setupParticleInteractions();
    portfolio.setupAnalytics();
    portfolio.setupErrorHandling();
    portfolio.setupPerformanceMonitoring();
    portfolio.setupProgressiveEnhancement();
    portfolio.setupKeyboardShortcuts();
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('ServiceWorker registration successful');
            })
            .catch((error) => {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataSciencePortfolio;
}

