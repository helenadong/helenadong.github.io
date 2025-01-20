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
  if($('body').is('.philliplim-thefield--page')){
    $('.philliplim-thefield').addClass('up--title');
  }

  if($('body').is('.coachella-2023--page')){
    $('.coachella-2023').addClass('up--title');
  }

  if($('body').is('.buck-meta-dior--page')){
    $('.buck-meta-dior').addClass('up--title');
  }

  if($('body').is('.buck-meta-fendi--page')){
    $('.buck-meta-fendi').addClass('up--title');
  }

  if($('body').is('.buck-meta-murakami--page')){
    $('.buck-meta-murakami').addClass('up--title');
  }

  if($('body').is('.buck-nike-50th-anniversary--page')){
    $('.buck-nike-50th-anniversary').addClass('up--title');
  }

  if($('body').is('.meta-canneslions--page')){
    $('.meta-canneslions').addClass('up--title');
  }

  if($('body').is('.coachella--page')){
    $('.coachella').addClass('up--title');
  }

  if($('body').is('.nike-otf--page')){
    $('.nike-otf').addClass('up--title');
  }
  
  if($('body').is('.a24-lamb--page')){
    $('.a24-lamb').addClass('up--title');
  }

  if($('body').is('.id-asia--page')){
    $('.id-asia').addClass('up--title');
  }

  if($('body').is('.new-reader-reading-room--page')){
    $('.new-reader-reading-room').addClass('up--title');
  }
  
  if($('body').is('.ar-effects--page')){
    $('.ar-effects').addClass('up--title');
  }

  if($('body').is('.optical-volume--page')){
    $('.optical-volume').addClass('up--title');
  }

  if($('body').is('.scbc--page')){
    $('.scbc').addClass('up--title');
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
          <a class="ar-effects" href="./ar-effects.html">Social AR</a>
        </div>
        
        <div class="side-nav-item__link">
        <a class="optical-volume" href="./optical-volume.html">Speculative Eyewear</a>
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
              <a class="side-nav-item-17 ar-effects" href="./ar-effects.html">Social AR</a>
            </div>
           
            <div class="side-nav-item__link">
              <a class="side-nav-item-3 optical-volume" href="./optical-volume.html">Speculative Eyewear</a>
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
