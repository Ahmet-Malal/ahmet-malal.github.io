const $ = selector => document.querySelectorAll(selector);
const root = document.documentElement;
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
const btns = $("[data-lang]");
const faviconLink = document.getElementById("favicon");
const defaultPageTitle = "bhcgo";
const tabIcons = {
  active: "assets/favicon.ico",
  hidden: "assets/favicon-d.ico"
};


const profileMedia = {
  gif: "assets/profile.gif",
  banner: "assets/banner.gif"
};
const translations = {
  tr: {
    pageTitle: "bhcgo",
    systemClosedTitle: "system offline...",
    archive: "arşivim",
    contact: "iletişim",
    focus: "odak",
    introLine1: "Profilimi, projelerimi ve notlarımı keşfetmek için ana butonları kullanabilirsin;",
    introLine2: "odak alanlarımı öne çıkarır.",
    introLine3: "Bana açık iletişim yolları üzerinden ulaşabilirsin.",
    socialArea: "Navigasyon",
    socialLinks: "Sosyal medya bağlantıları",
    quickLinks: "Hızlı bağlantılar",
    contactAria: "İletişim",
    focusAria: "Odak",
    language: "Dil",
    profile: "Profil",
    xLabel: "X",
    githubLabel: "GitHub",
    youtubeLabel: "YouTube",
    instagramLabel: "Instagram",
    linkedinLabel: "LinkedIn",
    xAria: "X profili",
    githubAria: "GitHub profili",
    youtubeAria: "YouTube kanalı",
    instagramAria: "Instagram profili",
    linkedinAria: "LinkedIn profili",
    profileCardAria: "Profil kart\u0131",
    profileLabel: "profil",
    profileCopy: "Sade public profil. Ki\u015fisel detaylar bilin\u00e7li olarak gizli tutulur.",
    alias: "rumuz",
    test: "test",
    source: "kaynak",
    tagsAria: "Etiketler",
    openGithub: "proje a\u00e7",
    windowClose: "Pencereyi kapat"
  },

  en: {
    pageTitle: "bhcgo",
    systemClosedTitle: "system offline...",
    archive: "my.archive",
    contact: "contact",
    focus: "focus",
    introLine1: "Use the main buttons to explore my profile, projects, and notes;",
    introLine2: "they highlight the areas I focus on.",
    introLine3: "You can reach me through my public contact channels.",
    socialArea: "Navigation",
    socialLinks: "Social links",
    quickLinks: "Quick links",
    contactAria: "Contact",
    focusAria: "Focus",
    language: "Language",
    profile: "Profile",
    xLabel: "X",
    githubLabel: "GitHub",
    youtubeLabel: "YouTube",
    instagramLabel: "Instagram",
    linkedinLabel: "LinkedIn",
    xAria: "X profile",
    githubAria: "GitHub profile",
    youtubeAria: "YouTube channel",
    instagramAria: "Instagram profile",
    linkedinAria: "LinkedIn profile",
    profileCardAria: "Profile card",
    profileLabel: "profile",
    profileCopy: "Simple public profile. Personal details are intentionally kept private.",
    alias: "alias",
    test: "test",
    source: "source",
    tagsAria: "Tags",
    openGithub: "open project",
    windowClose: "Close window"
  }
};

const siteWindow = document.querySelector("[data-window]");
const windowPanel = document.querySelector(".window-panel");
const windowTitle = document.querySelector("[data-window-title]");
const windowCopy = document.querySelector("[data-window-copy]");
const windowList = document.querySelector("[data-window-list]");
let activeWindow = null;
let windowTimer = null;

const stackBadges = [
  '<img src="https://img.shields.io/badge/Python%20Basics-3776AB?style=for-the-badge&logo=python&logoColor=white" />',
  '<img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" />',
  '<img src="https://img.shields.io/badge/Terminal-111111?style=for-the-badge&logo=gnometerminal&logoColor=white" />',
  '<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />',
  '<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white" />',
  '<img src="https://img.shields.io/badge/JavaScript%20Basics-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />',
  '<img src="https://img.shields.io/badge/GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white" />',
  '<img src="https://img.shields.io/badge/Networking%20Basics-005571?style=for-the-badge" />',
  '<img src="https://img.shields.io/badge/Cybersecurity%20Basics-111111?style=for-the-badge" />',
  '<img src="https://img.shields.io/badge/CTF%20Basics-6A5ACD?style=for-the-badge" />',
  '<img src="https://img.shields.io/badge/Recon-222222?style=for-the-badge" />',
  '<img src="https://img.shields.io/badge/SQL%20Injection%20Basics-336791?style=for-the-badge" />',
  '<img src="https://img.shields.io/badge/XSS%20Basics-F16529?style=for-the-badge" />',
  '<img src="https://img.shields.io/badge/Malware%20Basics-8B0000?style=for-the-badge" />'
];

