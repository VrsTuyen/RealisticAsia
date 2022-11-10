const webPath = `https://realisticasia.com/`

const tours = [
  {
    img: webPath + `/wp-content/uploads/2022/09/Nha-Trang-7-550x550.jpg`,
    title: `Vietnam Beach Holiday In 13 Days`,
    description: `Beach Holiday In 13 Days`,
    discount: `1922`,
    currentPrice: `1038`,
  }, {
    img: webPath + `/wp-content/uploads/2021/11/Pedal-To-The-Ancient-Temples-In-Cambodia-550x550.jpg`,
    title: `Pedal To The Ancient Temples Of Cambodia In 10 Days`,
    description: `Cambodia will show you incredible&hellip;`,
    discount: `2501`,
    currentPrice: `1351`,
  }, {
    img: webPath + `/wp-content/uploads/2022/09/Nha-Trang-9-550x550.jpg`,
    title: `Vietnam Beach Holiday In 13 Days`,
    description: `Vietnam Beach Holiday In 13&hellip;`,
    discount: `1922`,
    currentPrice: `1038`,
  }, {
    img: webPath + `/wp-content/uploads/2022/09/Mai-Chau-550x550.jpg`,
    title: `Inspiring Vietnam In 14 Days`,
    description: `Let’s join the Inspiring Vietnam&hellip;`,
    discount: `3629`,
    currentPrice: `1960`,
  }, {
    img: webPath + `/wp-content/uploads/2021/12/kho-samui-550x550.jpg`,
    title: `Off The Beaten Tracks of Southern Thailand In 14 Days`,
    description: `Thailand is a beautiful place&hellip; `,
    discount: `4461`,
    currentPrice: `2409`,
  }, {
    img: webPath + `/wp-content/uploads/2022/08/bun-cha-550x550.jpg`,
    title: ` Vietnam Foodie&#8217;s Paradise In 10 Days`,
    description: `Vietnam Foodie&#8217;s Paradise offers travelers&hellip;`,
    discount: `1707`,
    currentPrice: `922`,
  }, {
    img: webPath + `/wp-content/uploads/2022/08/ha-noi-550x550.jpg`,
    title: `Discover Vietnam &#8211; Cambodia &#8211; Thailand in 22 Days`,
    description: `Discover Vietnam – Cambodia –&hellip;`,
    discount: `5135`,
    currentPrice: `2567				`,
  }, {
    img: webPath + `/wp-content/uploads/2022/08/Tonle_Sap-550x550.jpg`,
    title: `Indochina Uncovered In 19 Days`,
    description: `Hardly did you have such&hellip;`,
    discount: `5970`,
    currentPrice: `2985`,
  }, {
    img: webPath + `/wp-content/uploads/2021/12/Jewels-of-Cambodia-and-Vietnam-550x550.jpg`,
    title: `Heritage Trails of Vietnam and Cambodia In 14 Days`,
    description: `Heritage Trails of Vietnam and&hellip;`,
    discount: `4199`,
    currentPrice: `2100`,
  },
]


tours.forEach((tour) => {
  let tourItem = `
    <div class="col l-4 m-6 s-12">
      <a href="" class="special-body-tour-item">
        <div class="special-body-tour-item-img">
          <img draggable="false"
            src="${tour.img}" alt="">
        </div>
        <div class="special-body-tour-item-content">
          <div class="special-body-tour-item-content-title">
            ${tour.title}
          </div>
          <p class="special-body-tour-item-content-description">
           ${tour.description}
          </p>
          <div class="special-body-tour-item-content-price">
            <p class="special-body-tour-item-content-price-discount">$${tour.discount.trim()}</p>
            <p class="special-body-tour-item-content-price-current">$${tour.currentPrice.trim()}</p>
          </div>
        </div>
      </a>
    </div>
  `
  $('.special-body-tour .row').insertAdjacentHTML('beforeend', tourItem)

})