$(document).ready(function() {


  /* NAV BAR: ASSIGN AUDIO */

  var sideNavItem1 = document.createElement('audio');
  sideNavItem1.setAttribute('src', 'assets/audio/ufo.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem1.addEventListener("load", function() {
    sideNavItem1.play();
  }, true);

  var sideNavItem2 = document.createElement('audio');
  sideNavItem2.setAttribute('src', 'assets/audio/clarinet.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem2.addEventListener("load", function() {
    sideNavItem2.play();
  }, true);

  var sideNavItem3 = document.createElement('audio');
  sideNavItem3.setAttribute('src', 'assets/audio/wine-glass.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem3.addEventListener("load", function() {
    sideNavItem3.play();
  }, true);

  var sideNavItem4 = document.createElement('audio');
  sideNavItem4.setAttribute('src', 'assets/audio/wine-glass2.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem4.addEventListener("load", function() {
    sideNavItem4.play();
  }, true);

  var sideNavItem5 = document.createElement('audio');
  sideNavItem5.setAttribute('src', 'assets/audio/wine-glass3.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem5.addEventListener("load", function() {
    sideNavItem5.play();
  }, true);

  var sideNavItem6 = document.createElement('audio');
  sideNavItem6.setAttribute('src', 'assets/audio/clock.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem6.addEventListener("load", function() {
    sideNavItem6.play();
  }, true);

  var sideNavItem7 = document.createElement('audio');
  sideNavItem7.setAttribute('src', 'assets/audio/chime.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem7.addEventListener("load", function() {
    sideNavItem7.play();
  }, true);

  var sideNavItem8 = document.createElement('audio');
  sideNavItem8.setAttribute('src', 'assets/audio/flute.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem8.addEventListener("load", function() {
    sideNavItem8.play();
  }, true);

  var sideNavItem9 = document.createElement('audio');
  sideNavItem9.setAttribute('src', 'assets/audio/luna-bell.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem9.addEventListener("load", function() {
    sideNavItem9.play();
  }, true);

  var sideNavItem10 = document.createElement('audio');
  sideNavItem10.setAttribute('src', 'assets/audio/piano.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem10.addEventListener("load", function() {
    sideNavItem10.play();
  }, true);

  var sideNavItem11 = document.createElement('audio');
  sideNavItem11.setAttribute('src', 'assets/audio/clock.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem11.addEventListener("load", function() {
    sideNavItem11.play();
  }, true);

  var sideNavItem12 = document.createElement('audio');
  sideNavItem12.setAttribute('src', 'assets/audio/piano2.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem12.addEventListener("load", function() {
    sideNavItem12.play();
  }, true);

  var sideNavItem13 = document.createElement('audio');
  sideNavItem13.setAttribute('src', 'assets/audio/shacker.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem13.addEventListener("load", function() {
    sideNavItem13.play();
  }, true);

  var sideNavItem14 = document.createElement('audio');
  sideNavItem14.setAttribute('src', 'assets/audio/violin.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem14.addEventListener("load", function() {
    sideNavItem14.play();
  }, true);

  var sideNavItem15 = document.createElement('audio');
  sideNavItem15.setAttribute('src', 'assets/audio/oboe.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem15.addEventListener("load", function() {
    sideNavItem15.play();
  }, true);

  var sideNavItem16 = document.createElement('audio');
  sideNavItem16.setAttribute('src', 'assets/audio/toy-piano.mp3' , type="audio/mpeg");
  $.get();
  sideNavItem16.addEventListener("load", function() {
    sideNavItem16.play();
  }, true);




  /* NAV BAR: PLAY AUDIO ON HOVER */

  $(".side-nav-item-1").hover(
    function() {
      sideNavItem1.play();
    },
    // function() {
    //   sideNavItem1.pause();
    // }
  );

  $(".side-nav-item-2").hover(
    function() {
      sideNavItem2.play();
    },
  );

  $(".side-nav-item-3").hover(
    function() {
      sideNavItem3.play();
    },
  );

  $(".side-nav-item-4").hover(
    function() {
      sideNavItem4.play();
    },
  );

  $(".side-nav-item-5").hover(
    function() {
      sideNavItem5.play();
    },
  );

  $(".side-nav-item-6").hover(
    function() {
      sideNavItem6.play();
    },
  );

  $(".side-nav-item-7").hover(
    function() {
      sideNavItem7.play();
    },
  );

  $(".side-nav-item-8").hover(
    function() {
      sideNavItem8.play();
    },
  );

  $(".side-nav-item-9").hover(
    function() {
      sideNavItem9.play();
    },
  );

  $(".side-nav-item-10").hover(
    function() {
      sideNavItem10.play();
    },
  );

  $(".side-nav-item-11").hover(
    function() {
      sideNavItem11.play();
    },
  );

  $(".side-nav-item-12").hover(
    function() {
      sideNavItem12.play();
    },
  );

  $(".side-nav-item-13").hover(
    function() {
      sideNavItem13.play();
    },
  );

  $(".side-nav-item-14").hover(
    function() {
      sideNavItem14.play();
    },
  );

  $(".side-nav-item-15").hover(
    function() {
      sideNavItem15.play();
    },
  );

  $(".side-nav-item-16").hover(
    function() {
      sideNavItem16.play();
    },
  );












});
