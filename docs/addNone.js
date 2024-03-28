/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
document.addEventListener('DOMContentLoaded', function () {
  var filterTags = document.querySelectorAll('.A_FilterTag');
  filterTags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      if (document.querySelector('.select').classList.contains('O_ArticleWide')) {
        document.querySelector('.select').style.display = 'none';
      }
    });
  });
});
/******/ })()
;