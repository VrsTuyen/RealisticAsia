<!DOCTYPE html>
<html lang="en">

<head>
  <?php
  include './layout/link.html';
   ?>

  <script src="https://kit.fontawesome.com/49dffc725c.js" crossorigin="anonymous"></script>
  <title>Contact-us - Realistic Asia Travel</title>

  <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

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
                  <li class="header-navigation-item">
                    <a class="header-navigation-link" href="./"><span class="header-navigation-span"><span>
                          Home</span></span></a>
                  </li>
                  <li class="header-navigation-item active">
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
    <div class="contact-us">
      <div class="grid wide">
        <div class="row">
          <div class="col l-6 m-6 s-12">
            <div class="contact-us-left">
              <div class="contact-us-left-head">
                <h2 class="h2-heading--kristi-70">We'd love to hear from you!</h2>
                <p class="p-paragraph--cabin">For any questions, assistance, and desire to discuss your needs, please
                  feel free to contact us, our travel experts are available at any time. Realistic Asia is flattered to
                  support you as an extension of your business, on the ground, in Southeast Asia.</p>
              </div>
              <form action="_post" class="contact-us-left-form">
                <input type="text" name="contact-us-name" id="contact-us-name" placeholder="Name*" required
                  class="contact-us-form-input">
                <input type="email" name="contact-us-email" id="contact-us-email" placeholder="Email address*" required
                  class="contact-us-form-input">
                <input type="tel" name="contact-us-phone" id="contact-us-phone" placeholder="Phone number*" required
                  class="contact-us-form-input">
                <input type="text" name="contact-us-national" id="contact-us-national" placeholder="Nationality*"
                  required class="contact-us-form-input">
                <textarea rows="5" cols="100" name="contact-us-special-requirement" placeholder="Special requirement"
                  class="contact-us-form-input-multiple"></textarea>

                <input type="submit" value="submit" class="contact-us-form-submit">
              </form>
            </div>
          </div>
          <div class="col l-6 m-6 s-12">
            <div class="contact-us-right-head">
              <h2 class="h2-heading--kristi-70">Contact Us</h2>
            </div>
            <div class="contact-us-right">
              <div class="contact-us-right-item">
                <h4 class="h4-heading--kristi-30">Vietnam Office</h4>
                <em class="contact-us-right-item-country">Hanoi, Vietnam</em>
                <h6 class="contact-us-right-item-name">Mrs. Hien Do</h6>
                <ul class="contact-us-right-item-list">
                  <li>– Phone: +84-977-860-338</li>
                  <li>– USA/Canada toll-free number: +1 (800) 956-6340</li>
                  <li>– Email: <a href="mailto:hiendo@realisticasia.com">hiendo@realisticasia.com</a> </li>
                </ul>
              </div>
              <div class="contact-us-right-item">
                <h4 class="h4-heading--kristi-30">US & Canada Rep. Office</h4>
                <em class="contact-us-right-item-country">Vancouver, Canada</em>
                <h6 class="contact-us-right-item-name">Mr. Dave Emery</h6>
                <ul class="contact-us-right-item-list">
                  <li>– Phone: +1 604 328 6847</li>
                  <li>– Email: <a href="mailto:sales@realisticasia.com">sales@realisticasia.com</a> </li>
                </ul>
              </div>
              <div class="contact-us-right-item">
                <h4 class="h4-heading--kristi-30">Thailand Rep. Office</h4>
                <em class="contact-us-right-item-country">Nonthaburi, Thailand</em>
                <h6 class="contact-us-right-item-name">Ms. Pornpavee Pornsekson</h6>
                <ul class="contact-us-right-item-list">
                  <li>– Phone: +84-899-738-412</li>
                  <li>– Email: <a href="mailto:sales@realisticasia.com">sales@realisticasia.com</a> </li>
                </ul>
              </div>
              <div class="contact-us-right-item">
                <h4 class="h4-heading--kristi-30">Cambodia Rep. Office</h4>
                <em class="contact-us-right-item-country">Siem Reap, Cambodia</em>
                <h6 class="contact-us-right-item-name">Mr. Pao Dararaksmey</h6>
                <ul class="contact-us-right-item-list">
                  <li>– Phone: +84-899-738-412</li>
                  <li>– Email: <a href="mailto:sales@realisticasia.com">sales@realisticasia.com</a> </li>
                </ul>
              </div>
              <div class="contact-us-right-item">
                <h4 class="h4-heading--kristi-30">Laos Rep. Office</h4>
                <em class="contact-us-right-item-country">Luang Prabang, Lao P. D. R</em>
                <h6 class="contact-us-right-item-name">Mr. Soulaxay Sengsavath</h6>
                <ul class="contact-us-right-item-list">
                  <li>– Phone: +84-899-738-412</li>
                  <li>– Email: <a href="mailto:sales@realisticasia.com">sales@realisticasia.com</a> </li>
                </ul>
              </div>
            </div>
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
  <script src="./assets/js/about-us.js"></script>
  <script src="./assets/js/base.js"></script>
</body>

</html>