const windowData = {
  tr: {
    focus: {
      title: "Odak",
      copy: "",
      sections: [
        {
          title: "Odak",
          list: [
            "Linux sistemleri, a\u011f g\u00fcvenli\u011fi ve siber g\u00fcvenlik temelleri",
            "CTF pratikleri, zafiyet analizi ve etik hacking yakla\u015f\u0131mlar\u0131",
            "Zararl\u0131 yaz\u0131l\u0131m davran\u0131\u015flar\u0131, trafik analizi ve teknik ara\u015ft\u0131rma"
          ]
        },
        {
          title: "Teknik Y\u0131\u011f\u0131n",
          tags: stackBadges
        }
      ]
    },
    contact: {
      title: "ileti\u015fim",
      items: [
        ["session", "en yakın zamanda"],
        ["mail", "en yakın zamanda"]
      ]
    }
  },
  en: {
    focus: {
      title: "Focus",
      copy: "",
      sections: [
        {
          title: "Focus",
          list: [
            "Linux systems, network security, and cybersecurity foundations",
            "CTF practice, vulnerability analysis, and ethical hacking approaches",
            "Malware behavior, traffic analysis, and technical research"
          ]
        },
        {
          title: "Technical Stack",
          tags: stackBadges
        }
      ]
    },
    contact: {
      title: "contact",
      items: [
        ["session", "at the soonest time"],
        ["mail", "at the soonest time"]
      ]
    }
  }
};

function getCurrentLang(){
  return document.documentElement.lang === "en" ? "en" : "tr";
}

function setTabIcon(mode){
  if(!faviconLink) return;
  faviconLink.href = tabIcons[mode] || tabIcons.active;
}

function syncTabState(){
  const lang = getCurrentLang();
  const data = translations[lang] || translations.tr;
  const isHidden = document.hidden;

  document.title = isHidden
    ? (data.systemClosedTitle || translations.tr.systemClosedTitle)
    : (data.pageTitle || defaultPageTitle);

  setTabIcon(isHidden ? "hidden" : "active");
}

document.addEventListener("visibilitychange", syncTabState);
window.addEventListener("focus", syncTabState);
window.addEventListener("blur", syncTabState);

function setLang(lang){
  const data = translations[lang] || translations.tr;

  document.documentElement.lang = lang;

  $("[data-i18n]").forEach(el => {
    el.textContent = data[el.dataset.i18n] || "";
  });

  $("[data-i18n-aria]").forEach(el => {
    el.setAttribute("aria-label", data[el.dataset.i18nAria] || "");
  });

  $("[data-i18n-label]").forEach(el => {
    el.dataset.label = data[el.dataset.i18nLabel] || "";
  });

  btns.forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active);
  });

  try{
    localStorage.setItem("site-language", lang);
  }catch{}

  if(activeWindow){
    renderWindow(activeWindow);
  }

  syncTabState();
}

btns.forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

