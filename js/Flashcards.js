const easyBtn = document.getElementById("easyBtn");
const mediumBtn = document.getElementById("mediumBtn");
const hardBtn = document.getElementById("hardBtn");

function getQueryParam(param) {
  const UrlLanParams = new URLSearchParams(window.location.search);
  return UrlLanParams.get(param);
};

const selectedLanguage = getQueryParam('language') || 'japanese';

fetch("")