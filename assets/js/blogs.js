const blogs = [
  {
    path: `https://realisticasia.com/wp-content/uploads/2021/10/Con-Dao-Island-550x550.png`,
    title: `10 Things To Do In Best Places To Visit In Vietnam`,
    description: `One of the best places to visit in Vietnam, Con Dao is an archipelago of 16 islands among which Con Son is the biggest one. The immense beauty of forested hills, white sandy beaches, and colorful and diverse coral reefs `,
    date: `November 9, 2022`,
    tag: `Blogs`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2021/09/What-will-you-go-first-when-the-world-reopens-for-travel-550x550.png`,
    title: `Post Pandemic Bucket List For Travelers`,
    description: `Are you itchy to travel again once the country’s border reopens? Due to the widespread of Covid-19, some tourist attractions are now still off-limits; however, the things we’ll do when the vaccines are distributed and the pandemic is over! We `,
    date: `November 9, 2022`,
    tag: `Blogs`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2021/09/Best-Recommendation-550x550.png`,
    title: `What’s The Best Recommendation For A Budget Trip?`,
    description: `1. How to find the best hotels in Vietnam? Scanning through review first Vietnam has a lot of high-rated hotels and charismatic places with relatively cheap prices. If you are on a budget trip, filtering out the 8-9 range might help you`,
    date: `November 9, 2022`,
    tag: `Blogs`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2021/09/ebbe4ad0bdf-550x550.jpg`,
    title: `Top Notch Dishes You Shouldn’t Miss Out When Visiting Thailand`,
    description: `Thai food novices should try those dishes to get the taste of the world’s famous cuisine and dishes. Those dishes are iconic among treasured Thai cuisine with appetizing flavors and blends of fresh quintessential Thai ingredients. 1. Pad Thai (Stir-fried noodles) Pad `,
    date: `November 9, 2022`,
    tag: `Blogs`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2021/09/10-Best-Things-To-Do1-500x550.png`,
    title: `10 Incredible Things To Do in Vietnam After The Pandemic`,
    description: `Refresh your inspiration and embark on your passion for travel after covid is controlled, let’s explore 10 interesting things and don’t miss out on what you should do when traveling to Vietnam 1. Tastes Of Hanoi – Culinary Tours The capital city`,
    date: `November 9, 2022`,
    tag: `Blogs`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2021/09/Top-Rustic-Resort-550x550.png`,
    title: `Top Rustic Resort For Getting Back To Mother Nature`,
    description: `Staying connected with nature while charging up the energy is the notable focus of staying here. Those eco-friendly resorts will bring you the best moments ever. 1, Mai Chau Hideaway Resort Mai Chau Hideaway Resort (Mai Chau Hideaway) is the only ecological `,
    date: `November 9, 2022`,
    tag: `Blogs`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2021/09/Top-Vietnamese-Cultural-Show-and-Performances-1-550x550.png`,
    title: `Top Vietnamese Cultural Show and Performances`,
    description: `1/ Traditional Vietnamese Water puppet Legend has it that, from about 1000 years ago this performance was inspired by the common life of peasants in Northern Vietnam. The stage has a frugal appearance in the middle of a shallow pond formed `,
    date: `November 9, 2022`,
    tag: `Blogs`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2021/09/Best-Beaches-Destination-550x550.png`,
    title: `Best Beach Destinations In Vietnam`,
    description: `Vietnam has a 3200 km coastline that spreads from North to South. This lets the country offer a stunning place for a beach break at any time of the year. Clear warm water, white sand beaches, reclining palms, and a`,
    date: `November 9, 2022`,
    tag: `Blogs`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2021/09/Family11-550x550.jpg`,
    title: `Traveling In Vietnam With Kids – 10 Best Activities To Do`,
    description: `Vietnam is a great place for traveling with children. A family holiday here will be safe, interesting, educational, and fun. But the main question in organizing a family vacation is what would be the best activities for the children. So here we will`,
    date: `November 9, 2022`,
    tag: `Blogs`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2021/09/Top-Venues-1-550x550.png`,
    title: `Top Venues For Destination Wedding In Vietnam`,
    description: `Vietnam is a wonderful place to visit as it offers everything you want to add to your journey; a fascinating culture, delectable cuisine, magnificent natural landscapes mix with the colorful chaotic cities. And, in recent years, Vietnam becomes an amazing `,
    date: `November 9, 2022`,
    tag: `Blogs`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2021/09/Features-Social-Media-Pinterest-Pin-1080-x-1920-1-1-550x550.png`,
    title: `Guide For Vietnam Trekking Tours in Sapa`,
    description: `A big part of Vietnam is covered by mountains with dramatic landscapes, stunning treks routes, and friendly people. Vietnam trekking tours attract many adventure lovers from all around the world and remain at the top of the bucket list for`,
    date: `November 9, 2022`,
    tag: `Blogs`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2021/09/Unmissable-UNESCO-World-Heritage-Site-For-Facebook-550x550.png`,
    title: `6 Unmissable UNESCO World Heritage Sites in Vietnam`,
    description: `The diverse and alluring charms of Vietnam can make it difficult for you to decide where to visit on your first-time trip.  With our Vietnam Private Tours,  we take you on the journey through the highlights which play essential parts `,
    date: `November 9, 2022`,
    tag: `Blogs`,
    name: `admin`
  },]

blogs.forEach((blog) => {
  let blogItem = `
    <div class="col l-3 m-6 s-12">
    <div class="blog-news-content-item">
      <div class="blog-news-content-item-img">
        <a href="#" class="blog-news-content-item-img-link">
          <img src="${blog.path}" alt="">
        </a>
      </div>
      <h4 class="blog-news-content-item-title"><a href="#" class="blog-news-content-item-title-link">${blog.title}</a></h4>
      <p class="blog-news-content-item-description">${blog.description}</p>
      <div class="blog-news-content-item-author">
        <div class="blog-news-content-item-author-date">
          <i class="fa-regular fa-calendar"></i>
          <p class="blog-news-content-item-author-date-info"><a href="#"
              class="blog-news-content-item-author-date-info-link">${blog.date}</a></p>
        </div>
        <div class="blog-news-content-item-author-tag">
          <i class="fa-solid fa-tag"></i>
          <p class="blog-news-content-item-author-tag-info"><a href="#"
              class="blog-news-content-item-author-tag-info-link">${blog.tag}</a></p>
        </div>
        <div class="blog-news-content-item-author-name">
          <p class="blog-news-content-item-author-name-info">
            By <a href="#" class="blog-news-content-item-author-name-link">${blog.name}</a>
          </p>
        </div>
      </div>
    </div>
  </div>`
  $('.blog-content .row').insertAdjacentHTML('beforeend', blogItem)
})