$(document).ready(function() {


    // ON PAGE LOAD (ALL IMAGES SHOWN)
    $('.all--filter').addClass('highlight');
    $('.item--image').addClass('show');
    $('.item--null').removeClass('show');



    // ON CLICK (SELECT FILTER GROUPS)

    $('.all--filter').click(function(event){
      $('.item--null').removeClass('show');
      $('.item--image').removeClass('hide');


      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });

    $('.buck--filter').click(function(event){
      $('.item--null').addClass('show');
      $('.item--image').addClass('hide');

      $('.index-item.buck .item--image').removeClass('hide');
      $('.index-item.buck .item--null').removeClass('show');

      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });

    $('.ar--filter').click(function(event){
      $('.item--null').addClass('show');
      $('.item--image').addClass('hide');

      $('.index-item.ar .item--image').removeClass('hide');
      $('.index-item.ar .item--null').removeClass('show');

      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });


    $('.beauty--filter').click(function(event){
      $('.item--null').addClass('show');
      $('.item--image').addClass('hide');

      $('.index-item.beauty .item--image').removeClass('hide');
      $('.index-item.beauty .item--null').removeClass('show');

      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });


    $('.eyewear--filter').click(function(event){
      $('.item--null').addClass('show');
      $('.item--image').addClass('hide');

      $('.index-item.eyewear .item--image').removeClass('hide');
      $('.index-item.eyewear .item--null').removeClass('show');

      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });


    $('.fashion--filter').click(function(event){
      $('.item--null').addClass('show');
      $('.item--image').addClass('hide');

      $('.index-item.fashion .item--image').removeClass('hide');
      $('.index-item.fashion .item--null').removeClass('show');

      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });


    $('.film--filter').click(function(event){
      $('.item--null').addClass('show');
      $('.item--image').addClass('hide');

      $('.index-item.film .item--image').removeClass('hide');
      $('.index-item.film .item--null').removeClass('show');

      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });


    $('.game--filter').click(function(event){
      $('.item--null').addClass('show');
      $('.item--image').addClass('hide');

      $('.index-item.game .item--image').removeClass('hide');
      $('.index-item.game .item--null').removeClass('show');

      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });


    $('.illustration--filter').click(function(event){
      $('.item--null').addClass('show');
      $('.item--image').addClass('hide');

      $('.index-item.illustration .item--image').removeClass('hide');
      $('.index-item.illustration .item--null').removeClass('show');

      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });

    $('.image--filter').click(function(event){
      $('.item--null').addClass('show');
      $('.item--image').addClass('hide');

      $('.index-item.image .item--image').removeClass('hide');
      $('.index-item.image .item--null').removeClass('show');

      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });


    $('.product--filter').click(function(event){
      $('.item--null').addClass('show');
      $('.item--image').addClass('hide');

      $('.index-item.product .item--image').removeClass('hide');
      $('.index-item.product .item--null').removeClass('show');

      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });

    $('.space--filter').click(function(event){
      $('.item--null').addClass('show');
      $('.item--image').addClass('hide');

      $('.index-item.space .item--image').removeClass('hide');
      $('.index-item.space .item--null').removeClass('show');

      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });


    $('.publication--filter').click(function(event){
      $('.item--null').addClass('show');
      $('.item--image').addClass('hide');

      $('.index-item.publication .item--image').removeClass('hide');
      $('.index-item.publication .item--null').removeClass('show');

      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });


    $('.vr--filter').click(function(event){
      $('.item--null').addClass('show');
      $('.item--image').addClass('hide');

      $('.index-item.vr .item--image').removeClass('hide');
      $('.index-item.vr .item--null').removeClass('show');

      $('.filter').removeClass('highlight');

      $(this).addClass('highlight');

    });











});
