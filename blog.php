<!DOCTYPE html>
<html lang="en">

<head>
  <?php
  include "./databases/config.php";
  include "./layout/link.html";





  ?>

  <script src="https://kit.fontawesome.com/49dffc725c.js" crossorigin="anonymous"></script>
  <title>Travel Blogs - Realistic Asia</title>
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
                  <li class="header-mobile-menu-item"><a>about us <i class="fi fi-rr-angle-right"></i></a>

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
                  <li class="header-navigation-item ">
                    <a class="header-navigation-link">
                      <span class="header-navigation-span"><span> About us</span></span></a>
                    <ul class="header-navigation-sub">
                      <li class="header-navigation-sub-item "><a href="./about-us.php">about us</a></li>
                      <li class="header-navigation-sub-item"><a href="./our-team.php">our team</a></li>
                      <li class="header-navigation-sub-item"><a href="./contact-us.php">contact us</a></li>
                    </ul>
                  </li>
                  <li class="header-navigation-item active">
                    <a class="header-navigation-link"><span class="header-navigation-span"><span>
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
                          responsible travel</span></span></a>
                  </li>
                  <li class="header-navigation-item">
                    <a class="header-navigation-link" href="./special-offer.php">
                      <span class="header-navigation-span"><span>Special offers</span></span></a>
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
    <div class="blog">
      <div class="grid wide">
        <div class="row">
          <div class="col l-12 m-12 s-12">
            <div class="blog-header">
              <h2 class="h2-playfair-display-45">Travel Blogs</h2>
            </div>
            <div class="blog-content">
              <div class="row">
                <?php

                try {
                  if ($connection != null) {
                    $sql = "SELECT * FROM blogs;";
                    $statement = $connection->query($sql);
                    $statement->execute();
                    $result = $statement->setFetchMode(PDO::FETCH_ASSOC);
                    $blogs = $statement->fetchAll();


                    foreach ($blogs as $blog) {
                      $name = $blog['author'];
                      $title = $blog['title'];
                      $description = $blog['description'];
                      $tag = $blog['tags'];
                      $path = $blog['image'];
                      $date = strtotime($blog['upload']);
                      $date = date('F d , Y', $date);

                      echo "
                    <div class='col l-3 m-6 s-12'>
                    <div class='blog-news-content-item'>
                      <div class='blog-news-content-item-img'>
                        <a href='#' class='blog-news-content-item-img-link'>
                          <img src='${path}' alt=''>
                        </a>
                      </div>
                      <h4 class='blog-news-content-item-title'>
                      <a href='#' class='blog-news-content-item-title-link'>${title}</a></h4>
                      <p class='blog-news-content-item-description'>${description}</p>
                      <div class='blog-news-content-item-author'>
                        <div class='blog-news-content-item-author-date'>
                          <i class='fa-regular fa-calendar'></i>
                          <p class='blog-news-content-item-author-date-info'><a href='#'
                              class='blog-news-content-item-author-date-info-link'>${date}</a></p>
                        </div>
                        <div class='blog-news-content-item-author-tag'>
                          <i class='fa-solid fa-tag'></i>
                          <p class='blog-news-content-item-author-tag-info'><a href='#'
                              class='blog-news-content-item-author-tag-info-link'>${tag}</a></p>
                        </div>
                        <div class='blog-news-content-item-author-name'>
                          <p class='blog-news-content-item-author-name-info'>
                            By <a href='#' class='blog-news-content-item-author-name-link'>${name}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>";
                    }
                  }
                } catch (Exception $e) {
                  echo "ERROR: " . $e->getMessage();
                }

                ?>
              </div>

              <div class="blog-news-content-button">
                <a href="#" class="btn-primary--color">load more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <?php
  include "./layout/footer.html";
  include "./layout/fixed.html";
  include "./layout/author.html";

  ?>

  <script src="./assets/js/base.js"></script>
  <script src="./assets/js/blogs.js"></script>
</body>

</html>