<!DOCTYPE html>
<html lang="en">

<head>
  <?php
  include "./layout/link.html";
  include "./databases/config.php";

  ?>

  <title>Home - Realistic Asia Travel</title>
</head>

<body>
  <header>
    <?php
    include "./layout/header-contact.html";
    ?>
    <div class="header-nav">
      <div class="grid wide">
        <div class="row">
          <div class="col l-12 m-12 s-12">
            <div class="header-nav-container">
              <div class="header-mobile-menu">
                <div class="header-mobile-menu-icon">
                  <i class="fi fi-rr-menu-burger"></i>
                </div>
                <ul class="header-mobile-menu-list">
                  <li class="header-mobile-menu-item"><a href="./">home</a></li>
                  <li class="header-mobile-menu-item">
                    <a>about us <i class="fi fi-rr-angle-right"></i></a>

                    <ul class="header-mobile-sub-menu">
                      <li class="header-mobile-sub-menu-item"><a href="./about-us.php">about us</a></li>
                      <li class="header-mobile-sub-menu-item"><a href="./our-team.php">our team</a></li>
                      <li class="header-mobile-sub-menu-item"><a href="./contact-us.php">contact us</a></li>
                    </ul>
                  </li>
                  <li class="header-mobile-menu-item"><a>Experiences <i class="fi fi-rr-angle-right"></i></a>

                    <ul class="header-mobile-sub-menu">
                      <li class="header-mobile-sub-menu-item"><a href="./travel-experiences.php">Experiences</a></li>
                      <li class="header-mobile-sub-menu-item"><a href="./blog.php">Blogs</a></li>
                      <li class="header-mobile-sub-menu-item"><a href="./travel-news.php">Travel News</a></li>
                    </ul>
                  </li>
                  <li class="header-mobile-menu-item"><a href="./destination.php">destinations</a></li>
                  <li class="header-mobile-menu-item"><a href="./responsible-travel.php">responsible travel</a></li>
                  <li class="header-mobile-menu-item"><a href="./special-offer.php">special offers</a></li>
                </ul>
              </div>
              <div class="header-logo">
                <a href="./">
                  <img src="https://realisticasia.com/wp-content/uploads/2018/02/Realistic-asia-menu-logo-moi.png"
                    alt="Realistic Asia"></a>
              </div>
              <div class="header-navigation">
                <ul class="header-navigation-list">
                  <li class="header-navigation-item active">
                    <a class="header-navigation-link" href="./">
                      <span class="header-navigation-span"><span>
                          Home</span></span>
                    </a>
                  </li>
                  <li class="header-navigation-item">
                    <a class="header-navigation-link">
                      <span class="header-navigation-span">
                        <span> About us</span></span></a>
                    <ul class="header-navigation-sub">
                      <li class="header-navigation-sub-item"><a href="./about-us.php">about us</a></li>
                      <li class="header-navigation-sub-item"><a href="./our-team.php">our team</a></li>
                      <li class="header-navigation-sub-item"><a href="./contact-us.php">contact us</a></li>
                    </ul>
                  </li>
                  <li class="header-navigation-item">
                    <a class="header-navigation-link">
                      <span class="header-navigation-span"><span>
                          Experiences</span></span></a>
                    <ul class="header-navigation-sub">
                      <li class="header-navigation-sub-item"><a href="./travel-experiences.php">Experiences</a></li>
                      <li class="header-navigation-sub-item"><a href="./blog.php">blogs</a></li>
                      <li class="header-navigation-sub-item"><a href="./travel-news.php">travel news</a></li>
                    </ul>
                  </li>
                  <li class="header-navigation-item">
                    <a class="header-navigation-link" href="./destination.php"><span
                        class="header-navigation-span"><span>Destinations</span> </span></a>
                  </li>
                  <li class="header-navigation-item">
                    <a class="header-navigation-link" href="./responsible-travel.php"><span
                        class="header-navigation-span"><span>
                          Responsible Travel</span></span></a>
                  </li>
                  <li class="header-navigation-item">
                    <a class="header-navigation-link" href="./special-offer.php">
                      <span class="header-navigation-span"><span> Special offers</span></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </header>

  <div class="main">
    <div class="home-slide">
      <div class="home-slide-img">
      </div>
      <div class="home-slide-container">
        <div class="grid wide">
          <div class="row">
            <div class="col l-12 m-12 s-12">
              <div class="home-slide-container-content">
                <div class="home-slide-navigation-left">
                  <i class="fi fi-rr-angle-left"></i>
                </div>
                <div class="home-slide-center-content">
                  <div class="home-slide-center-content-label">

                  </div>
                  <h2 class="h2-heading">Your journey begin</h2>
                  <p class="home-slide-center-content__p">More than discovering the wonders of the world and tasting the
                    finest cuisines, <br /> Realistic Asia brings people together, creates lasting memories and gives
                    new perspectives on life.
                  </p>
                </div>

                <div class="home-slide-navigation-right">
                  <i class="fi fi-rr-angle-right"></i>
                </div>
              </div>
              <div class="row">
                <div class="col l-12 m-12 s-12">

                  <div class="home-slide-find-tour">
                    <div class="home-slide-option-search">
                      <i class="fa-solid fa-location-dot"></i>
                      <input type="text" class="home-slide-option-search__input" placeholder="Where to?">
                    </div>
                    <div class="home-slide-option-select home-select-month">
                      <i class="fa-regular fa-calendar"></i>
                      <div class="selector-month">
                        <div class="home-select-option">
                          <span class="home-select-option-text">When?</span>
                          <i class="home-select-option-arrow fa-solid fa-sort-down"></i>
                          <ul class="home-select-option-list">
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="home-slide-option-select home-select-travel-type">
                      <i class="fa-solid fa-flag"></i>
                      <div class="selector-travel-type">
                        <div class="home-select-option">
                          <span class="home-select-option-text">Travel Type?</span>
                          <i class="home-select-option-arrow fa-solid fa-sort-down"></i>
                          <ul class="home-select-option-list">
                          </ul>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="btn-primary--color">Find now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-media">
      <div class="grid wide">
        <div class="row">
          <div class="col l-12">
            <div class="row">
              <div class="col l-7 m-7 s-12">
                <div class="home-media-content-left" id="home-media">
                  <div class="home-media-content-left-img">
                    <img src="https://realisticasia.com/wp-content/uploads/2021/12/shutterstock_519943411-1-scaled.jpg"
                      alt="">
                  </div>
                  <div class="home-media-content-left-text">
                    <h3 class="h3-heading--kristi"> Get Inspired </h3>
                    <p>Vietnam Timeless Charm</p>
                    <a href="#home-video-overlay" id="video">
                      <i class="fa-solid fa-circle-play"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col l-5 m-5 s-12">
                <div class="home-media-content-right">
                  <h2 class="home-media-content-right-heading">A Simply Perfect Place
                    <br>To Get Lost
                  </h2>
                  <p class="home-media-content-right-description">Seemingly familiar yet completely unexplored. Our
                    extensive insight and mingle with the local life enable travelers to achieve the most authentic
                    experience of indigenous culture and history. Travelers will truly immerse in the rhythm of living
                    like a local in simply perfect places.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-different">
      <div class="grid wide">
        <div class="row">
          <div class="col l-12">
            <div class="home-different-container">
              <div class="home-different-content">
                <h2 class="home-different-title">What Makes Us Different</h2>
                <div class="home-different-description">Realistic Asia follows the ideas of creating memorable
                  vacations,
                  using our endless local knowledge to design authentic itineraries, prioritizing constantly
                  listening,
                  and personalized approach to our guests to spread the true sentiment towards satisfaction of
                  travelers
                  when setting foot on every corner in Southeast Asia.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-destination">
      <div class="grid wide">
        <div class="row">
          <div class="col l-12 m-12 s-12">
            <div class="home-destination-content">
              <h2 class="h2-heading--kristi">Exotic Destinations</h2>
              <p class="p-paragraph--cabin">The contrasts and contradictions of South East Asia never cease to amaze.
                For every cobbled lane in Hoi An, there???s an underground Viet Cong tunnel in Cu Chi. For every carved
                face on Angkor Bayon, there???s a street full of French colonial architecture in Phnom Penh. With
                Realistic Asia, you won???t be ticking off sights from behind a bus window. You???ll see these destinations
                up close and through the eyes of locals. Come on an exciting journey to see an amazingly diverse
                continent, a realm of mystery and legend, and a place where you can encounter culture at its most
                magnificent.</p>
            </div>
            <div class="destination">
              <div class="grid wide">
                <div class="row">
                  <div class="col l-12 m-12 s-12">
                    <div class="destination-container">
                      <div class="row">
                        <div class="col l-8  m-6 s-12 destination-item">
                          <a href="#" class="destination-item-link">
                            <img class="destination-item-img" src="./assets/img/shutterstock_637433827.jpg" alt="">
                            <h3 class="h3-heading-img--playfair-display">VietNam</h3>
                          </a>
                        </div>
                        <div class="col l-4  m-6 s-12 destination-item">
                          <a href="#" class="destination-item-link">
                            <img class="destination-item-img" src="./assets/img/Thailand-New-Website-11-1.jpg" alt="">
                            <h3 class="h3-heading-img--playfair-display">Thailand</h3>
                          </a>
                        </div>
                        <div class="col l-4  m-6 s-12 destination-item">
                          <a href="#" class="destination-item-link">
                            <img class="destination-item-img" src="./assets/img/Cambodia-and-Vietnam-Luxury-20-days.jpg"
                              alt="">
                            <h3 class="h3-heading-img--playfair-display">Cambodia</h3>
                          </a>
                        </div>
                        <div class="col l-4  m-6 s-12 destination-item">
                          <a href="#" class="destination-item-link">
                            <img class="destination-item-img" src="./assets/img/Peaceful-Luang-Prabang-1.jpg" alt="">
                            <h3 class="h3-heading-img--playfair-display">Laos</h3>
                          </a>
                        </div>
                        <div class="col l-4  m-6 s-12 destination-item">
                          <a href="#" class="destination-item-link">
                            <img class="destination-item-img" src="./assets/img/India-destination-ok.jpg" alt="">
                            <h3 class="h3-heading-img--playfair-display">India</h3>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-experience">
      <div class="grid wide">
        <div class="row">
          <div class="col l-12">
            <div class="home-experience-title">
              <h2 class="h2-heading--kristi">Exclusive Experiences</h2>
              <p class="p-paragraph--cabin">We proudly provide travelers with a memorable vacation that goes
                deeper than just ticking off ``blockbuster attractions``. Realistic Asia offers once-in-a-lifetime
                exclusive experiences, taking your travel experience to the next level with extraordinary and meaningful
                memories. We work closely with local people and partners, not only to bring travelers the most unique
                experiences but also to build a better local community.</p>
              <a href="#" class="btn-border-bottom-primary--color">VIEW OUR EXPERIENCES</a>
            </div>
            <div class="home-experience-content">
              <div class="row">
                <div class="col l-2-4 m-4 s-12">
                  <div class="home-experience-content-item">
                    <img src="./assets/img/shutterstock_1493619197-scaled-300x300.jpg" alt="">
                    <h4 class="h4-experience--playfair-display">Cultural Experiences</h4>
                  </div>
                </div>
                <div class="col l-2-4  m-4 s-12">
                  <div class="home-experience-content-item">
                    <img src="./assets/img/shutterstock_1408198757.jpg" alt="">
                    <h4 class="h4-experience--playfair-display">Cultural Experiences</h4>
                  </div>
                </div>
                <div class="col l-2-4 m-4 s-12">
                  <div class="home-experience-content-item">
                    <img src="./assets/img/Glimpse-of-Laos.jpg" alt="">
                    <h4 class="h4-experience--playfair-display">Local Experiences</h4>
                  </div>
                </div>
                <div class="col l-2-4 m-4 s-12">
                  <div class="home-experience-content-item">
                    <img src="./assets/img/153374622-1.jpg" alt="">
                    <h4 class="h4-experience--playfair-display">Lodge Experiences</h4>
                  </div>
                </div>
                <div class="col l-2-4 m-4 s-12">
                  <div class="home-experience-content-item">
                    <img src="./assets/img/maichauecolodge_anhlan224-1.jpg" alt="">
                    <h4 class="h4-experience--playfair-display">Out Of The Ordinary Experiences</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-responsible">
      <div class="home-responsible-content-left">
        <div class="home-responsible-slide"></div>

        <h2 class="h2-heading--kristi">Responsible</h2>
        <p class="home-responsible-content-left-description">
          As the leading operator, we carefully select and organize sustainable accommodation, transport and
          activities and support the local community. We share the values of protecting natural, cultural, and
          artificial heritage in the travel industry towards community and eco-tourism. We actively contribute to
          minimize the impact on the environment and return the pristine condition of each destination.
        </p>

        <a href="#" class="btn-border-bottom-primary--color">see more</a>

      </div>

      <img src="./assets/img/Pic-homepage1.jpg" alt="" class="home-responsible-content-right">
    </div>

    <div class="home-inspiration">
      <div class="grid wide">
        <div class="row">
          <div class="col l-12">
            <h2 class="h2-heading--kristi">Travel Inspirations</h2>
            <p class="p-paragraph--cabin">We believe that every journey to Southeast Asia is an exciting experience.
              Each featured interests always reflect the culture and contain valuable inspiration in each region. No
              matter what kind of adventure you???re looking for, our themed trips will help you to find it. Whether you
              want to pump the pedals, discover a destination through its culinary treats, or travel with kids, our
              diverse range of themed itineraries have got you covered.</p>
          </div>

        </div>

      </div>
    </div>

    <div class="grid wide">
      <div class="row">

        <div class="col l-12 m-12 s-12">
          <div class="row">
            <div class="col l-3 m-6 s-12">
              <div class="card layout-357">
                <div class="card-front">
                  <img class="card-front-img" src="./assets/img/luxury-tour.jpg" alt="">
                  <h3 class="card-front-title">Luxury Tours</h3>
                </div>
                <div class="card-back">
                  <h3 class="card-back-title">Luxury Tours</h3>
                  <p class="card-back-description">Our luxury tours not only expose you to the veneer of culture, they
                    will give you an insightful
                    to destinations. The unique and high-end tour packages also lay foundation for authentic and
                    fantastic experiences. We are set to bring about high quality services exceeding your
                    expectations.</p>
                  <a href="#" class="card-back-button">View All Tour</a>
                </div>
              </div>
              <div class="card layout-357">
                <div class="card-front">
                  <img class="card-front-img" src="./assets/img/Adventure-tour-1024x553.jpg" alt="">
                  <h3 class="card-front-title">Adventure Tours</h3>
                </div>
                <div class="card-back">
                  <h3 class="card-back-title">Adventure Tours</h3>
                  <p class="card-back-description">Our adventure tours will give you undescriptable emotions in a
                    once-in-a-lifetime journey. We will take you to tranquil off-the-beaten-path destinations, stop over
                    historical and cultural landmarks, idyllic beaches and bewitching array of superlative natural
                    landscapes.</p>
                  <a href="#" class="card-back-button">View All Tour</a>
                </div>
              </div>
            </div>
            <div class="col l-3 m-6 s-12">
              <div class="card layout-337">
                <div class="card-front">
                  <img class="card-front-img" src="./assets/img/Solo-travel.jpg" alt="">
                  <h3 class="card-front-title">Slow Journey & Solo Travel</h3>
                </div>
                <div class="card-back">
                  <h3 class="card-back-title">Slow Journey & Solo Travel</h3>
                  <p class="card-back-description">Our solo travel tour and slow journey are customised for those who
                    are eager to conquer the majestic nature, enjoy self-explore excursions at your own pace to embrace
                    the unique beauty of chosen destinations.</p>
                  <a href="#" class="card-back-button">View All Tour</a>
                </div>
              </div>
              <div class="card layout-411">
                <div class="card-front">
                  <img class="card-front-img" src="./assets/img/Wellness-tour-1024x683.jpg" alt="">
                  <h3 class="card-front-title">Wellness Tours</h3>
                </div>
                <div class="card-back">
                  <h3 class="card-back-title">Wellness Tours</h3>
                  <p class="card-back-description">We perceive the longest lasting relationship is the relationship with
                    yourself. Don???t neglect body signals which are alarming. Wellness holidays focus on refreshing your
                    body from inside out will significantly awaken positive energy. You can take some time to breath,
                    get close to mother nature, and listen attentively to your body.</p>
                  <a href="#" class="card-back-button">View All Tour</a>
                </div>
              </div>
            </div>
            <div class="col l-3 m-6 s-12">
              <div class="card layout-411">
                <div class="card-front">
                  <img class="card-front-img" src="./assets/img/Family-tour-1024x683.jpg" alt="">
                  <h3 class="card-front-title">Family Vacation</h3>
                </div>
                <div class="card-back">
                  <h3 class="card-back-title">Slow Journey & Solo Travel</h3>
                  <p class="card-back-description">If the tie up with the work and daily stuff loosen the bonds between
                    family members, the family vacation is truly a golden opportunity to reconnect by spending time
                    together. Our exhilarating tours with beloved family members enable children to be exposed to
                    different cultures and countries and nurture loving moments with parents.</p>
                  <a href="#" class="card-back-button">View All Tour</a>
                </div>
              </div>
              <div class="card layout-330">
                <div class="card-front">
                  <img class="card-front-img" src="./assets/img/Beach-Vacation-1024x683.jpg" alt="">
                  <h3 class="card-front-title">Beach Vacation</h3>
                </div>
                <div class="card-back">
                  <h3 class="card-back-title">Beach Vacation</h3>
                  <p class="card-back-description">Sandy and crystal turquoise beaches and tropical islands are ideal
                    places
                    for a vacation break. Soaking up the sun under the palm trees fluttering to the ground or being
                    immersed in water activities can wash away hectic and nagging thoughts banishing you.</p>
                  <a href="#" class="card-back-button">View All Tour</a>
                </div>
              </div>
            </div>
            <div class="col l-3 m-6 s-12">
              <div class="card layout-330">
                <div class="card-front">
                  <img class="card-front-img" src="./assets/img/shutterstock_1408198757.jpg" alt="">
                  <h3 class="card-front-title">Culinary Tours</h3>
                </div>
                <div class="card-back">
                  <h3 class="card-back-title">Culinary Tours</h3>
                  <p class="card-back-description">Indulging in local cuisine is the good chance to discover the
                    traditions
                    of a country. Southeast Asia which is famous for flavorful cuisine will satisfy your culinary
                    passion. Our foodies around the world can get eyes open with the diversity of dishes.</p>
                  <a href="#" class="card-back-button">View All Tour</a>
                </div>
              </div>

              <div class="card layout-357">
                <div class="card-front">
                  <img class="card-front-img" src="./assets/img/Romantic-Getaway-1024x681.jpg" alt="">
                  <h3 class="card-front-title">Romantic Getaways</h3>
                </div>
                <div class="card-back">
                  <h3 class="card-back-title">Romantic Getaways</h3>
                  <p class="card-back-description">Celebrating your romantic relationships by exceptional customised
                    tours in
                    sumptuous resorts and hotels with untouched nature surroundings. Honeymooners and newly-wedded
                    couples can enjoy the time together and arouse romantic moments with their soulmates.</p>
                  <a href="#" class="card-back-button">View All Tour</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="home-personalize">
      <div class="grid wide">
        <div class="row">
          <div class="col l-12">
            <div class="home-personalize-content">
              <h2 class="h2-heading--kristi">personalize</h2>
              <p class="p-paragraph--cabin">Our dedicated team of travel professionals has unmatched knowledge and
                expertise in creating perfect vacations. Together we share the passion for travel and love to our
                destinations and devote ourselves to ???getting it right??? the very first time. Our objective is to provide
                you with top-notch services with 24/7 support, accompany as a close friend and personalized care.</p>
              <a href="#" class="btn-border-bottom-primary--color">get to know our team</a>
            </div>
          </div>
          <div class="col l-12 home-personalize-container">
            <div class="row">
              <div class="col l-3 m-4 s-6">
                <div class="home-personalize-container-item">
                  <img src="https://realisticasia.com/wp-content/uploads/2022/06/Hien.jpg" alt="Hien Do"
                    class="home-personalize-container-item-img">
                  <h4 class="home-personalize-container-item-name">Hien Do</h4>
                  <p class="home-personalize-container-item-position">Co-Founder & CEO</p>
                </div>
              </div>
              <div class="col l-3 m-4 s-6">
                <div class="home-personalize-container-item">
                  <img src="https://realisticasia.com/wp-content/uploads/2021/09/Mr.Ha-Trinh.jpg" alt="Ha Trinh"
                    class="home-personalize-container-item-img">
                  <h4 class="home-personalize-container-item-name">Ha Trinh</h4>
                  <p class="home-personalize-container-item-position">Co-Founder & Director</p>
                </div>
              </div>
              <div class="col l-3 m-4 s-6">
                <div class="home-personalize-container-item">
                  <img src="https://realisticasia.com/wp-content/uploads/2022/06/alex.jpg" alt="Alex Nguyen"
                    class="home-personalize-container-item-img">
                  <h4 class="home-personalize-container-item-name">Alex Nguyen</h4>
                  <p class="home-personalize-container-item-position">Co-Founder & CEO</p>
                </div>
              </div>
              <div class="col l-3 m-4 s-6">
                <div class="home-personalize-container-item">
                  <img src="https://realisticasia.com/wp-content/uploads/2022/09/tcc.jpg" alt="Tong Cam"
                    class="home-personalize-container-item-img">
                  <h4 class="home-personalize-container-item-name">Tong Cam</h4>
                  <p class="home-personalize-container-item-position">Accounting Manager</p>
                </div>
              </div>
              <div class="col l-3 m-4 s-6">
                <div class="home-personalize-container-item">
                  <img src="https://realisticasia.com/wp-content/uploads/2022/06/Irina.jpg" alt="Irina Hatcher"
                    class="home-personalize-container-item-img">
                  <h4 class="home-personalize-container-item-name">Irina Hatcher</h4>
                  <p class="home-personalize-container-item-position">Partnership Manager</p>
                </div>
              </div>
              <div class="col l-3 m-4 s-6">
                <div class="home-personalize-container-item">
                  <img src="https://realisticasia.com/wp-content/uploads/2022/09/Soulaxay.jpg" alt="Soulaxay Sengsavath"
                    class="home-personalize-container-item-img">
                  <h4 class="home-personalize-container-item-name">Soulaxay Sengsavath</h4>
                  <p class="home-personalize-container-item-position">Head Of Laos Office</p>
                </div>
              </div>
              <div class="col l-3 m-4 s-6">
                <div class="home-personalize-container-item">
                  <img src="https://realisticasia.com/wp-content/uploads/2022/09/Pao.jpg" alt="Pao Dararaksmey"
                    class="home-personalize-container-item-img">
                  <h4 class="home-personalize-container-item-name">Pao Dararaksmey</h4>
                  <p class="home-personalize-container-item-position">Head Of Cambodia Office</p>
                </div>
              </div>
              <div class="col l-3 m-4 s-6">
                <div class="home-personalize-container-item">
                  <img src="https://realisticasia.com/wp-content/uploads/2022/09/Tip.jpg" alt="Tip"
                    class="home-personalize-container-item-img">
                  <h4 class="home-personalize-container-item-name">Tip</h4>
                  <p class="home-personalize-container-item-position">Head Of Thailand Office</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col l-12 m-12 s-12">
            <div class="home-join-newsletter">
              <div class="home-join-newsletter-text-content">
                <h3 class="home-join-newsletter-text-content-title">
                  Join Newsletter
                </h3>
                <p class="home-join-newsletter-text-content-description">
                  To receive our best deals
                </p>
              </div>
              <div class="home-join-newsletter-mail-content">
                <input type="email" placeholder="Enter Your Email" class="home-join-newsletter-mail-content-input"
                  name="home-join-newsletter-mail-content-input" id="home-join-newsletter-mail-content-input">
                <button id="btn-submit-email" class="home-join-newsletter-button-content">
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-review">
      <div class="home-review-content">
        <h2 class="h2-playfair-display-45">Trustful Review</h2>
        <p class="home-review-content-description">We are constantly moving, innovating, and improving ourselves to be
          better day. Thus, each of our
          travelers??? feedback is absolutely valuable to us.</p>
        <div class="home-review-content-comment">
          <div class="home-review-content-navigation">
            <div class="navigation-left">
              <i class="fi fi-rr-angle-small-left"></i>
            </div>
            <div class="navigation-right">
              <i class="fi fi-rr-angle-small-right"></i>
            </div>
          </div>
          <div class="home-review-content-comment-slide">
            <div class="comment-slide">
              <!-- <?php
              $sql = "select * from reviews";
                try{
                  if ($connection != null) {
                    $statement = $connection -> prepare($sql);
                    $statement -> execute();
                    $result = $statement -> setFetchMode(PDO::FETCH_ASSOC);
                    $reviews = $statement -> fetchAll();
                    foreach ($reviews as $review) {
                      $name = $review["name"];
                      $title = $review['title'];
                      $content = $review['review'];
                      $avt = $review['avt'];
                      $date = strtotime($review['date']);
                      $date = date("F d, Y", $date);
                      echo "

                      ";
                    }
                  }
                }catch (PDOException $e){
                  echo "ERROR: " .$e->getMessage();
                }
              ?> -->
            </div>
            <div class="comment-slide-bottom">
              <div class="comment-slide-bottom-nav">
              </div>
              <p>
                <strong>Tripadvisor</strong> rating score: <Strong>5</Strong> of <strong>5</strong>,
                based on <strong>154 reviews.</strong>
              </p>
              <a href="" class="btn-border-bottom-primary--color">View all review</a>
            </div>
          </div>
        </div>
      </div>
      <div class="home-review-img">

      </div>
    </div>
  </div>

  <?php
  include_once "./layout/footer.html";
  ?>

  <div class="home-video-overlay" id="home-video-overlay">
    <div class="home-video-overlay-body">
      <iframe width="960" height="540" autoplay="false" src="https://www.youtube.com/embed/vD1PKG98SiU"
        title="Realistic Asia - Vietnam Timeless Charm" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
  </div>

  <?php
  require "./layout/fixed.html";
  require "./layout/author.html";

  ?>


  <script src="https://kit.fontawesome.com/49dffc725c.js" crossorigin="anonymous"></script>
  <script src="./assets/js/base.js"></script>
  <script src="./assets/js/main.js"></script>
</body>

</html>
