<!DOCTYPE html>
<html lang="en">

<head>

  <?php
include './layout/link.html';

   ?>

  <script src="https://kit.fontawesome.com/49dffc725c.js" crossorigin="anonymous"></script>
  <title>Special Offer - Realistic Asia</title>
</head>

<body>
  <header>
    <?php
    include './layout/header-contact.html';
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
                  <div class="grid wide">
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
                  </div>
                </ul>
              </div>
              <div class="header-logo">
                <a href="./">
                  <img src="https://realisticasia.com/wp-content/uploads/2018/02/Realistic-asia-menu-logo-moi.png"
                    alt="Realistic Asia"></a>
              </div>
              <div class="header-navigation">
                <ul class="header-navigation-list">
                  <li class="header-navigation-item">
                    <a class="header-navigation-link" href="./"><span class="header-navigation-span"><span>
                          Home</span></span></a>
                  </li>
                  <li class="header-navigation-item ">
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
                  <li class="header-navigation-item ">
                    <a class="header-navigation-link" href="./responsible-travel.php"><span
                        class="header-navigation-span"><span>
                          Responsible Travel</span></span></a>
                  </li>
                  <li class="header-navigation-item active">
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
    <div class="special">
      <div class="special-head">
        <div class="grid wide">
          <div class="row">
            <div class="col l-12 m-12 s-12">
              <h2 class="h2-playfair-display-60">Special Offers</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="special-body">
        <div class="special-body-tour">
          <div class="grid wide">
            <div class="row">

            </div>
          </div>
          <div class="special-body-tour-btn">
            <a href="" class="btn-primary--color">Load more</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <?php
  include './layout/footer.html';
  include './layout/fixed.html';
  include './layout/author.html';
   ?>

  <script src="./assets/js/base.js"></script>
  <script src="./assets/js/special.js"></script>
</body>

</html>
