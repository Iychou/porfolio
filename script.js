/* ================= HERO TITLE — split into animated letters ================= */
(function(){
  const el = document.getElementById('heroTitle');
  const text = GEOLOGIST.name;
  [...text].forEach((ch, i) => {
    const span = document.createElement('span');
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    span.style.setProperty('--i', i);
    el.appendChild(span);
  });
  document.getElementById('heroTag').textContent = GEOLOGIST.tagline;
  const heroImageUrl = `url('${GEOLOGIST.heroImage}')`;
  document.getElementById('heroBgBlur').style.backgroundImage = heroImageUrl;
  document.getElementById('heroBgMain').style.backgroundImage = heroImageUrl;
})();

/* ================= ABOUT ================= */
document.getElementById('portraitImg').src = GEOLOGIST.portrait;
document.getElementById('aboutEyebrow').textContent = GEOLOGIST.eyebrow;
document.getElementById('aboutKicker').textContent = GEOLOGIST.kicker;
document.getElementById('aboutName').textContent = GEOLOGIST.name;
document.getElementById('aboutTitle').innerHTML = GEOLOGIST.title;
document.getElementById('aboutBio').textContent = GEOLOGIST.bio;

function renderCareerCol(list, elId){
  const el = document.getElementById(elId);
  list.forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = `<div class="period">${c.period}</div><div class="role">${c.role}</div><div class="org">${c.org}</div><div class="place">${c.place}</div>`;
    el.appendChild(li);
  });
}
renderCareerCol(GEOLOGIST.careerLeft, 'careerLeft');
renderCareerCol(GEOLOGIST.careerRight, 'careerRight');

const eduList = document.getElementById('eduList');
GEOLOGIST.education.forEach(e => {
  const li = document.createElement('li');
  li.innerHTML = `<b>${e.degree}</b><span>${e.school} — ${e.year}</span>`;
  eduList.appendChild(li);
});

const certGrid = document.getElementById('certGrid');
let certPreview = null;
let certPreviewCloseTimer = null;

function showCertPreview(sourceImage) {
  clearTimeout(certPreviewCloseTimer);
  if (certPreview) certPreview.remove();

  certPreview = document.createElement('div');
  certPreview.className = 'cert-preview';
  const previewImage = document.createElement('img');
  previewImage.src = sourceImage.src;
  previewImage.alt = sourceImage.alt;
  certPreview.appendChild(previewImage);
  certPreview.setAttribute('role', 'dialog');
  certPreview.setAttribute('aria-modal', 'true');
  certPreview.setAttribute('aria-label', 'Certificate preview. Click to close or press Escape.');
  certPreview.addEventListener('click', hideCertPreview);
  document.body.appendChild(certPreview);
  requestAnimationFrame(() => certPreview?.classList.add('is-visible'));
}

function hideCertPreview() {
  if (!certPreview) return;
  certPreview.classList.remove('is-visible');
  const closingPreview = certPreview;
  certPreviewCloseTimer = setTimeout(() => {
    closingPreview.remove();
    if (certPreview === closingPreview) certPreview = null;
    certPreviewCloseTimer = null;
  }, 320);
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') hideCertPreview();
});

