console.log('script is running')

const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('nav a')

window.onscroll = function() {
  let current = ''

  sections.forEach(function(section) {
    const sectionTop = section.getBoundingClientRect().top
    if (sectionTop <= 150) {
      current = section.id
    }
  })

  navLinks.forEach(function(link) {
    link.classList.remove('active')
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active')
    }
  })
}