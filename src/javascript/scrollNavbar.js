document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.O_Header')
  const wHeader = document.querySelector('.W_Header')
  let lastScrollY = window.scrollY

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      header.style.transform = 'translateY(-100%)'
      wHeader.classList.remove('with-border')
    } else {
      header.style.transform = 'translateY(0)'
      if (window.scrollY === 0) {
        wHeader.classList.add('with-border')
      } else {
        wHeader.classList.remove('with-border')
      }
    }
    lastScrollY = window.scrollY
  })

  if (window.scrollY === 0) {
    wHeader.classList.add('with-border')
  }
})
