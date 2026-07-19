console.log('script is running')

const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('nav a')
const hamburger = document.getElementById('hamburger')
const navMenu = document.querySelector('nav ul')

if (window.innerWidth > 768) {
  hamburger.style.display = 'none'
} else {
  hamburger.style.display = 'block'
  hamburger.style.background = 'none'
  hamburger.style.border = 'none'
  hamburger.style.color = 'white'
  hamburger.style.fontSize = '1.5rem'
  hamburger.style.cursor = 'pointer'
  navMenu.style.display = 'none'
}

hamburger.addEventListener('click', function() {
  if (navMenu.style.display === 'none') {
    navMenu.style.position = 'absolute'
    navMenu.style.top = '70px'
    navMenu.style.left = '0'
    navMenu.style.width = '100%'
    navMenu.style.backgroundColor = '#12122a'
    navMenu.style.padding = '20px'
    navMenu.style.display = 'flex'
    navMenu.style.flexDirection = 'column'
  } else {
    navMenu.style.display = 'none'
  }
})

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