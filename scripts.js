
const articles = 
  [
    {
      "id": 1,
      "image": "https://cdn.kqed.org/wp-content/uploads/sites/35/2024/10/GettyImages-1347890261-1020x680.jpg",
      "title": "Climate Activists Push for Carbon Tax With Measure GG, But Critics Warn it Could Backfire",
      "description": "Los activistas climáticos de base argumentan que un impuesto sobre el uso de gas en edificios grandes ayudará a Berkeley a abandonar los combustibles fósiles. Pero muchos políticos, empresas y organizaciones sin fines de lucro, incluso aquellas que trabajan en clima, no creen que la Medida GG sea la política para lograrlo.",
      "date": "2023-10-17T11:00:16Z",
      "category": "Mundo"
    },
    {
      "id": 2,
      "image": "https://fortune.com/img-assets/wp-content/uploads/2024/10/GettyImages-2170862982_413c33-e1729160290535.jpg?resize=1200,600",
      "title": "El imperio de Musk corre el riesgo de ser objetivo de la UE por posibles multas a X",
      "description": "La UE puede apuntar al imperio empresarial más amplio de Elon Musk para imponer multas a X, incluyendo potencialmente ingresos de SpaceX y Neuralink para aumentar las sanciones.",
      "date": "2024-09-17T10:32:45Z",
      "category": "Negocios"
    },
    {
      "id": 3,
      "image": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1729160267/autoexpress/2024/10/Omode E5 first UK drive.jpg",
      "title": "Omoda E5 en versión Noble - imágenes",
      "description": "Imágenes del SUV eléctrico Omoda E5 siendo conducido en carreteras del Reino Unido. Fotos tomadas por el fotógrafo senior de Auto Express, Pete Gibson.",
      "date": "2024-10-15T10:30:56Z",
      "category": "Automóvil"
    },
    {
      "id": 4,
      "image": "https://cdn.mos.cms.futurecdn.net/6xqynicLzH6sSskfiNyWoT-1200-80.jpg",
      "title": "Renault, Alpine y Citroën ayudan al Salón del Automóvil de París 2024 a volver a la forma",
      "description": "Explora los debuts más deliciosos en el Salón del Automóvil de París 2024, incluyendo diseños de los grandes fabricantes de automóviles de Francia y máquinas de nicho de todo el mundo.",
      "date": "2024-10-13T10:25:24Z",
      "category": "Automóvil"
    },
    {
      "id": 5,
      "image": "https://www.computerworld.com/wp-content/uploads/2024/10/3567767-0-90640600-1729160617-IDG-Germany-Intel-September-News.jpg?quality=50&strip=all&w=1024",
      "title": "La asociación de ciberseguridad china insta a revisar los productos de Intel",
      "description": "La Asociación de Ciberseguridad de China (CSAC) ha instado a una revisión de seguridad de los productos Intel vendidos en el país, afirmando que la empresa estadounidense de semiconductores representa amenazas continuas para la seguridad nacional e intereses de China.",
      "date": "2024-10-01T10:22:56Z",
      "category": "Tecnología"
    },
    {
      "id": 6,
      "image": "https://tracepathlike.com/assets/images/pages/global-leaders-convene-for-historic-climate-action-summit.png",
      "title": "Global Leaders Convene in Geneva to Discuss Climate Change Strategies",
      "description": "Representantes de más de 50 países se reúnen en Ginebra para negociar nuevos compromisos sobre la reducción de emisiones y adaptación al cambio climático, buscando acuerdos que fortalezcan los esfuerzos internacionales.",
      "date": "2024-10-20T09:15:00Z",
      "category": "Mundo"
    },
    {
      "id": 7,
      "image": "https://www.misistemainmune.es/wp-content/uploads/2016/06/AdobeStock_584439784-scaled.jpeg",
      "title": "Nueva Descubrimiento Científico Revoluciona la Medicina Moderna",
      "description": "Investigadores han identificado una nueva célula en el sistema inmunológico que podría ser clave para desarrollar tratamientos más efectivos contra enfermedades autoinmunes.",
      "date": "2024-10-19T14:30:00Z",
      "category": "Ciencia"
    },
    {
      "id": 8,
      "image": "https://www.ita.es/wp-content/uploads/2024/06/ITA_5-APLICACIONES-IA-TRANSFORMANDO-MEDTECH-1536x766.webp",
      "title": "Tecnologías de IA Transforman el Sector Salud",
      "description": "El uso de inteligencia artificial en hospitales ha permitido mejorar los diagnósticos y personalizar tratamientos, aumentando la eficiencia y la precisión médica.",
      "date": "2024-10-18T11:45:00Z",
      "category": "Tecnología"
    },
    {
      "id": 9,
      "image": "https://cdn.eso.org/images/screen/eso2202a.jpg",
      "title": "Descubren un Nuevo Planeta Habitable en la Galaxia",
      "description": "Astrónomos han identificado un exoplaneta en la zona habitable de su estrella, con condiciones que podrían permitir la existencia de agua líquida y vida.",
      "date": "2024-10-17T08:20:00Z",
      "category": "Ciencia"
    },
    {
      "id": 10,
      "image": "https://images.ecestaticos.com/1n7wFYs7jQTy_sVC5KDjNEraHe4=/0x0:2272x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F0db%2F0b2%2Ff5d%2F0db0b2f5d29d90857dfebd66162f5505.jpg",
      "title": "Elección de la Nueva Presidente de la Federación Europea",
      "description": "La Federación Europea ha elegido a su nueva presidenta en una votación histórica, prometiendo impulsar políticas de integración y desarrollo sostenible.",
      "date": "2024-10-16T12:00:00Z",
      "category": "Mundo"
    },
    {
      "id": 11,
      "image": "https://sciencemediacentre.es/sites/default/files/2022-02/Vacunas-covid-habra-que-reforzar-cada-pocos-meses-a-la-poblacion-general.jpg",
      "title": "Innovaciones en Vacunas Mejoran la Protección contra Enfermedades Emergentes",
      "description": "Nuevas tecnologías de vacunas están ofreciendo una protección más rápida y efectiva contra enfermedades emergentes, reduciendo significativamente el tiempo de respuesta ante brotes.",
      "date": "2024-10-14T09:00:00Z",
      "category": "Viajes"
    },
    {
      "id": 12,
      "image": "https://img.olympics.com/images/image/private/t_16-9_640/f_auto/v1538355600/primary/galjjoiqgtedmnvg6g8j",
      "title": "Liga de Fútbol Revela Estrategias para la Temporada 2024-2025",
      "description": "Los equipos de la liga de fútbol han presentado sus planes y estrategias para la próxima temporada, enfocándose en el desarrollo de jóvenes talentos y tácticas innovadoras.",
      "date": "2024-10-13T15:30:00Z",
      "category": "Deportes"
    },
    {
      "id": 13,
      "image": "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i43730310712e0a96/version/1453981277/image.jpg",
      "title": "Festival de Cultura Europea Promueve la Diversidad y el Arte Local",
      "description": "El Festival de Cultura Europea de este año destaca la diversidad cultural a través de exposiciones de arte, conciertos y talleres que celebran las tradiciones locales.",
      "date": "2024-10-12T18:45:00Z",
      "category": "Cultura"
    },
    {
      "id": 14,
      "image": "https://fotografias.lasexta.com/clipping/cmsimages02/2023/09/04/7508C8F1-93EC-4344-895F-DBDB1D925D14/dos-medicos-destaparon-negligencia-medica-doctor-christopher-duntsch-tal-como-serie-muerte_98.jpg?crop=3000,1688,x0,y0&width=1900&height=1069&optimize=low&format=webply",
      "title": "Descubren un Método Efectivo para Combatir el Cáncer de Páncreas",
      "description": "Un equipo de científicos ha desarrollado un nuevo tratamiento que muestra resultados prometedores en la lucha contra el cáncer de páncreas, ofreciendo esperanza a millones de pacientes.",
      "date": "2024-10-11T10:10:00Z",
      "category": "Viajes"
    },
    {
      "id": 15,
      "image": "https://pics.filmaffinity.com/the_martian-330729947-large.jpg",
      "title": "Avances en la Exploración Espacial: Misión a Marte Programada para 2026",
      "description": "Las agencias espaciales internacionales han anunciado una nueva misión tripulada a Marte, con planes para explorar y establecer una base permanente en el planeta rojo.",
      "date": "2024-10-10T07:50:00Z",
      "category": "Ciencia"
    },
    {
      "id": 16,
      "image": "https://www.dig.es/wp-content/uploads/2022/04/Captura-de-pantalla-2022-04-22-a-las-16.10.17-min-e1650637219383.png",
      "title": "Impacto de la Tecnología Blockchain en la Economía Global",
      "description": "La tecnología blockchain está revolucionando múltiples sectores, desde las finanzas hasta la cadena de suministro, ofreciendo mayor transparencia y seguridad en las transacciones.",
      "date": "2024-10-09T14:00:00Z",
      "category": "Negocios"
    },
    {
      "id": 17,
      "image": "https://adventureexperience.co.uk/wp-content/uploads/2018/08/shutterstock_114610390.jpg",
      "title": "Descubren una Nueva Especie de Dinosaurio en Patagonia",
      "description": "Paleontólogos han encontrado restos de una nueva especie de dinosaurio en la región de la Patagonia, proporcionando valiosa información sobre la fauna prehistórica de la zona.",
      "date": "2024-10-08T13:20:00Z",
      "category": "Ciencia"
    },
    {
      "id": 18,
      "image": "https://solestial.com/wp-content/uploads/2024/03/Solestial_Page-Hero_FSPM-1.jpg",
      "title": "Revolución en Energías Renovables: Paneles Solares Flexibles",
      "description": "Ingenieros han desarrollado paneles solares flexibles que pueden integrarse en superficies curvas y textiles, aumentando las posibilidades de aplicación en diversos sectores.",
      "date": "2024-10-07T09:45:00Z",
      "category": "Tecnología"
    },
    {
      "id": 19,
      "image": "https://estaticos-cdn.prensaiberica.es/clip/077d1fe1-9dd3-405f-b930-b0ba7954d47e_16-9-discover-aspect-ratio_default_0.jpg",
      "title": "El Impacto de la Meditación en la Salud Mental",
      "description": "Estudios recientes demuestran que la práctica regular de la meditación puede reducir significativamente los niveles de estrés y mejorar la salud mental en individuos de todas las edades.",
      "date": "2024-10-06T10:30:00Z",
      "category": "Viajes"
    },
    {
      "id": 20,
      "image": "https://www.afterlifebar.com/wp-content/uploads/2018/08/lol-worlds-2014.jpg",
      "title": "Torneos Internacionales de eSports Aumentan en Popularidad",
      "description": "Los torneos de eSports están ganando reconocimiento global, atrayendo a millones de espectadores y ofreciendo premios multimillonarios, consolidándose como una industria en crecimiento.",
      "date": "2024-10-05T16:00:00Z",
      "category": "Deportes"
    },
    {
      "id": 21,
      "image": "https://madriddiferente.com/wp-content/uploads/2020/02/ESPACIO-SOLO-un-espacio-brutal-dedicado-al-arte-contemporaneo-770x466.jpg",
      "title": "Exposición de Arte Contemporáneo Inspira a Nuevas Generaciones",
      "description": "La reciente exposición de arte contemporáneo ha capturado la atención de jóvenes artistas y espectadores, promoviendo la creatividad y la innovación en el mundo del arte.",
      "date": "2024-10-04T14:25:00Z",
      "category": "Cultura"
    },
    {
      "id": 22,
      "image": "https://centrors.org/wp-content/uploads/2021/06/senior-hardworking-farmer-agronomist-in-soybean-field-checking-crops-before-harvest-scaled.jpg",
      "title": "Innovaciones en Agricultura Sostenible Mejoran la Producción de Alimentos",
      "description": "Nuevas técnicas de agricultura sostenible están aumentando la producción de alimentos mientras reducen el impacto ambiental, ofreciendo soluciones a los desafíos alimentarios globales.",
      "date": "2024-10-03T11:15:00Z",
      "category": "Ciencia"
    },
    {
      "id": 23,
      "image": "https://www.ucjc.edu/wp-content/uploads/2024/07/53710365992_3e7da43e37_o-scaled-1.jpg",
      "title": "Conferencia Internacional sobre Inteligencia Artificial y Ética",
      "description": "Expertos de todo el mundo se reúnen para debatir los aspectos éticos de la inteligencia artificial, buscando establecer directrices que garanticen un desarrollo responsable de esta tecnología.",
      "date": "2024-10-02T13:50:00Z",
      "category": "Tecnología"
    },
    {
      "id": 24,
      "image": "https://www.pugdundeesafaris.com/blog/wp-content/uploads/2017/07/Tiger-Cubs.jpg",
      "title": "Campaña Mundial para la Conservación de Especies en Peligro",
      "description": "Organizaciones internacionales lanzan una campaña para proteger y conservar especies en peligro de extinción, implementando medidas para preservar la biodiversidad global.",
      "date": "2024-10-01T08:30:00Z",
      "category": "Mundo"
    },
    {
      "id": 25,
      "image": "https://interestingengineering.com/_next/image?url=https%3A%2F%2Fcms.interestingengineering.com%2Fwp-content%2Fuploads%2F2024%2F08%2FTokamak-Energy.jpg&w=1200&q=75",
      "title": "Fusión de Energía: Avances Clave hacia una Fuente de Energía Ilimitada",
      "description": "Científicos anuncian avances significativos en la fusión nuclear, acercándose a la posibilidad de una fuente de energía limpia e ilimitada que podría transformar la matriz energética mundial.",
      "date": "2024-09-30T10:05:00Z",
      "category": "Ciencia"
    }
];


