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














});
