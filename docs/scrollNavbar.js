/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.O_Header');
  var wHeader = document.querySelector('.W_Header');
  var lastScrollY = window.scrollY;
  window.addEventListener('scroll', function () {
    if (window.scrollY > lastScrollY) {
      header.style.transform = 'translateY(-100%)';
      wHeader.classList.remove('with-border');
    } else {
      header.style.transform = 'translateY(0)';
      if (window.scrollY === 0) {
        wHeader.classList.add('with-border');
      } else {
        wHeader.classList.remove('with-border');
      }
    }
    lastScrollY = window.scrollY;
  });
  if (window.scrollY === 0) {
    wHeader.classList.add('with-border');
  }
});
/******/ })()
;