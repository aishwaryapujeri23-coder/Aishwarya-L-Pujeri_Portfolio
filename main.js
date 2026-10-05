/* =========================================================================
   PORTFOLIO CONFIGURATION
   Fill in the empty fields below with your real information.
   Every section on the site reads from this one object.
========================================================================= */
const portfolioConfig = {
  personal: {
    name: "Aishwarya L Pujeri",
    title: "AI Engineer",
    taglineRoles: ["AI Engineer", "Machine Learning Developer", "Computer Vision Builder"],
    bio: "AI and Data Science enthusiast with a strong foundation in data analytics, machine learning, and software development. I build practical, data-driven applications and machine learning solutions — turning experimentation into software people can actually use.",
    availability: "Open to AI / ML Opportunities" // set to "" to hide the availability badge
  },

  contact: {
    email: "aishwaryapujeri23@gmail.com",
    phone: "+91 8073249441",
    location: "Bengaluru, Karnataka",
    formEndpoint: "" // e.g. a Formspree endpoint like "https://formspree.io/f/xxxxxx"
  },

  social: {
    github: "https://github.com/aishwaryapujeri23-coder",
    linkedin: "https://www.linkedin.com/in/aishwarya-l-pujeri-74b1a9370/",
    twitter: ""
  },

  resume: "Aishwarya_L_Pujeri_CV.pdf",

  profile: {
    image: "Aishwarya_img.png"
  }
};

