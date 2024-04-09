import './search-vanila.css'

function initSearch() {
  const O_Search = document.querySelector('.O_Search')
  const A_Button = document.querySelector('.A_Button')
  const A_SearchInput = document.querySelector('.A_SearchInput')
  let requestText = getSearchRequest()

  if (requestText != undefined) {
    A_SearchInput.value = requestText

    if (content) {
      SearchContent()
    }
  } else {
    A_SearchInput.value = ''
  }

  A_SearchInput.addEventListener('input', (e) => {
    console.log(e.target.value)
    const requestText = e.target.value

    if (requestText.length >= 3) {
      A_Button.classList.remove('disabled')
    } else {
      A_Button.classList.add('disabled')
    }
  })

  A_Button.addEventListener('click', (e) => {
    if (!e.target.classList.contains('disabled')) {
      requestText = A_SearchInput
      setSearchRequest()
      getSearchRequest()
    }
  })

  A_SearchInput.addEventListener('keydown', (e) => {
    requestText = e.target.value

    if (e.key === 'Enter') {
      setSearchRequest()
    }
  })
}

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)
  console.log(url)

  if (searchParams.has('request')) {
    return searchParams.get('request')
  }
}

function setSearchRequest() {
  const url = window.location.href.split('?')[0]
  window.location.href = url + 'request=' + requestText
}

function createContentCard() {
  const contentItemCover = document.createElement('div')
  contentItemCover.classList.add('O_ContentItem')
  contentItemCover.src = contentItemData.image

  const contentItemTitle = document.createElement('h2')
  contentItemTitle.classList.add('O_ContentItem')
  contentItemTitle.src = contentItemData.image
}
document.addEventListener('DOMContentLoaded', () => {
  initSearch()
  getSearchRequest()
})

// ВАЖНЫЙ КОД
patQBveeQl0ifLo6i.b90574f7e9dbc913fb2df7c01be79b1be75b2e2af8fb484d3a5f773064caf851