const truncateDescription = (description, maxLength = 100) => {
  if (description.length > maxLength) {
    const truncatedText = description.substring(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');
    return truncatedText.substring(0, lastSpaceIndex) + '...';
  }
  return description;
};

// todas las noticias 
const renderAllArticles = () => {
  const articlesGrid = document.getElementById('articles-grid');
  if (!articlesGrid) return;

  articlesGrid.innerHTML = ''; 

  articles.forEach(article => {
    const articleElement = document.createElement('article');
    articleElement.classList.add('article');

    articleElement.innerHTML = `
      <img src="${article.image}" alt="${article.title}">
      <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
      <p>${truncateDescription(article.description)}</p>
      <div class="article-footer">
        <span class="article-time">
          <relative-time time="${article.date}"></relative-time>
        </span>
        <span class="article-separator">|</span>
        <span class="article-category">${article.category}</span>
      </div>
    `;

    articlesGrid.appendChild(articleElement);
  });
};

// artículos filtrados por categoría
const renderCategoryArticles = (category) => {
  const articlesGrid = document.getElementById('articles-grid');
  const categoriaTitulo = document.getElementById('categoria-titulo');

  if (!articlesGrid || !categoriaTitulo) return;

  articlesGrid.innerHTML = ''; 
  categoriaTitulo.textContent = category; 

  const filteredArticles = articles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredArticles.length === 0) {
    articlesGrid.innerHTML = '<p>No hay noticias disponibles en esta categoría.</p>';
    return;
  }

  filteredArticles.forEach(article => {
    const articleElement = document.createElement('article');
    articleElement.classList.add('article');

    articleElement.innerHTML = `
      <img src="${article.image}" alt="${article.title}">
      <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
      <p>${truncateDescription(article.description)}</p>
      <div class="article-footer">
        <span class="article-time">
          <relative-time time="${article.date}"></relative-time>
        </span>
        <span class="article-separator">|</span>
        <span class="article-category">${article.category}</span>
      </div>
    `;

    articlesGrid.appendChild(articleElement);
  });
};

