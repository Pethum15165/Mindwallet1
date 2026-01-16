// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

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

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Expandable content toggle
function toggleContent(button) {
    const card = button.closest('.content-card');
    const expandableContent = card.querySelector('.expandable-content');
    
    if (expandableContent.classList.contains('active')) {
        expandableContent.classList.remove('active');
        button.textContent = 'Read More';
    } else {
        expandableContent.classList.add('active');
        button.textContent = 'Read Less';
    }
}

// Accordion functionality for learning cards
function toggleAccordion(button) {
    const accordion = button.closest('.accordion');
    const content = accordion.querySelector('.accordion-content');
    const icon = button.querySelector('i');
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.style.transform = 'rotate(0deg)';
        button.style.background = 'var(--bg-secondary)';
        button.style.color = 'var(--text-primary)';
    } else {
        content.classList.add('active');
        icon.style.transform = 'rotate(180deg)';
        button.style.background = 'var(--accent-primary)';
        button.style.color = 'white';
    }
}

// Page load animations
window.addEventListener('load', () => {
    // Animate hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }

    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.summary-card, .article-card, .content-card, .learning-card, .value-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

// Add hover effects to cards
const cards = document.querySelectorAll('.summary-card, .article-card, .content-card, .learning-card, .value-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Form validation (if forms are added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Add error styling
const style = document.createElement('style');
style.textContent = `
    .error {
        border-color: var(--accent-secondary) !important;
        box-shadow: 0 0 5px rgba(255, 107, 107, 0.3) !important;
    }
`;
document.head.appendChild(style);

// Utility function for debouncing
function debounce(func, wait) {
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

// Responsive navigation background
window.addEventListener('scroll', debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
}, 10));

// Add loading animation to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Social media link tracking
const socialLinks = document.querySelectorAll('.social-link, .footer-social a');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.classList.contains('youtube') ? 'YouTube' : 
                        link.classList.contains('facebook') ? 'Facebook' : 
                        link.classList.contains('instagram') ? 'Instagram' : 'Social Media';
        
        // In a real application, you would track this analytics event
        console.log(`User clicked ${platform} link`);
        
        // Simulate opening social media (replace with actual URLs)
        alert(`Opening ${platform} page (this is a demo)`);
    });
});

// Print functionality for learning materials
function printContent() {
    window.print();
}

// Add print button to learning pages
const learnPages = document.querySelector('.learning-topics');
if (learnPages) {
    const printBtn = document.createElement('button');
    printBtn.textContent = 'Print Learning Materials';
    printBtn.className = 'btn btn-secondary';
    printBtn.style.position = 'fixed';
    printBtn.style.bottom = '20px';
    printBtn.style.right = '20px';
    printBtn.style.zIndex = '1000';
    printBtn.onclick = printContent;
    document.body.appendChild(printBtn);
}

// Dark mode toggle (if needed for future enhancement)
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
}

// Error handling for failed content loading
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IFRAME') {
        const iframe = e.target;
        const fallback = document.createElement('div');
        fallback.className = 'video-fallback';
        fallback.innerHTML = `
            <i class="fas fa-exclamation-triangle" style="color: var(--accent-secondary); font-size: 2rem;"></i>
            <p>Video could not be loaded. Please check your internet connection.</p>
        `;
        fallback.style.textAlign = 'center';
        fallback.style.padding = '2rem';
        fallback.style.background = 'var(--bg-secondary)';
        fallback.style.borderRadius = '10px';
        iframe.parentNode.replaceChild(fallback, iframe);
    }
});

// Performance optimization: Lazy load images (if images are added)
const lazyImages = document.querySelectorAll('img[data-src]');
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

