// ===== GLOBAL SEARCH DATABASE =====
const globalSearchDatabase = [
    // Index.html articles
    { title: "The 50/30/20 Rule Explained", category: "Budgeting", description: "Master the simple budgeting rule that can transform your financial life", page: "index.html" },
    { title: "Investment Basics for Beginners", category: "Investing", description: "Start your investment journey with these fundamental concepts", page: "index.html" },
    { title: "Building Your Emergency Fund", category: "Emergency Fund", description: "Learn how to create and maintain an emergency fund", page: "index.html" },
    
    // Contents.html articles
    { title: "5 Budgeting Mistakes That Cost You Money", category: "Budgeting", description: "Learn the most common budgeting pitfalls and how to avoid them", page: "contents.html" },
    { title: "The $5 Challenge That Builds Your Emergency Fund", category: "Saving", description: "A simple daily habit that can help you build emergency funds", page: "contents.html" },
    { title: "Index Funds vs ETFs: Which is Better for Beginners?", category: "Investment", description: "Clear comparison to help you choose the right investment vehicle", page: "contents.html" },
    { title: "7 Tax Deductions You're Probably Missing", category: "Taxes", description: "Don't leave money on the table! These commonly overlooked deductions", page: "contents.html" },
    { title: "Weekend Side Hustles That Actually Pay Well", category: "Income", description: "Real opportunities to earn $500+ per month working weekends", page: "contents.html" },
    { title: "Emergency Fund Calculator: Find Your Perfect Amount", category: "Emergency Fund", description: "Interactive guide to determine exactly how much you need", page: "contents.html" },
    { title: "From $50K Debt to Financial Freedom in 3 Years", category: "Success Story", description: "Sarah's journey from overwhelming debt to financial freedom", page: "contents.html" },
    { title: "Retired at 35: The FIRE Journey", category: "Retirement", description: "How Mark achieved financial independence through smart investing", page: "contents.html" },
    { title: "How I Made $2,000/Month with Weekend Side Gigs", category: "Side Hustle", description: "Jenny's creative approach to boosting her income", page: "contents.html" },
    { title: "Bought First Home at 25 with Smart Saving", category: "Home Buying", description: "David's strategic approach to saving for a down payment", page: "contents.html" },
    { title: "From $100 to $10K: My First Year Investing", category: "Investment", description: "Maria's investment journey starting with just $100", page: "contents.html" },
    
    // Learn.html topics
    { title: "What is Budgeting?", category: "Concept", description: "Budgeting is the process of creating a plan to spend your money", page: "learn.html" },
    { title: "Popular Budgeting Methods", category: "Concept", description: "Explore different budgeting approaches to find what works best", page: "learn.html" },
    { title: "Investment Fundamentals", category: "Investment", description: "Understanding the basics of investing and how to get started", page: "learn.html" },
    { title: "Investment Vehicles", category: "Investment", description: "Explore different types of investments and their characteristics", page: "learn.html" },
    { title: "Building Financial Habits", category: "Discipline", description: "Develop the mental discipline needed for financial success", page: "learn.html" },
    { title: "Overcoming Financial Obstacles", category: "Discipline", description: "Common challenges and strategies to overcome them", page: "learn.html" },
    { title: "Tax Optimization Strategies", category: "Advanced", description: "Legal strategies to minimize your tax burden", page: "learn.html" },
    { title: "Dollar-Cost Averaging Mastery", category: "Investment", description: "Learn how to use dollar-cost averaging to reduce investment risk", page: "learn.html" },
    
    // About.html content
    { title: "Education First", category: "Value", description: "We prioritize clear, comprehensive education", page: "about.html" },
    { title: "Accessibility", category: "Value", description: "Financial knowledge should be available to everyone", page: "about.html" },
    { title: "Trust & Integrity", category: "Value", description: "We provide honest, unbiased information", page: "about.html" },
    { title: "Community", category: "Value", description: "We believe in the power of shared learning", page: "about.html" },
    { title: "Budgeting & Money Management", category: "Focus", description: "Teaching practical budgeting skills and money management", page: "about.html" },
    { title: "Saving Strategies", category: "Focus", description: "Helping individuals develop consistent saving habits", page: "about.html" },
    { title: "Investment Education", category: "Focus", description: "Demystifying investing concepts for beginners", page: "about.html" },
    { title: "Financial Psychology", category: "Focus", description: "Understanding the mental and emotional aspects of money", page: "about.html" }
];

// ===== MOBILE NAVIGATION =====
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// ===== SEARCH FUNCTIONALITY =====
function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    
    if (query.length === 0) {
        closeSearchResults();
        return;
    }
    
    // First, search global database
    const globalResults = globalSearchDatabase.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
    );
    
    // Then, search current page elements
    const currentPageResults = [];
    const articleCards = document.querySelectorAll('.article-card, .content-card, .learning-card, .value-card');
    
    articleCards.forEach(card => {
        const title = card.querySelector('h3');
        const description = card.querySelector('p');
        const badge = card.querySelector('.category-badge');
        
        if (title) {
            const titleText = title.textContent.toLowerCase();
            const descText = description ? description.textContent.toLowerCase() : '';
            const badgeText = badge ? badge.textContent.toLowerCase() : '';
            
            if (titleText.includes(query) || descText.includes(query) || badgeText.includes(query)) {
                currentPageResults.push({
                    title: title.textContent,
                    element: card,
                    isCurrentPage: true,
                    category: badgeText
                });
            }
        }
    });
    
    // Combine results - show current page results first, then global results
    const combinedResults = [
        ...currentPageResults,
        ...globalResults.map(item => ({
            ...item,
            isCurrentPage: false
        }))
    ];
    
    displaySearchResults(combinedResults, event.target);
}

