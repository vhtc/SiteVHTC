/**
 * CONFIGURAÇÕES DO PORTFOLIO
 * Arquivo central para personalização fácil
 */

// ========================
// CONFIGURAÇÕES GERAIS
// ========================
const PORTFOLIO_CONFIG = {
  // Informações pessoais
  personal: {
    name: "Victor Tuy",
    nickname: "V.H.T.C",
    title: "Cientista da Computação",
    description: "Cientista da Computação apaixonado por tecnologia, design e inovação. Transformo ideias em soluções digitais impactantes.",
    location: "Salvador, Bahia - Brasil",
    email: "victor.tuy@hotmail.com",
    phone: "+55 (71) 99999-9999"
  },

  // Textos de digitação
  typingTexts: [
    "Cientista da Computação",
    "Desenvolvedor Full Stack", 
    "Designer Gráfico",
    "Game Developer",
    "Freelancer Criativo",
    // "Professor Tech",
    "Militar",
    "Oficial da Força Aérea Brasileira"

  ],

  // Estatísticas
  stats: {
    experience: "3+",
    projects: "50+", 
    technologies: "15+",
    dedication: "100%"
  },

  // Redes sociais
  social: {
    github: "https://github.com/vhtc",
    linkedin: "https://linkedin.com/in/victor-tuy",
    instagram: "https://instagram.com/v.h.t.c",
    behance: "https://behance.net/vhtc",
    youtube: "https://youtube.com/@vhtc",
    email: "mailto:victor.tuy@hotmail.com"
  },

  // Configurações visuais
  theme: {
    primaryColor: "#00ff41",
    secondaryColor: "#4445a3", 
    accentColor: "#ff6b6b",
    backgroundColor: "#000000",
    particlesColor: "#00ff41"
  },

  // Animações
  animations: {
    typingSpeed: 100,
    eraseSpeed: 50,
    newTextDelay: 2000,
    scrollAnimationDuration: 1,
    loadingDuration: 2000
  }
};

// ========================
// CONFIGURAÇÃO DE HABILIDADES
// ========================
const SKILLS_CONFIG = {
  frontend: [
    { name: "HTML5", icon: "softwares/html.png" },
    { name: "CSS3", icon: "softwares/css.png" },
    { name: "JavaScript", icon: "softwares/js.png" },
    { name: "React", icon: "softwares/react.png" }
  ],
  
  backend: [
    { name: "Java", icon: "softwares/java.png" },
    { name: "C#", icon: "softwares/csharp.png" },
    { name: "MySQL", icon: "softwares/mysql.png" },
    { name: "SQLite", icon: "softwares/sqlite.png" }
  ],
  
  design: [
    { name: "Photoshop", icon: "softwares/photoshop.png" },
    { name: "Canva", icon: "softwares/canva.png" },
    { name: "Maya", icon: "softwares/maya.png" },
    { name: "Unity", icon: "softwares/unity.png" }
  ],
  
  tools: [
    { name: "Android Studio", icon: "softwares/androidstudio.png" },
    { name: "Linux", icon: "softwares/linux.png" },
    { name: "Delphi", icon: "softwares/delphi.png" },
    { name: "Unreal Engine", icon: "softwares/unreal.png" }
  ]
};

