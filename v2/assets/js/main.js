$(document).ready(function() {

  function resetHeight(){
      // reset the body height to that of the inner browser
      document.body.style.height = window.innerHeight + "px";
  }
  // reset the height whenever the window's resized
  window.addEventListener("resize", resetHeight);
  // called to initially set the height.
  resetHeight();

  // function resetWidth(){
  //     // reset the body height to that of the inner browser
  //     document.body.style.width = window.innerWidth + "px";
  // }
  // // reset the height whenever the window's resized
  // window.addEventListener("resize", resetWidth);
  // // called to initially set the height.
  // resetWidth();


//// SIDE NAV TITLE ON PROJECT PAGE SELECT

$(function(){
  if($('body').is('.odda--page')){
    $('.odda').addClass('up--title');
  }
  if($('body').is('.vogue-au--page')){
    $('.vogue-au').addClass('up--title');
  }
  if($('body').is('.byredo--page')){
    $('.byredo').addClass('up--title');
  }
  if($('body').is('.wishtrend--page')){
    $('.wishtrend').addClass('up--title');
  }
  if($('body').is('.paco-rabanne--page')){
    $('.paco-rabanne').addClass('up--title');
  }
  if($('body').is('.vogue-us--page')){
    $('.vogue-us').addClass('up--title');
  }
  if($('body').is('.unisecon--page')){
    $('.unisecon').addClass('up--title');
  }
  if($('body').is('.liminal--page')){
    $('.liminal').addClass('up--title');
  }
  if($('body').is('.florist--page')){
    $('.florist').addClass('up--title');
  }
  if($('body').is('.tomihiro--page')){
    $('.tomihiro').addClass('up--title');
  }
  if($('body').is('.peter-do--page')){
    $('.peter-do').addClass('up--title');
  }
  if($('body').is('.vfiles--page')){
    $('.vfiles').addClass('up--title');
  }
  if($('body').is('.far-near--page')){
    $('.far-near').addClass('up--title');
  }
  if($('body').is('.vaquera--page')){
    $('.vaquera').addClass('up--title');
  }
  if($('body').is('.ar-effects--page')){
    $('.ar-effects').addClass('up--title');
  }
  if($('body').is('.scbc--page')){
    $('.scbc').addClass('up--title');
  }
  if($('body').is('.pondering--page')){
    $('.pondering').addClass('up--title');
  }
  if($('body').is('.exercise-no-1--page')){
    $('.exercise-no-1').addClass('up--title');
  }
});






  class Header extends HTMLElement {
  connectedCallback() {
  this.innerHTML = `


  <div class="header-content__container">

    <div class="flex-item--left header-item--left">
      <a class="nav-link nav-link--home" href="./index.html">Helena Dong</a>
    </div>

    <div class="flex-item--right header-item--right">
      <span class="nav-link nav-link--work mobile-nav-link">Work</span>
      <a class="nav-link nav-link--about" href="./info.html">Info</a>
      <a class="nav-link nav-link--exhibitions" href="./filter.html">Index</a>
    </div>

  </div>

  <div class='slider'>
    <ul class="slide__container">
      <li class="slide-item">
          DESIGNER &nbsp; ⮂ &nbsp; CREATIVE TECHNOLOGIST &nbsp; ⇥ &nbsp; HELLO@HELENADONG.COM
      </li>
      <li class="slide-item">
          DESIGNER &nbsp; ⮂ &nbsp; CREATIVE TECHNOLOGIST &nbsp; ⇥ &nbsp; HELLO@HELENADONG.COM
      </li>
      <li class="slide-item">
          DESIGNER &nbsp; ⮂ &nbsp; CREATIVE TECHNOLOGIST &nbsp; ⇥ &nbsp; HELLO@HELENADONG.COM
      </li>
      <li class="slide-item">
          DESIGNER &nbsp; ⮂ &nbsp; CREATIVE TECHNOLOGIST &nbsp; ⇥ &nbsp; HELLO@HELENADONG.COM
      </li>
      <li class="slide-item">
          DESIGNER &nbsp; ⮂ &nbsp; CREATIVE TECHNOLOGIST &nbsp; ⇥ &nbsp; HELLO@HELENADONG.COM
      </li>
    </ul>
  </div>


  <!-- WORK NAV - MOBILE VERSION - NO AUDIO-->
  <div class="popup__container--work-nav">
    <div class="flex-item--left work-item--left">
        <span class="nav-link nav-link--close">Close X</span><br><br><br>

        <span class="up--title large work-category">Collaborations</span><br><br>

        <div class="side-nav-item__link">
          <a class="odda" href="./odda-korea-drops.html">Odda Korea Drops</a>
        </div>
        <div class="side-nav-item__link">
          <a class="vogue-au" href="./vogue-au.html">Vogue In a World of Pure Imagination</a>
        </div>
        <div class="side-nav-item__link">
          <a class="byredo" href="./byredo-ar-beauty.html">Byredo AR Beauty</a>
        </div>
        <div class="side-nav-item__link">
          <a class="wishtrend" href="./wishtrend-glowing-ingredients.html">Wishtrend Glowing Ingredients</a>
        </div>
        <div class="side-nav-item__link">
          <a class="paco-rabanne" href="./paco-eyes.html">Paco Rabanne Eyes</a>
        </div>
        <div class="side-nav-item__link">
          <a class="vogue-us" href="./vogue-us.html">Ms. Iyaaa x Vogue</a>
        </div>
        <div class="side-nav-item__link">
          <a class="unisecon" href="./unisecon-pearl-pearl.html">Unisecon Pearl Pearl</a>
        </div>
        <div class="side-nav-item__link">
          <a class="tomihiro" href="./tomihiro-kono.html">Tomihiro Kono 3D Head Props</a>
        </div>
        <div class="side-nav-item__link">
          <a class="peter-do" href="./peter-do-hearts.html">Peter Do Hearts</a>
        </div>
        <div class="side-nav-item__link">
          <a class="vaquera" href="./vaquera-heartbeat.html">Vaquera Heartbeat</a>
        </div>

        <br><br>

        <span class="up--title large">Personal</span><br><br>

        <div class="side-nav-item__link">
          <a class="ar-effects" href="./ar-effects.html">Augmented Reality Effects</a>
        </div><br>
        <div class="side-nav-item__link">
          <a class="scbc" href="./scbc.html">Scissors, Calculator and a Beige Coat</a>
        </div>
        <div class="side-nav-item__link">
          <a class="pondering" href="./pondering-gestures.html">Pondering Gestures</a>
        </div>
        <div class="side-nav-item__link">
          <a class="exercise-no-1" href="./exercise-no-1.html">Exercise N<span class="glyph">o</span>.1</a>
        </div>
    </div>


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
            <span class="up--title large">Collaborations</span> <br><br>

            <div class="side-nav-item__link">
              <a class="side-nav-item-1 odda" href="./odda-korea-drops.html">Odda Korea Drops</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-2 vogue-au" href="./vogue-au.html">Vogue In a World of Pure Imagination</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-3 byredo" href="./byredo-ar-beauty.html">Byredo AR Beauty</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-4 wishtrend" href="./wishtrend-glowing-ingredients.html">Wishtrend Glowing Ingredients</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-5 paco-rabanne" href="./paco-eyes.html">Paco Rabanne Eyes</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-6 vogue-us" href="./vogue-us.html">Ms. Iyaaa x Vogue</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-7 unisecon" href="./unisecon-pearl-pearl.html">Unisecon Pearl Pearl</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-8 tomihiro" href="./tomihiro-kono.html">Tomihiro Kono 3D Head Props</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-9 peter-do" href="./peter-do-hearts.html">Peter Do Hearts</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-10 vaquera" href="./vaquera-heartbeat.html">Vaquera Heartbeat</a>
            </div>

            <br><br>

            <span class="up--title large">Personal</span><br><br>

            <div class="side-nav-item__link">
              <a class="side-nav-item-11 ar-effects" href="./ar-effects.html">Augmented Reality Effects</a>
            </div><br>
            <div class="side-nav-item__link">
              <a class="side-nav-item-12 scbc" href="./scbc.html">Scissors, Calculator and a Beige Coat</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-13 pondering" href="./pondering-gestures.html">Pondering Gestures</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-14 exercise-no-1" href="./exercise-no-1.html">Exercise N<span class="glyph">o</span>.1</a>
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
  });

  $('.nav-link--close').click(function() {
      $('.popup__container--work-nav').removeClass('show');
      $('.header-content__container').removeClass('hide');
      $('.slider').removeClass('hide');
      $('.main-content__container').removeClass('hide');
  });








});
