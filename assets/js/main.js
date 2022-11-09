
const assetsImg = './assets/img/'

const selectMonth = $('.home-slide-option-select.home-select-month')
const selectOptionListMonth = selectMonth.querySelector('.home-select-option-list')
const selectTitleMonth = selectMonth.querySelector('.home-select-option-text')

const selectTravelType = $('.home-slide-option-select.home-select-travel-type')
const selectOPtionListTravel = selectTravelType.querySelector('.home-select-option-list')
const selectTitleTravel = selectTravelType.querySelector('.home-select-option-text')

const homeSlideImg = $('.home-slide-img')
const homeLabelSlideImg = $('.home-slide-center-content-label')

const months = ["when?", "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];



const travelType = ["Travel Type?", "Adventure Travel", "Battambang Tour", "Beach Vacation",
  "Cambodia Tours", "Culinary Tours", "Family Vacation", "Ha Long Bay Tours", "Hanoi Tours",
  "Ho Chi Minh City Tours", "Hoi An Tours", "Hue tours", "India tours", "laos tours",
  "luang prabang tours", "luxury tours", "mekong tours", "phu quoc island tours",
  "romantic getaways", "sapa tours", "siem reap tours", "slow journey & solo travel",
  "special offers", "thailand tours", "vientiane tours", "vietnam tours", "wellness tours"]


let currentImg = 0

const homeSlide = [{ label: 'adventurous', path: 'Vietnam-banner-new-1.jpg' },
{ label: 'adventurous', path: 'shutterstock_637433827.jpg' },
{ label: 'life-changing', path: 'Cambodia-banerr.jpg' },
{ label: 'life-changing', path: 'Laos-banner-new-1.jpg' },
{ label: 'life-changing', path: 'Thailand-Banner-new-1.jpg' }]

let currentReview = 0
const reviewNavigationLeft = $('.home-review-content-navigation .navigation-left')
const reviewNavigationRight = $('.home-review-content-navigation .navigation-right')

const reviews = [{
  avt: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ef/73/default-avatar-2020-13.jpg?w=100&h=100&s=1',
  name: 'claire4383',
  date: 'September 12, 2022.',
  title: 'Amazing Cambodia and Vietnam tour ',
  content: 'From start to finish the communication from Realistic Asia was amazing. We were able to tailor our tour to us through discussions with our agent Lucy. She was also on hand throughout our tour to answer any questions about timings or activities we had which gave us real peace of mind. The actual trip went perfectly, all the hotels were great, all the pre-arranged travel went smoothly and on time. The tour guides were all knowledgeable and friendly and we couldn’t have asked for more. the tour package whilst fitting a lot in also managed to provide us with some free time so it didn’t feel rushed. We had an incredible trip and loved every moment of it. Would definitely use this tour company again and would highly recommend them.',
}, {
  avt: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e7/3d/default-avatar-2020-55.jpg?w=100&h=100&s=1',
  name: 'Swati',
  date: 'September 5, 2022.',
  title: 'Thank you Lucy!',
  content: 'We got very lucky with finding Lucy! We booked our transport and cruise through her and both the things were seamless. She was helpful throughout the trip and gave incredible recommendations.',
}, {
  avt: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/63/8f/08/brian-l.jpg?w=100&h=100&s=1',
  name: 'Brian L',
  date: 'August 17, 2022.',
  title: 'Xin Chao Vietnam',
  content: 'This was an amazing tour. Flawless and seamless with Realistic Asia. All of our guides were great and Lucy Do was wonderful.',
}, {
  avt: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/33/76/d0/travelwithtupi.jpg?w=100&h=100&s=1',
  name: 'Travelwithtupi',
  date: 'June 11, 2022.',
  title: 'One of the Best Trips I have ever Had',
  content: `If you're planning to visit Vietnam, this is the best Local Travel Agency. I flew from India last moment with my father. Usually last moment trip have lots of confusion and things might go wrong way. But these people were prepared with our entire trip. We had started from Hanoi and Ended at Hanoi and visited Halong Bay, Hoi An and Da Nang.

  Mr. Dat was very helpful and generous, he ensured everything went well with us. From picking us from the airport to transferring us to another city. I had made a special with respect to we guys not eating Beef as we are Indians, the fact that everyone was aware about it was really good to see. He ensure our trip could be as customised as possible.
  
  Our trip focused on the leisure part as well as understanding the culture of the vietnamese people and the blend of both made our trip fantastic!`,
},
{
  avt: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f2/7a/default-avatar-2020-25.jpg?w=100&h=100&s=1',
  name: 'Mike K',
  date: 'March 29, 2020.',
  title: 'The tour was awesome and so was Realistic Asia!',
  content: `We were on a 16 day trip through Vietnam, Cambodia and Thailand organized by Realistic Asia and absolutely loved it! They organized all of the flights to Vietnam and then home from Thailand, as well as the internal flights. They also booked the hotels and the tours, although we did organize some additional tours ahead of time on our own for the leisure days. Each of the tours tended to be run by people local to the city being visited and each of the tour guides was very professional and very enjoyable.

  The itinerary was such that we started in Vietnam, beginning in Hanoi and then Hoi An, and Ho Chi Minh city, then to Siem Reap, Cambodia and finally ending in Phuket, Thailand. Each of the places was different and had things to admire and explore. Phuket was the beach place, although we found Hoi An had a great beach as well.
  
  We were very impressed and very happy with each and every hotel we were booked into. They were all very clean, nice and safe and had great staff. Would happily go back to stay at every one of them again.
  
  The travel agent who worked with us, David Huynh (Dat) was amazing! He was super responsive both before the trip when we had questions and during the trip when we were unsure about anything. We were on the leading edge of the Coronavirus pandemic and he actually noticed that our original flight to Vietnam was going through Seoul and we would have been forced to quarantine upon landing in Vietnam so he went ahead and changed our flights just days before we were to leave. We then got a notice that our flight home had been cancelled and that we needed to catch a flight home a day later. He went ahead and extended our hotel stay another night. We didn't even have to pay.
  
  We did not know what to expect when we booked the tour but after having gone we would enthusiastically recommend Realistic Asia and we would definitely go on another trip with them.`,
},
{
  avt: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f2/eb/default-avatar-2020-27.jpg?w=100&h=100&s=1',
  name: 'Joanie155',
  date: 'March 16, 2020.',
  title: 'Vietnam and Cambodia 16 days',
  content: `Just did the Authentic Cambodia/Vietnam 16 day trip and loved it. There is so much history in those 2 places and it was wonderful to see. Dat was our agent and he was very good at responding to our questions. The only negative was 1 of the guides whose English was very bad which made her very hard to understand. All in all the trip was a great success.`,
},
{
  avt: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e9/bb/default-avatar-2020-65.jpg?w=100&h=100&s=1',
  name: 'Martyn Taylor',
  date: 'March 15, 2020.',
  title: 'Tour of Hanoi',
  content: 'Despite the closures due to Covid19 our tour guide Chung gave us great tour and his english was excellent. He also gave us great advise and a highlight was introducing us to Egg Coffee in Hanoi.',
}
]

let svg = `<svg version="1.1" id="Réteg_1" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128 128"
style="enable-background:new 0 0 128 128;" xml:space="preserve">
<style type="text/css">
  .st0 {
    fill: #11AD87;
  }

  .st1 {
    fill: #FFFFFF;
  }
</style>
<circle class="st0" cx="64" cy="64" r="64" />
<circle class="st1" cx="41.8" cy="66.2" r="3.7" />
<circle class="st1" cx="86.3" cy="66.2" r="3.7" />
<path class="st1"
  d="M104.2,53.2c0.9-3.2,2.4-6.2,4.4-8.9l-14.8,0c-8.9-5.5-19.1-8.4-29.6-8.2c-10.7-0.2-21.3,2.7-30.4,8.3l-13.9,0c1.9,2.7,3.4,5.6,4.3,8.8c-7.3,9.9-5.2,23.8,4.7,31c9.6,7.1,23,5.3,30.5-4l4.7,7.1l4.8-7.1c7.6,9.7,21.5,11.3,31.2,3.8C109.5,76.5,111.4,62.9,104.2,53.2z M85.6,44.3C74.3,44.6,65,53.4,64.2,64.8C63.4,53.3,54,44.4,42.5,44.2c6.8-2.8,14.2-4.3,21.6-4.2C71.5,39.9,78.8,41.3,85.6,44.3z M42.1,84.1c-9.8,0-17.7-7.9-17.7-17.7s7.9-17.7,17.7-17.7c9.8,0,17.7,7.9,17.7,17.7c0,0,0,0,0,0C59.8,76.2,51.8,84.1,42.1,84.1z M92.5,83.1c-9.2,3.4-19.4-1.3-22.8-10.5v0c-3.4-9.2,1.3-19.4,10.5-22.8c9.2-3.4,19.4,1.3,22.8,10.5C106.4,69.5,101.7,79.7,92.5,83.1z" />
<path class="st1"
  d="M41.8,55.2c-6.1,0-11,4.9-11,11c0,6.1,4.9,11,11,11c6.1,0,11-4.9,11-11c0,0,0,0,0,0C52.7,60.1,47.8,55.2,41.8,55.2z M41.8,73.4c-4,0-7.2-3.2-7.2-7.2c0-4,3.2-7.2,7.2-7.2s7.2,3.2,7.2,7.2c0,0,0,0,0,0C49,70.1,45.8,73.3,41.8,73.4z" />
<path class="st1"
  d="M86.3,55.2c-6.1,0-11,4.9-11,11s4.9,11,11,11c6.1,0,11-4.9,11-11c0,0,0,0,0,0C97.2,60.1,92.3,55.2,86.3,55.2z	M86.3,73.4c-4,0-7.2-3.2-7.2-7.2c0-4,3.2-7.2,7.2-7.2c4,0,7.2,3.2,7.2,7.2c0,0,0,0,0,0C93.5,70.1,90.3,73.4,86.3,73.4z" />
</svg>`

reviews.forEach((review, index) => {
  let reviewItem = ''
  let active = ''
  if (index === currentReview) {
    active = `<div class="comment-slide-item active">`
  } else {
    active = `<div class="comment-slide-item">`
  }

  reviewItem = active + `
  <div class="comment-slide-head">
    <img src="${review.avt}" alt="" class="comment-slide-head-img">
    <div class="comment-slide-info">
      <h5 class="comment-slide-info-name">${review.name}</h5>
      <p class="comment-slide-info-date">${review.date}</p>
    </div>
  </div>
  <div class="comment-slide-body">
    <div class="comment-slide-body-head">
      <div class="comment-slide-body-check">
        <div class="comment-slide-body-check-rate">
          <i class="fa-regular fa-circle-dot"></i>
          <i class="fa-regular fa-circle-dot"></i>
          <i class="fa-regular fa-circle-dot"></i>
          <i class="fa-regular fa-circle-dot"></i>
          <i class="fa-regular fa-circle-dot"></i>
        </div>
        <div class="comment-slide-body-check-verify">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.26701 3.45496C6.91008 3.40364 7.52057 3.15077 8.01158 2.73234C9.15738 1.75589 10.8426 1.75589 11.9884 2.73234C12.4794 3.15077 13.0899 3.40364 13.733 3.45496C15.2336 3.57471 16.4253 4.76636 16.545 6.26701C16.5964 6.91008 16.8492 7.52057 17.2677 8.01158C18.2441 9.15738 18.2441 10.8426 17.2677 11.9884C16.8492 12.4794 16.5964 13.0899 16.545 13.733C16.4253 15.2336 15.2336 16.4253 13.733 16.545C13.0899 16.5964 12.4794 16.8492 11.9884 17.2677C10.8426 18.2441 9.15738 18.2441 8.01158 17.2677C7.52057 16.8492 6.91008 16.5964 6.26701 16.545C4.76636 16.4253 3.57471 15.2336 3.45496 13.733C3.40364 13.0899 3.15077 12.4794 2.73234 11.9884C1.75589 10.8426 1.75589 9.15738 2.73234 8.01158C3.15077 7.52057 3.40364 6.91008 3.45496 6.26701C3.57471 4.76636 4.76636 3.57471 6.26701 3.45496ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z"
              fill="#4B5563" />
          </svg>
          <p>verified</p>
        </div>
      </div>
      ${svg}
    </div>
    <div class="comment-slide-body-content">
      <div class="comment-slide-body-content-title">
       ${review.title}
      </div>
      <p class="comment-slide-body-content-paragraph">
        ${review.content}
      </p>
    </div>
  </div>
</div>`

  let navigation = index === currentReview ? `
  <div class="comment-slide-bottom-nav-index active"></div>
  ` : `
  <div class="comment-slide-bottom-nav-index"></div>
  `
  $('.comment-slide-bottom-nav').insertAdjacentHTML('beforeend', navigation)
  $('.home-review-content-comment-slide .comment-slide').insertAdjacentHTML('Beforeend', reviewItem)
})


reviewNavigationLeft.onclick = () => slideReview(-1)

reviewNavigationRight.onclick = () => slideReview(1)

function slideReview(index) {
  currentReview += index

  if (currentReview >= reviews.length - 1) {
    reviewNavigationRight.style.visibility = 'hidden'
  }
  else if (currentReview <= 0) {
    reviewNavigationLeft.style.visibility = 'hidden'
  }
  else {
    reviewNavigationLeft.style.visibility = 'visible'
    reviewNavigationRight.style.visibility = 'visible'
  }
  $('.comment-slide-item.active').classList.remove('active')
  $$('.comment-slide-item')[currentReview].classList.add('active')
  // $('.comment-slide-item.active').style.cssText = `
  //   animation: slideToLeft 1s
  // `
  changeNavigation(currentReview)
}

if (currentReview >= reviews.length - 1) {
  reviewNavigationRight.style.visibility = 'hidden'
}
if (currentReview <= 0) {
  reviewNavigationLeft.style.visibility = 'hidden'
}
else {
  reviewNavigationLeft.style.visibility = 'visible'
  reviewNavigationRight.style.visibility = 'visible'
}


function changeNavigation(index) {
  $('.comment-slide-bottom-nav-index.active').classList.remove('active')
  $$('.comment-slide-bottom-nav-index')[index].classList.add('active')
}

addOptions(months, selectOptionListMonth)
addOptions(travelType, selectOPtionListTravel)


homeSlide.forEach((element, index) => {
  let img = ``
  let label = ''
  if (index === 0) {
    img = `<img class = "home-slide-my-img active" src="${assetsImg + element.path}" alt="">`
    label = `
    <div class="home-slide-center-content-label-item active">
      <div class="home-slide-center-content-label-text">${element.label}</div>
      <div class="home-slide-center-content-label-img">
        <img src="./assets/img/slider-1-img-1.png" alt="">
      </div>
    </div>`
  }
  else {
    img = `<img class = "home-slide-my-img" src="${assetsImg + element.path}" alt="">`
    label = `
    <div class="home-slide-center-content-label-item">
      <div class="home-slide-center-content-label-text">${element.label}</div>
      <div class="home-slide-center-content-label-img">
        <img src="./assets/img/slider-1-img-1.png" alt="">
      </div>
    </div>`
  }
  homeSlideImg.insertAdjacentHTML('beforeend', img)
  homeLabelSlideImg.insertAdjacentHTML('beforeend', label)

})

function addOptions(list, selectorOPtionList) {
  list.forEach((item) => {
    let li = `<li class="home-select-option-item" onclick = "updateValue(this)">${item}</li>`
    selectorOPtionList.insertAdjacentHTML('beforeend', li)
  })
}

selectMonth.addEventListener('click', () => {
  selectMonth.classList.toggle('active')
})

selectTravelType.addEventListener('click', () => {
  selectTravelType.classList.toggle('active')
})


function updateValue(selectedLi) {
  selectedLi.parentNode.parentNode.querySelector('.home-select-option-text').innerText = selectedLi.innerText
}


function getParentElement(selector) {
  return $(selector).parentNode;
}



// navigation right
$('.home-slide-navigation-right').onclick = () => slideImg(1)

// navigation left
$('.home-slide-navigation-left').onclick = () => slideImg(-1)

function reloadLabel(currentImg) {
  $('.home-slide-center-content-label-item.active').classList.remove('active')
  $$('.home-slide-center-content-label-item')[currentImg].classList.add('active');
}

function slideImg(index) {
  currentImg += index
  if (currentImg >= homeSlide.length) {
    currentImg = 0
  } else if (currentImg < 0) {
    currentImg = homeSlide.length - 1
  }

  if ($('.home-slide-my-img.active')) {
    $('.home-slide-my-img.active').classList.remove('active')
    reloadLabel(currentImg)
  }
  $$('.home-slide-my-img')[currentImg].classList.add('active')
}

setInterval(() => slideImg(1), 10000)




function returnFalse() {
  return false
}