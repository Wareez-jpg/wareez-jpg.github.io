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

navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    navMenu.style.display = 'none'
  })
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

const scrollTopBtn = document.getElementById('scrollTop')

window.addEventListener('scroll', function() {
  if(window.scrollY > 300) {
    scrollTopBtn.style.display = 'block'
  } else {
    scrollTopBtn.style.display = 'none'
  }
})

scrollTopBtn.addEventListener('click', function() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

fetch('https://api.github.com/users/wareez-jpg/repos')
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    const container = document.getElementById('github-projects')
    const excludedRepos = ['wareez-jpg.github.io', 'Database-system', 'Cybersecurity-implementation']

    data.forEach(function(repo) {
      if (excludedRepos.includes(repo.name)) return

      
      const card = document.createElement('div')
      card.classList.add('project-card')
      card.innerHTML =`
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description yet.'}</p>
        <a href="${repo.html_url}" target="_blank">View on Github</a>
      `
      container.appendChild(card)
    })
  })