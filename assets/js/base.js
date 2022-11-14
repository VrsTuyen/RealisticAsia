const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const path = window.location.pathname;
const page = path.split("/").pop();


const headerMobile = $('.header-mobile-menu-icon')


function setFavicon(favImg) {
  const head = document.querySelector('head')
  let setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel', 'shortcut icon');
  setFavicon.setAttribute('href', favImg);
  head.appendChild(setFavicon);
}

setFavicon('https://realisticasia.com/wp-content/uploads/2018/02/cropped-Icon-Logo-Realistic-Asia-Yellow-32x32.png');

// when scroll
document.addEventListener('scroll', () => scroll())

scroll()
login()


function scroll() {
  const headerContact = $('.header-contact')
  const headerNavigation = $('.header-nav')

  if (window.scrollY >= headerContact.offsetHeight) {
    headerContact.style.transform = 'translateY(-100%)'
    headerNavigation.style.cssText = `
        position: fixed; 
        top: 0; 
        left: 0; 
        right: 0; 
        background: #fff;
        transform: translateY(0);
        color: #000;
        box-shadow: 0 1px 8px rgba(0, 0, 0, .2);
        `
  }
  else if (window.scrollY == 0) {
    if (page === '' || page === 'index.html' || page === 'special-offer.html' || page === 'responsible-travel.html' || page === 'destination.html' || page === 'our-team.html') {
      headerContact.style.cssText = `transform: translateY(0);
        z-index: 1;
      position: relative;
      `
      headerNavigation.style.cssText = `
          position: fixed;
          color: #fff;
        `
    } else {
      headerContact.style.transform = 'translateY(0)'
      headerNavigation.style.cssText = `
          position: fixed;
          color: #fff;
          background: #1c1c1c;
        `
    }
  }
}



headerMobile.onclick = (e) => {
  e.preventDefault()
  $('.header-mobile-menu-icon').classList.toggle('active')
}

$$('.header-mobile-menu-item').forEach((element) => {
  element.onclick = () => {
    if ($('.header-mobile-menu-item.active')) {
      $('.header-mobile-menu-item.active').classList.remove('active')
    }
    element.classList.toggle('active')
  }
})


$('.fixed-language-title').addEventListener('click', (e) => {
  $('.fixed-language').classList.toggle("active")
})

$('.fixed-contact-wrap').addEventListener('click', (e) => {
  $('.fixed-contact-wrap').classList.toggle("active")
})

$('.fixed-chat-label').addEventListener('click', () => {
  $('.fixed-chat').classList.add('active')
})

$('.fixed-chat-content-head-close').addEventListener('click', () => {
  $('.fixed-chat.active').classList.remove('active')
})

$$('.author-body-panel-item').forEach((panel, index) => {
  panel.onclick = () => {
    $('.author-body-panel-item.active').classList.remove('active')
    panel.classList.add('active')

    if (index === 0) {
      $('.author-body-login').style.display = 'block'
      $('.author-body-register').style.display = 'none'
    } else {
      $('.author-body-login').style.display = 'none'
      $('.author-body-register').style.display = 'block'
    }
  }
})

function login() {
  $('.author').addEventListener('click', () => {
    openRegister()
  })
  $('.author-body').addEventListener('click', (e) => {
    e.stopPropagation()
  })

  $('.register-btn').addEventListener('click', () => {
    openRegister()
  })

  function openRegister() {
    $('.author').classList.toggle('active')
  }
}