// ========================
// CONFIGURAÇÃO DO PORTFOLIO
// ========================
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Portfolio Pessoal",
    description: "Site portfolio responsivo com animações",
    image: "portfolio/vhtcportfolio.png",
    category: ["web", "design"],
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 2,
    title: "BBB22 Visual", 
    description: "Design gráfico para reality show",
    image: "portfolio/bbb22.png",
    category: ["design"],
    technologies: ["Photoshop", "Design Gráfico"],
    links: {
      demo: "#"
    }
  },
  {
    id: 3,
    title: "Control Games",
    description: "Desenvolvimento de jogos indie", 
    image: "portfolio/controlgames.png",
    category: ["game"],
    technologies: ["Unity", "C#", "Game Design"],
    links: {
      demo: "#"
    }
  },
  {
    id: 4,
    title: "Sistema PMBA",
    description: "Sistema web para gestão municipal",
    image: "portfolio/pmba.png", 
    category: ["web"],
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    links: {
      demo: "#"
    }
  },
  {
    id: 5,
    title: "Rafaela Z Brand",
    description: "Identidade visual e branding",
    image: "portfolio/rafaelaz.png",
    category: ["design"], 
    technologies: ["Photoshop", "Branding", "Design"],
    links: {
      demo: "#"
    }
  },
  {
    id: 6,
    title: "Rick & Morty App",
    description: "Aplicação web com API consumption",
    image: "portfolio/rick and morty.png",
    category: ["web", "design"],
    technologies: ["React", "JavaScript", "API", "CSS"],
    links: {
      demo: "#",
      github: "#"
    }
  }
];

// ========================
// CONFIGURAÇÃO DA TIMELINE
// ========================
const TIMELINE_CONFIG = [
    //badges success, warning, info, primary, danger
    {
        year: "2021",
        title: "Banco do Brasil",
        role: "Cargo: Agente TI",
        description: "",
        status: "eliminated",
        statusText: "Eliminado",
        badges: [{ text: "Não atingiu o mínimo para aprovação", type: "info" }]
    },
    {
        year: "2021", 
        title: "EsFCEx - Exército",
        role: "Cargo: Oficial - 1º Tenente Analista de Sistemas",
        description: "Aprovado na prova escrita, mas não classificado dentro do número de vagas.",
        status: "approved-eliminated",
        statusText: ["Aprovado", "Desclassificado"],
        badges: [
            { text: "Aprovado nota mínima", type: "info" },
            { text: "Fora do número de vagas", type: "info" },
            { text: "Inscritos: 527", type: "info" },
            { text: "Classificação: 43", type: "info" },
            { text: "Vagas: 6", type: "info" }
        ]
    },
    {
        year: "2022",
        title: "EAOAP - Aeronáutica", 
        role: "Cargo: Oficial - 1º Tenente Analista de Sistemas",
        description: "Aprovado na prova escrita, mas não classificado dentro do número de vagas.",
        status: "approved-eliminated",
        statusText: ["Aprovado", "Desclassificado"],
        badges: [
            { text: "Aprovado nota mínima", type: "info" },
            { text: "Fora do número de vagas", type: "info" },
            { text: "Inscritos: 643", type: "info" },
            { text: "Classificação: 20", type: "info" },
            { text: "Vagas: 3", type: "info" }
        ]
    },
    {
        year: "2022",
        title: "QT - CPT - Marinha", 
        role: "Cargo: Oficial - 1º Tenente Analista de Sistemas",
        description: "Não atingiu o mínimo para aprovação.",
        status: "eliminated",
        statusText: ["Eliminado"],
        badges: [
            { text: "Classificação: 37º", type: "info" },
            { text: "Vagas: 3", type: "info" }
        ]
    },
    {
        year: "2022", 
        title: "EsFCEx - Exército",
        role: "Cargo: Oficial - 1º Tenente Analista de Sistemas",
        description: "Aprovado na prova escrita, mas não classificado dentro do número de vagas.",
        status: "approved-majority-eliminated",
        statusText: ["Aprovado", "Majorado", "Desclassificado"],
        badges: [
            { text: "Aprovado nota mínima", type: "info" },
            { text: "Fora do número de vagas", type: "info" },
            { text: "Inscritos: 527", type: "info" },
            { text: "Classificação: 43", type: "info" },
            { text: "Vagas: 6", type: "info" }
        ]
    },
    {
        year: "2023",
        title: "PMBA",
        role: "Cargo: Soldado da Polícia Militar da Bahia", 
        description: "Aprovado, mas não assumiu o cargo.",
        status: "approved-majority",
        statusText: ["Aprovado", "Não Assumiu"],
        badges: [
            { text: "Classificado 1ª Etapa", type: "info" },
            { text: "Inscritos: 22.831", type: "info" },
            { text: "Classificação Objetiva: 382º", type: "info" },
            { text: "Classificação Geral: 635º", type: "info" },
            { text: "Vagas: 2.000", type: "info" }
        ]
    },
    {
        year: "2023",
        title: "EAOAP - Aeronáutica",
        role: "Cargo: Oficial - 1º Tenente Analista de Sistemas", 
        description: "Cargo Assumido.",
         status: "approved-majority",
        statusText: ["Aprovado", "Assumiu"],
        badges: [
            { text: "Classificado 1ª Etapa", type: "info" },
            { text: "Inscritos: 184", type: "info" },
            { text: "Classificação Objetiva: 6º", type: "info" },
            { text: "Classificação Redação: 7º", type: "info" },
            { text: "Classificação Geral: 5º", type: "info" },
            { text: "Vagas: 7", type: "info" }
        ]
    },
];

