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
        "DeepMind maps ligand configurations for targeted virus models.",
        "Boston Dynamics unveils fully electric Atlas with 360° joint range.",
        "Unitree Robotics announces G1 humanoid with 3D LiDAR navigation."
    ],
    categories: ["All", "Artificial Intelligence", "Robotics", "Machine Learning", "AI Ethics", "Hardware", "Computer Vision", "NLP"],
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
        },
        {
            id: 'art-4',
            title: 'Transformer Architectures for Real-Time Video Understanding',
            category: 'Computer Vision',
            author: 'Dr. Sarah Chen',
            date: '2026-02-28',
            readTime: '7 min',
            img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=600&q=80',
            summary: 'Video understanding models achieve human-level performance on complex action recognition tasks.',
            content: 'Vision transformers with temporal attention mechanisms are revolutionizing video understanding. This architecture achieves 92.4% accuracy on Kinetics-400 while maintaining real-time inference speeds.',
            references: [
                { label: 'CVPR 2026 Paper', url: 'https://cvpr.com' }
            ]
        },
        {
            id: 'art-5',
            title: 'The Ethics of Autonomous Decision-Making Systems',
            category: 'AI Ethics',
            author: 'Dr. Maya Patel',
            date: '2026-02-22',
            readTime: '10 min',
            img: 'https://images.unsplash.com/photo-1507143540183-5edc7cef6e2c?auto=format&fit=crop&w=600&q=80',
            summary: 'A comprehensive framework for ethical auditing of AI systems in high-stakes environments.',
            content: 'As AI systems make increasingly consequential decisions, the need for robust ethical frameworks becomes critical. This paper proposes a multi-layered auditing approach for algorithmic accountability.',
            references: [
                { label: 'AI & Society Journal', url: 'https://aisociety.com' }
            ]
        },
        {
            id: 'art-6',
            title: 'Large Language Models for Scientific Discovery',
            category: 'Artificial Intelligence',
            author: 'Prof. James Wilson',
            date: '2026-02-15',
            readTime: '9 min',
            img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80',
            summary: 'LLMs accelerate hypothesis generation and experimental design in materials science and drug discovery.',
            content: 'Large language models pre-trained on scientific literature are emerging as powerful tools for accelerating scientific discovery, with demonstrated success in materials science and drug development.',
            references: [
                { label: 'Nature AI', url: 'https://nature.com' }
            ]
        },
        {
            id: 'art-7',
            title: 'Graph Neural Networks for Social Network Analysis',
            category: 'Machine Learning',
            author: 'Dr. Alex Rivera',
            date: '2026-02-05',
            readTime: '7 min',
            img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
            summary: 'GNNs provide unprecedented accuracy in community detection and influence prediction tasks.',
            content: 'Graph Neural Networks excel at capturing complex relationships in social network data. This research demonstrates state-of-the-art performance in community detection and influence propagation modeling.',
            references: [
                { label: 'KDD 2026', url: 'https://kdd.org' }
            ]
        },
        {
            id: 'art-8',
            title: 'Responsible AI: Governance Frameworks for Enterprise',
            category: 'AI Ethics',
            author: 'Dr. Laura Kim',
            date: '2026-01-28',
            readTime: '8 min',
            img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
            summary: 'A comprehensive governance framework for implementing responsible AI practices in large organizations.',
            content: 'Organizations face increasing pressure to implement responsible AI practices. This paper presents a multi-tier governance framework covering data privacy, bias mitigation, and algorithmic transparency.',
            references: [
                { label: 'Harvard Business Review', url: 'https://hbr.org' }
            ]
        }
    ],
    robotics: [
        { name: 'Unitree G1', company: 'Unitree Robotics', country: 'China', year: '2025', specs: 'Bipedal, 3D LiDAR, 2m/s Walk', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80' },
        { name: 'Tesla Optimus Gen 3', company: 'Tesla', country: 'USA', year: '2026', specs: 'Custom AI5 Chip, Tactile Hands', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
        { name: 'Figure 02', company: 'Figure AI', country: 'USA', year: '2025', specs: 'Neural Speech, Industrial Manipulation', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80' },
        { name: 'Boston Dynamics Atlas', company: 'Boston Dynamics', country: 'USA', year: '2025', specs: 'Fully Electric, 360 Joint Range', img: 'https://images.unsplash.com/photo-1546776310eef45dd6d63c?auto=format&fit=crop&w=600&q=80' },
        { name: 'Agility Digit', company: 'Agility Robotics', country: 'USA', year: '2025', specs: 'Logistics, 30kg Payload', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80' },
        { name: 'Xiaomi CyberOne', company: 'Xiaomi', country: 'China', year: '2025', specs: 'Emotion Recognition, 3m/s', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
        { name: 'Boston Dynamics Spot', company: 'Boston Dynamics', country: 'USA', year: '2024', specs: 'Quadruped, 14kg Payload', img: 'https://images.unsplash.com/photo-1546776310eef45dd6d63c?auto=format&fit=crop&w=600&q=80' },
        { name: 'Honda Asimo', company: 'Honda', country: 'Japan', year: '2024', specs: 'Bipedal, 3km/h Walk', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80' }
    ],
    companies: [
        { name: 'OpenAI', country: 'USA', domain: 'LLMs & Reasoning Models', site: 'openai.com', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' },
        { name: 'Google DeepMind', country: 'USA', domain: 'AlphaFold & AI Biology', site: 'deepmind.google', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80' },
        { name: 'Unitree Robotics', country: 'China', domain: 'Bipedal Hardware & Controls', site: 'unitree.com', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80' },
        { name: 'DeepSeek', country: 'China', domain: 'Open Source Reasoning Models', site: 'deepseek.com', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80' },
        { name: 'SoftBank Robotics', country: 'Japan', domain: 'Service & Commercial Automation', site: 'softbankrobotics.com', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=80' },
        { name: 'NAVER AI', country: 'South Korea', domain: 'Hyperclova Cloud Infrastructure', site: 'navercorp.com', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80' },
        { name: 'Anthropic', country: 'USA', domain: 'Constitutional AI & Safety', site: 'anthropic.com', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' },
        { name: 'Hugging Face', country: 'USA', domain: 'Open Source ML Platform', site: 'huggingface.co', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80' },
        { name: 'Boston Dynamics', country: 'USA', domain: 'Advanced Robotics Systems', site: 'bostondynamics.com', img: 'https://images.unsplash.com/photo-1546776310eef45dd6d63c?auto=format&fit=crop&w=600&q=80' }
    ],
    tools: [
        { name: 'ChatGPT / GPT-4o', category: 'Generative AI', price: 'Freemium', site: 'openai.com', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' },
        { name: 'Claude 3.5 Sonnet', category: 'Coding & Analysis', price: 'Freemium', site: 'anthropic.com', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80' },
        { name: 'Perplexity AI', category: 'Knowledge Search', price: 'Freemium', site: 'perplexity.ai', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80' },
        { name: 'Midjourney', category: 'Generative AI', price: 'Paid', site: 'midjourney.com', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' },
        { name: 'GitHub Copilot', category: 'Coding & Analysis', price: 'Paid', site: 'github.com/features/copilot', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80' },
        { name: 'Hugging Face Transformers', category: 'Machine Learning', price: 'Open Source', site: 'huggingface.co', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80' },
        { name: 'Jupyter Notebooks', category: 'Machine Learning', price: 'Open Source', site: 'jupyter.org', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80' },
        { name: 'TensorFlow', category: 'Machine Learning', price: 'Open Source', site: 'tensorflow.org', img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80' },
        { name: 'PyTorch', category: 'Machine Learning', price: 'Open Source', site: 'pytorch.org', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80' }
    ],
    research: [
        { title: 'Scaling Laws for Autonomous Bipedal Locomotion', category: 'Robotics', authors: 'Zhang et al.', venue: 'IEEE / RSJ', year: '2026' },
        { title: 'Graph-Guided Reasoning Trees in Large Models', category: 'Artificial Intelligence', authors: 'V. Nair et al.', venue: 'NeurIPS', year: '2025' },
        { title: 'Efficient Vision Transformers for Mobile Applications', category: 'Computer Vision', authors: 'Chen, Liu, Wang', venue: 'ICCV', year: '2026' },
        { title: 'Quantum Machine Learning: A New Frontier', category: 'Hardware', authors: 'S. Gupta, R. Davis', venue: 'Nature Quantum', year: '2025' },
        { title: 'Federated Learning for Privacy-Preserving Healthcare', category: 'Machine Learning', authors: 'M. Thompson et al.', venue: 'ML4Health', year: '2026' },
        { title: 'AI-Driven Drug Discovery and Molecular Design', category: 'Artificial Intelligence', authors: 'A. Kumar, S. Lee', venue: 'JCI', year: '2026' },
        { title: 'Robotics in Hazardous Environments', category: 'Robotics', authors: 'D. Roberts, K. Singh', venue: 'ICRA', year: '2025' },
        { title: 'Bayesian Approaches to AI Fairness', category: 'AI Ethics', authors: 'E. Brown, T. Chen', venue: 'FAccT', year: '2026' },
        { title: 'Transformer Memory Optimization Techniques', category: 'Machine Learning', authors: 'J. Williams et al.', venue: 'ACL', year: '2026' },
        { title: 'Embodied AI: Learning from Physical Interaction', category: 'Robotics', authors: 'M. Garcia, S. Park', venue: 'CoRL', year: '2025' }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 INTELICORE Initializing...');
    initTheme();
    initNavigation();
    initTicker();
    renderAll();
    initSearch();
    initCounters();
    initScroll();
    console.log('✅ INTELICORE Ready!');
});

/* Theme Handling */
function initTheme() {
    if (state.theme === 'light') document.body.classList.add('light-theme');
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
        toggleBtn.innerText = state.theme === 'light' ? '☀️' : '🌙';
        toggleBtn.addEventListener('click', function() {
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
        toggle.addEventListener('click', function() {
            if (window.innerWidth > 992) {
                document.body.classList.toggle('sidebar-collapsed');
            } else {
                sidebar.classList.toggle('mobile-open');
            }
        });
    }

    if (mobileBtn) {
        mobileBtn.addEventListener('click', function() {
            sidebar.classList.toggle('mobile-open');
        });
    }

    document.querySelectorAll('.nav-item').forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var target = item.getAttribute('data-target');
            if (target) switchView(target);
            if (window.innerWidth <= 992) sidebar.classList.remove('mobile-open');
        });
    });
}

function switchView(viewId) {
    state.activeView = viewId;
    document.querySelectorAll('.nav-item').forEach(function(el) {
        el.classList.toggle('active', el.getAttribute('data-target') === viewId);
    });
    document.querySelectorAll('.content-container').forEach(function(c) {
        c.classList.toggle('active', c.id === 'view-' + viewId);
    });

    var activeSpan = document.getElementById('breadcrumb-active');
    if (activeSpan) activeSpan.innerText = viewId.toUpperCase();

    if (viewId === 'analytics') renderAnalyticsCharts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Ticker Bar */
function initTicker() {
    var el = document.getElementById('ticker-content');
    if (el) el.innerText = state.ticker.join("  •  ");
}

/* Render All Modules */
function renderAll() {
    renderNewsGrid(state.articles.slice(0, 3), 'dashboard-news-grid');
    renderCategoryChips();
    renderArticlesGrid(state.articles);
    renderRoboticsGrid(state.robotics);
    renderCompaniesGrid('USA');
    renderToolsGrid(state.tools);
    renderResearchTable(state.research);
    renderBookmarks();
    updateBookmarkCount();
}

/* Category Filter Chips */
function renderCategoryChips() {
    var container = document.getElementById('category-filter-chips');
    if (!container) return;
    container.innerHTML = state.categories.map(function(cat) {
        return '<button class="chip ' + (cat === 'All' ? 'active' : '') + '" onclick="filterArticlesCategory(\'' + cat + '\', this)">' + cat + '</button>';
    }).join('');
}

function filterArticlesCategory(cat, btnElement) {
    document.querySelectorAll('.category-filter-chips .chip').forEach(function(c) {
        c.classList.remove('active');
    });
    btnElement.classList.add('active');
    
    if (cat === 'All') {
        renderArticlesGrid(state.articles);
    } else {
        var filtered = state.articles.filter(function(a) { return a.category === cat; });
        renderArticlesGrid(filtered);
    }
}

/* Card Rendering Functions */
function renderNewsGrid(data, containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(function(item) {
        return '<article class="news-card">' +
            '<div class="card-img-wrapper">' +
                '<img src="' + item.img + '" alt="' + item.title + '">' +
                '<span class="card-tag">' + item.category + '</span>' +
            '</div>' +
            '<div class="news-card-body">' +
                '<div class="news-meta"><span>' + item.date + '</span> • <span>' + item.author + '</span></div>' +
                '<h3>' + item.title + '</h3>' +
                '<p>' + item.summary + '</p>' +
                '<div class="card-footer">' +
                    '<button class="btn btn-outline" onclick="openArticleDetail(\'' + item.id + '\')">Read Document &rarr;</button>' +
                '</div>' +
            '</div>' +
        '</article>';
    }).join('');
}

function renderArticlesGrid(data) {
    var container = document.getElementById('articles-grid');
    if (!container) return;
    container.innerHTML = data.map(function(item) {
        var isSaved = state.bookmarks.some(function(b) { return b.id === item.id; });
        return '<article class="article-card">' +
            '<div class="card-img-wrapper">' +
                '<img src="' + item.img + '" alt="' + item.title + '">' +
                '<span class="card-tag">' + item.category + '</span>' +
            '</div>' +
            '<div class="article-body">' +
                '<div class="news-meta">' +
                    '<span>' + (item.readTime || '5 min') + ' read</span> • <span>' + item.author + '</span>' +
                '</div>' +
                '<h3 style="margin: 8px 0;">' + item.title + '</h3>' +
                '<p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 12px;">' + item.summary + '</p>' +
                '<div class="card-footer">' +
                    '<button class="btn btn-outline" onclick="openArticleDetail(\'' + item.id + '\')">Full Article</button>' +
                    '<button class="btn btn-outline" onclick="toggleBookmark(\'' + item.id + '\')">' + (isSaved ? '📑 Saved' : '🔖 Save') + '</button>' +
                '</div>' +
            '</div>' +
        '</article>';
    }).join('');
}

function openArticleDetail(id) {
    var article = state.articles.find(function(a) { return a.id === id; });
    if (!article) return;
    
    var container = document.getElementById('article-detail-content');
    var refs = article.references || [{ label: 'Internal KM Registry', url: '#' }];

    container.innerHTML = 
        '<img src="' + article.img + '" alt="' + article.title + '" class="article-hero-img">' +
        '<span class="card-tag" style="position:static; margin-bottom:12px; display:inline-block;">' + article.category + '</span>' +
        '<h1 style="font-size:28px; margin-bottom:8px;">' + article.title + '</h1>' +
        '<div class="news-meta" style="margin-bottom:20px;">' +
            '<span>Author: <strong>' + article.author + '</strong></span> | <span>Date: ' + article.date + '</span> | <span>Reading Time: ' + (article.readTime || '5 min') + '</span>' +
        '</div>' +
        '<p style="font-size:15px; line-height:1.7; color:var(--text-secondary); margin-bottom:24px;">' + article.content + '</p>' +
        '<div class="references-box">' +
            '<h4>References & External Resources</h4>' +
            '<ul class="references-list">' +
                refs.map(function(r) { return '<li>🔗 <a href="' + r.url + '" target="_blank">' + r.label + '</a></li>'; }).join('') +
            '</ul>' +
        '</div>';
    switchView('article-detail');
}

function renderRoboticsGrid(data) {
    var container = document.getElementById('robotics-grid');
    if (!container) return;
    container.innerHTML = data.map(function(r) {
        return '<div class="robot-card">' +
            '<div class="card-img-wrapper">' +
                '<img src="' + r.img + '" alt="' + r.name + '">' +
                '<span class="card-tag">' + r.country + '</span>' +
            '</div>' +
            '<div class="robot-body">' +
                '<h3>' + r.name + '</h3>' +
                '<div class="news-meta"><span>' + r.company + '</span> • <span>Released ' + r.year + '</span></div>' +
                '<p style="font-size: 13px; color: var(--text-secondary);"><strong>Specifications:</strong> ' + r.specs + '</p>' +
            '</div>' +
        '</div>';
    }).join('');
}

function renderCompaniesGrid(countryName) {
    document.querySelectorAll('.country-tab').forEach(function(t) {
        t.classList.toggle('active', t.innerText.includes(countryName));
    });
    var filtered = state.companies.filter(function(c) { return c.country === countryName; });
    var container = document.getElementById('global-companies-grid');
    if (container) {
        container.innerHTML = filtered.map(function(c) {
            return '<div class="company-card">' +
                '<img src="' + c.img + '" alt="' + c.name + '" class="company-card-img">' +
                '<div class="company-card-body">' +
                    '<h3>' + c.name + '</h3>' +
                    '<p style="font-size:12px; color:var(--text-muted); margin-bottom:8px;">HQ: ' + c.country + '</p>' +
                    '<p style="font-size:13px; color:var(--text-secondary);">' + c.domain + '</p>' +
                    '<div class="card-footer" style="margin-top:14px;">' +
                        '<a href="https://' + c.site + '" target="_blank" class="link-btn" style="color:var(--accent-cyan); text-decoration:none; font-size:12px;">Official Web Domain &rarr;</a>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }).join('');
    }
}

function filterCountry(countryName) {
    renderCompaniesGrid(countryName);
}

function renderToolsGrid(data) {
    var container = document.getElementById('tools-grid');
    if (!container) return;
    container.innerHTML = data.map(function(t) {
        return '<div class="tool-card">' +
            '<img src="' + t.img + '" alt="' + t.name + '" class="tool-card-img">' +
            '<div class="tool-card-body">' +
                '<h3>' + t.name + '</h3>' +
                '<span class="card-tag" style="position:static; margin: 8px 0; display:inline-block;">' + t.category + '</span>' +
                '<p style="font-size:12px; color:var(--text-muted);">Tier: ' + t.price + '</p>' +
                '<div class="card-footer" style="margin-top:12px;">' +
                    '<a href="https://' + t.site + '" target="_blank" class="link-btn" style="color:var(--accent-cyan); text-decoration:none; font-size:12px;">Access Tool &rarr;</a>' +
                '</div>' +
            '</div>' +
        '</div>';
    }).join('');
}

function renderResearchTable(data) {
    var body = document.getElementById('research-table-body');
    if (!body) return;
    body.innerHTML = data.map(function(r) {
        return '<tr>' +
            '<td><strong>' + r.title + '</strong></td>' +
            '<td><span class="card-tag" style="position:static;">' + r.category + '</span></td>' +
            '<td>' + r.authors + '<br><small>' + r.venue + '</small></td>' +
            '<td>' + r.year + '</td>' +
            '<td><button class="btn btn-outline" style="padding:4px 8px; font-size:11px;">PDF Index</button></td>' +
        '</tr>';
    }).join('');
}

/* Bookmarks Logic */
function toggleBookmark(id) {
    var index = state.bookmarks.findIndex(function(b) { return b.id === id; });
    if (index > -1) {
        state.bookmarks.splice(index, 1);
        showToast('Item removed from saved bookmarks');
    } else {
        var item = state.articles.find(function(a) { return a.id === id; });
        if (item) {
            state.bookmarks.push(item);
            showToast('Item saved to bookmarks');
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
    renderAll();
}

function updateBookmarkCount() {
    var count = document.getElementById('bookmark-count');
    if (count) count.innerText = state.bookmarks.length;
}

function renderBookmarks() {
    var container = document.getElementById('bookmarks-grid');
    if (!container) return;
    if (state.bookmarks.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted);">No items saved to memory.</p>';
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
    var pass = document.getElementById('kmc-pass-input').value;
    if (pass === 'admin123') {
        closeKMCModal();
        switchView('kmc');
        showToast('Authenticated Knowledge Console Access');
    } else {
        showToast('Invalid Security Credentials');
    }
}

/* KMC Form Handler */
function handleKMCArticleSubmit(e) {
    e.preventDefault();
    
    var title = document.getElementById('kmc-title').value;
    var img = document.getElementById('kmc-img').value || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';
    var category = document.getElementById('kmc-category').value;
    var author = document.getElementById('kmc-author').value;
    var summary = document.getElementById('kmc-summary').value;

    var newArt = {
        id: 'art-' + Date.now(),
        title: title,
        img: img,
        category: category,
        author: author,
        date: new Date().toISOString().split('T')[0],
        readTime: '6 min',
        summary: summary,
        content: summary + ' (Extended full record created via KM Console submission.)',
        references: [{ label: 'Internal KM Registry', url: '#' }]
    };

    state.articles.unshift(newArt);
    renderAll();
    e.target.reset();
    showToast('Article published successfully!');

    var logs = document.getElementById('kmc-logs');
    if (logs) {
        var li = document.createElement('li');
        li.innerHTML = '<span class="log-time">[' + new Date().toLocaleTimeString() + ']</span> Created article: "' + title + '"';
        logs.prepend(li);
    }
}

/* Analytics Visualizations Engine */
function renderAnalyticsCharts() {
    renderAnalyticsKPICards();

    setTimeout(function() {
        var counts = { AI: 0, Robotics: 0, ML: 0, Ethics: 0, Hardware: 0, Vision: 0 };
        state.articles.forEach(function(a) {
            var cat = a.category;
            if (cat.includes('Artificial') || cat === 'AI') counts.AI++;
            else if (cat.includes('Robotics')) counts.Robotics++;
            else if (cat.includes('Machine')) counts.ML++;
            else if (cat.includes('Ethics')) counts.Ethics++;
            else if (cat.includes('Vision')) counts.Vision++;
            else counts.Hardware++;
        });

        drawBarChart('chart-categories', ['AI', 'Robotics', 'ML', 'Ethics', 'Vision', 'Hardware'], [
            counts.AI || 1, 
            counts.Robotics || 1, 
            counts.ML || 1, 
            counts.Ethics || 1, 
            counts.Vision || 1,
            counts.Hardware || 1
        ]);

        drawBarChart('chart-regional', ['USA', 'China', 'Japan', 'S.Korea', 'Europe'], [45, 30, 12, 8, 5]);
    }, 100);
}

function renderAnalyticsKPICards() {
    var viewContainer = document.getElementById('view-analytics');
    if (!viewContainer) return;

    var kpiGrid = document.getElementById('analytics-kpi-grid');
    if (!kpiGrid) {
        kpiGrid = document.createElement('div');
        kpiGrid.id = 'analytics-kpi-grid';
        kpiGrid.style.cssText = "display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1.5rem 0;";
        var header = viewContainer.querySelector('p');
        if (header) {
            header.insertAdjacentElement('afterend', kpiGrid);
        } else {
            viewContainer.prepend(kpiGrid);
        }
    }

    var uniqueCategories = new Set(state.articles.map(function(a) { return a.category; }));
    var totalTools = state.tools.length;
    var totalRobots = state.robotics.length;

    kpiGrid.innerHTML = 
        '<div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 12px; padding: 1.25rem; backdrop-filter: blur(10px);">' +
            '<span style="color: #94a3b8; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">Total Documents</span>' +
            '<h3 style="color: #38bdf8; font-size: 1.8rem; margin: 0.3rem 0; font-weight: 700;">' + state.articles.length + '</h3>' +
            '<span style="color: #34d399; font-size: 0.8rem;">● Live Database Sync</span>' +
        '</div>' +
        '<div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 12px; padding: 1.25rem; backdrop-filter: blur(10px);">' +
            '<span style="color: #94a3b8; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">Active Domains</span>' +
            '<h3 style="color: #f8fafc; font-size: 1.8rem; margin: 0.3rem 0; font-weight: 700;">' + uniqueCategories.size + '</h3>' +
            '<span style="color: #38bdf8; font-size: 0.8rem;">Mapped Taxonomy</span>' +
        '</div>' +
        '<div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 12px; padding: 1.25rem; backdrop-filter: blur(10px);">' +
            '<span style="color: #94a3b8; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">Robotics Index</span>' +
            '<h3 style="color: #f8fafc; font-size: 1.8rem; margin: 0.3rem 0; font-weight: 700;">' + totalRobots + '</h3>' +
            '<span style="color: #a855f7; font-size: 0.8rem;">Bipedal & Industrial</span>' +
        '</div>' +
        '<div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 12px; padding: 1.25rem; backdrop-filter: blur(10px);">' +
            '<span style="color: #94a3b8; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">Tools Directory</span>' +
            '<h3 style="color: #f8fafc; font-size: 1.8rem; margin: 0.3rem 0; font-weight: 700;">' + totalTools + '</h3>' +
            '<span style="color: #38bdf8; font-size: 0.8rem;">AI & ML Tools</span>' +
        '</div>';
}

function drawBarChart(canvasId, labels, values) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    
    var rect = canvas.getBoundingClientRect();
    canvas.width = (rect.width || 340) * window.devicePixelRatio;
    canvas.height = (rect.height || 220) * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    var displayW = rect.width || 340;
    var displayH = rect.height || 220;

    var padding = 40;
    var chartWidth = displayW - padding * 2;
    var chartHeight = displayH - padding * 2;
    var maxVal = Math.max.apply(null, values.concat([10]));
    var barWidth = Math.min((chartWidth / values.length) - 20, 45);

    ctx.clearRect(0, 0, displayW, displayH);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (var i = 0; i <= 4; i++) {
        var y = padding + (chartHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(displayW - padding, y);
        ctx.stroke();
    }

    values.forEach(function(val, i) {
        var barH = (val / maxVal) * chartHeight;
        var x = padding + i * ((chartWidth) / values.length) + (chartWidth / values.length - barWidth) / 2;
        var y = displayH - padding - barH;
        var radius = 6;

        var barGradient = ctx.createLinearGradient(0, y, 0, displayH - padding);
        barGradient.addColorStop(0, '#38bdf8');
        barGradient.addColorStop(0.5, '#3b82f6');
        barGradient.addColorStop(1, 'rgba(59, 130, 246, 0.15)');

        ctx.shadowColor = 'rgba(56, 189, 248, 0.35)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetY = -2;

        ctx.fillStyle = barGradient;
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.arcTo(x, y, x + radius, y, radius);
        ctx.arcTo(x + barWidth, y, x + barWidth, y + radius, radius);
        ctx.lineTo(x + barWidth, displayH - padding);
        ctx.lineTo(x, displayH - padding);
        ctx.closePath();
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;

        ctx.fillStyle = '#94a3b8';
        ctx.font = '500 11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(labels[i], x + barWidth / 2, displayH - 12);

        ctx.fillStyle = '#f8fafc';
        ctx.font = '600 11px Inter, sans-serif';
        ctx.fillText(val, x + barWidth / 2, y - 8);
    });
}

/* Utilities */
function showToast(msg) {
    var container = document.getElementById('toast-container');
    if (!container) return;
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(function() { toast.remove(); }, 3000);
}

function initSearch() {
    var searchInput = document.getElementById('global-search-input');
    if (!searchInput) return;

    document.addEventListener('keydown', function(e) {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    });

    searchInput.addEventListener('input', function(e) {
        var query = e.target.value.toLowerCase().trim();
        if (!query) {
            renderArticlesGrid(state.articles);
            return;
        }
        var filtered = state.articles.filter(function(a) {
            return a.title.toLowerCase().includes(query) || a.summary.toLowerCase().includes(query);
        });
        renderArticlesGrid(filtered);
    });
}

function initCounters() {
    document.querySelectorAll('[data-counter]').forEach(function(counter) {
        var target = +counter.getAttribute('data-counter');
        var count = 0;
        var speed = target / 25;
        var update = function() {
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
    var scrollTopBtn = document.getElementById('scroll-top-btn');
    var progressBar = document.getElementById('progress-bar');

    window.addEventListener('scroll', function() {
        var totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        var progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        if (progressBar) progressBar.style.width = progress + '%';
        if (scrollTopBtn) scrollTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}