const getId = () => {
  const searchParams = new URLSearchParams(location.search.slice(1));
  return Number(searchParams.get('id'));
}
const getCurrentPage = () => {
  const path = window.location.pathname;
  return path.substring(path.lastIndexOf('/') + 1);
};

const getCategoria = () => {
  const searchParams = new URLSearchParams(location.search.slice(1));
  return searchParams.get('categoria');
};

class RelativeTime extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
    setInterval(() => this.render(), 1000);
  }
  render() {
    const timeValue = this.getAttribute('time')
    const time = timeValue ? new Date(Number(timeValue)).getTime() : Date.now();
    const now = Date.now();

    const diff = now - time;
    const seconds = Math.floor(diff / 1000) || 1;
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    let aux = '...';
    if (months >= 12) {
      aux = `Hace ${years} año${years > 1 ? 's' : ''}`
    } else if (days > 30 && months >= 1) {
      aux = `Hace ${months} mes${months > 1 ? 'es' : ''}`
    } else if (days >= 1) {
      aux = `Hace ${days} día${days > 1 ? 's' : ''}`
    } else if (hours >= 1) {
      aux = `Hace ${hours} hora${hours > 1 ? 's' : ''}`
    } else if (minutes >= 1) {
      aux = `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`
    } else if (seconds >= 1) {
      aux = `Hace ${seconds} segundo${seconds > 0 ? 's' : ''}`
    }

    this.textContent = aux;
  } 
}
customElements.define('relative-time', RelativeTime);