/* =========================================================================
   PROJECT DATA
   Add / edit projects here. Leave any field "" or [] if not yet known —
   the render functions skip empty fields gracefully instead of showing
   broken UI.
   status: "Completed" | "In Progress" | "Prototype" | ""
========================================================================= */
const projects = [
  {
    id: "nutrition-analyzer",
    metric: "Fully local RAG pipeline with Llama 3.2",
    title: "AI-Based Food Nutrition Analyzer using RAG and LLM",
    category: "Generative AI",
    status: "Completed",
    description: "An AI-based food nutrition analyzer that retrieves and displays nutritional information through a nutrition API, backed by a retrieval-augmented generation pipeline over a custom knowledge base.",
    problem: "Turning a nutrition-related question into an accurate, context-aware answer instead of a generic lookup.",
    approach: "Built with Python and Streamlit to retrieve and display nutrition data through a nutrition API. A Retrieval-Augmented Generation (RAG) pipeline built with LangChain, FAISS, and Sentence Transformers retrieves relevant information from a custom PDF knowledge base. A local Llama 3.2 model, served via Ollama, generates context-aware responses to nutrition-related queries based on the retrieved documents.",
    technologies: ["Python", "Streamlit", "LangChain", "FAISS", "Sentence Transformers", "Llama 3.2 (Ollama)", "Nutrition API"],
    features: [
      "RAG pipeline over a custom PDF knowledge base",
      "Local LLM (Llama 3.2 via Ollama) for context-aware responses",
      "Live nutrition data retrieval through a nutrition API"
    ],
    results: "",
    github: "",
    demo: "",
    demoLabel: "Live Demo"
  },
  {
    id: "fake-news-detection",
    metric: "ISOT + WELFake datasets",
    title: "Fake News Detection System (ML and DL Models)",
    category: "NLP",
    status: "Completed",
    description: "A fake news classification system trained on the ISOT and WELFake datasets to distinguish real from fake news articles.",
    problem: "Distinguishing real from fake news articles using text-based signals alone.",
    approach: "Applied NLP techniques — text preprocessing, tokenization, TF-IDF, and embeddings — for feature extraction and model input representation. Evaluated and compared multiple models, including Logistic Regression, LSTM, and CNN, to achieve improved accuracy and robust generalization on unseen news data.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "NLTK"],
    features: [
      "Trained and evaluated on the ISOT and WELFake datasets",
      "NLP feature extraction: tokenization, TF-IDF, embeddings",
      "Compared Logistic Regression, LSTM, and CNN models"
    ],
    results: "",
    github: "",
    demo: "",
    demoLabel: "Live Demo"
  },
  {
    id: "face-recognition-attendance",
    metric: "Real-time multi-face recognition",
    title: "Face Recognition Attendance System",
    category: "Computer Vision",
    status: "Completed",
    description: "A real-time AI attendance system using face recognition, with a full backend, database, and analytics dashboard.",
    problem: "Automating attendance tracking with reliable, real-time multi-face recognition instead of manual entry.",
    approach: "Built a real-time attendance system using InsightFace for face detection and recognition, achieving multi-face detection with bounding-box overlays and live confidence scoring directly from webcam frames. Designed a modular FastAPI backend with SQLite that enforces one-attendance-per-student-per-day via database-level constraints, with automated CSV, Excel, and PDF report generation. Built a full React + Tailwind dashboard with guided webcam-based student registration, a live recognition feed, and Recharts-powered analytics for daily, department-wise, and monthly attendance trends.",
    technologies: ["FastAPI", "InsightFace", "React (Vite)", "SQLite", "Tailwind CSS", "Recharts"],
    features: [
      "Real-time multi-face detection with live confidence scoring",
      "Database-enforced one-attendance-per-student-per-day rule",
      "Automated CSV / Excel / PDF report generation",
      "React + Tailwind analytics dashboard"
    ],
    results: "",
    github: "",
    demo: "",
    demoLabel: "Live Demo"
  },
  {
    id: "crop-yield-prediction",
    metric: "Random Forest vs XGBoost, cross-validated",
    title: "Crop Yield Prediction and Crop Recommendation System",
    category: "Machine Learning",
    status: "Completed",
    description: "A machine learning-based system for crop yield prediction and crop recommendation, built to support data-driven farming decisions.",
    problem: "Estimating expected crop yield and recommending suitable crops from agricultural and environmental data.",
    approach: "Performed data preprocessing, exploratory data analysis, feature engineering, and visualization to identify key factors influencing crop yield and crop selection. Implemented and compared machine learning algorithms — including Random Forest and XGBoost — using cross-validation and hyperparameter tuning to identify the best-performing models.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    features: [
      "EDA and feature engineering on agricultural datasets",
      "Random Forest and XGBoost, compared via cross-validation",
      "Hyperparameter tuning for best-performing models"
    ],
    results: "",
    github: "",
    demo: "",
    demoLabel: "Live Demo"
  },
  {
    id: "suspicious-activity-detection",
    metric: "YOLOv5 + CNN-LSTM pipeline",
    title: "Suspicious Activity Detection using DL Models",
    category: "Computer Vision",
    status: "Completed",
    description: "A deep learning security pipeline that monitors surveillance video and triggers automated alerts for abnormal events.",
    problem: "Detecting abnormal events (fights, weapons, accidents) in surveillance footage in real time.",
    approach: "Integrated a pre-trained YOLOv5 network for real-time spatial object bounding-box generation. Coupled CNN spatial networks with LSTM layers to handle multi-frame temporal video sequence classification, serving the pipeline via a Flask web layout.",
    technologies: ["Python", "OpenCV", "TensorFlow", "PyTorch", "YOLOv5", "Flask"],
    features: [
      "Real-time object detection via pre-trained YOLOv5",
      "CNN + LSTM for temporal video sequence classification",
      "Automated alerts for abnormal events",
      "Served through a Flask web layout"
    ],
    results: "",
    github: "",
    demo: "",
    demoLabel: "Live Demo"
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction with a Custom ML Package",
    category: "Machine Learning",
    status: "Completed",
    metric: "10-module package · 500+ live listings",
    description: "An end-to-end valuation system built on a NumPy machine learning framework written from scratch and published on PyPI, trained on listings scraped from MagicBricks.",
    problem: "Estimating realistic house prices from live market data, and testing whether a purpose-built package can match established libraries.",
    approach: "Architected and published a 10-module NumPy framework implementing OLS, Ridge, Lasso, KNN, PCA, and neural networks from the underlying mathematics. Built a Selenium scraper to collect 500+ real estate listings from MagicBricks, then ran the full prediction pipeline with the custom package and compared it against equivalent scikit-learn models for accuracy and consistency.",
    technologies: ["Python", "NumPy", "Scikit-learn", "Selenium", "PyPI Packaging"],
    features: [
      "10-module ML framework written from scratch with NumPy",
      "OLS, Ridge, Lasso, KNN, PCA, and neural networks",
      "Web scraper collecting 500+ live listings",
      "Benchmarked against scikit-learn models"
    ],
    results: "Custom package validated against scikit-learn on accuracy and consistency. Methodology written up in IEEE format.",
    github: "",
    demo: "https://pypi.org/project/aishwarya-ml-package/",
    demoLabel: "PyPI Package"
  },
  {
    id: "driver-drowsiness-detection",
    title: "Driver Drowsiness & Distraction Detection System",
    category: "Computer Vision",
    status: "Completed",
    metric: "Explainable risk score from live video",
    description: "A real-time system that watches a driver through the webcam and raises explainable alerts for drowsiness and distraction.",
    problem: "Detecting unsafe driver states early and telling the driver why an alert was raised.",
    approach: "Used MediaPipe to compute Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) from live video. A risk-scoring engine combines drowsiness and distraction signals into a weighted score with a human-readable reason for each alert. A FastAPI backend with JWT authentication and SQLAlchemy stores sessions, a YOLOv8 model detects phone use, and a Chart.js dashboard shows live analytics.",
    technologies: ["Python", "FastAPI", "MediaPipe", "YOLOv8", "SQLAlchemy", "JavaScript", "Chart.js"],
    features: [
      "EAR and MAR computed from live webcam frames",
      "Weighted risk score with readable alert reasons",
      "YOLOv8 phone detection",
      "JWT-secured API and Chart.js analytics dashboard"
    ],
    results: "",
    github: "",
    demo: "",
    demoLabel: "Live Demo"
  },
  {
    id: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    category: "Machine Learning",
    status: "Completed",
    metric: "ROC-AUC 0.7966 · 70,000 records",
    description: "A binary classification system on the Kaggle Cardiovascular Disease dataset, deployed as an interactive Streamlit app.",
    problem: "Predicting cardiovascular disease from patient records and choosing the most reliable model among several candidates.",
    approach: "Cleaned and engineered features (BMI, pulse pressure, MAP, BP ratio) on 70,000 records with stratified splitting. Compared Logistic Regression, Decision Tree, Random Forest, SVM, and KNN on accuracy, precision, recall, F1-score, and ROC-AUC. Served the serialized Joblib models through Streamlit with probability charts, patient analytics, model comparison, and downloadable reports.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Joblib", "Streamlit"],
    features: [
      "Engineered BMI, pulse pressure, MAP, and BP ratio features",
      "Five classifiers compared on five metrics",
      "Real-time prediction with probability visualization",
      "Model comparison view and downloadable reports"
    ],
    results: "Random Forest selected with the highest validation ROC-AUC of 0.7966.",
    github: "",
    demo: "",
    demoLabel: "Live Demo"
  },
  {
    id: "bus-ticket-booking",
    title: "Bus Ticket Booking System",
    category: "Software Engineering",
    status: "Completed",
    metric: "Real-time search and seat booking",
    description: "A full-stack web application for searching routes, viewing available buses, and booking tickets in real time.",
    problem: "Letting users find a bus and reserve a seat without double-booking.",
    approach: "Implemented the backend in Python (Flask) with MySQL for user management, booking records, seat allocation, and secure data storage. Built a responsive frontend with HTML, CSS, and JavaScript.",
    technologies: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Route search and bus availability",
      "Real-time seat allocation and booking records",
      "User management with secure data storage",
      "Responsive interface"
    ],
    results: "",
    github: "",
    demo: "",
    demoLabel: "Live Demo"
  },
  {
    id: "duplicate-file-finder",
    title: "Automated Duplicate File Finder",
    category: "Software Engineering",
    status: "Completed",
    metric: "SHA-256 byte-level matching",
    description: "A PyQt desktop utility that finds, isolates, and manages duplicate files, with a built-in assistant for storage statistics.",
    problem: "Reclaiming disk space by finding true duplicates quickly without freezing the interface.",
    approach: "Used a concurrent scanning architecture based on ThreadPoolExecutor so the UI stays responsive during heavy IO. SHA-256 hashing gives exact byte-level duplicate classification. A rule-based NLP chatbot analyzes file metadata and answers questions about storage usage.",
    technologies: ["Python", "PyQt", "Multithreading", "SHA-256", "NLP"],
    features: [
      "Multithreaded scanning keeps the UI responsive",
      "SHA-256 hashing for exact duplicate detection",
      "Rule-based chatbot for storage usage statistics"
    ],
    results: "",
    github: "",
    demo: "",
    demoLabel: "Live Demo"
  }
];

