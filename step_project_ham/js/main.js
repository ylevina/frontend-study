"use strict";

//Our Services
$('.services-menu li').click(function () {
    $('.services-menu li').removeClass('active');
    $(this).addClass('active');
    const index = $(this).index();
    $('.service').removeClass('active');
    $(`.service:eq(${index})`).addClass('active');
});


//Our Amazing Work by Isotope
// let $gallery = $('.our-work-gallery').isotope({
//     itemSelector: '.our-work-gallery li',
//     layoutMode: 'fitRows'
// });

// $('.work-menu li').click(function () {
//     $('.work-menu li').removeClass('active');
//     $(this).addClass('active');

//     const selector = $(this).attr('data-filter');
//     $('.our-work-gallery').isotope({
//         filter: selector
//     });
//     // return false;
// });

//Load More
// $('#load-more').click(function () {
//     $('.flip-box').removeClass('hidden');
//     $(this).remove();
// });

// external js: isotope.pkgd.js

//
$(document).ready(function() {  
    var $gallery = $('.our-work-gallery').isotope({
      itemSelector: '.our-work-gallery li',
      layoutMode: 'fitRows'      
    });
    
    // bind filter button click
    $('.work-menu').on('click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value     
      $gallery.isotope({
        filter: filterValue
      });
    });
  
    // change is-checked class on buttons
    $('.work-menu').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'li', function() {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
    
    // Isotope Load more button   
    const initShow = 12; //number of items loaded on init & onclick load more button
    let counter = initShow; //counter for load more button
    let iso = $gallery.data('isotope'); // get Isotope instance
  
    loadMore(initShow); //execute function onload
  
    function loadMore(toShow) {
      $gallery.find(".hidden").removeClass("hidden");
  
      let hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
        return item.element;
      });
      $(hiddenElems).addClass('hidden');
      $gallery.isotope('layout');
  
      //when no more to load, hide show more button
      if (hiddenElems.length == 0) {
        $("#load-more").hide();
      } else {
        $("#load-more").show();
      };  
    }
  
    //append load more button
    // $container.after('<button id="load-more" class="button--basic"> Load More</button>');
  
    //when load more button clicked
    $("#load-more").click(function() {
      if ($('.work-menu').data('active')) {
        //when filter button clicked, set initial value for counter
        counter = initShow;
        $('.work-menu').data('active', false);
      } else {
        counter = counter;
      };
  
      counter = counter + initShow;
  
      loadMore(counter);
    });
  
    //when filter button clicked
    $(".work-menu").click(function() {
      $(this).data('active', true);
  
      loadMore(initShow);
    });
  });


  //Slider
  $('.reviwers').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
    