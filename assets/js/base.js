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
    if (page === '' || page === 'index.html') {
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