function renderWindow(type){
  const lang = document.documentElement.lang || "tr";
  const data = (windowData[lang] && windowData[lang][type]) || windowData.tr[type];
  if(!data || !windowTitle || !windowCopy || !windowList) return;

  windowTitle.textContent = data.title;
  windowCopy.textContent = data.copy;
  windowCopy.hidden = !data.copy;
  windowList.textContent = "";

  if(data.sections){
    data.sections.forEach(section => {
      const sectionEl = document.createElement("section");
      const title = document.createElement("h3");
      const duplicateTitle = section.title && section.title.toLowerCase() === data.title.toLowerCase();

      sectionEl.className = "window-section";

      if(section.title && !duplicateTitle){
        title.textContent = section.title;
        sectionEl.append(title);
      }

      if(section.list){
        const list = document.createElement("ul");

        section.list.forEach(value => {
          const item = document.createElement("li");
          item.textContent = value;
          list.append(item);
        });

        sectionEl.append(list);
      }

      if(section.tags){
        const badges = document.createElement("div");

        badges.className = "badge-grid";
        section.tags.forEach(tag => {
          badges.insertAdjacentHTML("beforeend", tag);
        });
        badges.querySelectorAll("img").forEach(img => {
          img.alt = "";
          img.loading = "lazy";
        });

        sectionEl.append(badges);
      }

      windowList.append(sectionEl);
    });

    return;
  }

  data.items.forEach(([label, value]) => {
    const item = document.createElement("div");
    const key = document.createElement("span");
    const text = document.createElement("strong");

    item.className = "window-item";
    key.textContent = label;
    text.textContent = value;

    item.append(key, text);
    windowList.append(item);
  });
}

function openWindow(type){
  if(!siteWindow || !windowPanel) return;

  if(windowTimer){
    window.clearTimeout(windowTimer);
    windowTimer = null;
  }

  activeWindow = type;
  renderWindow(type);
  siteWindow.hidden = false;
  document.body.classList.add("window-open");
  window.requestAnimationFrame(() => {
    siteWindow.classList.add("is-open");
  });
  windowPanel.focus({preventScroll:true});
}

function closeWindow(){
  if(!siteWindow) return;

  siteWindow.classList.remove("is-open");
  activeWindow = null;

  windowTimer = window.setTimeout(() => {
    siteWindow.hidden = true;
    document.body.classList.remove("window-open");
    windowTimer = null;
  }, 240);
}

$("[data-window-trigger]").forEach(trigger => {
  trigger.addEventListener("click", event => {
    event.preventDefault();
    openWindow(trigger.dataset.windowTrigger);
  });
});

$("[data-window-close]").forEach(closeButton => {
  closeButton.addEventListener("click", closeWindow);
});

window.addEventListener("keydown", event => {
  if(event.key === "Escape" && activeWindow){
    closeWindow();
  }
});


function hexToRgb(hex){
  const clean = hex.replace("#", "").trim();
  const full = clean.length === 3 ? clean.split("").map(x => x + x).join("") : clean;
  const num = Number.parseInt(full, 16);

  if(Number.isNaN(num)){
    return {r:111, g:124, b:255};
  }

  return {
    r:(num >> 16) & 255,
    g:(num >> 8) & 255,
    b:num & 255
  };
}

function rgbToHex(r, g, b){
  return `#${[r, g, b].map(value => {
    return Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0");
  }).join("")}`;
}

