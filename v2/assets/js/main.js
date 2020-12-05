$(document).ready(function() {


  class Header extends HTMLElement {
  connectedCallback() {
  this.innerHTML = `


  <div class="header-content__container">

    <div class="flex-item--left header-item--left">
      <a class="nav-link nav-link--home" href="./index.html">Helena Dong</a>
    </div>

    <div class="flex-item--right header-item--right">
      <span class="nav-link nav-link--work mobile-nav-link">Work</span>
      <a class="nav-link nav-link--exhibitions" href="./filter.html">Index</a>
      <a class="nav-link nav-link--about" href="./about.html">About</a>
    </div>

  </div>

  <div class='slider'>
    <ul class="slide__container">
      <li class="slide-item" >
          (∩◕‿◕)っ━☆ﾟ.*･ﾟ &nbsp; . &nbsp; hello@helenadong.com &nbsp; . &nbsp; Design & Creative Technology &nbsp; . &nbsp;
      </li>
      <li class="slide-item">
          (∩◕‿◕)っ━☆ﾟ.*･ﾟ &nbsp; . &nbsp; hello@helenadong.com &nbsp; . &nbsp; Design & Creative Technology &nbsp; . &nbsp;
      </li>
      <li class="slide-item">
          (∩◕‿◕)っ━☆ﾟ.*･ﾟ &nbsp; . &nbsp; hello@helenadong.com &nbsp; . &nbsp; Design & Creative Technology &nbsp; . &nbsp;
      </li>
      <li class="slide-item">
          (∩◕‿◕)っ━☆ﾟ.*･ﾟ &nbsp; . &nbsp; hello@helenadong.com &nbsp; . &nbsp; Design & Creative Technology &nbsp; . &nbsp;
      </li>
      <li class="slide-item">
          (∩◕‿◕)っ━☆ﾟ.*･ﾟ &nbsp; . &nbsp; hello@helenadong.com &nbsp; . &nbsp; Design & Creative Technology &nbsp; . &nbsp;
      </li>
      <li class="slide-item">
          (∩◕‿◕)っ━☆ﾟ.*･ﾟ &nbsp; . &nbsp; hello@helenadong.com &nbsp; . &nbsp; Design & Creative Technology &nbsp; . &nbsp;
      </li>

    </ul>
  </div>


  <!-- WORK NAV - MOBILE VERSION - NO AUDIO-->
  <div class="popup__container--work-nav">
    <div class="flex-item--left work-item--left">
        <span class="nav-link nav-link--close">Close X</span><br><br><br>

        <span class="up--title large work-category">Selected Commissions</span><br><br>

        <div class="side-nav-item__link">
          <a href="./project-test.html">Odda Korea Drops</a>
        </div>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Vogue In a World of Pure Imagination</a>
        </div>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Byredo AR Beauty</a>
        </div>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Wishtrend Glowing Ingredients</a>
        </div>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Paco Rabanne Eyes</a>
        </div>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Ms. Iyaaa x Vogue</a>
        </div>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Unisecon Pearl Pearl</a>
        </div>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Tomihiro Kono 3D Head Props</a>
        </div>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Peter Do Hearts</a>
        </div>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Vfiles Bang Bop</a>
        </div>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Far-Near Physiognomy</a>
        </div>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Vaquera Heartbeat</a>
        </div>

        <br><br>

        <span class="up--title large">Personal</span><br><br>

        <div class="side-nav-item__link">
          <a href="./project-test.html">Augmented Reality Effects</a>
        </div><br>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Scissors, Calculator and a Beige Coat</a>
        </div>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Pondering Gestures</a>
        </div>
        <div class="side-nav-item__link">
          <a href="./project-test.html">Exercise No. 1</a>
        </div>
    </div>

    <!-- <div class="flex-item--right work-item--right">
      <span class="nav-link nav-link--close">Close X</span>
    </div> -->

  </div>



  `;
  }
  }


  customElements.define('main-header', Header);








  // WORK NAV - DESKTOP SIDEBAR


  class Sidebar extends HTMLElement {
  connectedCallback() {
  this.innerHTML = `

        <div class="side-nav-item__container">
          <div class="spacer">
            <span class="up--title large">Selected Commissions</span> <br><br>

            <div class="side-nav-item__link">
              <a class="side-nav-item-1" href="./project-test.html">Odda Korea Drops</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-2" href="./project-test.html">Vogue In a World of Pure Imagination</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-3" href="./project-test.html">Byredo AR Beauty</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-4" href="./project-test.html">Wishtrend Glowing Ingredients</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-5" href="./project-test.html">Paco Rabanne Eyes</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-6" href="./project-test.html">Ms. Iyaaa x Vogue</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-7" href="./project-test.html">Unisecon Pearl Pearl</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-8" href="./project-test.html">Tomihiro Kono 3D Head Props</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-9" href="./project-test.html">Peter Do Hearts</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-10" href="./project-test.html">Vfiles Bang Bop</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-11" href="./project-test.html">Far-Near Physiognomy</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-12" href="./project-test.html">Vaquera Heartbeat</a>
            </div>

            <br><br>

            <span class="up--title large">Personal</span><br><br>

            <div class="side-nav-item__link">
              <a class="side-nav-item-13" href="./project-test.html">Augmented Reality Effects</a>
            </div><br>
            <div class="side-nav-item__link">
              <a class="side-nav-item-14" href="./project-test.html">Scissors, Calculator and a Beige Coat</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-15" href="./project-test.html">Pondering Gestures</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-16" href="./project-test.html">Exercise No. 1</a>
            </div>


          </div>
        </div>

  `;
  }
  }

  customElements.define('sidebar-content', Sidebar);








  // MOBILE WORK NAV POPUP

  $('.nav-link--work').click(function() {
      $('.header-content__container').addClass('hide');
      $('.slider').addClass('hide');
      $('.main-content__container').addClass('hide');
      $('.popup__container--work-nav').addClass('show');
      $('body').addClass('bg-color-change');

  });

  $('.nav-link--close').click(function() {
      $('.popup__container--work-nav').removeClass('show');
      $('.header-content__container').removeClass('hide');
      $('.slider').removeClass('hide');
      $('.main-content__container').removeClass('hide');
      $('body').removeClass('bg-color-change');
  });




});
