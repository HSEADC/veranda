function filterTag(tag) {
  const cards = document.querySelectorAll(
    '.O_QaCard, .O_CardArticle, .M_AdviceCard, .O_IdeaBigCard,.O_ArticleWide, .O_CardHigh, .O_CardArticleBig'
  )
  const block = document.querySelector('.C_AllIdeasArticles')

  console.log(cards)
  cards.forEach((card) => {
    const tags = card.getAttribute('data-tags')

    if (tags && tags.split(',').includes(tag)) {
      card.style.display = ''
      if (card.parentElement.classList.contains('W_TwoIdeasArticle')) {
        card.parentElement.style.display = 'none'
        card.classList.add('copy')
        block.append(card)
      } else {
        card.parentElement.style.display = 'flex'
      }
    } else {
      card.style.display = 'none'
      if (card.classList.contains('copy')) {
        document.querySelector('.copy').remove()
      }
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
          '.O_QaCard, .O_CardArticle, .M_AdviceCard,.O_ArticleWide, .O_IdeaBigCard, .O_CardHigh,  .O_CardArticleBig'
        )
        cards.forEach((card) => {
          card.style.display = ''
        })
      } else {
        filterTag(selectedTag)

        filterTags.forEach((tag) => tag.classList.remove('active'))
        this.classList.add('active')
      }
    })
  })
})
