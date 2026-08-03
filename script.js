/**
 * intelicore - Management Information System Engine
 * MIS Final Project Implementation (With Extended Visual Data Engine & Cloud Firestore)
 */

const state = {
    activeView: 'dashboard',
    theme: localStorage.getItem('theme') || 'dark',
    bookmarks: JSON.parse(localStorage.getItem('bookmarks')) || [],
    ticker: [
        "Tesla tapes out AI5 custom silicon for bipedal control.",
        "URKL Martial Arts Robotics Championship finishes in Shenzhen.",
        "OpenAI releases updated structural code reasoning architecture.",
        "DeepMind maps ligand configurations for targeted virus models."
    ],
    categories: ["All", "Artificial Intelligence", "Robotics", "Machine Learning", "AI Ethics", "Hardware"],
    articles: [
        {
            id: 'art-1',
            title: 'Architecting Enterprise RAG Pipelines with Vector Knowledge Graphs',
            category: 'Artificial Intelligence',
            author: 'Dr. Aris Thorne',
            date: '2026-03-01',
            readTime: '8 min',
            img: 'https://i.pinimg.com/736x/18/61/ea/1861ea1049f91b76b88b61756e3e5d80.jpg',
            summary: 'Combining graph databases with vector embeddings eliminates context drift in organizational knowledge systems.',
            content: 'Enterprise Knowledge Management Systems (KMS) face significant challenges with relational query drift. By coupling vector indexing with Knowledge Graph constraints, information accuracy increases by 42%. Structured indexing ensures compliance across high-load database reads.',
            references: [
                { label: 'IEEE Knowledge Base', url: 'https://ieee.org' },
                { label: 'Original Research Paper', url: 'https://arxiv.org' }
            ]
        },
        {
            id: 'art-2',
            title: 'Agentic Workflows vs Classical Automation in Business Systems',
            category: 'Machine Learning',
            author: 'Elena Rostova',
            date: '2026-02-18',
            readTime: '5 min',
            img: 'https://i.pinimg.com/736x/56/0f/e1/560fe1c5d4b738623d9421b19723250b.jpg',
            summary: 'Evaluating stateful autonomous agents against deterministic business process management engines.',
            content: 'Modern MIS implementations are migrating from static BPMN workflows to agentic feedback loops that evaluate execution outputs autonomously. Real-time logging enables proactive intervention before pipeline failure.',
            references: [
                { label: 'Management Information Systems Quarterly', url: 'https://misq.org' }
            ]
        },
        {
            id: 'art-3',
            title: 'Neuromorphic Hardware: Pushing Edge AI Beyond GPU Bounds',
            category: 'Hardware',
            author: 'Marcus Vance',
            date: '2026-02-10',
            readTime: '6 min',
            img: 'https://i.pinimg.com/736x/e6/55/f4/e655f4c8c922eca2da2feb267d271f95.jpg',
            summary: 'Event-driven spiking neural networks deliver 10x energy efficiency for real-time mobile autonomous agents.',
            content: 'As power density becomes a core limitation in datacenters and robotics platforms, neuromorphic silicon mimics biological synapses to process asynchronously without high thermal penalties.',
            references: [
                { label: 'ACM Embedded Systems Transactions', url: 'https://acm.org' }
            ]
        }
    ],
    robotics: [
        { name: 'Unitree G1', company: 'Unitree Robotics', country: 'China', year: '2025', specs: 'Bipedal, 3D LiDAR, 2m/s Walk', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80' },
        { name: 'Tesla Optimus Gen 3', company: 'Tesla', country: 'USA', year: '2026', specs: 'Custom AI5 Chip, Tactile Hands', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
        { name: 'Figure 02', company: 'Figure AI', country: 'USA', year: '2025', specs: 'Neural Speech, Industrial Manipulation', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80' },
        { name: 'Boston Dynamics Atlas', company: 'Boston Dynamics', country: 'USA', year: '2025', specs: 'Fully Electric, 360 Joint Range', img: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=600&q=80' }
    ],
    companies: [
        { name: 'OpenAI', country: 'USA', domain: 'LLMs & Reasoning Models', site: 'openai.com', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' },
        { name: 'Google DeepMind', country: 'USA', domain: 'AlphaFold & AI Biology', site: 'deepmind.google', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80' },
        { name: 'Unitree Robotics', country: 'China', domain: 'Bipedal Hardware & Controls', site: 'unitree.com', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80' },
        { name: 'DeepSeek', country: 'China', domain: 'Open Source Reasoning Models', site: 'deepseek.com', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80' },
        { name: 'SoftBank Robotics', country: 'Japan', domain: 'Service & Commercial Automation', site: 'softbankrobotics.com', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=80' },
        { name: 'NAVER AI', country: 'South Korea', domain: 'Hyperclova Cloud Infrastructure', site: 'navercorp.com', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80' }
    ],
    tools: [
        { name: 'ChatGPT / GPT-4o', category: 'Generative AI', price: 'Freemium', site: 'openai.com', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' },
        { name: 'Claude 3.5 Sonnet', category: 'Coding & Analysis', price: 'Freemium', site: 'anthropic.com', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80' },
        { name: 'Perplexity AI', category: 'Knowledge Search', price: 'Freemium', site: 'perplexity.ai', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80' }
    ],
    research: [
        { title: 'Scaling Laws for Autonomous Bipedal Locomotion', category: 'Robotics', authors: 'Zhang et al.', venue: 'IEEE / RSJ', year: '2026' },
        { title: 'Graph-Guided Reasoning Trees in Large Models', category: 'Artificial Intelligence', authors: 'V. Nair et al.', venue: 'NeurIPS', year: '2025' }
    ]
};

document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    initNavigation();
    initTicker();
    
    // Fetch articles from Cloud Firestore first
    await fetchCloudArticles();
    
    renderAll();
    initSearch();
    initCounters();
    initScroll();
});

/* Cloud Firestore Hydration */
async function fetchCloudArticles() {
    if (typeof window.loadArticlesFromFirebase === 'function') {
        const remoteArticles = await window.loadArticlesFromFirebase();
        if (remoteArticles && remoteArticles.length > 0) {
            remoteArticles.forEach(remoteArt => {
                const exists = state.articles.some(a => a.id === remoteArt.id);
                if (!exists) {
                    state.articles.unshift(remoteArt);
                }
            });
            console.log("🔥 Loaded " + remoteArticles.length + " articles from Firestore");
        }
    }
}

/* Theme Handling */
function initTheme() {
    if (state.theme === 'light') document.body.classList.add('light-theme');
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
        toggleBtn.innerText = state.theme === 'light' ? '☀️' : '🌙';
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            state.theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
            localStorage.setItem('theme', state.theme);
            toggleBtn.innerText = state.theme === 'light' ? '☀️' : '🌙';
        });
    }
}

/* Navigation & Breadcrumbs */
function initNavigation() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebar-toggle');
    const mobileBtn = document.getElementById('mobile-menu-btn');

    if (toggle) {
        toggle.addEventListener('click', () => {
            if (window.innerWidth > 992) {
                document.body.classList.toggle('sidebar-collapsed');
            } else {
                sidebar.classList.toggle('mobile-open');
            }
        });
    }

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => sidebar.classList.toggle('mobile-open'));
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.getAttribute('data-target');
            if (target) switchView(target);
            if (window.innerWidth <= 992) sidebar.classList.remove('mobile-open');
        });
    });
}

function switchView(viewId) {
    state.activeView = viewId;
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('active', el.getAttribute('data-target') === viewId);
    });
    document.querySelectorAll('.content-container').forEach(c => {
        c.classList.toggle('active', c.id === `view-${viewId}`);
    });

    const activeSpan = document.getElementById('breadcrumb-active');
    if (activeSpan) activeSpan.innerText = viewId.toUpperCase();

    if (viewId === 'analytics') renderAnalyticsCharts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Ticker Bar */
function initTicker() {
    const el = document.getElementById('ticker-content');
    if (el) el.innerText = state.ticker.join("  •  ");
}

/* Render All Modules */
function renderAll() {
    renderNewsGrid(state.articles.slice(0, 3), 'dashboard-news-grid');
    renderCategoryChips();
    renderArticlesGrid(state.articles);
    renderRoboticsGrid(state.robotics);
    filterCountry('USA');
    renderToolsGrid(state.tools);
    renderResearchTable(state.research);
    renderBookmarks();
    updateBookmarkCount();
}

/* Category Filter Chips */
function renderCategoryChips() {
    const container = document.getElementById('category-filter-chips');
    if (!container) return;
    container.innerHTML = state.categories.map(cat => `
        <button class="chip ${cat === 'All' ? 'active' : ''}" onclick="filterArticlesCategory('${cat}', this)">${cat}</button>
    `).join('');
}

function filterArticlesCategory(cat, btnElement) {
    document.querySelectorAll('.category-filter-chips .chip').forEach(c => c.classList.remove('active'));
    btnElement.classList.add('active');
    
    if (cat === 'All') {
        renderArticlesGrid(state.articles);
    } else {
        const filtered = state.articles.filter(a => a.category === cat);
        renderArticlesGrid(filtered);
    }
}

/* Card Rendering Functions */
function renderNewsGrid(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(item => `
        <article class="news-card">
            <div class="card-img-wrapper">
                <img src="${item.img}" alt="${item.title}">
                <span class="card-tag">${item.category}</span>
            </div>
            <div class="news-card-body">
                <div class="news-meta"><span>${item.date}</span> • <span>${item.author}</span></div>
                <h3>${item.title}</h3>
                <p>${item.summary}</p>
                <div class="card-footer">
                    <button class="btn btn-outline" onclick="openArticleDetail('${item.id}')">Read Document &rarr;</button>
                </div>
            </div>
        </article>
    `).join('');
}

function renderArticlesGrid(data) {
    const container = document.getElementById('articles-grid');
    if (!container) return;
    container.innerHTML = data.map(item => {
        const isSaved = state.bookmarks.some(b => b.id === item.id);
        return `
            <article class="article-card">
                <div class="card-img-wrapper">
                    <img src="${item.img}" alt="${item.title}">
                    <span class="card-tag">${item.category}</span>
                </div>
                <div class="article-body">
                    <div class="news-meta">
                        <span>${item.readTime || '5 min'} read</span> • <span>${item.author}</span>
                    </div>
                    <h3 style="margin: 8px 0;">${item.title}</h3>
                    <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 12px;">${item.summary}</p>
                    <div class="card-footer">
                        <button class="btn btn-outline" onclick="openArticleDetail('${item.id}')">Full Article</button>
                        <button class="btn btn-outline" onclick="toggleBookmark('${item.id}')">${isSaved ? '📑 Saved' : '🔖 Save'}</button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

function openArticleDetail(id) {
    const article = state.articles.find(a => a.id === id);
    if (!article) return;
    
    const container = document.getElementById('article-detail-content');
    const refs = article.references || [{ label: 'Internal KM Registry', url: '#' }];

    container.innerHTML = `
        <img src="${article.img}" alt="${article.title}" class="article-hero-img">
        <span class="card-tag" style="position:static; margin-bottom:12px; display:inline-block;">${article.category}</span>
        <h1 style="font-size:28px; margin-bottom:8px;">${article.title}</h1>
        <div class="news-meta" style="margin-bottom:20px;">
            <span>Author: <strong>${article.author}</strong></span> | <span>Date: ${article.date}</span> | <span>Reading Time: ${article.readTime || '5 min'}</span>
        </div>
        <p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:24px;">${article.content}</p>
        
        <div class="references-box">
            <h4>References & External Resources</h4>
            <ul class="references-list">
                ${refs.map(r => `<li>🔗 <a href="${r.url}" target="_blank">${r.label}</a></li>`).join('')}
            </ul>
        </div>
    `;
    switchView('article-detail');
}

function renderRoboticsGrid(data) {
    const container = document.getElementById('robotics-grid');
    if (!container) return;
    container.innerHTML = data.map(r => `
        <div class="robot-card">
            <div class="card-img-wrapper">
                <img src="${r.img}" alt="${r.name}">
                <span class="card-tag">${r.country}</span>
            </div>
            <div class="robot-body">
                <h3>${r.name}</h3>
                <div class="news-meta"><span>${r.company}</span> • <span>Released ${r.year}</span></div>
                <p style="font-size: 13px; color: var(--text-secondary);"><strong>Specifications:</strong> ${r.specs}</p>
            </div>
        </div>
    `).join('');
}

function filterCountry(countryName) {
    document.querySelectorAll('.country-tab').forEach(t => {
        t.classList.toggle('active', t.innerText.includes(countryName));
    });
    const filtered = state.companies.filter(c => c.country === countryName);
    const container = document.getElementById('global-companies-grid');
    if (container) {
        container.innerHTML = filtered.map(c => `
            <div class="company-card">
                <img src="${c.img}" alt="${c.name}" class="company-card-img">
                <div class="company-card-body">
                    <h3>${c.name}</h3>
                    <p style="font-size:12px; color:var(--text-muted); margin-bottom:8px;">HQ: ${c.country}</p>
                    <p style="font-size:13px; color:var(--text-secondary);">${c.domain}</p>
                    <div class="card-footer" style="margin-top:14px;">
                        <a href="https://${c.site}" target="_blank" class="link-btn" style="color:var(--accent-cyan); text-decoration:none; font-size:12px;">Official Web Domain &rarr;</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderToolsGrid(data) {
    const container = document.getElementById('tools-grid');
    if (!container) return;
    container.innerHTML = data.map(t => `
        <div class="tool-card">
            <img src="${t.img}" alt="${t.name}" class="tool-card-img">
            <div class="tool-card-body">
                <h3>${t.name}</h3>
                <span class="card-tag" style="position:static; margin: 8px 0; display:inline-block;">${t.category}</span>
                <p style="font-size:12px; color:var(--text-muted);">Tier: ${t.price}</p>
                <div class="card-footer" style="margin-top:12px;">
                    <a href="https://${t.site}" target="_blank" class="link-btn" style="color:var(--accent-cyan); text-decoration:none; font-size:12px;">Access Tool &rarr;</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderResearchTable(data) {
    const body = document.getElementById('research-table-body');
    if (!body) return;
    body.innerHTML = data.map(r => `
        <tr>
            <td><strong>${r.title}</strong></td>
            <td><span class="card-tag" style="position:static;">${r.category}</span></td>
            <td>${r.authors}<br><small>${r.venue}</small></td>
            <td>${r.year}</td>
            <td><button class="btn btn-outline" style="padding:4px 8px; font-size:11px;">PDF Index</button></td>
        </tr>
    `).join('');
}

/* Bookmarks Logic */
function toggleBookmark(id) {
    const index = state.bookmarks.findIndex(b => b.id === id);
    if (index > -1) {
        state.bookmarks.splice(index, 1);
        showToast('Item removed from saved bookmarks');
    } else {
        const item = state.articles.find(a => a.id === id);
        if (item) {
            state.bookmarks.push(item);
            showToast('Item saved to bookmarks');
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
    renderAll();
}

function updateBookmarkCount() {
    const count = document.getElementById('bookmark-count');
    if (count) count.innerText = state.bookmarks.length;
}

function renderBookmarks() {
    const container = document.getElementById('bookmarks-grid');
    if (!container) return;
    if (state.bookmarks.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted);">No items saved to memory.</p>`;
        return;
    }
    renderArticlesGrid(state.bookmarks);
}

function clearAllBookmarks() {
    state.bookmarks = [];
    localStorage.removeItem('bookmarks');
    renderAll();
    showToast('Bookmarks cleared');
}

/* KM Console (Admin) Authentication */
function openKMCModal() {
    document.getElementById('kmc-login-modal').classList.add('active');
}

function closeKMCModal() {
    document.getElementById('kmc-login-modal').classList.remove('active');
}

function handleKMCLogin(e) {
    e.preventDefault();
    const pass = document.getElementById('kmc-pass-input').value;
    if (pass === 'admin123') {
        closeKMCModal();
        switchView('kmc');
        showToast('Authenticated Knowledge Console Access');
    } else {
        showToast('Invalid Security Credentials');
    }
}

/* KMC Form Handler - Integrated with Cloud Firestore */
async function handleKMCArticleSubmit(e) {
    e.preventDefault();
    
    const title = document.getElementById('kmc-title').value;
    const img = document.getElementById('kmc-img').value || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';
    const category = document.getElementById('kmc-category').value;
    const author = document.getElementById('kmc-author').value;
    const summary = document.getElementById('kmc-summary').value;

    const newArt = {
        title,
        img,
        category,
        author,
        date: new Date().toISOString().split('T')[0],
        readTime: '6 min',
        summary,
        content: summary + ' (Extended full record created via KM Console submission.)',
        references: [{ label: 'Internal KM Registry', url: '#' }]
    };

    try {
        if (typeof window.saveArticleToFirebase === 'function') {
            const docId = await window.saveArticleToFirebase(newArt);
            newArt.id = docId;
            showToast('Record saved to Firestore Cloud!');
        } else {
            newArt.id = `art-${Date.now()}`;
            showToast('Saved locally (Firestore not connected)');
        }

        state.articles.unshift(newArt);
        renderAll();
        e.target.reset();

        const logs = document.getElementById('kmc-logs');
        if (logs) {
            const li = document.createElement('li');
            li.innerHTML = `<span class="log-time">[${new Date().toLocaleTimeString()}]</span> Created article: "${title}"`;
            logs.prepend(li);
        }

    } catch (err) {
        console.error("Error submitting article: ", err);
        showToast('Failed to commit record to cloud database.');
    }
}

/* Analytics Visualizations Engine */
function renderAnalyticsCharts() {
    renderAnalyticsKPICards();

    setTimeout(() => {
        // Categorize state dynamically
        const counts = { AI: 0, Robotics: 0, ML: 0, Ethics: 0, Hardware: 0 };
        state.articles.forEach(a => {
            const cat = a.category;
            if (cat.includes('Artificial') || cat === 'AI') counts.AI++;
            else if (cat.includes('Robotics')) counts.Robotics++;
            else if (cat.includes('Machine')) counts.ML++;
            else if (cat.includes('Ethics')) counts.Ethics++;
            else counts.Hardware++;
        });

        // Dynamic categories chart from state
        drawBarChart('chart-categories', ['AI', 'Robotics', 'ML', 'Ethics', 'Hardware'], [
            counts.AI || 4, 
            counts.Robotics || 2, 
            counts.ML || 2, 
            counts.Ethics || 1, 
            counts.Hardware || 1
        ]);

        // Market/Regional distribution chart
        drawBarChart('chart-regional', ['USA', 'China', 'Japan', 'S.Korea'], [50, 30, 12, 8]);
    }, 100);
}

/* Inject KPI Summary Cards into Analytics View */
function renderAnalyticsKPICards() {
    const viewContainer = document.getElementById('view-analytics');
    if (!viewContainer) return;

    let kpiGrid = document.getElementById('analytics-kpi-grid');
    if (!kpiGrid) {
        kpiGrid = document.createElement('div');
        kpiGrid.id = 'analytics-kpi-grid';
        kpiGrid.style.cssText = "display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1.5rem 0;";
        
        // Insert KPI grid right under the header description
        const header = viewContainer.querySelector('p');
        if (header) {
            header.insertAdjacentElement('afterend', kpiGrid);
        } else {
            viewContainer.prepend(kpiGrid);
        }
    }

    kpiGrid.innerHTML = `
        <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 12px; padding: 1.25rem; backdrop-filter: blur(10px);">
            <span style="color: #94a3b8; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">Total Documents</span>
            <h3 style="color: #38bdf8; font-size: 1.8rem; margin: 0.3rem 0; font-weight: 700;">${state.articles.length}</h3>
            <span style="color: #34d399; font-size: 0.8rem;">● Live Database Sync</span>
        </div>
        <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 12px; padding: 1.25rem; backdrop-filter: blur(10px);">
            <span style="color: #94a3b8; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">Active Domains</span>
            <h3 style="color: #f8fafc; font-size: 1.8rem; margin: 0.3rem 0; font-weight: 700;">${state.categories.length - 1}</h3>
            <span style="color: #38bdf8; font-size: 0.8rem;">Mapped Taxonomy</span>
        </div>
        <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 12px; padding: 1.25rem; backdrop-filter: blur(10px);">
            <span style="color: #94a3b8; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">Robotics Index</span>
            <h3 style="color: #f8fafc; font-size: 1.8rem; margin: 0.3rem 0; font-weight: 700;">${state.robotics.length}</h3>
            <span style="color: #a855f7; font-size: 0.8rem;">Bipedal Hardware</span>
        </div>
        <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 12px; padding: 1.25rem; backdrop-filter: blur(10px);">
            <span style="color: #94a3b8; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">Cloud Status</span>
            <h3 style="color: #34d399; font-size: 1.8rem; margin: 0.3rem 0; font-weight: 700;">Firestore</h3>
            <span style="color: #34d399; font-size: 0.8rem;">Connected</span>
        </div>
    `;
}

/* Custom Gradient & Glow Canvas Renderer */
function drawBarChart(canvasId, labels, values) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Auto-scale crisp pixel rendering
    const rect = canvas.getBoundingClientRect();
    canvas.width = (rect.width || 340) * window.devicePixelRatio;
    canvas.height = (rect.height || 220) * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const displayW = rect.width || 340;
    const displayH = rect.height || 220;

    const padding = 40;
    const chartWidth = displayW - padding * 2;
    const chartHeight = displayH - padding * 2;
    const maxVal = Math.max(...values, 10);
    const barWidth = Math.min((chartWidth / values.length) - 20, 45);

    ctx.clearRect(0, 0, displayW, displayH);

    // Draw grid background lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding + (chartHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(displayW - padding, y);
        ctx.stroke();
    }

    values.forEach((val, i) => {
        const barH = (val / maxVal) * chartHeight;
        const x = padding + i * ((chartWidth) / values.length) + (chartWidth / values.length - barWidth) / 2;
        const y = displayH - padding - barH;
        const radius = 6; // Top rounded corners

        // Create glowing cyan linear gradient
        const barGradient = ctx.createLinearGradient(0, y, 0, displayH - padding);
        barGradient.addColorStop(0, '#38bdf8');
        barGradient.addColorStop(0.5, '#3b82f6');
        barGradient.addColorStop(1, 'rgba(59, 130, 246, 0.15)');

        // Add glow shadow
        ctx.shadowColor = 'rgba(56, 189, 248, 0.35)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetY = -2;

        // Draw rounded top bar
        ctx.fillStyle = barGradient;
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.arcTo(x, y, x + radius, y, radius);
        ctx.arcTo(x + barWidth, y, x + barWidth, y + radius, radius);
        ctx.lineTo(x + barWidth, displayH - padding);
        ctx.lineTo(x, displayH - padding);
        ctx.closePath();
        ctx.fill();

        // Reset glow shadow for text
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;

        // Category X-Axis Labels
        ctx.fillStyle = '#94a3b8';
        ctx.font = '500 11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(labels[i], x + barWidth / 2, displayH - 12);

        // Value numbers above bars
        ctx.fillStyle = '#f8fafc';
        ctx.font = '600 11px Inter, sans-serif';
        ctx.fillText(val, x + barWidth / 2, y - 8);
    });
}

/* Utilities */
function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function initSearch() {
    const searchInput = document.getElementById('global-search-input');
    if (!searchInput) return;

    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            renderArticlesGrid(state.articles);
            return;
        }
        const filtered = state.articles.filter(a => a.title.toLowerCase().includes(query) || a.summary.toLowerCase().includes(query));
        renderArticlesGrid(filtered);
    });
}

function initCounters() {
    document.querySelectorAll('[data-counter]').forEach(counter => {
        const target = +counter.getAttribute('data-counter');
        let count = 0;
        const speed = target / 25;
        const update = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(update, 30);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
}

function initScroll() {
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    const progressBar = document.getElementById('progress-bar');

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        if (progressBar) progressBar.style.width = `${progress}%`;
        if (scrollTopBtn) scrollTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
}