// ========================
// FUNÇÕES DE CONFIGURAÇÃO
// ========================

/**
 * Aplica as configurações ao site
 */
function applyConfig() {
  // Aplicar informações pessoais
  updatePersonalInfo();
  
  // Aplicar tema
  applyTheme();
  
  // Aplicar configurações de animação
  applyAnimationConfig();
  
  // Gerar conteúdo dinâmico
  generateDynamicContent();
}

/**
 * Gera conteúdo dinâmico das seções
 */
function generateDynamicContent() {
  // Gerar timeline
  const timelineContainer = document.querySelector('.timeline');
  if (timelineContainer) {
    timelineContainer.innerHTML = generateTimelineHTML();
  }
  
  // Gerar skills (se necessário)
  const skillsContainer = document.querySelector('.skills-grid');
  if (skillsContainer && skillsContainer.children.length === 0) {
    skillsContainer.innerHTML = generateSkillsHTML();
  }
  
  // Gerar portfolio (se necessário)
  const portfolioContainer = document.querySelector('.portfolio-grid');
  if (portfolioContainer && portfolioContainer.children.length === 0) {
    portfolioContainer.innerHTML = generatePortfolioHTML();
  }
}

/**
 * Atualiza informações pessoais no DOM
 */
function updatePersonalInfo() {
  const config = PORTFOLIO_CONFIG.personal;
  
  // Atualizar título da página
  document.title = `${config.name} - ${config.nickname} | Portfolio Profissional`;
  
  // Atualizar meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = config.description;
  }
  
  // Atualizar textos no DOM (se necessário)
  const nameElements = document.querySelectorAll('[data-personal="name"]');
  nameElements.forEach(el => el.textContent = config.name);
}

/**
 * Aplica tema personalizado
 */
function applyTheme() {
  const theme = PORTFOLIO_CONFIG.theme;
  const root = document.documentElement;
  
  root.style.setProperty('--primary-color', theme.primaryColor);
  root.style.setProperty('--secondary-color', theme.secondaryColor);
  root.style.setProperty('--accent-color', theme.accentColor);
  root.style.setProperty('--background-dark', theme.backgroundColor);
}

/**
 * Aplica configurações de animação
 */
function applyAnimationConfig() {
  const animations = PORTFOLIO_CONFIG.animations;
  
  // Configurar velocidades de digitação
  if (window.typingConfig) {
    window.typingConfig.typingDelay = animations.typingSpeed;
    window.typingConfig.erasingDelay = animations.eraseSpeed;
    window.typingConfig.newTextDelay = animations.newTextDelay;
  }
}

/**
 * Gera HTML para skills dinamicamente
 */