/* =========================================================================
   SKILLS DATA
   No proficiency percentages — categories and technologies only.
========================================================================= */
const skillCategories = [
  { name: "Programming Languages", icon: "fab fa-python", items: ["Python", "Java", "SQL", "HTML", "CSS"] },
  { name: "Machine Learning", icon: "fas fa-diagram-project", items: ["Scikit-learn", "Regression", "Classification", "Clustering", "Feature Engineering", "Data Preprocessing", "EDA", "Model Evaluation", "Hyperparameter Tuning"] },
  { name: "Deep Learning & Computer Vision", icon: "fas fa-brain", items: ["TensorFlow", "PyTorch", "CNN", "LSTM", "RNN", "OpenCV", "YOLOv5", "YOLOv8", "Object Detection", "Image Classification", "MediaPipe", "InsightFace"] },
  { name: "NLP & Generative AI", icon: "fas fa-comments", items: ["NLTK", "Text Preprocessing", "TF-IDF", "Word Embeddings", "LangChain", "FAISS", "Sentence Transformers", "RAG", "Ollama (Llama 3.2)"] },
  { name: "Data Science & Visualization", icon: "fas fa-chart-line", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI", "Chart.js", "Recharts"] },
  { name: "Apps & Backend", icon: "fas fa-server", items: ["Streamlit", "FastAPI", "Flask", "React (Vite)", "Tailwind CSS", "SQLAlchemy", "JWT Auth", "PyQt"] },
  { name: "Databases", icon: "fas fa-database", items: ["MySQL", "SQLite", "SQL"] },
  { name: "Tools & Platforms", icon: "fas fa-toolbox", items: ["VS Code", "Jupyter Notebook", "Google Colab", "GitHub", "MySQL Workbench", "Eclipse IDE", "MS Excel"] },
  { name: "Soft Skills", icon: "fas fa-people-group", items: ["Quick Learner", "Adaptability", "Teamwork", "Time Management"] }
];

const education = [
  { degree: "M.Tech in Artificial Intelligence", school: "REVA Academy for Corporate Excellence, REVA University", date: "Nov 2025 – Nov 2027", score: "8.5 CGPA", current: true },
  { degree: "B.E. in Computer Science and Engineering", school: "Government Engineering College Ramanagara, VTU", date: "Dec 2021 – Jun 2025", score: "7.51 CGPA" },
  { degree: "Pre-University (PCMB)", school: "KLE’s Angadi PU College, Gokak", date: "Jun 2019 – Jun 2021", score: "93%" },
  { degree: "SSLC", school: "Modern English Medium School, Gokak", date: "Jun 2018 – Jun 2019", score: "92%" }
];

const experience = [
  { degree: "Java Full Stack Intern", school: "Dhee Coding Lab", date: "Feb 2025 – Jun 2025", text: "Built full-stack web applications with Java, MySQL, HTML, and CSS: CRUD operations, front-end to database integration, OOP, database design, and debugging." }
];


/* =========================================================================
   CERTIFICATIONS DATA
   Add your certifications here. Leave the array empty to show a graceful
   empty state instead of inventing entries.
   credentialUrl: link to the verifiable credential — leave "" to hide the
   "View Certificate" button.
========================================================================= */
const certifications = [
  {
    id: "python-101-ibm",
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class · IBM Developer Skills Network",
    date: "December 7, 2025",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/af919a74f3d14fe8917f14a2e083cbd"
  },
  {
    id: "sql-relational-db-ibm",
    title: "SQL and Relational Databases 101",
    issuer: "Cognitive Class · IBM Developer Skills Network",
    date: "December 13, 2025",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/0880b4d7c3dd422ebc5fa29e97484576"
  },
  {
    id: "machine-learning-python-cognitive-class",
    title: "Machine Learning with Python",
    issuer: "Cognitive Class · IBM Developer Skills Network",
    date: "September 8, 2026",
    credentialUrl: "https://drive.google.com/file/d/1GWRE5-jVil-GDXBkJo-mAui8mKPnOO5d/view?usp=drive_link"
  }
];

const processSteps = [
  { n: "01", title: "Problem Definition", text: "Frame the real question before touching a model." },
  { n: "02", title: "Data Collection", text: "Source and validate the data the problem actually needs." },
  { n: "03", title: "Data Preparation", text: "Clean, explore, and engineer features grounded in the data itself." },
  { n: "04", title: "Model Development", text: "Build and iterate — benchmarked, not assumed." },
  { n: "05", title: "Evaluation", text: "Measure against real metrics, not intuition." },
  { n: "06", title: "Explainability", text: "Make predictions inspectable wherever possible." },
  { n: "07", title: "Deployment", text: "Package the result into something usable." }
];

const aboutCardsData = [
  { icon: "fas fa-flask", title: "Machine Learning", text: "Designing, training, and benchmarking models against real data." },
  { icon: "fas fa-cubes", title: "Applied AI", text: "Turning trained models into working, usable applications." },
  { icon: "fas fa-window-maximize", title: "Model Development", text: "From raw data to a packaged, evaluated solution." },
  { icon: "fas fa-magnifying-glass", title: "Explainability", text: "Favoring interpretable predictions over black-box output." }
];

function getAllProjects(){ return projects; }

function renderHero(){
  document.getElementById('heroName').textContent = portfolioConfig.personal.name;
  document.getElementById('navName').textContent = portfolioConfig.personal.name.split(' ')[0].toLowerCase();
  document.getElementById('heroTagline').innerHTML =
    `Aspiring AI Engineer building intelligent applications across <em>machine learning</em>, <em>deep learning</em>, <em>NLP</em>, and <em>computer vision</em> — turning data and models into software people can use.`;

  const badge = document.getElementById('availabilityBadge');
  if (portfolioConfig.personal.availability){
    document.getElementById('availabilityText').textContent = portfolioConfig.personal.availability;
    badge.hidden = false;
  }

  if (portfolioConfig.resume){
    const btn = document.getElementById('resumeBtn');
    btn.href = portfolioConfig.resume;
    btn.hidden = false;
  }

  // Stats: derived from real data, never invented
  const statList = [
    { num: getAllProjects().length, label: "Featured Projects" },
    { num: skillCategories.length, label: "Core Skill Areas" },
    { num: certifications.length, label: "Certifications" }
  ];
  document.getElementById('heroStats').innerHTML = statList.map(s =>
    `<div class="meta-item"><span class="meta-num" data-target="${s.num}">0</span><span class="meta-label">${s.label}</span></div>`
  ).join('');

  // Social icons: LinkedIn / GitHub / Mail — each hidden individually if not configured
  const socialIcons = [
    { key: 'linkedin', icon: 'fab fa-linkedin-in', href: portfolioConfig.social.linkedin, label: 'LinkedIn' },
    { key: 'github', icon: 'fab fa-github', href: portfolioConfig.social.github, label: 'GitHub' },
    { key: 'email', icon: 'fas fa-envelope', href: portfolioConfig.contact.email ? `mailto:${portfolioConfig.contact.email}` : '', label: 'Email' }
  ].filter(s => s.href);
  const socialEl = document.getElementById('heroSocial');
  socialEl.innerHTML = socialIcons.map(s =>
    `<a href="${s.href}" ${s.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} class="hero-social-icon" aria-label="${s.label}"><i class="${s.icon}" aria-hidden="true"></i></a>`
  ).join('');
  socialEl.hidden = socialIcons.length === 0;

  // Profile visual
  const photoBox = document.getElementById('profilePhoto');
  if (portfolioConfig.profile.image){
    photoBox.innerHTML = `<img src="${portfolioConfig.profile.image}" alt="${portfolioConfig.personal.name}">`;
  } else {
    const initials = portfolioConfig.personal.name.split(' ').map(w => w[0]).join('').slice(0, 2);
    photoBox.innerHTML = `<div class="photo-fallback"><span>${initials}</span></div>`;
  }
}

/* =========================================================================
   RENDER: ABOUT
========================================================================= */
function renderAboutCards(){
  document.getElementById('aboutCards').innerHTML = aboutCardsData.map(c => `
    <div class="about-card">
      <div class="card-ico"><i class="${c.icon}" aria-hidden="true"></i></div>
      <h3>${c.title}</h3>
      <p>${c.text}</p>
    </div>
  `).join('');
}

function renderTimeline(){
  const row = e => `
    <div class="tl-item${e.current ? ' current' : ''}">
      <div class="tl-head"><h4 class="tl-degree">${e.degree}</h4>${e.score ? `<span class="tl-score">${e.score}</span>` : ''}</div>
      <div class="tl-school">${e.school}</div>
      <div class="tl-date">${e.date}${e.current ? ' · Pursuing' : ''}</div>
      ${e.text ? `<p class="tl-text">${e.text}</p>` : ''}
    </div>`;
  document.getElementById('eduTimeline').innerHTML = education.map(row).join('');
  document.getElementById('expTimeline').innerHTML = experience.map(row).join('');
}

/* =========================================================================
   RENDER: SKILLS
========================================================================= */
function renderSkills(){
  document.getElementById('skillsGrid').innerHTML = skillCategories.map(cat => `
    <div class="skill-block">
      <div class="skill-head"><i class="${cat.icon}" aria-hidden="true"></i><h3>${cat.name}</h3></div>
      <div class="skill-pills">${cat.items.map(t => `<span class="skill-pill">${t}</span>`).join('')}</div>
    </div>`).join('');
}

/* =========================================================================
   RENDER: PROCESS TIMELINE
========================================================================= */
function renderProcess(){
  document.getElementById('processTimeline').innerHTML = processSteps.map(s => `
    <div class="timeline-step">
      <div class="timeline-num">${s.n}</div>
      <div class="timeline-content">
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </div>
    </div>
  `).join('');
}

/* =========================================================================
   RENDER: CERTIFICATIONS
========================================================================= */
function renderCertifications(){
  const grid = document.getElementById('certGrid');
  if (!grid) return;
  if (!certifications.length){
    grid.innerHTML = `<p class="empty-state">Certifications will appear here once added — see the \`certifications\` array in main.js.</p>`;
    return;
  }
  grid.innerHTML = certifications.map(c => `
    <div class="cert-card">
      <div class="card-ico"><i class="fas fa-certificate" aria-hidden="true"></i></div>
      <h3>${c.title}</h3>
      <p class="cert-issuer">${c.issuer}${c.date ? ` · ${c.date}` : ''}</p>
      ${c.credentialUrl ? `<a href="${c.credentialUrl}" target="_blank" rel="noopener" class="proj-link certificate-link" aria-label="View ${c.title} certificate" title="View certificate">View Certificate <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>` : ''}
    </div>
  `).join('');
}

/* =========================================================================
   RENDER: PROJECTS + FILTER
========================================================================= */
function statusBadge(status){
  if (!status) return '';
  const cls = status === 'Completed' ? 'done' : status === 'In Progress' ? 'progress' : 'proto';
  return `<span class="status-badge ${cls}">${status}</span>`;
}

function projectCardHTML(p, index){
  const techs = p.technologies.map(t => `<span>${t}</span>`).join('');
  const links = [];
  if (p.demo) links.push(`<a href="${p.demo}" target="_blank" rel="noopener" class="proj-link-btn"><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i> ${p.demoLabel || 'Live Demo'}</a>`);
  if (p.github) links.push(`<a href="${p.github}" target="_blank" rel="noopener" class="proj-link-btn ghost github-link" aria-label="View ${p.title} on GitHub" title="View project on GitHub"><i class="fab fa-github" aria-hidden="true"></i></a>`);

  return `
    <div class="proj-card" data-cat="${p.category}" data-id="${p.id}">
      <div class="proj-top">
        <div class="proj-top-left">
          <span class="proj-tag">${p.category}</span>
        </div>
        <div class="proj-top-right">
          ${statusBadge(p.status)}
        </div>
      </div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      ${p.metric ? `<div class="proj-metric"><i class="fas fa-bolt" aria-hidden="true"></i>${p.metric}</div>` : ''}
      <div class="proj-tags">${techs}</div>
      <div class="proj-card-footer">
        <div class="proj-links">${links.join('')}</div>
        <button type="button" class="proj-link view-details-btn" data-id="${p.id}">View Details <i class="fas fa-arrow-right" aria-hidden="true"></i></button>
      </div>
    </div>`;
}

function renderProjects(filter = 'all'){
  const grid = document.getElementById('projGrid');
  const all = getAllProjects();
  const list = filter === 'all' ? all : all.filter(p => p.category === filter);
  grid.innerHTML = list.map(projectCardHTML).join('') || `<p class="empty-state">No projects in this category yet.</p>`;
  attachCardTilt();
  attachSpotlight();
  attachModalTriggers();
  staggerIn(grid, '.proj-card');
}

function renderFilterBar(){
  const cats = ['all', ...new Set(getAllProjects().map(p => p.category))];
  const bar = document.getElementById('filterBar');
  bar.innerHTML = cats.map((c, i) =>
    `<button class="f-btn${i === 0 ? ' active' : ''}" data-filter="${c}">${c === 'all' ? 'All' : c}</button>`
  ).join('');
  bar.querySelectorAll('.f-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

/* =========================================================================
   PROJECT DETAILS MODAL
========================================================================= */
function openProjectModal(id){
  const p = getAllProjects().find(pr => pr.id === id);
  if (!p) return;
  const modal = document.getElementById('projectModal');
  const body = document.getElementById('modalBody');

  const section = (title, content) => content ? `<div class="modal-section"><h4>${title}</h4>${content}</div>` : '';
  const list = arr => arr && arr.length ? `<ul>${arr.map(i => `<li>${i}</li>`).join('')}</ul>` : '';

  body.innerHTML = `
    <span class="modal-tag">${p.category}</span> ${statusBadge(p.status)}
    <h2 id="modalTitle">${p.title}</h2>
    ${section('Overview', `<p>${p.description}</p>`)}
    ${section('Problem', p.problem ? `<p>${p.problem}</p>` : '')}
    ${section('Approach', p.approach ? `<p>${p.approach}</p>` : '')}
    ${section('Key Features', list(p.features))}
    ${section('Technologies', `<div class="proj-tags">${p.technologies.map(t => `<span>${t}</span>`).join('')}</div>`)}
    ${p.plannedTechnologies ? section('Planned / Exploring', `<div class="proj-tags">${p.plannedTechnologies.map(t => `<span>${t}</span>`).join('')}</div>`) : ''}
    ${section('Results', p.results ? `<p>${p.results}</p>` : '')}
    <div class="modal-links">
      ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="proj-link-btn"><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i> ${p.demoLabel || 'Live Demo'}</a>` : ''}
      ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="proj-link-btn ghost"><i class="fab fa-github" aria-hidden="true"></i> Code</a>` : ''}
    </div>
  `;

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modal.dataset.trigger = document.activeElement ? '' : '';
  modal._lastFocus = document.activeElement;
  document.getElementById('modalClose').focus();
}

function closeModal(modal){
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = '';
  if (modal._lastFocus) modal._lastFocus.focus();
}
function openModal(modal, focusTarget){
  if (!modal) return;
  modal._lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  (focusTarget || modal.querySelector('.modal-close'))?.focus();
}
function closeProjectModal(){ closeModal(document.getElementById('projectModal')); }

function attachModalTriggers(){
  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => openProjectModal(btn.dataset.id));
  });
}