class CustomSearch extends HTMLElement {
  constructor() {
    super();
    this.articles = articles;
  }

  connectedCallback() {
    const dialogBtn = this.querySelector('.search-button');
    const closeBtn = this.querySelector('.close-btn');
    const dialog = this.querySelector('dialog');

    dialogBtn.addEventListener('click', () => {
      dialog.showModal();
    });
    closeBtn.addEventListener('click', () => {
      dialog.close();
    });
    const siteSearch = this.querySelector('#site-search');
    siteSearch.addEventListener('input', (event) => this.search(event));

    this.renderResults('')
  }

  search(event) {
    event.preventDefault();
    const siteSearch = this.querySelector('#site-search');
    const term = siteSearch.value
    this.renderResults(term)
  }

  renderResults(term = '') {
    const searchResults = this.querySelector('#search-results');
    searchResults.innerHTML = '';
    const _articles = this.articles
      .filter(article => article.title.toLowerCase().includes(term.toLowerCase()))

    const template = this.querySelector('template');
    if (template) {
      const templateContent = template.content;
      _articles.forEach(article => {
        const li = templateContent.querySelector('li').cloneNode(true);
        li.querySelector('.card .item-image').src = article.image;
        li.querySelector('.card .item-description').textContent = article.description;
        li.querySelector('relative-time').setAttribute('time', article.date)
        li.querySelector('.card .item-title a').textContent = article.title;

        const enlace = li.querySelector('.card .item-title a')
        const href = enlace.href
        enlace.href = href.replace('{id}', article.id)

        searchResults.appendChild(li);
      });
    } else {
      _articles.forEach(article => {
        const li = document.createElement('li');
        li.classList.add('search-result-item');

        li.innerHTML = `
          <img class="search-result-image" src="${article.image}" alt="${article.title}">
          <div class="search-result-content">
            <h5 class="search-result-title">
              <a href="article.html?id=${article.id}">${article.title}</a>
            </h5>
            <p class="search-result-description">${truncateDescription(article.description)}</p>
            <relative-time time="${article.date}"></relative-time>
          </div>
        `;

        searchResults.appendChild(li);
      });
    }
  }
}
customElements.define('custom-search', CustomSearch);


