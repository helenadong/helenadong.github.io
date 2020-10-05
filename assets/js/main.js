$(document).ready(function() {


  class Header extends HTMLElement {
  connectedCallback() {
  this.innerHTML = `


  <div class="header-content__container">

    <div class="flex-item--left header-item--left">
      <a class="nav-link nav-link--home" href="./index.html">Helena Dong</a>
    </div>

    <div class="flex-item--right header-item--right">
      <a class="nav-link nav-link--exhibitions" href="./filter.html">Index</a>
      <a class="nav-link nav-link--about" href="./about.html">About</a>
    </div>

  </div>

  <div class='slider'>
    <ul class="slide__container">
      <li class="slide-item" >
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
      <li class="slide-item">
              Design and Research. Fashion, 3D and AR. Short Bio TK.
      </li>
    </ul>
  </div>






  `;
  }
  }


  customElements.define('main-header', Header);






  class Sidebar extends HTMLElement {
  connectedCallback() {
  this.innerHTML = `

        <div class="side-nav-item__container">
          <div class="spacer">
            <span class="up--title">Work</span> <br><br><br>
            <span class="up--title small">Selected Client Projects</span><br><br>
            <a class="side-nav-item__link" href="./project-test.html">Chalayan / Archives</a><br>
            <a class="side-nav-item__link" href="./project-test.html">Commission / Home Office System</a><br>
            <a class="side-nav-item__link" href="./project-test.html">Florist New York / Blossoms</a><br>
            <a class="side-nav-item__link" href="./project-test.html">Idyl / Earrings</a><br>
            <a class="side-nav-item__link" href="./project-test.html">YAY!</a><br>
          </div>
        </div>

  `;
  }
  }


  customElements.define('sidebar-content', Sidebar);







});
