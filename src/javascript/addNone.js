document.addEventListener('DOMContentLoaded', function () {
  const filterTags = document.querySelectorAll('.A_FilterTag')

  filterTags.forEach((tag) => {
    tag.addEventListener('click', function () {
      if (
        document.querySelector('.select').classList.contains('O_ArticleWide')
      ) {
        document.querySelector('.select').style.display = 'none'
      }
    })
  })
})