(function modalSetup(){
  ['projectModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.querySelector('.modal-close')?.addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(modal); });
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    ['projectModal'].forEach(id => {
      const modal = document.getElementById(id);
      if (modal && !modal.hidden) closeModal(modal);
    });
  });
})();

/* =========================================================================
   RENDER: CONTACT + FOOTER
========================================================================= */
function renderGithubCta(){
  const el = document.getElementById('projGithubCta');
  if (!el) return;
  el.innerHTML = portfolioConfig.social.github
    ? `<a href="${portfolioConfig.social.github}" target="_blank" rel="noopener" class="btn-ghost"><i class="fab fa-github" aria-hidden="true"></i> Explore all repositories on GitHub</a>`
    : '';
}

function renderContactAndFooter(){
  const cards = [];
  if (portfolioConfig.contact.email) cards.push({ icon: 'fas fa-envelope', key: 'Email', val: portfolioConfig.contact.email, href: `mailto:${portfolioConfig.contact.email}`, cls: 'blue' });
  if (portfolioConfig.social.github) cards.push({ icon: 'fab fa-github', key: 'GitHub', val: portfolioConfig.social.github.replace('https://', ''), href: portfolioConfig.social.github, cls: 'cyan' });
  if (portfolioConfig.social.linkedin) cards.push({ icon: 'fab fa-linkedin-in', key: 'LinkedIn', val: portfolioConfig.social.linkedin.replace('https://', ''), href: portfolioConfig.social.linkedin, cls: 'indigo' });

  const contactCardsEl = document.getElementById('contactCards');
  contactCardsEl.innerHTML = cards.length ? cards.map(c => `
    <a href="${c.href}" ${c.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} class="c-card">
      <div class="c-card-icon ${c.cls}"><i class="${c.icon}" aria-hidden="true"></i></div>
      <div><span class="c-key">${c.key}</span><span class="c-val">${c.val}</span></div>
    </a>`).join('')
    : `<p class="empty-state">Contact details will appear here once configured.</p>`;

  const footerLinks = document.getElementById('footerLinks');
  const flinks = [];
  if (portfolioConfig.social.github) flinks.push(`<a href="${portfolioConfig.social.github}" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github" aria-hidden="true"></i></a>`);
  if (portfolioConfig.social.linkedin) flinks.push(`<a href="${portfolioConfig.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>`);
  if (portfolioConfig.contact.email) flinks.push(`<a href="mailto:${portfolioConfig.contact.email}" aria-label="Email"><i class="fas fa-envelope" aria-hidden="true"></i></a>`);
  footerLinks.innerHTML = flinks.join('');

  document.getElementById('footerCopy').textContent = `© ${new Date().getFullYear()} ${portfolioConfig.personal.name}. All rights reserved.`;
}