(GEOLOGIST.certifications || []).forEach(cert => {
  const card = document.createElement('article');
  card.className = 'cert-card reveal';
  const picture = cert.image
    ? `<img src="${cert.image}" alt="${cert.name} certificate" loading="lazy">`
    : '<div class="cert-placeholder">Add a certificate picture<br><small>Put the image in the images folder and set its path in data.js</small></div>';
  card.innerHTML = `
    <div class="cert-image">${picture}</div>
    <div class="cert-info">
      <h3>${cert.name}</h3>
      <p>${cert.issuer}</p>
      <span>${cert.year}</span>
    </div>
  `;
  const certImage = card.querySelector('.cert-image img');
  if (certImage) {
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View ${cert.name} certificate enlarged`);
    card.addEventListener('click', () => showCertPreview(certImage));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showCertPreview(certImage);
      }
    });
  }
  certGrid.appendChild(card);
});

const skillTags = document.getElementById('skillTags');
GEOLOGIST.skills.forEach(s => {
  const span = document.createElement('span');
  span.innerHTML = s;
  skillTags.appendChild(span);
});

/* ================= STATS — count up on scroll into view ================= */
const statsGrid = document.getElementById('statsGrid');
GEOLOGIST.stats.forEach(s => {
  const div = document.createElement('div');
  div.className = 'stat';
  div.innerHTML = `<div class="num" data-target="${s.value}" data-suffix="${s.suffix}">0</div><div class="lbl">${s.label}</div>`;
  statsGrid.appendChild(div);
});

function animateCount(el){
  const target = +el.dataset.target;
  const suffix = el.dataset.suffix || '';
  const dur = 1200;
  const t0 = performance.now();
  function tick(t){
    const p = Math.min(1, (t - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if(p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ================= CONTACT ================= */
document.getElementById('contactName').textContent = GEOLOGIST.name;
document.getElementById('contactEmail').textContent = GEOLOGIST.email;
document.getElementById('contactEmail').href = 'mailto:' + GEOLOGIST.email;
document.getElementById('contactLocation').textContent = GEOLOGIST.location;

/* ================= GALLERY ================= */
const gallery = document.getElementById('gallery');
SPECIMENS.forEach((s, i) => {
  const images = s.images.filter(Boolean);
  const card = document.createElement('button');
  card.className = 'card reveal';
  card.style.transitionDelay = (i % 3) * 0.08 + 's';
  card.dataset.id = s.id;
  card.innerHTML = `
    <div class="card-frame">
      <img src="${images[0]}" alt="${s.title}" loading="lazy">
      <span class="peek">↗</span>
      ${images.length > 1 ? `<span class="multi">${images.length} photos</span>` : ''}
    </div>
    <div class="card-type">${s.type}</div>
    <div class="card-title">${s.title}</div>
    <div class="card-caption">${s.caption}</div>
  `;
  card.addEventListener('click', () => openDrawer(s.id));
  gallery.appendChild(card);
});

/* ================= SPECIMEN MODAL ================= */
const drawer = document.getElementById('drawer');
const backdrop = document.getElementById('backdrop');

function openDrawer(id){
  const s = SPECIMENS.find(x => x.id === id);
  if(!s) return;
  const images = s.images.filter(Boolean);

  document.getElementById('drawerType').textContent = s.type;
  document.getElementById('drawerTitle').textContent = s.title;
  document.getElementById('drawerCaption').textContent = s.caption;
  document.getElementById('drawerDepth').textContent = s.depth;
  document.getElementById('drawerDate').textContent = s.dateFound;
  document.getElementById('drawerLocation').textContent = s.location;
  document.getElementById('drawerCoords').textContent = s.coords;
  const article = document.getElementById('drawerArticle');
  article.replaceChildren();
  const articleLines = Array.isArray(s.article) ? s.article : String(s.article).split('\n');
  articleLines.filter(line => line.trim()).forEach(line => {
    const paragraph = document.createElement('p');
    paragraph.textContent = line.trim();
    article.appendChild(paragraph);
  });

  const details = document.getElementById('drawerDetails');
  details.innerHTML = '';
  (s.details || []).forEach(item => {
    const row = document.createElement('div');
    row.innerHTML = `<span>${item.label}</span><b>${item.value}</b>`;
    details.appendChild(row);
  });

  const mapVisual = document.getElementById('drawerMapVisual');
  mapVisual.replaceChildren();
  if (s.mapQuery) {
    const map = document.createElement('iframe');
    map.title = `Interactive map of ${s.location}`;
    map.loading = 'lazy';
    map.allowFullscreen = true;
    map.referrerPolicy = 'no-referrer-when-downgrade';
    map.src = `https://maps.google.com/maps?q=${encodeURIComponent(s.mapQuery)}&t=k&output=embed`;
    mapVisual.appendChild(map);
  } else if (s.mapImage) {
    const img = document.createElement('img');
    img.src = s.mapImage;
    img.alt = `Map of ${s.location}`;
    mapVisual.appendChild(img);
  } else {
    mapVisual.innerHTML = `<svg viewBox="0 0 300 150" class="map-art" aria-hidden="true">
      <rect width="300" height="150" fill="#e7ddc7"/>
      <path d="M0,100 Q60,75 120,98 T300,85" stroke="#b99a5b" stroke-width="2" fill="none" opacity=".6"/>
      <path d="M0,55 Q80,38 160,54 T300,42" stroke="#b99a5b" stroke-width="1.4" fill="none" opacity=".45"/>
      <circle cx="150" cy="75" r="6" fill="#a24a2b"/>
      <circle cx="150" cy="75" r="13" fill="none" stroke="#a24a2b" stroke-width="1.5" opacity=".5"/>
    </svg>`;
  }

  const mainImg = document.getElementById('drawerImg');
  mainImg.src = images[0];
  mainImg.alt = s.title;

  const thumbs = document.getElementById('drawerThumbs');
  thumbs.innerHTML = '';
  if(images.length > 1){
    images.forEach((src, i) => {
      const t = document.createElement('img');
      t.src = src;
      if(i === 0) t.classList.add('active');
      t.addEventListener('click', () => {
        mainImg.src = src;
        thumbs.querySelectorAll('img').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
      });
      thumbs.appendChild(t);
    });
  }

  document.body.classList.add('drawer-open');
  drawer.scrollTop = 0;
}
function closeDrawer(){ document.body.classList.remove('drawer-open'); }

document.getElementById('drawerClose').addEventListener('click', closeDrawer);
backdrop.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeDrawer(); });