function colorFromText(text){
  let hash = 0;
  const source = text || "bhcgo";

  for(let i = 0; i < source.length; i++){
    hash = source.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = Math.abs(hash) % 360;
  const saturation = 62;
  const lightness = 58;

  const c = (1 - Math.abs(2 * lightness / 100 - 1)) * saturation / 100;
  const x = c * (1 - Math.abs((hue / 60) % 2 - 1));
  const m = lightness / 100 - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if(hue < 60) [r, g, b] = [c, x, 0];
  else if(hue < 120) [r, g, b] = [x, c, 0];
  else if(hue < 180) [r, g, b] = [0, c, x];
  else if(hue < 240) [r, g, b] = [0, x, c];
  else if(hue < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  return rgbToHex((r + m) * 255, (g + m) * 255, (b + m) * 255);
}

function setProfileAccent(card, hex){
  const rgb = hexToRgb(hex);

  card.style.setProperty("--profile-accent", hex);
  card.style.setProperty("--profile-accent-rgb", `${rgb.r},${rgb.g},${rgb.b}`);
}

function getAverageImageColor(src){
  return new Promise(resolve => {
    if(!src){
      resolve(null);
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try{
        const sample = document.createElement("canvas");
        const size = 24;
        const sampleCtx = sample.getContext("2d", {willReadFrequently:true});

        sample.width = size;
        sample.height = size;
        sampleCtx.drawImage(img, 0, 0, size, size);

        const pixels = sampleCtx.getImageData(0, 0, size, size).data;
        let r = 0;
        let g = 0;
        let b = 0;
        let count = 0;

        for(let i = 0; i < pixels.length; i += 4){
          const alpha = pixels[i + 3];

          if(alpha < 40) continue;

          r += pixels[i];
          g += pixels[i + 1];
          b += pixels[i + 2];
          count++;
        }

        if(!count){
          resolve(null);
          return;
        }

        resolve(rgbToHex(r / count, g / count, b / count));
      }catch{
        resolve(null);
      }
    };

    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function initProfileMedia(){
  const card = document.querySelector("[data-profile-card]");
  const avatar = document.querySelector("[data-profile-avatar]");
  const avatarImg = document.querySelector("[data-profile-gif]");
  const banner = document.querySelector("[data-profile-banner]");
  const bannerImg = document.querySelector("[data-profile-banner-img]");

  if(!card || !avatar || !avatarImg || !banner || !bannerImg) return;

  const fallbackHex = colorFromText("bhcgo");
  setProfileAccent(card, fallbackHex);

  if(profileMedia.gif){
    avatarImg.src = profileMedia.gif;
    avatarImg.addEventListener("load", () => {
      avatar.classList.add("has-media");
    }, {once:true});

    const imageHex = await getAverageImageColor(profileMedia.gif);
    setProfileAccent(card, imageHex || fallbackHex);
  }

  if(profileMedia.banner){
    bannerImg.src = profileMedia.banner;
    bannerImg.addEventListener("load", () => {
      banner.classList.add("has-media");
    }, {once:true});
  }
}


initProfileMedia();

try{
  setLang(localStorage.getItem("site-language") || "tr");
}catch{
  setLang("tr");
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let width = 0;
let height = 0;
let dpr = 1;
let particles = [];
let raf = null;

const pointer = {
  x: window.innerWidth * 0.5,
  y: window.innerHeight * 0.5,
  tx: window.innerWidth * 0.5,
  ty: window.innerHeight * 0.5,
  active: false
};

function resizeCanvas(){
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  createParticles();
}

function createParticles(){
  const area = width * height;

  const count = Math.min(
    190,
    Math.max(78, Math.floor(area / 8500))
  );

  particles = Array.from({length: count}, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.05 + 0.28,
    a: Math.random() * 0.36 + 0.08
  }));
}

function setPointer(x, y, active = true){
  pointer.tx = x;
  pointer.ty = y;
  pointer.active = active;
}
function draw(){
  pointer.x += (pointer.tx - pointer.x) * 0.08;
  pointer.y += (pointer.ty - pointer.y) * 0.08;

  ctx.clearRect(0, 0, width, height);

  for(const p of particles){
    const dx = p.x - pointer.x;
    const dy = p.y - pointer.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const force = Math.max(0, 1 - dist / 180);

    if(force > 0){
      const angle = Math.atan2(dy, dx);
      p.x += Math.cos(angle) * force * 0.75;
      p.y += Math.sin(angle) * force * 0.75;
    }

    p.x += p.vx;
    p.y += p.vy;

    if(p.x < -20) p.x = width + 20;
    if(p.x > width + 20) p.x = -20;
    if(p.y < -20) p.y = height + 20;
    if(p.y > height + 20) p.y = -20;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r + force * 1.2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${p.a + force * 0.22})`;
    ctx.fill();
  }

  drawLines();

  raf = requestAnimationFrame(draw);
}

function drawLines(){
  const maxDistance = width < 720 ? 82 : 112;

  for(let i = 0; i < particles.length; i++){
    for(let j = i + 1; j < particles.length; j++){
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if(dist < maxDistance){
        const opacity = (1 - dist / maxDistance) * 0.09;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
}

function initBackground(){
  if(reducedMotion) return;

  resizeCanvas();
  setPointer(width * 0.5, height * 0.5, false);
  draw();

  window.addEventListener("resize", resizeCanvas);

  window.addEventListener("pointermove", event => {
    setPointer(event.clientX, event.clientY, true);
  }, {passive:true});

  window.addEventListener("pointerleave", () => {
    setPointer(width * 0.5, height * 0.5, false);
  });

  window.addEventListener("touchmove", event => {
    const touch = event.touches[0];
    if(!touch) return;
    setPointer(touch.clientX, touch.clientY, true);
  }, {passive:true});
}

initBackground();

window.addEventListener("beforeunload", () => {
  if(raf) cancelAnimationFrame(raf);
});