/* =========================================================================
   TOAST NOTIFICATIONS
========================================================================= */
function showToast(message, timeout = 3800){
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), timeout);
}

/* =========================================================================
   CONTACT FORM (no fake "message sent" claims)
========================================================================= */
document.getElementById('contactForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  const endpoint = portfolioConfig.contact.formEndpoint;

  if (!endpoint){
    status.textContent = 'Please configure a form endpoint (see portfolioConfig.contact.formEndpoint) before publishing — messages can\'t be delivered yet.';
    status.className = 'form-status warn';
    showToast('Form endpoint not configured yet.');
    return;
  }

  const btn = e.target.querySelector('button[type="submit"]');
  const original = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = 'Sending… <i class="fas fa-spinner fa-spin" aria-hidden="true"></i>';

  try{
    const formData = new FormData(e.target);
    const res = await fetch(endpoint, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
    if (!res.ok) throw new Error('Submission failed');
    status.textContent = 'Message sent — thank you! I\'ll get back to you soon.';
    status.className = 'form-status ok';
    showToast('Message sent successfully.');
    e.target.reset();
  }catch(err){
    status.textContent = 'Something went wrong sending your message. Please try again or email directly.';
    status.className = 'form-status warn';
    showToast('Message failed to send.');
  }finally{
    btn.disabled = false;
    btn.innerHTML = original;
  }
});

