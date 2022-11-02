const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

document.addEventListener('scroll', (e) => {

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
    `

  }
  else if (window.scrollY == 0) {
    headerContact.style.transform = 'translateY(0)'
    headerNavigation.style.cssText = `
      position: fixed;
      color: #fff;
    `
  }
})

function getParentElement(selector) {
  return $(selector).parentNode;
}

function showList(selector) {
  const _this = $(selector)
  const list = _this.querySelector('.home-select-option-list')

  if (list.style.visibility == 'hidden') {
    list.style.cssText = `height: auto; visibility: visible;`
  } else {
    list.style.cssText = `height: 0; visibility: hidden;`
  }
}