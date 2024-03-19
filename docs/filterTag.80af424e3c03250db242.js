/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function filterCardsByTag(tag) {
  var cards = document.querySelectorAll('.O_QaCard, .O_CardArticle, .O_ArticleCardLong, .O_IdeaBigCard, .O_CardHigh, .O_ArticleWide, .O_CardArticleBig');
  cards.forEach(function (card) {
    var tags = card.getAttribute('data-tags');
    if (tags && tags.split(',').includes(tag)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  var filterTags = document.querySelectorAll('.A_FilterTag');
  filterTags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      var selectedTag = this.innerText.trim();
      if (this.classList.contains('active')) {
        filterTags.forEach(function (tag) {
          return tag.classList.remove('active');
        });
        var cards = document.querySelectorAll('.O_QaCard, .O_CardArticle, .O_ArticleCardLong, .O_IdeaBigCard, .O_CardHigh, .O_ArticleWide, .O_CardArticleBig');
        cards.forEach(function (card) {
          card.style.display = '';
        });
      } else {
        filterCardsByTag(selectedTag);
        filterTags.forEach(function (tag) {
          return tag.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
});
/******/ })()
;