const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


run()
function showList(selector) {
  const _this = $(selector)
  const list = _this.querySelector('.home-select-option-list')

  if (list.style.visibility == 'hidden') {
    list.style.cssText = `height: auto; visibility: visible;`
  } else {
    list.style.cssText = `height: 0; visibility: hidden;`
  }
}

function getParentElement(selector) {
  return $(selector).parentNode;
}

function run() {
  const slide = [{
    title: 'adventurous',
    img: './assets/img/Thailand-Banner-new-1.jpg'
  }, {
    title: 'life-changing',
    img: './assets/img/Vietnam-Banner-new-1.jpg'
  },
  ]


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
  let index = 0
  const arr = [{ label: 'adventurous', path: 'Vietnam-banner-new-1.jpg' },
  { label: 'adventurous', path: 'shutterstock_637433827.jpg' },
  { label: 'life-changing', path: 'Cambodia-banerr.jpg' },
  { label: 'life-changing', path: 'Laos-banner-new-1.jpg' },
  { label: 'life-changing', path: 'Thailand-Banner-new-1.jpg' }]

  click()

  function click() {
    $('.home-slide-navigation-right').onclick = () => {
      index++
      if (index >= arr.length) {
        index = 0
      }

      if ($('.home-slide-my-img.active')) {
        $('.home-slide-my-img.active').classList.remove('active')
      }
      $$('.home-slide-my-img')[index].classList.add('active')
    }


    $('.home-slide-navigation-left').onclick = () => {
      index--
      if (index < 0) {
        index = arr.length - 1
      }

      if ($('.home-slide-my-img.active')) {
        $('.home-slide-my-img.active').style.cssText = 'opacity: 0, visibility: hidden, '
      }
      $$('.home-slide-my-img')[index].classList.add('active')
    }
  }
}