/* =========================================================================
   THEME TOGGLE (dark / light, localStorage + system preference)
========================================================================= */
(function themeToggle(){
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const STORAGE_KEY = 'portfolio-theme';

  function setTheme(theme){
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    try { localStorage.setItem(STORAGE_KEY, theme); } catch(e){}
  }
  btn?.addEventListener('click', () => {
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();

/* =========================================================================
   REDUCED MOTION
========================================================================= */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================================================
   NAV: scroll shrink, scroll progress, active-section highlight
========================================================================= */
const nav = document.getElementById('nav');
const backTop = document.getElementById('backTop');
const prog = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 60);
  if (backTop) backTop.classList.toggle('show', scrollY > 500);
  const pct = (scrollY / (document.body.scrollHeight - innerHeight)) * 100;
  if (prog) prog.style.width = pct + '%';
}, { passive: true });

(function activeNavLink(){
  const links = document.querySelectorAll('#navLinks a[href^="#"]');
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  if (!sections.length) return;
  const navObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.remove('active'));
      document.querySelector(`#navLinks a[href="#${entry.target.id}"]`)?.classList.add('active');
    });
  }, { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' });
  sections.forEach(s => navObs.observe(s));
})();

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mob = document.getElementById('mobileMenu');
menuToggle?.addEventListener('click', () => {
  const open = mob.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});
