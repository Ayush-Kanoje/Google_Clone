const translations = {
  en: {
    about: "About",
    store: "Store",
    gmail: "Gmail",
    images: "Images",
    searchPlaceholder: "Search Google...",
    selectLang: "Select Language:",
  },
  es: {
    about: "Acerca de",
    store: "Tienda",
    gmail: "Correo",
    images: "Imágenes",
    searchPlaceholder: "Buscar en Google...",
    selectLang: "Seleccionar idioma:",
  },
  fr: {
    about: "À propos",
    store: "Magasin",
    gmail: "Gmail",
    images: "Images",
    searchPlaceholder: "Rechercher sur Google...",
    selectLang: "Sélectionner la langue:",
  },
  hi: {
    about: "के बारे में",
    store: "स्टोर",
    gmail: "जीमेल",
    images: "छवियाँ",
    searchPlaceholder: "Google पर खोजें...",
    selectLang: "भाषा चुनें:",
  },
  de: {
    about: "Über",
    store: "Geschäft",
    gmail: "Gmail",
    images: "Bilder",
    searchPlaceholder: "Google durchsuchen...",
    selectLang: "Sprache wählen:",
  },
  zh: {
    about: "关于",
    store: "商店",
    gmail: "邮箱",
    images: "图片",
    searchPlaceholder: "搜索 Google...",
    selectLang: "选择语言:",
  },
  ja: {
    about: "約",
    store: "店",
    gmail: "Gmail",
    images: "画像",
    searchPlaceholder: "Googleを検索...",
    selectLang: "言語を選択:",
  },
  ar: {
    about: "حول",
    store: "المتجر",
    gmail: "جيميل",
    images: "صور",
    searchPlaceholder: "ابحث في Google...",
    selectLang: "اختر اللغة:",
  },
  ru: {
    about: "О нас",
    store: "Магазин",
    gmail: "Почта",
    images: "Изображения",
    searchPlaceholder: "Поиск в Google...",
    selectLang: "Выберите язык:",
  },
};

function changeLanguage(lang) {
  document.querySelector(".ul1").innerText = translations[lang].about;
  document.querySelector(".ul2").innerText = translations[lang].store;
  document.querySelector(".ul3").innerText = translations[lang].gmail;
  document.querySelector(".ul4").innerText = translations[lang].images;
  document.getElementById("search-box").placeholder =
    translations[lang].searchPlaceholder;
  document.getElementById("select-lang").innerText =
    translations[lang].selectLang;
}

function redirectToGoogle() {
  const query = document.getElementById("search-box").value;
  if (query.trim() !== "") {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    redirectToGoogle();
  }
}
