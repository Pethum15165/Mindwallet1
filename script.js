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