mob?.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => {
  mob.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', false);
}));

/* =========================================================================
   REVEAL ON SCROLL
========================================================================= */
const revObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), prefersReducedMotion ? 0 : i * 50);
      revObs.unobserve(e.target);
    }
  });
}, { threshold: .1 });
function observeReveals(){ document.querySelectorAll('.reveal:not(.visible)').forEach(el => revObs.observe(el)); }

function staggerIn(container, selector){
  const cards = container.querySelectorAll(selector);
  cards.forEach((c, i) => setTimeout(() => c.classList.add('anim-in'), prefersReducedMotion ? 0 : i * 80));
}

/* =========================================================================
   STAT COUNTERS
========================================================================= */
function initCounters(){
  const els = document.querySelectorAll('.meta-num[data-target]');
  const cObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      if (prefersReducedMotion || target === 0){ el.textContent = target; cObs.unobserve(el); return; }
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 24));
      const t = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = cur;
        if (cur >= target) clearInterval(t);
      }, 45);
      cObs.unobserve(el);
    });
  }, { threshold: .6 });
  els.forEach(el => cObs.observe(el));
}

/* =========================================================================
   CARD TILT + CURSOR SPOTLIGHT
========================================================================= */
function attachCardTilt(){
  if (prefersReducedMotion) return;
  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `translateY(-6px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });
}
function attachSpotlight(){
  document.querySelectorAll('.proj-card, .skill-block, .about-card, .cert-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
}

/* =========================================================================
   CUSTOM CURSOR (desktop only, disabled under reduced motion)
========================================================================= */
(function customCursor(){
  if (prefersReducedMotion || matchMedia('(max-width: 900px)').matches) return;
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
  });
  (function animRing(){
    rx += (mx - rx) * .14; ry += (my - ry) * .14;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();
})();

/* =========================================================================
   MAGNETIC BUTTONS
========================================================================= */
function attachMagnetic(){
  if (prefersReducedMotion) return;
  document.querySelectorAll('.btn-main, .btn-ghost, .proj-link-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * .2;
      const y = (e.clientY - r.top - r.height / 2) * .3;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => btn.style.transform = '');
  });
}

/* =========================================================================
   TYPEWRITER ROLE TITLES
========================================================================= */
function initTypewriter(){
  const el = document.getElementById('typewriter');
  if (!el || prefersReducedMotion) return;
  const words = portfolioConfig.personal.taglineRoles;
  if (words.length === 1){
    el.textContent = words[0];
    return;
  }
  let wi = 0, ci = words[0].length, deleting = true;

  function tick(){
    const word = words[wi];
    if (!deleting){
      ci++;
      el.textContent = word.slice(0, ci);
      if (ci === word.length){ deleting = true; setTimeout(tick, 1800); return; }
    } else {
      ci--;
      el.textContent = word.slice(0, ci);
      if (ci === 0){ deleting = false; wi = (wi + 1) % words.length; ci = 0; setTimeout(tick, 250); return; }
    }
    setTimeout(tick, deleting ? 35 : 55);
  }
  setTimeout(() => { deleting = true; tick(); }, 1600);
}

/* =========================================================================
   HERO GLOW PARALLAX
========================================================================= */
(function glowParallax(){
  if (prefersReducedMotion) return;
  const hero = document.getElementById('home');
  const spots = document.querySelectorAll('.glow-spot');
  if (!hero || !spots.length) return;
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    spots.forEach((s, i) => {
      const strength = (i + 1) * 10;
      s.style.marginLeft = `${x * strength}px`;
      s.style.marginTop = `${y * strength}px`;
    });
  });
})();

/* =========================================================================
   PROFILE PHOTO TILT
========================================================================= */
(function profileTilt(){
  if (prefersReducedMotion) return;
  const scene = document.getElementById('profileScene');
  if (!scene) return;
  document.addEventListener('mousemove', e => {
    const r = scene.getBoundingClientRect();
    if (r.width === 0) return;
    const x = (e.clientX - (r.left + r.width / 2)) / r.width;
    const y = (e.clientY - (r.top + r.height / 2)) / r.height;
    scene.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 16}deg)`;
  });
})();

