$(document).ready(function() {

  function resetHeight(){
      // reset the body height to that of the inner browser
      document.body.style.height = window.innerHeight + "px";
  }
  // reset the height whenever the window's resized
  window.addEventListener("resize", resetHeight);
  // called to initially set the height.
  resetHeight();


//// SIDE NAV TITLE
/////// ALL CAPS ON PROJECT PAGE SELECT

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
  if($('body').is('.id-asia--page')){
    $('.id-asia').addClass('up--title');
  }
  if($('body').is('.josephmark--page')){
    $('.josephmark').addClass('up--title');
  }
  if($('body').is('.exhibition-mag--page')){
    $('.exhibition-mag').addClass('up--title');
  }
  if($('body').is('.danse-lente--page')){
    $('.danse-lente').addClass('up--title');
  }
  if($('body').is('.new-reader-reading-room--page')){
    $('.new-reader-reading-room').addClass('up--title');
  }
  if($('body').is('.bfc-june21--page')){
    $('.bfc-june21').addClass('up--title');
  }
  if($('body').is('.bfc-feb21--page')){
    $('.bfc-feb21').addClass('up--title');
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
          EXPERIENCE DESIGN &nbsp; ⮂ &nbsp; CREATIVE TECHNOLOGY &nbsp; ⇥ &nbsp; HELLO@HELENADONG.COM
      </li>
      <li class="slide-item">
      EXPERIENCE DESIGN &nbsp; ⮂ &nbsp; CREATIVE TECHNOLOGY &nbsp; ⇥ &nbsp; HELLO@HELENADONG.COM
      </li>
      <li class="slide-item">
      EXPERIENCE DESIGN &nbsp; ⮂ &nbsp; CREATIVE TECHNOLOGY &nbsp; ⇥ &nbsp; HELLO@HELENADONG.COM
      </li>
      <li class="slide-item">
      EXPERIENCE DESIGN &nbsp; ⮂ &nbsp; CREATIVE TECHNOLOGY &nbsp; ⇥ &nbsp; HELLO@HELENADONG.COM
      </li>
      <li class="slide-item">
      EXPERIENCE DESIGN &nbsp; ⮂ &nbsp; CREATIVE TECHNOLOGY &nbsp; ⇥ &nbsp; HELLO@HELENADONG.COM
      </li>
    </ul>
  </div>




  <!-- WORK NAV - MOBILE SIDEBAR - NO AUDIO -->
  <div class="popup__container--work-nav">
    <div class="flex-item--left work-item--left">
        <span class="nav-link nav-link--close">Close X</span><br><br><br>

        <span class="up--title large work-category">Work</span><br><br>

        <div class="side-nav-item__link">
        <a class="philliplim-thefield" href="./philliplim-thefield.html">3.1 Phillip Lim • The Field</a>
        </div>

        <div class="side-nav-item__link">
        <a class="coachella-2023" href="./coachella-2023.html">Coachella • Holoflux's Rift </a>
        </div>

        <div class="side-nav-item__link">
        <a class="buck-meta-dior" href="./buck-meta-dior.html">Dior • The Atelier of Dreams </a>
        </div>

        <div class="side-nav-item__link">
        <a class="buck-meta-fendi" href="./buck-meta-fendi.html">Fendi • Faster </a>
         </div>

        <div class="side-nav-item__link">
        <a class="uck-meta-murakami" href="./buck-meta-murakami.html">Takashi Murakami • At The Broad </a>
        </div>

        <div class="side-nav-item__link">
        <a class="buck-nike-50th-anniversary" href="./buck-nike-50th-anniversary.html">Nike • 50th Anniversary </a>
        </div>


        <div class="side-nav-item__link">
        <a class="meta-canneslions" href="./meta-canneslions.html">Meta • The Flow at Cannes Lions</a>
        </div>

        <div class="side-nav-item__link">
        <a class="coachella" href="./coachella.html">Coachella • Third Contact </a>
        </div>

        <div class="side-nav-item__link">
        <a class="nike-otf" href="./nike-otf.html">Nike • Own the Floor AR</a>
        </div>

        <div class="side-nav-item__link">
        <a class="a24-lamb" href="./a24-lamb.html">A24 • Lamb AR</a>
        </div>

        <div class="side-nav-item__link">
        <a class="id-asia" href="./id-asia.html">i-D Asia • Bending Minds and Futures</a>
        </div>

        <div class="side-nav-item__link">
        <a class="new-reader-reading-room" href="./new-reader-reading-room.html">New Reader • Reading Room</a>
        </div>


        <br><br>

        <span class="up--title large">Personal</span><br><br>

        <div class="side-nav-item__link">
          <a class="ar-effects" href="./ar-effects.html">AR Effects</a>
        </div>
        <div class="side-nav-item__link">
        <a class="optical-volume" href="./optical-volume.html">Optical Volume • Speculative Eyewear</a>
        </div>
        <div class="side-nav-item__link">
        <a class="side-nav-item-15 vr" href="./inworld-vr.html">InWorld VR Prototype</a>
      </div>
      <div class="side-nav-item__link">
      <a class="side-nav-item-15 vr">○</a>
    </div>
        <div class="side-nav-item__link">
          <a class="scbc" href="./scbc.html">Scissors, Calculator and a Beige Coat</a>
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
            <span class="up--title large">Work</span> <br><br>

            <div class="side-nav-item__link">
            <a class="side-nav-item-1 philliplim-thefield" href="./philliplim-thefield.html">3.1 Phillip Lim • The Field </a>
            </div>

            <div class="side-nav-item__link">
            <a class="side-nav-item-1 coachella-2023" href="./coachella-2023.html">Coachella • Holoflux's Rift </a>
            </div>

            <div class="side-nav-item__link">
            <a class="side-nav-item-1 buck-meta-dior" href="./buck-meta-dior.html">Dior • The Atelier of Dreams </a>
             </div>

            <div class="side-nav-item__link">
            <a class="side-nav-item-1 buck-meta-fendi" href="./buck-meta-fendi.html">Fendi • Faster </a>
             </div>

            <div class="side-nav-item__link">
            <a class="side-nav-item-1 buck-meta-murakami" href="./buck-meta-murakami.html">Takashi Murakami • At The Broad </a>
             </div>

            <div class="side-nav-item__link">
            <a class="side-nav-item-1 buck-nike-50th-anniversary" href="./buck-nike-50th-anniversary.html">Nike • 50th Anniversary </a>
             </div>

            <div class="side-nav-item__link">
              <a class="side-nav-item-1 meta-canneslions" href="./meta-canneslions.html">Meta • The Flow at Cannes Lions </a>
            </div>

            <div class="side-nav-item__link">
              <a class="side-nav-item-2 coachella" href="./coachella.html">Coachella • Third Contact </a>
            </div>

            <div class="side-nav-item__link">
              <a class="side-nav-item-6 nike-otf" href="./nike-otf.html">Nike • Own the Floor</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-8 a24-lamb" href="./a24-lamb.html">A24 • Lamb AR</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-9 id-asia" href="./id-asia.html">i-D Asia • Bending Minds and Futures</a>
              </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-12 new-reader-reading-room" href="./new-reader-reading-room.html">New Reader • Reading Room</a>
            </div>



            <br><br>

            <span class="up--title large">Personal</span><br><br>

            <div class="side-nav-item__link">
              <a class="side-nav-item-17 ar-effects" href="./ar-effects.html">AR Effects</a>
            </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-3 optical-volume" href="./optical-volume.html">Optical Volume • Speculative Eyewear </a>
            </div>
            <div class="side-nav-item__link">
            <a class="side-nav-item-18 vr" href="./inworld-vr.html">InWorld VR Prototype</a>
          </div>
          <div class="side-nav-item__link">
          <a class="side-nav-item-18 vr">○</a>
        </div>
            <div class="side-nav-item__link">
              <a class="side-nav-item-19 scbc" href="./scbc.html">Scissors, Calculator and a Beige Coat</a>
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