function displaySearchResults(results, searchInput) {
    let resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer) {
        resultsContainer = document.createElement('div');
        resultsContainer.id = 'searchResults';
        resultsContainer.className = 'search-results';
        document.body.appendChild(resultsContainer);
    }
    
    // Position results below the search bar
    const searchBar = searchInput.closest('.hero-search-container') || searchInput.closest('.page-search-container');
    if (searchBar) {
        const rect = searchBar.getBoundingClientRect();
        resultsContainer.style.position = 'absolute';
        resultsContainer.style.top = (window.scrollY + rect.bottom + 10) + 'px';
        resultsContainer.style.left = (rect.left) + 'px';
        resultsContainer.style.width = (rect.width) + 'px';
        resultsContainer.style.maxWidth = (rect.width) + 'px';
    }
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="search-result-item"><p style="color: var(--text-secondary); margin: 0;">No results found</p></div>';
    } else {
        resultsContainer.innerHTML = results.map((result, index) => {
            const pageLabel = !result.isCurrentPage ? ` - ${result.page}` : '';
            return `
                <div class="search-result-item" onclick="handleSearchResultClick(event, ${index}, ${!result.isCurrentPage})">
                    <div class="search-result-title">${result.title}${pageLabel}</div>
                </div>
            `;
        }).join('');
    }
    
    resultsContainer.classList.add('active');
}

function handleSearchResultClick(event, index, isExternalPage) {
    const results = getCurrentSearchResults();
    const result = results[index];
    
    if (isExternalPage && result.page) {
        // Navigate to the page with search term
        const query = document.getElementById('globalSearch').value;
        window.location.href = `${result.page}?search=${encodeURIComponent(query)}`;
    } else {
        scrollToElement(event, index);
    }
}

function getCurrentSearchResults() {
    const query = document.getElementById('globalSearch').value.toLowerCase();
    const globalResults = globalSearchDatabase.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
    );
    
    const currentPageResults = [];
    const articleCards = document.querySelectorAll('.article-card, .content-card, .learning-card, .value-card');
    
    articleCards.forEach(card => {
        const title = card.querySelector('h3');
        if (title) {
            const titleText = title.textContent.toLowerCase();
            const descText = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';
            
            if (titleText.includes(query) || descText.includes(query)) {
                currentPageResults.push({
                    title: title.textContent,
                    element: card,
                    isCurrentPage: true
                });
            }
        }
    });
    
    return [
        ...currentPageResults,
        ...globalResults.map(item => ({...item, isCurrentPage: false}))
    ];
}

function scrollToElement(event, index) {
    const results = getCurrentSearchResults();
    const result = results[index];
    
    if (result.element) {
        result.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        result.element.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.5)';
        setTimeout(() => {
            result.element.style.boxShadow = '';
        }, 2000);
    }
    
    closeSearchResults();
}

function toggleSearch() {
    const searchInput = document.querySelector('.hero-search-input') || document.querySelector('.page-search-input');
    if (searchInput) {
        searchInput.focus();
    }
}

function closeSearchResults() {
    const resultsContainer = document.getElementById('searchResults');
    if (resultsContainer) {
        resultsContainer.classList.remove('active');
    }
}

// Close search results when clicking outside
document.addEventListener('click', function(event) {
    const resultsContainer = document.getElementById('searchResults');
    const searchContainer = event.target.closest('.hero-search-container') || event.target.closest('.page-search-container');
    
    if (!searchContainer && resultsContainer) {
        closeSearchResults();
    }
});

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