/* =========================================================================
   AMBIENT SYNAPSE CANVAS (2D neural network background)
========================================================================= */
(function synapse(){
  const canvas = document.getElementById('synapse-canvas');
  if (!canvas || prefersReducedMotion) return;
  const ctx = canvas.getContext('2d');
  let W, H, points = [], running = true;
  const COUNT = Math.min(60, Math.floor(window.innerWidth / 22));
  let mouseX = -9999, mouseY = -9999;

  function resize(){ W = canvas.width = innerWidth; H = canvas.height = document.body.scrollHeight; }
  resize();
  window.addEventListener('resize', () => { resize(); makePoints(); });

  function makePoints(){
    points = [];
    for (let i = 0; i < COUNT; i++){
      points.push({
        x: Math.random() * W, y: Math.random() * Math.min(H, innerHeight * 1.4),
        vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, r: Math.random() * 1.6 + .6
      });
    }
  }
  makePoints();

  document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY + scrollY; });
  document.addEventListener('mouseleave', () => { mouseX = -9999; mouseY = -9999; });
  document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) draw(); });

  const maxDist = 130;
  function draw(){
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < points.length; i++){
      const p = points[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > Math.min(H, innerHeight * 1.4)) p.vy *= -1;
      for (let j = i + 1; j < points.length; j++){
        const q = points[j];
        const dx = p.x - q.x, dy = p.y - q.y, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist){
          ctx.strokeStyle = `rgba(18,59,99,${(1 - dist / maxDist) * .14})`;
          ctx.lineWidth = .6;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
      const dxm = p.x - mouseX, dym = p.y - mouseY, dm = Math.sqrt(dxm * dxm + dym * dym);
      if (dm < 160){
        ctx.strokeStyle = `rgba(58,169,220,${(1 - dm / 160) * .35})`;
        ctx.lineWidth = .8;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouseX, mouseY); ctx.stroke();
      }
      ctx.fillStyle = 'rgba(18,59,99,.3)';
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* =========================================================================
   INIT
========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAboutCards();
  renderTimeline();
  renderSkills();
  renderFilterBar();
  renderProjects('all');
  renderGithubCta();
  renderProcess();
  renderCertifications();
  renderContactAndFooter();
  initTypewriter();
  initCounters();
  attachMagnetic();
  attachSpotlight();
  observeReveals();
});