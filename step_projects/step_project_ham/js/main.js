"use strict";

//Our Services
$('.services-menu li').click(function () {
  $('.services-menu li').removeClass('active');
  $(this).addClass('active');
  const index = $(this).index();
  $('.service').removeClass('active');
  $(`.service:eq(${index})`).addClass('active');
});

//Our Amazing Work 
$(document).ready(function () {
  let $gallery = $('.our-work-gallery').isotope({
    itemSelector: '.our-work-gallery li',
    layoutMode: 'fitRows'
  });

  // bind filter button click
  $('.work-menu').on('click', 'li', function () {
    let filterValue = $(this).attr('data-filter');
    $gallery.isotope({
      filter: filterValue
    });
  });

  /***********/
  // function updateFilterCounts() {
  //     // get filtered item elements
  //     let itemElems = $gallery.isotope('getFilteredItemElements');
  //     let count_items = $(itemElems).length;

  //     if (count_items > initial_items) {
  //         $('#showMore').show();
  //     }
  //     else {
  //         $('#showMore').hide();
  //     }
  //     if ($('.element-item').hasClass('visible_item')) {
  //         $('.element-item').removeClass('visible_item');
  //     }
  //     let index = 0;

  //     $(itemElems).each(function () {
  //         if (index >= initial_items) {
  //             $(this).addClass('visible_item');
  //         }
  //         index++;
  //     });
  //     $grid.isotope('layout');
  // }
  /************/

  // change active class on buttons
  $('.work-menu').each(function (i, buttonGroup) {
    let $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'li', function () {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  // Isotope Load more button   
  const initShow = 12;
  let counter = initShow;
  let iso = $gallery.data('isotope');

  loadMore(initShow);

  function loadMore(toShow) {
    $gallery.find(".hidden").removeClass("hidden");

    let hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
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
  $gallery.after('<button id="load-more" class="button--basic"><i class="fas fa-plus"></i> Load more</button>');

  //when load more button clicked
  $("#load-more").click(function () {
    if ($('.work-menu').data('active')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('.work-menu').data('active', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    //show loading bar
    $('.lds-facebook').addClass('show');

    setTimeout(() => { $('.lds-facebook').removeClass('show'); loadMore(counter); }, 2 * 1000);
  });

  //when filter button clicked
  $(".work-menu").click(function () {
    $(this).data('active', true);
    // loadMore(initShow);
  });
});

//What People Say
//Slick Slider
$('.reviews').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.reviwers'
});
$('.reviwers').slick({
  arrows: true,
  infinite: false,
  focusOnSelect: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.reviews',
  prevArrow: '<div class = "slider__button--prev"><i class="fas fa-chevron-left"></i></div>',
  nextArrow: '<div class = "slider__button--next"><i class="fas fa-chevron-right"></i></div>',
});

// let direction;
// $(document).on('click', '.slider__button--next.slick-arrow', function () {
//   direction = 'right';
//   $('.reviwers').slick('slickNext');
// });
// $(document).on('click', '.slider__button--prev.slick-arrow', function () {
//   direction = 'left';
//   $('.reviwers').slick('slickPrev');
// });

// $('.reviwers').on('afterChange', function (event, slick, currentSlide) {
//   let prevSlide = direction == 'left' ? currentSlide + 1 : currentSlide - 1;
//   $(`.review[data-id='${prevSlide}']`).removeClass('active');
//   $(`.review[data-id='${currentSlide}']`).addClass('active');
// });