/* ================= EXPEDITIONS ================= */
const expGrid = document.getElementById('expeditionGrid');
EXPEDITIONS.forEach(x => {
  const card = document.createElement('div');
  card.className = 'exp-card reveal';
  const isImage = /\.(png|jpe?g|gif|webp|avif|svg)(\?.*)?$/i.test(x.mapEmbed);
  const mapContent = x.mapEmbed
    ? (isImage
      ? `<img src="${x.mapEmbed}" alt="Photo of ${x.name}">`
      : x.mapEmbed)
    : 'Drop a map embed or screenshot here (edit `mapEmbed` in data.js)';
  card.innerHTML = `
    <div class="map-slot">${mapContent}</div>
    <h4>${x.name}</h4>
    <div class="region">${x.region}</div>
    <p class="blurb">${x.blurb}</p>
    <div class="coords">${x.coords}</div>
  `;
  expGrid.appendChild(card);
});

/* ================= SCROLL REVEALS ================= */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('in');
      if(e.target.classList.contains('stats-grid')){
        e.target.querySelectorAll('.num').forEach(animateCount);
      }
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .card, .exp-card').forEach(el => io.observe(el));
io.observe(document.getElementById('statsGrid'));

/* ================= NAV BACKGROUND ON SCROLL ================= */
const nav = document.getElementById('topnav');
document.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 60
    ? 'rgba(16,13,9,.92)'
    : 'linear-gradient(to bottom, rgba(16,13,9,.75), transparent)';
}, { passive:true });

/* ================= PARALLAX: hero + field strip ================= */
const heroBg = document.getElementById('heroBg');
const fieldImg = document.getElementById('fieldImg');
const hero = document.getElementById('hero');
const field = document.getElementById('field');

function onScrollParallax(){
  const hy = hero.getBoundingClientRect().top;
  heroBg.style.transform = `translateY(${hy * -0.15}px)`;

  const fy = field.getBoundingClientRect();
  const progress = 1 - (fy.top + fy.height/2) / (window.innerHeight + fy.height/2);
  fieldImg.style.transform = `translateY(${(progress - 0.5) * 60}px)`;
}
document.addEventListener('scroll', onScrollParallax, { passive:true });
onScrollParallax();

if (window.matchMedia('(hover:hover)').matches){
  hero.addEventListener('mousemove', (e) => {
    const dx = (e.clientX / window.innerWidth - 0.5) * 18;
    const dy = (e.clientY / window.innerHeight - 0.5) * 18;
    heroBg.style.marginLeft = dx + 'px';
    heroBg.style.marginTop = dy + 'px';
  });
}