lazyImages.forEach(img => imageObserver.observe(img));

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Arrow keys for accordion navigation
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('accordion-btn')) {
            e.preventDefault();
            const accordions = Array.from(document.querySelectorAll('.accordion-btn'));
            const currentIndex = accordions.indexOf(focusedElement);
            let nextIndex;
            
            if (e.key === 'ArrowDown') {
                nextIndex = (currentIndex + 1) % accordions.length;
            } else {
                nextIndex = (currentIndex - 1 + accordions.length) % accordions.length;
            }
            
            accordions[nextIndex].focus();
        }
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('Mind Wallet initialized successfully!');
    
    // Add any additional initialization code here
    // For example, loading dynamic content, setting up analytics, etc.
});
// ===== ARTICLE FUNCTIONS - MODAL VERSION =====
function openArticle(articleId) {
    const articles = {
        'budget-mistakes': {
            title: "5 Budgeting Mistakes That Cost You Money",
            date: "January 15, 2024",
            readTime: "5 min read",
            category: "Budgeting",
            content: `
                <h2>Introduction</h2>
                <p>Budgeting is supposed to help you save money, but many people make costly mistakes that actually hurt their finances. After working with hundreds of clients, I've identified the five most common budgeting mistakes that cost people thousands of dollars each year.</p>

                <h2>Mistake #1: Not Tracking Small Expenses</h2>
                <p>That daily $5 coffee might seem harmless, but it adds up to $1,825 per year. Small expenses are budget killers because they're easy to overlook and seem insignificant.</p>
                <p><strong>Solution:</strong> Track every expense for one month, no matter how small. Use a budgeting app or simply write it down. You'll be surprised how much those "little" purchases add up.</p>

                <h2>Mistake #2: Setting Unrealistic Goals</h2>
                <p>When you set overly restrictive budgets, you're setting yourself up for failure. If you normally spend $800 on groceries, cutting it to $400 immediately is unrealistic.</p>
                <p><strong>Solution:</strong> Start with small changes. Reduce grocery spending by 10% for the first month, then gradually decrease as you learn better shopping habits.</p>

                <h2>Mistake #3: Not Accounting for Irregular Expenses</h2>
                <p>Car insurance, property taxes, and holiday gifts don't happen monthly, but they still need to be in your budget.</p>
                <p><strong>Solution:</strong> Create sinking funds for irregular expenses. Divide annual costs by 12 and save that amount monthly.</p>

                <h2>Mistake #4: Being Too Restrictive</h2>
                <p>Budgets that don't allow for any fun or flexibility are doomed to fail. You need room to enjoy life while working toward financial goals.</p>
                <p><strong>Solution:</strong> Include entertainment and "fun money" in your budget. A sustainable budget is better than a perfect one you can't stick to.</p>

                <h2>Mistake #5: Not Adjusting Your Budget</h2>
                <p>Life changes, and your budget should too. A budget that worked six months ago might not work today.</p>
                <p><strong>Solution:</strong> Review and adjust your budget monthly. Make changes based on what's working and what isn't.</p>

                <h2>Conclusion</h2>
                <p>Avoiding these common budgeting mistakes can save you thousands of dollars each year. Remember, the best budget is the one you'll actually stick to. Start small, be consistent, and adjust as needed.</p>
            `
        },
        '5-dollar-challenge': {
            title: "The $5 Challenge That Builds Your Emergency Fund",
            date: "January 12, 2024",
            readTime: "3 min read",
            category: "Saving",
            content: `
                <h2>What is the $5 Challenge?</h2>
                <p>It's simple: Every time you receive a $5 bill as change, you save it instead of spending it. This simple habit can build you $1,800 per year without feeling like you're sacrificing anything.</p>

                <h2>The Math Behind It</h2>
                <p>If you save just two $5 bills per week, that's $520 per year. Save four $5 bills per week, and you'll have over $1,000. The key is consistency and not overthinking it.</p>
                <div class="example-box">
                    <h3>Your Potential Savings</h3>
                    <ul>
                        <li>1 $5 bill per week = $260 per year</li>
                        <li>2 $5 bills per week = $520 per year</li>
                        <li>3 $5 bills per week = $780 per year</li>
                        <li>4 $5 bills per week = $1,040 per year</li>
                    </ul>
                </div>

                <h2>How to Start the Challenge</h2>
                <p><strong>Step 1:</strong> Find a container - a jar, envelope, or box works perfectly.</p>
                <p><strong>Step 2:</strong> Every time you get a $5 bill, put it in the container immediately.</p>
                <p><strong>Step 3:</strong> Don't touch the money for one year.</p>
                <p><strong>Step 4:</strong> Deposit the savings into your emergency fund.</p>

                <h2>Making It Work for You</h2>
                <p><strong>Use Cash More Often:</strong> The more you use cash, the more $5 bills you'll encounter.</p>
                <p><strong>Get Family Involved:</strong> Make it a household challenge. Kids love collecting money!</p>
                <p><strong>Track Your Progress:</strong> Keep a simple tally of how many $5 bills you save each month.</p>

                <h2>Success Stories</h2>
                <p>Sarah, a teacher from Ohio, saved $1,340 in one year using this method. "It didn't feel like I was sacrificing anything," she says. "I just stopped spending $5 bills."</p>

                <h2>Conclusion</h2>
                <p>The $5 challenge is perfect for people who struggle with traditional saving methods. It's simple, painless, and effective. Start today and watch your emergency fund grow!</p>
            `
        },
        'sarah-debt-journey': {
            title: "From $50K Debt to Financial Freedom in 3 Years",
            date: "January 10, 2024",
            readTime: "8 min read",
            category: "Success Story",
            content: `
                <h2>Sarah's Starting Point</h2>
                <p>In January 2021, Sarah was 29 years old with $48,000 in debt - a mix of credit cards, student loans, and a car loan. She was making minimum payments but felt like she was drowning.</p>
                <p>"I was paying $800 per month in minimum payments but barely making a dent," Sarah recalls. "I knew something had to change."</p>

                <h2>The Turning Point</h2>
                <p>Sarah's wake-up call came when she was denied a mortgage because her debt-to-income ratio was too high. "That's when I realized my debt was literally preventing me from achieving my dreams."</p>

                <h2>Her Strategy</h2>
                <p><strong>1. The Debt Avalanche Method:</strong> Sarah listed all her debts from highest to lowest interest rate and focused extra payments on the highest interest debt first.</p>
                <p><strong>2. Side Income:</strong> She started freelance writing on weekends, earning an extra $800 per month.</p>
                <p><strong>3. Lifestyle Changes:</strong> She moved to a cheaper apartment, sold her car, and got a roommate to cut expenses.</p>
                <p><strong>4. Automation:</strong> She automated all debt payments and savings to remove temptation.</p>

                <h2>The Numbers</h2>
                <div class="story-highlights">
                    <div class="highlight">
                        <span class="number">$48,000</span>
                        <span class="label">Starting Debt</span>
                    </div>
                    <div class="highlight">
                        <span class="number">36</span>
                        <span class="label">Months</span>
                    </div>
                    <div class="highlight">
                        <span class="number">$125K</span>
                        <span class="label">Current Net Worth</span>
                    </div>
                </div>

                <h2>Monthly Breakdown</h2>
                <p><strong>Year 1:</strong> Paid off $18,000 - mostly high-interest credit cards</p>
                <p><strong>Year 2:</strong> Paid off $20,000 - student loans and car loan</p>
                <p><strong>Year 3:</strong> Paid off $10,000 - remaining debts and started investing</p>

                <h2>Her Advice</h2>
                <p>"Don't try to do everything at once. Pick one debt, focus on it, then move to the next. Celebrate small wins along the way."</p>
                <p>"Find ways to increase your income. Cutting expenses helps, but earning more changes everything."</p>

                <h2>Life After Debt</h2>
                <p>Today, Sarah is debt-free with a six-figure investment portfolio. She's on track to retire early and volunteers to help others with debt management.</p>
                <p>"The best part isn't the money - it's the freedom. I no longer stress about bills or feel trapped by my past decisions."</p>

                <h2>Key Takeaways</h2>
                <ul>
                    <li>Pick a debt payoff method and stick to it</li>
                    <li>Increasing income accelerates debt payoff significantly</li>
                    <li>Automate everything to remove temptation</li>
                    <li>Celebrate milestones to stay motivated</li>
                    <li>The journey is temporary, but the freedom is permanent</li>
                </ul>
            `
        }
    };

    // Create modal overlay
    const modalHTML = `
        <div id="articleModal" class="article-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="modal-category" id="modalCategory"></span>
                    <button class="modal-close" onclick="closeArticle()">&times;</button>
                </div>
                <div class="modal-body">
                    <h1 id="modalTitle"></h1>
                    <div class="modal-meta">
                        <span id="modalDate"></span>
                        <span id="modalReadTime"></span>
                    </div>
                    <div id="modalContent"></div>
                </div>
            </div>
        </div>
    `;

    // Add modal to page if not already exists
    if (!document.getElementById('articleModal')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const modal = document.getElementById('articleModal');
    const article = articles[articleId];

    if (article) {
        // Fill modal with article content
        document.getElementById('modalTitle').textContent = article.title;
        document.getElementById('modalCategory').textContent = article.category;
        document.getElementById('modalDate').textContent = article.date;
        document.getElementById('modalReadTime').textContent = article.readTime;
        document.getElementById('modalContent').innerHTML = article.content;
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeArticle() {
    const modal = document.getElementById('articleModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('articleModal');
    if (event.target === modal) {
        closeArticle();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeArticle();
    }
});
