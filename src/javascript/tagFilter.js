function filterCardsByTag(tag) {
  const cards = document.querySelectorAll(
    '.O_QaCard, .O_CardArticle, .O_ArticleCardLong'
  )

  cards.forEach((card) => {
    const tags = card.getAttribute('data-tags')

    if (tags && tags.split(',').includes(tag)) {
      card.style.display = ''
    } else {
      card.style.display = 'none'
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  const filterTags = document.querySelectorAll('.A_FilterTag')

  filterTags.forEach((tag) => {
    tag.addEventListener('click', function () {
      const selectedTag = this.innerText.trim()

      if (this.classList.contains('active')) {
        filterTags.forEach((tag) => tag.classList.remove('active'))
        const cards = document.querySelectorAll(
          '.O_QaCard, .O_CardArticle, .O_ArticleCardLong'
        )
        cards.forEach((card) => {
          card.style.display = ''
        })
      } else {
        filterCardsByTag(selectedTag)
        filterTags.forEach((tag) => tag.classList.remove('active'))
        this.classList.add('active')
      }
    })
  })
})