function generateSkillsHTML() {
  const categories = [
    { name: 'Frontend', icon: 'fas fa-palette', skills: SKILLS_CONFIG.frontend },
    { name: 'Backend', icon: 'fas fa-server', skills: SKILLS_CONFIG.backend },
    { name: 'Design', icon: 'fas fa-paint-brush', skills: SKILLS_CONFIG.design },
    { name: 'Tools', icon: 'fas fa-tools', skills: SKILLS_CONFIG.tools }
  ];
  
  return categories.map(category => `
    <div class="skill-category">
      <h3><i class="${category.icon}"></i> ${category.name}</h3>
      <div class="skills-list">
        ${category.skills.map(skill => `
          <div class="skill-item">
            <img src="${skill.icon}" alt="${skill.name}">
            <span>${skill.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/**
 * Gera HTML para portfolio dinamicamente
 */
function generatePortfolioHTML() {
  return PORTFOLIO_ITEMS.map(item => `
    <div class="portfolio-item" data-category="${item.category.join(' ')}">
      <div class="portfolio-image">
        <img src="${item.image}" alt="${item.title}">
        <div class="portfolio-overlay">
          <div class="portfolio-content">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <div class="portfolio-buttons">
              ${item.links.demo ? `<a href="${item.links.demo}" class="btn-portfolio" target="_blank"><i class="fas fa-external-link-alt"></i></a>` : ''}
              ${item.links.github ? `<a href="${item.links.github}" class="btn-portfolio"><i class="fab fa-github"></i></a>` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Gera HTML para timeline dinamicamente
 */
function generateTimelineHTML() {
  return TIMELINE_CONFIG.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">${item.year}</div>
        <h4>${item.title}</h4>
        <p class="timeline-role">${item.role}</p>
        <p class="timeline-description">
          ${item.description}
          ${item.badges && item.badges.length > 0 ? `
            <div class="timeline-badges">
              ${item.badges.map(badge => `
                <span class="badge badge-${badge.type}">${badge.text}</span>
              `).join('')}
            </div>
          ` : ''}
        </p>
        ${generateStatusBadges(item.status, item.statusText)}
      </div>
    </div>
  `).join('');
}

/**
 * Gera badges de status para timeline
 */
function generateStatusBadges(status, statusText) {
  if (Array.isArray(statusText)) {
    return statusText.map((text, index) => {
      let statusClass, icon;
      
      // Mapear status baseado no texto e posição
      if (text.toLowerCase().includes('aprovado')) {
        statusClass = 'approved';
        icon = 'check';
      } else if (text.toLowerCase().includes('majorado') || text.includes('Assumiu')) {
        statusClass = 'majority';
        icon = 'star';
        // } else if (text.includes('Assumiu')) {
        // statusClass = 'majority';
        // icon = 'star';
      } else if (text.toLowerCase().includes('eliminado') || text.toLowerCase().includes('desclassificado')) {
        statusClass = 'eliminated';
        icon = 'times';
      } else {
        // Fallback para posição
        statusClass = index === 0 ? 'approved' : (index === 1 && statusText.length > 2 ? 'majority' : 'eliminated');
        icon = index === 0 ? 'check' : (index === 1 && statusText.length > 2 ? 'star' : 'times');
      }
      
      return `<div class="timeline-status ${statusClass}"><i class="fas fa-${icon}"></i> ${text}</div>`;
    }).join('');
  }
  
  const iconMap = {
    'approved': 'check',
    'eliminated': 'times',
    'current': 'clock',
    'majority': 'star'
  };
  
  return `<div class="timeline-status ${status}"><i class="fas fa-${iconMap[status] || 'info'}"></i> ${statusText}</div>`;
}

// ========================
// INICIALIZAÇÃO
// ========================
document.addEventListener('DOMContentLoaded', function() {
  applyConfig();
});

// ========================
// EXPORT PARA MÓDULOS
// ========================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PORTFOLIO_CONFIG,
    SKILLS_CONFIG, 
    PORTFOLIO_ITEMS,
    TIMELINE_CONFIG,
    applyConfig,
    generateSkillsHTML,
    generatePortfolioHTML,
    generateTimelineHTML
  };
}