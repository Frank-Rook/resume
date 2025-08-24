const elements = document.querySelectorAll("[data-translate]");
const flagButtons = document.querySelectorAll(".lang-switcher img");

function updateLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      // Use innerHTML so links and formatting render
      el.innerHTML = translations[lang][key];
    }
  });
  localStorage.setItem("preferredLanguage", lang);

  // highlight active flag
  flagButtons.forEach(flag => {
    flag.classList.toggle("active", flag.dataset.lang === lang);
  });
}

// Load saved language or default to German
const savedLang = localStorage.getItem("preferredLanguage") || "de";
updateLanguage(savedLang);

// Click on flags
flagButtons.forEach(flag => {
  flag.addEventListener("click", () => updateLanguage(flag.dataset.lang));
});

// ---------- Language Switcher Logic ----------
const langSwitcher = document.querySelectorAll(".lang-switcher img");
let currentLang = localStorage.getItem("lang") || "de";

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      // Same fix here
      el.innerHTML = translations[lang][key];
    }
  });

  // update active flag
  langSwitcher.forEach(img =>
    img.classList.toggle("active", img.dataset.lang === lang)
  );

  localStorage.setItem("lang", lang);
  currentLang = lang;
}

// attach event listeners
langSwitcher.forEach(img => {
  img.addEventListener("click", () => {
    setLanguage(img.dataset.lang);
  });
});

// load saved language on start
setLanguage(currentLang);
