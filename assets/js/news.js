const blogs = [
  {
    path: `https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg`,
    title: `Realistic Asia’s Amazing Travel Deals With 2023 Departures`,
    description: `Realistic Asia’s Amazing Travel Deals With 2023 Departures
    We are proud to have partnered with Travel Stride for already 4 years and deliver amazing deals across the globe. And we would like to present the new collection of our amazing Indochina deals with 2023 departures. This site is the `,
    date: `November 9, 2022`,
    tag: `News`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2022/03/bamboo_airways.jpg`,
    title: `International flight raises as Vietnam reopens`,
    description: `After two-year, international routes and services will be expand by domestic carriers this March after the government agreed Vietnam reopens with relaxed tourism policies. Regular weekly round-trip flight between Danang and Singapore which operated by flag carrier Vietnam Airlines would resume`,
    date: `November 9, 2022`,
    tag: `News`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2022/03/vietnam-travel-reopen-1100x550.jpg`,
    title: `Vietnam visa exemption resumes`,
    description: `On Tuesday, the government has agreed to resume Vietnam visa exemption policy for citizens from 13 countries like before the pandemic. Citizens from Belarus, Denmark, Finland, France, Germany, Italy, Japan, Norway, Russia, South Korea, Spain, Sweden, and the U.K. will be `,
    date: `November 9, 2022`,
    tag: `News`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2022/03/Trang_An_Ninh_Binh-1100x550.jpg`,
    title: `Vietnam should end covid test for visitors`,
    description: `The Tourism advisory Board has suggested government should end covid test for visitors to enter the country as Vietnam is going to open fully from March 15. Experts suggest foreign and domestic tourists should be treated alike. Right now, quarantine and`,
    date: `November 9, 2022`,
    tag: `News`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2022/03/tourist_wear_mask_in_Hanoi-1100x550.jpg`,
    title: `Enter Vietnam without vaccine certificate`,
    description: `The Ministry of Health is seeking opinions that foreigners enter Vietnam don't need to furnish a Covid-19 vaccination or recovery certificate. As ministry’s draft plan, negative RT-PCR test for Covid within 72 hours before flight departs or rapid test within 24`,
    date: `November 9, 2022`,
    tag: `News`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2022/03/tourist_in_Hanoi-1100x550.jpg`,
    title: `Should not worry when Vietnam reopen`,
    description: `Vietnam reopen border for international tourists from 15 March. The government is suggested don’t worry about foreign infection but should be confident when reopening. From 15 March, Vietnam reopen border for international tourists. The government is suggested don’t worry about foreign`,
    date: `November 9, 2022`,
    tag: `News`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2022/03/Hanoi_capital_of_Vietnam-1100x550.jpg`,
    title: `Searches for Vietnam grow before reopening`,
    description: `Searches for Vietnam tourism between December and February grew the fastest in the world at 75 percent as the country prepares to fully reopen inbound tourism next month, according to data from Google's Destination Insights. Other countries also have high search `,
    date: `November 9, 2022`,
    tag: `News`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2022/03/Khanh_Hoa_Province-1100x550.jpg`,
    title: `Khanh Hoa expects 40,000 foreign visitor`,
    description: `Khanh Hoa is home of beautiful beach towns of Nha Trang and Cam Ranh has set a target for welcoming 40,000 foreign tourists until the end of 2022. The central province has said it would focus in particular on high-spending tourism `,
    date: `November 9, 2022`,
    tag: `News`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2022/03/Tourists_wear_mask_in_Vietnam-1100x550.jpg`,
    title: `No entry restriction, said Tourism ministry`,
    description: `No entry restriction for foreigners who want to enter Vietnam after the country fully open for tourism after 15 March. A proposal by the Health Ministry which suggest to increase restriction such as isolation time and Covid-19 tests for foreign enter `,
    date: `November 9, 2022`,
    tag: `News`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2022/03/Hue_city_at_night-1100x550.jpg`,
    title: `Hue night-time tourism new experiences`,
    description: `A series of Hue night-time tourism including cultural activities and art performances at night expect to diversify travel experiences. Local government of Thue Thien-Hue Province inform that the plan will be start from the second quarter of this year. Art programs`,
    date: `November 9, 2022`,
    tag: `News`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2022/03/HCM_War_Remnants_Museum-1100x550.jpg`,
    title: `War Remnants Museum listed as Asia’s top`,
    description: `HCMC’s War Remnants Museum was named in list of 10 best museums in Asia by The Travel, a tourism website from Canda. The article on website says: "It was built in remembrance of the war in Vietnam. The museum contains many`,
    date: `November 9, 2022`,
    tag: `News`,
    name: `admin`
  }, {
    path: `https://realisticasia.com/wp-content/uploads/2022/03/Tourists_in_Singapore-1100x550.jpg`,
    title: `Vietnamese enter Singapore with no limit`,
    description: `Vietnamese enter Singapore from mid-March 2020 won’t be quarantine anymore. Singapore is going to fully reopening international tourism on 17 March. From 16 March, one day before the country open border, two-way quarantine-free travel policy for Vietnamese enter Singapore will be `,
    date: `November 9, 2022`,
    tag: `News`,
    name: `admin`
  },]

blogs.forEach((blog) => {
  let blogItem = `
    <div class="col l-6 m-6 s-12">
      <div class="blog-news-content-item">
        <div class="blog-news-content-item-img">
          <a href="#" class="blog-news-content-item-img-link">
            <img src="${blog.path}" alt="">
          </a>
        </div>
        <h4 class="blog-news-content-item-title"><a href="#"
            class="blog-news-content-item-title-link">${blog.title}</a></h4>
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

  $('.travel-news-body .row').insertAdjacentHTML('beforeend', blogItem)
})