// ===== ARTICLE MODAL SYSTEM =====
function openEducationalArticle(articleId) {
    const articles = {
        'compound-interest-guide': {
            title: "Understanding Compound Interest: The 8th Wonder of the World",
            date: "January 15, 2024",
            readTime: "15 min read",
            category: "Investing",
            content: `
                <h2>What is Compound Interest?</h2>
                <p>Compound interest is the interest you earn on your initial investment plus all the interest that investment has already earned. It's literally money making money.</p>

                <h2>The Magic Formula</h2>
                <p>The compound interest formula is: A = P(1 + r/n)^(nt)</p>
                <ul>
                    <li>A = Final amount</li>
                    <li>P = Principal (initial investment)</li>
                    <li>r = Annual interest rate</li>
                    <li>n = Number of times interest is compounded per year</li>
                    <li>t = Time in years</li>
                </ul>

                <h2>Real-World Example</h2>
                <div style="background: var(--bg-primary); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0; border: 1px solid var(--border-color);">
                    <h3>Invest $200/month at 7% annual return for 30 years:</h3>
                    <p>Total invested: $72,000</p>
                    <p>Final value: $226,741</p>
                    <p>Compound interest earned: $154,741</p>
                </div>

                <h2>Why Time Matters</h2>
                <p>The earlier you start, the more powerful compound interest becomes. Someone who starts investing at 25 will have significantly more at retirement than someone who starts at 35, even if they invest the same total amount.</p>

                <h2>How to Maximize Compound Interest</h2>
                <ul>
                    <li>Start early - time is your biggest asset</li>
                    <li>Invest regularly (monthly if possible)</li>
                    <li>Don't interrupt the compounding process</li>
                    <li>Reinvest dividends and returns</li>
                    <li>Be patient - compounding takes time</li>
                </ul>

                <h2>Conclusion</h2>
                <p>Compound interest is the most powerful force in investing. Start early, invest regularly, and let time work its magic. Your future self will thank you!</p>
            `
        },
        'emergency-fund-calculator': {
            title: "Emergency Fund Calculator: Find Your Perfect Amount",
            date: "January 12, 2024",
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
                <div style="background: var(--bg-primary); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0; border: 1px solid var(--border-color);">
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

                <h2>Real-World Examples</h2>
                <div style="background: var(--bg-primary); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0; border: 1px solid var(--border-color);">
                    <h3>Example 1: Single Person, Stable Job</h3>
                    <p>Monthly essential expenses: $2,000</p>
                    <p>Recommended emergency fund: $12,000 (6 months)</p>
                    <p>Target: $12,000 in a high-yield savings account</p>
                </div>

                <div style="background: var(--bg-primary); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0; border: 1px solid var(--border-color);">
                    <h3>Example 2: Family with Kids, Single Income</h3>
                    <p>Monthly essential expenses: $4,500</p>
                    <p>Recommended emergency fund: $27,000 (6 months)</p>
                    <p>Target: $27,000 split between savings and money market accounts</p>
                </div>

                <h2>Building Your Fund Step-by-Step</h2>
                <p><strong>Step 1:</strong> Save $1,000 as quickly as possible (mini-emergency fund)</p>
                <p><strong>Step 2:</strong> Pay off high-interest debt while maintaining the $1,000</p>
                <p><strong>Step 3:</strong> Build to 3-6 months of expenses</p>
                <p><strong>Step 4:</strong> Consider increasing to 9-12 months based on your risk factors</p>

                <h2>Conclusion</h2>
                <p>Your emergency fund size should match your personal situation. Use this guide to calculate your specific needs, then build it systematically. Remember, something is better than nothing - start today!</p>
            `
        },
        'investment-strategy-comparison': {
            title: "The Ultimate Investment Strategy Comparison Guide",
            date: "January 8, 2024",
            readTime: "25 min read",
            category: "Investment",
            content: `
                <h2>Investment Strategy Overview</h2>
                <p>This comprehensive guide compares 10 popular investment strategies, from conservative to aggressive, with real examples and expected returns.</p>

                <h2>1. Conservative Strategies</h2>
                <h3>High-Yield Savings Accounts</h3>
                <p><strong>Risk Level:</strong> Very Low</p>
                <p><strong>Expected Return:</strong> 4-5% annually</p>
                <p><strong>Best For:</strong> Emergency funds, short-term savings</p>
                <p><strong>Pros:</strong> FDIC insured, liquid, no market risk</p>
                <p><strong>Cons:</strong> May not keep up with inflation</p>

                <h3>Certificates of Deposit (CDs)</h3>
                <p><strong>Risk Level:</strong> Very Low</p>
                <p><strong>Expected Return:</strong> 4-5% annually</p>
                <p><strong>Best For:</strong> Money needed in 1-5 years</p>
                <p><strong>Pros:</strong> Guaranteed returns, FDIC insured</p>
                <p><strong>Cons:</strong> Money locked up for term, early withdrawal penalties</p>

                <h2>2. Moderate Strategies</h2>
                <h3>Bond Index Funds</h3>
                <p><strong>Risk Level:</strong> Low to Moderate</p>
                <p><strong>Expected Return:</strong> 5-7% annually</p>
                <p><strong>Best For:</strong> Conservative investors, portfolio diversification</p>
                <p><strong>Pros:</strong> Diversified, low fees, regular income</p>
                <p><strong>Cons:</strong> Interest rate risk, lower growth potential</p>

                <h3>Balanced Portfolio (60/40)</h3>
                <p><strong>Risk Level:</strong> Moderate</p>
                <p><strong>Expected Return:</strong> 7-9% annually</p>
                <p><strong>Best For:</strong> Most investors seeking growth with some stability</p>
                <p><strong>Pros:</strong> Good balance of growth and stability</p>
                <p><strong>Cons:</strong> May underperform in strong bull markets</p>

                <h2>3. Growth Strategies</h2>
                <h3>Total Stock Market Index Funds</h3>
                <p><strong>Risk Level:</strong> Moderate to High</p>
                <p><strong>Expected Return:</strong> 8-10% annually</p>
                <p><strong>Best For:</strong> Long-term investors (10+ years)</p>
                <p><strong>Pros:</strong> Broad diversification, low costs, proven track record</p>
                <p><strong>Cons:</strong> Market volatility, requires long time horizon</p>

                <h3>Growth Stock Strategy</h3>
                <p><strong>Risk Level:</strong> High</p>
                <p><strong>Expected Return:</strong> 10-12% annually</p>
                <p><strong>Best For:</strong> Young investors with high risk tolerance</p>
                <p><strong>Pros:</strong> Higher growth potential, exciting companies</p>
                <p><strong>Cons:</strong> Higher volatility, potential for bigger losses</p>

                <h2>Conclusion</h2>
                <p>Choose a strategy that matches your risk tolerance, time horizon, and financial goals. Most investors benefit from starting with broad index funds and gradually adding complexity as they learn more.</p>
            `
        },
        'credit-score-guide': {
            title: "Credit Score 101: Everything You Need to Know",
            date: "January 5, 2024",
            readTime: "20 min read",
            category: "Credit",
            content: `
                <h2>Understanding Credit Scores</h2>
                <p>Your credit score is a three-digit number (300-850) that represents your creditworthiness. Lenders use it to decide whether to give you loans and what interest rates to charge.</p>

                <h2>How Credit Scores Are Calculated</h2>
                <div style="background: var(--bg-primary); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0; border: 1px solid var(--border-color);">
                    <h3>Credit Score Factors:</h3>
                    <ul>
                        <li><strong>Payment History (35%):</strong> Paying bills on time</li>
                        <li><strong>Credit Utilization (30%):</strong> How much of your available credit you use</li>
                        <li><strong>Length of Credit History (15%):</strong> How long you've had credit</li>
                        <li><strong>Credit Mix (10%):</strong> Different types of credit accounts</li>
                        <li><strong>New Credit (10%):</strong> Recent credit applications</li>
                    </ul>
                </div>

                <h2>Credit Score Ranges</h2>
                <p><strong>300-579:</strong> Poor - May have difficulty getting credit</p>
                <p><strong>580-669:</strong> Fair - Below average, higher interest rates</p>
                <p><strong>670-739:</strong> Good - Most lenders will approve you</p>
                <p><strong>740-799:</strong> Very Good - Above average, better interest rates</p>
                <p><strong>800-850:</strong> Excellent - Best interest rates and terms</p>

                <h2>How to Build Good Credit</h2>
                <p><strong>1. Pay Bills on Time:</strong> Set up automatic payments to never miss a due date</p>
                <p><strong>2. Keep Credit Utilization Low:</strong> Use less than 30% of your available credit</p>
                <p><strong>3. Don't Close Old Accounts:</strong> Length of credit history matters</p>
                <p><strong>4. Limit New Applications:</strong> Too many hard inquiries can hurt your score</p>
                <p><strong>5. Monitor Your Credit:</strong> Check your credit report regularly for errors</p>

                <h2>Common Credit Mistakes to Avoid</h2>
                <p><strong>Maxing out credit cards:</strong> Keep utilization below 30%</p>
                <p><strong>Missing payments:</strong> Even one late payment can significantly hurt your score</p>
                <p><strong>Closing old accounts:</strong> This can shorten your credit history</p>
                <p><strong>Applying for too much credit at once:</strong> Space out applications</p>

                <h2>Timeline for Improvement</h2>
                <p><strong>1-3 months:</strong> Pay down credit cards, dispute errors</p>
                <p><strong>6 months:</strong> Consistent on-time payments show improvement</p>
                <p><strong>12+ months:</strong> Significant improvement with good habits</p>

                <h2>Conclusion</h2>
                <p>Building good credit takes time and consistent habits. Start with the basics - pay on time and keep utilization low - and you'll see steady improvement.</p>
            `
        },
        'retirement-planning-guide': {
            title: "Retirement Planning: Are You Saving Enough?",
            date: "January 2, 2024",
            readTime: "30 min read",
            category: "Retirement",
            content: `
                <h2>Why Retirement Planning Matters</h2>
                <p>Social Security alone won't provide the retirement lifestyle you want. You need to save and invest to maintain your standard of living in retirement.</p>

                <h2>How Much Do You Need?</h2>
                <p><strong>Rule of Thumb:</strong> Save 15% of your gross income for retirement</p>
                <p><strong>4% Rule:</strong> You can safely withdraw 4% of your retirement savings each year</p>
                <p><strong>Target Amount:</strong> Save 25 times your annual expenses</p>

                <h2>Retirement Savings by Age</h2>
                <div style="background: var(--bg-primary); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0; border: 1px solid var(--border-color);">
                    <h3>Savings Targets:</h3>
                    <ul>
                        <li><strong>Age 30:</strong> 1x your annual salary</li>
                        <li><strong>Age 40:</strong> 3x your annual salary</li>
                        <li><strong>Age 50:</strong> 5x your annual salary</li>
                        <li><strong>Age 60:</strong> 7x your annual salary</li>
                        <li><strong>Age 67:</strong> 8x your annual salary</li>
                    </ul>
                </div>

                <h2>Types of Retirement Accounts</h2>
                <p><strong>401(k):</strong> Employer-sponsored plan, often with matching contributions</p>
                <p><strong>Traditional IRA:</strong> Tax-deductible contributions, taxed on withdrawal</p>
                <p><strong>Roth IRA:</strong> After-tax contributions, tax-free withdrawals</p>
                <p><strong>HSA:</strong> Triple tax advantage for medical expenses</p>

                <h2>Investment Strategy by Age</h2>
                <p><strong>20s-30s:</strong> 90-100% stocks, 0-10% bonds (aggressive growth)</p>
                <p><strong>40s-50s:</strong> 70-80% stocks, 20-30% bonds (moderate growth)</p>
                <p><strong>60s+:</strong> 50-60% stocks, 40-50% bonds (preservation)</p>

                <h2>Common Mistakes</h2>
                <p><strong>Not starting early enough:</strong> Time is your biggest asset</p>
                <p><strong>Not maximizing employer match:</strong> Free money you're leaving on the table</p>
                <p><strong>Being too conservative:</strong> You need growth to beat inflation</p>
                <p><strong>Not increasing contributions:</strong> Increase savings as income grows</p>

                <h2>Action Steps</h2>
                <p><strong>1. Start Today:</strong> Even $50 per month is better than nothing</p>
                <p><strong>2. Get Employer Match:</strong> Contribute enough to get full match</p>
                <p><strong>3. Increase Contributions:</strong> Raise contribution rate by 1% each year</p>
                <p><strong>4. Diversify:</strong> Use low-cost index funds for broad market exposure</p>
                <p><strong>5. Stay Consistent:</strong> Don't stop investing during market downturns</p>

                <h2>Conclusion</h2>
                <p>The best time to start planning for retirement was yesterday. The second best time is today. Start small, be consistent, and increase contributions over time.</p>
            `
        },
        'tax-planning-young-professionals': {
            title: "Tax Planning Strategies for Young Professionals",
            date: "December 28, 2023",
            readTime: "18 min read",
            category: "Taxes",
            content: `
                <h2>Why Tax Planning Matters</h2>
                <p>Tax planning isn't just for the wealthy. Young professionals can save thousands each year with proper planning and strategy.</p>

                <h2>Maximize Retirement Contributions</h2>
                <p><strong>401(k) Contributions:</strong> Reduce taxable income by contributing to employer 401(k)</p>
                <p><strong>Traditional IRA:</strong> Deductible contributions up to $6,500 (2024 limit)</p>
                <p><strong>Roth IRA:</strong> After-tax contributions, tax-free growth and withdrawals</p>
                <p><strong>HSA Contributions:</strong> Triple tax advantage for medical expenses</p>

                <h2>Take Advantage of Tax Credits</h2>
                <p><strong>Saver's Credit:</strong> Up to $1,000 credit for retirement contributions</p>
                <p><strong>Lifetime Learning Credit:</strong> Up to $2,000 for education expenses</p>
                <p><strong>Earned Income Credit:</strong> For lower-income workers</p>

                <h2>Optimize Your Withholding</h2>
                <p><strong>Check Your W-4:</strong> Adjust withholding to avoid large refunds or bills</p>
                <p><strong>Quarterly Payments:</strong> Make estimated payments if you have side income</p>
                <p><strong>Track Expenses:</strong> Keep detailed records of deductible expenses</p>

                <h2>Deductible Expenses for Young Professionals</h2>
                <div style="background: var(--bg-primary); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0; border: 1px solid var(--border-color);">
                    <h3>Common Deductions:</h3>
                    <ul>
                        <li>Student loan interest (up to $2,500)</li>
                        <li>Moving expenses for first job</li>
                        <li>Professional development courses</li>
                        <li>Work-related expenses (if not reimbursed)</li>
                        <li>Charitable donations</li>
                        <li>Health expenses above 7.5% of income</li>
                    </ul>
                </div>

                <h2>Side Hustle Tax Tips</h2>
                <p><strong>Track All Income:</strong> Report all income, including cash payments</p>
                <p><strong>Business Expenses:</strong> Deduct legitimate business expenses</p>
                <p><strong>Home Office:</strong> Deduct portion of rent, utilities if you work from home</p>
                <p><strong>Mileage:</strong> Track business miles for deduction</p>

                <h2>Year-Round Tax Calendar</h2>
                <p><strong>January:</strong> Organize tax documents, review W-4</p>
                <p><strong>March:</strong> Make prior year IRA contributions</p>
                <p><strong>April:</strong> File taxes, make Q1 estimated payments</p>
                <p><strong>June:</strong> Make Q2 estimated payments</p>
                <p><strong>September:</strong> Make Q3 estimated payments</p>
                <p><strong>December:</strong> Tax loss harvesting, maximize retirement contributions</p>

                <h2>Common Mistakes to Avoid</h2>
                <p><strong>Not keeping receipts:</strong> Always keep documentation</p>
                <p><strong>Forgetting side income:</strong> All income must be reported</p>
                <p><strong>Missing deadlines:</strong> File and pay on time to avoid penalties</p>
                <p><strong>Not planning ahead:</strong> Tax planning should be year-round</p>

                <h2>When to Hire a Professional</h2>
                <p><strong>Consider a CPA if:</strong> You have side business income, multiple income sources, or complex investments</p>

                <h2>Conclusion</h2>
                <p>Smart tax planning can save you thousands each year. Start with the basics, keep good records, and consider professional help as your situation becomes more complex.</p>
            `
        },
        // Finance Tips Articles
        'budget-planning': {
            title: "Monthly Budget Planning Made Simple",
            date: "Jan 20, 2024",
            readTime: "8 min read",
            category: "Budgeting",
            content: `
                <h2>Create a Realistic Monthly Budget</h2>
                <p>Learn how to create a monthly budget that actually works for your lifestyle and helps you save more money.</p>
                <h2>Key Takeaways:</h2>
                <ul>
                    <li>Track your income and expenses for one month</li>
                    <li>Categorize spending into needs and wants</li>
                    <li>Set realistic savings goals</li>
                    <li>Use the 50/30/20 rule as a starting point</li>
                </ul>
                <p>Start by listing all your sources of income, then track every expense for a month. This will give you a clear picture of where your money is going and help you identify areas where you can cut back.</p>
            `
        },
        'automate-savings': {
            title: "Automate Your Savings Strategy",
            date: "Jan 18, 2024",
            readTime: "6 min read",
            category: "Saving",
            content: `
                <h2>Discover Automation for Effortless Saving</h2>
                <p>Discover how automation can help you save money effortlessly and build wealth over time.</p>
                <h2>Implementation Steps:</h2>
                <ul>
                    <li>Set up automatic transfers to savings account</li>
                    <li>Use apps that round up purchases and save the difference</li>
                    <li>Automate bill payments to avoid late fees</li>
                    <li>Increase savings rate gradually over time</li>
                </ul>
                <p>When you automate your savings, you remove the temptation to spend that money. Make it a priority.</p>
            `
        },
        'debt-reduction': {
            title: "Debt Reduction Strategies That Work",
            date: "Jan 16, 2024",
            readTime: "10 min read",
            category: "Debt",
            content: `
                <h2>Effective Methods to Pay Off Debt</h2>
                <p>Effective methods to pay off debt faster and regain control of your financial future.</p>
                <h2>Proven Methods:</h2>
                <ul>
                    <li>Snowball method: Pay smallest debts first</li>
                    <li>Avalanche method: Pay highest interest first</li>
                    <li>Consolidate high-interest debt</li>
                    <li>Negotiate lower interest rates</li>
                </ul>
                <p>The key is consistency and choosing a method that keeps you motivated.</p>
            `
        },
        // Advanced Articles
        'tax-optimization': {
            title: "Tax Optimization Strategies",
            date: "Jan 14, 2024",
            readTime: "12 min read",
            category: "Advanced",
            content: `
                <h2>Legal Tax Minimization</h2>
                <p>Legal strategies to minimize your tax burden and keep more of your hard-earned money.</p>
                <h2>Key Strategies:</h2>
                <ul>
                    <li>Maximize retirement account contributions</li>
                    <li>Utilize tax-loss harvesting</li>
                    <li>Consider Roth conversions</li>
                    <li>Track deductible expenses meticulously</li>
                </ul>
                <p>Work with a tax professional to implement these strategies effectively.</p>
            `
        },
        'dollar-cost-averaging': {
            title: "Dollar-Cost Averaging Mastery",
            date: "Jan 12, 2024",
            readTime: "9 min read",
            category: "Investment",
            content: `
                <h2>Reduce Investment Risk Through Consistency</h2>
                <p>Learn how to use dollar-cost averaging to reduce investment risk and build wealth consistently.</p>
                <h2>Implementation Guide:</h2>
                <ul>
                    <li>Set up automatic monthly investments</li>
                    <li>Choose low-cost index funds</li>
                    <li>Stay consistent through market volatility</li>
                    <li>Gradually increase contribution amounts</li>
                </ul>
                <p>This approach removes emotion from investing and builds discipline.</p>
            `
        },
        // Latest Finance Tips
        'budget-mistakes': {
            title: "5 Budgeting Mistakes That Cost You Money",
            date: "Jan 15, 2024",
            readTime: "5 min read",
            category: "Budgeting",
            content: `
                <h2>Common Budgeting Pitfalls</h2>
                <p>Learn the most common budgeting pitfalls and how to avoid them to save thousands each year.</p>
                <h2>The 5 Mistakes:</h2>
                <ol>
                    <li><strong>Not tracking expenses:</strong> You can't improve what you don't measure</li>
                    <li><strong>Setting unrealistic budgets:</strong> Make it sustainable</li>
                    <li><strong>Forgetting irregular expenses:</strong> Account for annual and quarterly costs</li>
                    <li><strong>Not adjusting your budget:</strong> Review and update regularly</li>
                    <li><strong>Ignoring small expenses:</strong> They add up quickly</li>
                </ol>
                <p>Avoiding these mistakes can save you thousands annually.</p>
            `
        },
        '5-dollar-challenge': {
            title: "The $5 Challenge That Builds Your Emergency Fund",
            date: "Jan 12, 2024",
            readTime: "3 min read",
            category: "Saving",
            content: `
                <h2>A Simple Daily Habit</h2>
                <p>A simple daily habit that can help you build a $1,800 emergency fund in just one year. No complicated apps or extreme frugality required.</p>
                <h2>How It Works:</h2>
                <p>Save every $5 bill you receive as change. If you make 1-2 transactions daily, you'll have $1,800+ by year's end.</p>
                <h2>Why It Works:</h2>
                <ul>
                    <li>Simple and automatic</li>
                    <li>Painless savings method</li>
                    <li>Builds financial awareness</li>
                    <li>Creates emergency fund fast</li>
                </ul>
            `
        },
        'index-vs-etfs': {
            title: "Index Funds vs ETFs: Which is Better for Beginners?",
            date: "Jan 10, 2024",
            readTime: "7 min read",
            category: "Investment",
            content: `
                <h2>Understanding the Differences</h2>
                <p>Clear comparison to help you choose the right investment vehicle for your financial goals. Includes real examples and cost breakdowns.</p>
                <h2>Index Funds:</h2>
                <ul>
                    <li>Minimum investment requirement</li>
                    <li>Easy to understand</li>
                    <li>Tax efficient</li>
                    <li>Lower trading flexibility</li>
                </ul>
                <h2>ETFs:</h2>
                <ul>
                    <li>Trade like stocks</li>
                    <li>Lower minimum investment</li>
                    <li>More flexibility</li>
                    <li>May have slightly higher fees</li>
                </ul>
                <p>For most beginners, either is a great choice - just start investing!</p>
            `
        },
        'tax-deductions': {
            title: "7 Tax Deductions You're Probably Missing",
            date: "Jan 8, 2024",
            readTime: "6 min read",
            category: "Taxes",
            content: `
                <h2>Don't Leave Money on the Table</h2>
                <p>Don't leave money on the table! These commonly overlooked deductions could save you hundreds on your tax bill.</p>
                <h2>7 Deductions:</h2>
                <ol>
                    <li>State and local taxes (SALT) - up to $10,000</li>
                    <li>Student loan interest - up to $2,500</li>
                    <li>Medical expenses - over 7.5% of AGI</li>
                    <li>Home office expenses - for self-employed</li>
                    <li>Charitable donations - keep receipts</li>
                    <li>Business meals and travel - 50% deductible</li>
                    <li>Professional development - courses and books</li>
                </ol>
            `
        },
        'weekend-side-hustles': {
            title: "Weekend Side Hustles That Actually Pay Well",
            date: "Jan 5, 2024",
            readTime: "8 min read",
            category: "Income",
            content: `
                <h2>Real Opportunities to Earn Extra</h2>
                <p>Real opportunities to earn $500+ per month working just weekends. No MLMs or get-rich-quick schemes - just legitimate income sources.</p>
                <h2>Top Side Hustles:</h2>
                <ul>
                    <li><strong>Freelance writing:</strong> $500-2,000/month</li>
                    <li><strong>Tutoring:</strong> $20-60/hour</li>
                    <li><strong>Virtual assistant:</strong> $15-25/hour</li>
                    <li><strong>Social media management:</strong> $300-1,000/month</li>
                    <li><strong>Delivery services:</strong> $200-600/month</li>
                    <li><strong>Handyman services:</strong> $50-150/hour</li>
                </ul>
                <p>Start with what you're good at and scale from there.</p>
            `
        },
        // Stories
        'sarah-debt-journey': {
            title: "From $50K Debt to Financial Freedom in 3 Years",
            date: "Dec 20, 2023",
            readTime: "12 min read",
            category: "Success Story",
            content: `
                <h2>Sarah's Journey to Financial Freedom</h2>
                <p>Sarah's journey from overwhelming credit card debt to building a six-figure investment portfolio. Learn the exact strategies she used to pay off $50,000 in just 36 months.</p>
                <h2>The Turning Point</h2>
                <p>"The turning point was when I realized I wasn't bad with money - I just needed a system that worked for me." - Sarah M., 32, Marketing Manager</p>
                <h2>Her Strategy:</h2>
                <ul>
                    <li>Cut unnecessary expenses ruthlessly</li>
                    <li>Used the debt snowball method</li>
                    <li>Negotiated lower interest rates</li>
                    <li>Increased income through side work</li>
                    <li>Automated remaining savings</li>
                </ul>
                <h2>Results:</h2>
                <p><strong>$50,000</strong> Debt Paid Off</p>
                <p><strong>36</strong> Months to Achieve</p>
                <p><strong>$125,000</strong> Current Investments</p>
            `
        },
        'mark-fire-journey': {
            title: "Retired at 35: The FIRE Journey",
            date: "Dec 18, 2023",
            readTime: "15 min read",
            category: "Retirement",
            content: `
                <h2>Mark's Path to Financial Independence</h2>
                <p>How Mark achieved financial independence through aggressive saving and smart investing. Discover the exact FIRE strategy that allowed him to retire 30 years early.</p>
                <h2>The Journey:</h2>
                <p><strong>Age 25:</strong> Started with $50K salary, 60% savings rate</p>
                <p><strong>Age 30:</strong> Reached $300K net worth</p>
                <p><strong>Age 35:</strong> Achieved FIRE with $750K invested</p>
                <h2>Key Insight:</h2>
                <p>"The key was automating everything and living below my means. Compound interest did the heavy lifting." - Mark T., 35, Retired</p>
                <h2>His Formula:</h2>
                <ul>
                    <li>Maximize income through career growth</li>
                    <li>Keep expenses extremely low</li>
                    <li>Invest everything in index funds</li>
                    <li>Stay disciplined and consistent</li>
                </ul>
            `
        },
        'jenny-side-hustle': {
            title: "How I Made $2,000/Month with Weekend Side Gigs",
            date: "Dec 16, 2023",
            readTime: "10 min read",
            category: "Side Hustle",
            content: `
                <h2>Jenny's Multiple Income Streams</h2>
                <p>Jenny's creative approach to boosting her income while working full-time. Learn how she built multiple income streams that now earn more than her day job.</p>
                <h2>Her Timeline:</h2>
                <p><strong>Month 1-3:</strong> $500/month - Freelance writing</p>
                <p><strong>Month 4-6:</strong> $1,200/month - Added tutoring</p>
                <p><strong>Month 7+:</strong> $2,000/month - Multiple streams</p>
                <h2>Her Advice:</h2>
                <p>"Start with what you know. I began with writing about my industry, then expanded to teaching others." - Jenny K., 28, Side Hustle Expert</p>
                <h2>What She Does Now:</h2>
                <ul>
                    <li>Freelance writing - 20 hours/week</li>
                    <li>Online tutoring - 15 hours/week</li>
                    <li>Content consulting - 10 hours/week</li>
                </ul>
            `
        },
        'david-home-savings': {
            title: "Bought First Home at 25 with Smart Saving",
            date: "Dec 14, 2023",
            readTime: "11 min read",
            category: "Home Buying",
            content: `
                <h2>David's Strategic Down Payment Savings</h2>
                <p>David's strategic approach to saving for a down payment while renting. How he saved $40K in 2 years on a $55K salary.</p>
                <h2>His Results:</h2>
                <p><strong>$40,000</strong> Down Payment Saved</p>
                <p><strong>24</strong> Months to Save</p>
                <p><strong>$55,000</strong> Starting Salary</p>
                <h2>His Game-Changer Strategy:</h2>
                <p>"House hacking was the game-changer. I rented out rooms to cut my housing costs in half." - David L., 27, Homeowner</p>
                <h2>His Approach:</h2>
                <ul>
                    <li>Rented out rooms in his apartment</li>
                    <li>Saved 50% of his after-tax income</li>
                    <li>Cut lifestyle inflation</li>
                    <li>Invested remaining funds wisely</li>
                </ul>
            `
        },
        'maria-investment-journey': {
            title: "From $100 to $10K: My First Year Investing",
            date: "Dec 12, 2023",
            readTime: "9 min read",
            category: "Investment",
            content: `
                <h2>Maria's Investment Growth Story</h2>
                <p>Maria's investment journey starting with just $100. Learn how she grew her portfolio through consistent investing and education.</p>
                <h2>Her First Year Timeline:</h2>
                <p><strong>Month 1:</strong> Started with $100 in index funds</p>
                <p><strong>Month 6:</strong> $3,000 invested, learning constantly</p>
                <p><strong>Month 12:</strong> $10,000 portfolio, 15% returns</p>
                <h2>Her Key Insight:</h2>
                <p>"I started small but invested consistently. The key was never stopping the learning process." - Maria S., 24, Investor</p>
                <h2>What She Learned:</h2>
                <ul>
                    <li>Start early, even with small amounts</li>
                    <li>Consistent investing beats timing</li>
                    <li>Education is as important as the money</li>
                    <li>Compound interest is powerful</li>
                </ul>
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
        document.getElementById('modalTitle').textContent = article.title;
        document.getElementById('modalCategory').textContent = article.category;
        document.getElementById('modalDate').textContent = article.date;
        document.getElementById('modalReadTime').textContent = article.readTime;
        document.getElementById('modalContent').innerHTML = article.content;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        modal.scrollTop = 0;
    }
}

// Alias for backward compatibility - use same modal for all
function openArticle(articleId) {
    openEducationalArticle(articleId);
}

function openStory(storyId) {
    openEducationalArticle(storyId);
}

function closeArticle() {
    const modal = document.getElementById('articleModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
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

// ===== TOGGLE CONTENT FOR INLINE EXPANSION =====
function toggleContent(button) {
    const card = button.closest('.content-card');
    const content = card.querySelector('.expandable-content');
    
    if (content.style.display === 'block') {
        content.style.display = 'none';
        button.textContent = 'Read More';
    } else {
        content.style.display = 'block';
        button.textContent = 'Read Less';
    }
}

// ===== MEDIA LIGHTBOX =====
function openMediaModal(src, type) {
    // Create modal if missing
    if (!document.getElementById('mediaModal')) {
        const html = `
            <div id="mediaModal" class="media-modal">
                <div class="modal-inner">
                    <button class="modal-close" onclick="closeMediaModal()" style="position:absolute;right:10px;top:10px;font-size:28px;background:none;border:none;color:white;">&times;</button>
                    <div id="mediaContainer"></div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);
    }

    const modal = document.getElementById('mediaModal');
    const container = document.getElementById('mediaContainer');
    if (type === 'image') {
        container.innerHTML = `<img src="${src}" alt="media">`;
    } else if (type === 'video') {
        container.innerHTML = `<iframe src="${src}" allowfullscreen></iframe>`;
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeMediaModal() {
    const modal = document.getElementById('mediaModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        const container = document.getElementById('mediaContainer');
        if (container) container.innerHTML = '';
    }
}

// Close media modal when clicking outside
window.addEventListener('click', function(event) {
    const mediaModal = document.getElementById('mediaModal');
    if (mediaModal && event.target === mediaModal) {
        closeMediaModal();
    }
});

// Close media modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeMediaModal();
    }
});

// ===== SCROLL-TRIGGERED ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll-animate class to elements that should animate on scroll
    const animateOnScrollElements = document.querySelectorAll(
        '.text-animate-slide, .text-animate-pop, .text-animate-fade, .card-animate, .stat-animate, .article-card'
    );
    
    animateOnScrollElements.forEach(element => {
        element.classList.add('scroll-animate');
    });

    // Create Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });
});