class CustomArticle extends HTMLElement {
  constructor() {
    super();
    this.articleId = getId();
  }
  connectedCallback() {
    this.render();
  }
  render() {// Con esto se reemplaza título, p, img...
    const article = articles.find(article => article.id === this.articleId)
    if (article) {
      const h1 = this.querySelector('h1');
      if (h1) h1.textContent = article.title;
      const img = this.querySelector('img');
      if (img) img.src = article.image;
      const p = this.querySelector('p');
      if (p) p.textContent = article.description;

      const relativeTime = this.querySelector('relative-time');
      if (relativeTime) relativeTime.setAttribute('time', article.date);
    }
  }
}
customElements.define('custom-article', CustomArticle);

//Menu
document.addEventListener('DOMContentLoaded', () => {
  const openMenuButton = document.getElementById('open-menu');
  const closeMenuButton = document.getElementById('close-menu');
  const sideMenu = document.getElementById('side-menu');
  const menuOverlay = document.getElementById('menu-overlay');

  openMenuButton.addEventListener('click', () => {
    sideMenu.classList.add('open');
    menuOverlay.classList.add('active');
  });

  closeMenuButton.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    menuOverlay.classList.remove('active');
  });

  menuOverlay.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    menuOverlay.classList.remove('active');
  });
});

