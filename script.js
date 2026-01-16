// ===== MOBILE NAVIGATION =====
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// ===== ACCORDION FUNCTIONALITY =====
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

// ===== EXPANDABLE CONTENT =====
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

// ===== ARTICLE MODAL SYSTEM =====
function openArticle(articleId) {
    const articles = {
        // === CONTENTS PAGE ARTICLES ===
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
        'index-vs-etfs': {
            title: "Index Funds vs ETFs: Which is Better for Beginners?",
            date: "January 10, 2024",
            readTime: "7 min read",
            category: "Investment",
            content: `
                <h2>Understanding the Basics</h2>
                <p>Both index funds and ETFs allow you to invest in a diversified portfolio of stocks or bonds, but they work differently. Let's break down the key differences to help you choose what's best for your situation.</p>

                <h2>What Are Index Funds?</h2>
                <p>Index funds are mutual funds that track a specific market index like the S&P 500. You buy them directly from the fund company, and they're priced once per day after the market closes.</p>
                <p><strong>Pros:</strong></p>
                <ul>
                    <li>Easy to buy - no need for a brokerage account</li>
                    <li>Automatic investment options</li>
                    <li>Can buy fractional shares</li>
                    <li>Lower minimum investment requirements</li>
                </ul>

                <h2>What Are ETFs?</h2>
                <p>Exchange-Traded Funds (ETFs) are similar to index funds but trade like stocks throughout the day on exchanges. You need a brokerage account to buy them.</p>
                <p><strong>Pros:</strong></p>
                <ul>
                    <li>Lower expense ratios (usually)</li>
                    <li>More flexible - can buy/sell anytime</li>
                    <li>More variety and options</li>
                    <li>Tax advantages in some cases</li>
                </ul>

                <h2>Cost Comparison</h2>
                <div class="example-box">
                    <h3>Real Example: Vanguard S&P 500</h3>
                    <p><strong>Index Fund (VFINX):</strong> 0.14% expense ratio</p>
                    <p><strong>ETF (VOO):</strong> 0.03% expense ratio</p>
                    <p>On a $10,000 investment, that's $14 vs $3 per year in fees.</p>
                </div>

                <h2>Which Should Beginners Choose?</h2>
                <p><strong>For Most Beginners: Index Funds</strong></p>
                <ul>
                    <li>Simpler to understand and buy</li>
                    <li>Can set up automatic investments easily</li>
                    <li>No need to worry about bid-ask spreads</li>
                    <li>Can buy fractional shares with any amount</li>
                </ul>

                <p><strong>Consider ETFs If:</strong></p>
                <ul>
                    <li>You want the lowest possible fees</li>
                    <li>You like having more trading flexibility</li>
                    <li>You want access to more specialized funds</li>
                    <li>You're comfortable with a brokerage account</li>
                </ul>

                <h2>Bottom Line</h2>
                <p>For most beginners, the difference is minimal. The most important thing is to start investing, whether you choose index funds or ETFs. You can always switch later if your needs change.</p>
            `
        },
        'emergency-fund-calculator': {
            title: "Emergency Fund Calculator: Find Your Perfect Amount",
            date: "January 3, 2024",
            readTime: "10 min read",
            category: "Emergency Fund",
            content: `
                <h2>Why Emergency Fund Size Matters</h2>
                <p>Too little and you're vulnerable to financial shocks. Too much and you're missing out on investment returns. This guide will help you find the perfect emergency fund size for your situation.</p>

                <h2>The Basic Formula</h2>
                <p><strong>Minimum Emergency Fund:</strong> 3 months of essential expenses</p>
                <p><strong>Recommended Emergency Fund:</strong> 6 months of essential expenses</p>
                <p><strong>Conservative Emergency Fund:</strong> 12 months of essential expenses</p>

                <h2>Calculate Your Essential Monthly Expenses</h2>
                <div class="example-box">
                    <h3>Essential Expenses Include:</h3>
                    <ul>
                        <li>Housing (rent/mortgage, utilities, insurance)</li>
                        <li>Food and groceries</li>
                        <li>Transportation</li>
                        <li>Health insurance and medical expenses</li>
                        <li>Minimum debt payments</li>
                        <li>Basic phone and internet</li>
                    </ul>
                </div>

                <h2>Factors That Affect Your Needs</h2>
                <p><strong>Job Security:</strong> If you work in a stable industry with low turnover, 3-4 months might be enough.</p>
                <p><strong>Income Variability:</strong> Freelancers and commission-based workers should aim for 9-12 months.</p>
                <p><strong>Family Situation:</strong> Single income households need more than dual income households.</p>
                <p><strong>Health Status:</strong> Ongoing health issues might require a larger emergency fund.</p>

                <h2>Real-World Examples</h2>
                <div class="example-box">
                    <h3>Example 1: Single Person, Stable Job</h3>
                    <p>Monthly essential expenses: $2,000</p>
                    <p>Recommended emergency fund: $12,000 (6 months)</p>
                    <p>Target: $12,000 in a high-yield savings account</p>
                </div>

                <div class="example-box">
                    <h3>Example 2: Family with Kids, Single Income</h3>
                    <p>Monthly essential expenses: $4,500</p>
                    <p>Recommended emergency fund: $27,000 (6 months)</p>
                    <p>Target: $27,000 split between savings and money market accounts</p>
                </div>

                <h2>Where to Keep Your Emergency Fund</h2>
                <p><strong>High-Yield Savings Account:</strong> Best for most people - FDIC insured and accessible</p>
                <p><strong>Money Market Account:</strong> Higher returns, still accessible</p>
                <p><strong>Multiple Accounts:</strong> Split between savings and money market for flexibility</p>

                <h2>Building Your Fund Step-by-Step</h2>
                <p><strong>Step 1:</strong> Save $1,000 as quickly as possible (mini-emergency fund)</p>
                <p><strong>Step 2:</strong> Pay off high-interest debt while maintaining the $1,000</p>
                <p><strong>Step 3:</strong> Build to 3-6 months of expenses</p>
                <p><strong>Step 4:</strong> Consider increasing to 9-12 months based on your risk factors</p>

                <h2>When to Use Your Emergency Fund</h2>
                <p>Use it for true emergencies: job loss, medical emergencies, urgent home or car repairs. Not for planned expenses or wants.</p>

                <h2>Conclusion</h2>
                <p>Your emergency fund size should match your personal situation. Use this guide to calculate your specific needs, then build it systematically. Remember, something is better than nothing - start today!</p>
            `
        },
        'weekend-side-hustles': {
            title: "Weekend Side Hustles That Actually Pay Well",
            date: "January 5, 2024",
            readTime: "8 min read",
            category: "Income",
            content: `
                <h2>Introduction</h2>
                <p>Looking to make extra money on weekends without committing to a part-time job? These side hustles can earn you $500+ per month working just Saturdays and Sundays.</p>

                <h2>1. Freelance Writing ($50-100/hour)</h2>
                <p><strong>What you need:</strong> Good writing skills, computer, internet connection</p>
                <p><strong>Getting started:</strong> Create profiles on Upwork, Fiverr, or Contently</p>
                <p><strong>Weekend potential:</strong> 4 hours Saturday = $200-400</p>
                <p><strong>Best niches:</strong> Finance, technology, health, business</p>

                <h2>2. Tutoring ($30-60/hour)</h2>
                <p><strong>What you need:</strong> Expertise in a subject, patience</p>
                <p><strong>Getting started:</strong> Sign up on Wyzant, Tutor.com, or advertise locally</p>
                <p><strong>Weekend potential:</strong> 4 hours total = $120-240</p>
                <p><strong>Popular subjects:</strong> Math, science, test prep, music lessons</p>

                <h2>3. Handyman Services ($40-80/hour)</h2>
                <p><strong>What you need:</strong> Basic tools, home repair skills</p>
                <p><strong>Getting started:</strong> Create TaskRabbit profile, advertise on Nextdoor</p>
                <p><strong>Weekend potential:</strong> 6 hours total = $240-480</p>
                <p><strong>Popular services:</strong> Furniture assembly, minor repairs, mounting</p>

                <h2>4. Photography ($100-300/session)</h2>
                <p><strong>What you need:</strong> Decent camera, photography skills</p>
                <p><strong>Getting started:</strong> Build portfolio, advertise on social media</p>
                <p><strong>Weekend potential:</strong> 2 sessions = $200-600</p>
                <p><strong>Popular types:</strong> Family portraits, events, real estate</p>

                <h2>5. Virtual Assistant ($25-50/hour)</h2>
                <p><strong>What you need:</strong> Computer, organizational skills</p>
                <p><strong>Getting started:</strong> Join Belay, Time Etc, or freelance platforms</p>
                <p><strong>Weekend potential:</strong> 5 hours total = $125-250</p>
                <p><strong>Common tasks:</strong> Email management, scheduling, research</p>

                <h2>Success Tips</h2>
                <p><strong>Start Small:</strong> Begin with 2-3 hours per weekend and scale up</p>
                <p><strong>Track Everything:</strong> Keep detailed records of income and expenses</p>
                <p><strong>Build Reputation:</strong> Focus on quality work to get repeat clients</p>
                <p><strong>Set Boundaries:</strong> Don't let side hustles interfere with main job</p>

                <h2>Making $500+ Per Month</h2>
                <p>Combine 2-3 of these hustles:</p>
                <ul>
                    <li>Weekend 1: 4 hours writing ($200) + 2 hours tutoring ($80) = $280</li>
                    <li>Weekend 2: 6 hours handyman work ($360) = $360</li>
                    <li>Average: $320 per weekend × 4 weekends = $1,280 per month</li>
                </ul>

                <h2>Tax Considerations</h2>
                <p>Track all income and expenses. Set aside 25-30% for taxes. Consider forming an LLC once you're making consistent money.</p>

                <h2>Conclusion</h2>
                <p>The key is choosing something that fits your skills and schedule. Start with one hustle, master it, then add others. Weekend work can quickly become significant income!</p>
            `
        }
    };

    // Create modal HTML if it doesn't exist
    if (!document.getElementById('articleModal')) {
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
        
        // Scroll to top of modal
        modal.scrollTop = 0;
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

// Make all article buttons work the same way
function openStory(storyId) {
    openArticle(storyId); // Stories use same system
}

function openEducationalArticle(articleId) {
    openArticle(articleId); // Educational articles use same system
}
