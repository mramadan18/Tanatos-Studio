$(function () {

  // $('html, body').niceScroll({

  //   cursorcolor: '#f7600e',
  //   cursorwidth: '8px',
  //   cursorborder: 'none',
  //   cursorborderradius: 'none'

  // });

  $('.header').height($(window).height());

  $('.header .arrow i').click(function () {

    $('html, body').animate({

      scrollTop: $('.features').offset().top

    }, 1000);

  })

  $('.hire').click(function () {

    $('html, body').animate({

      scrollTop: $('.our-team').offset().top

    }, 1000)

  })

  $('.show-more').click(function () {

    $('.our-work .hidden').fadeIn(1000);

  });

  var leftArrow = $('.testim .fa-chevron-left');
  var rightArrow = $('.testim .fa-chevron-right');

  function checkClient() {

    $('.client:first').hasClass('active') ? leftArrow.fadeOut(0) : leftArrow.fadeIn();

    $('.client:last').hasClass('active') ? rightArrow.fadeOut(0) : rightArrow.fadeIn();

  }

  checkClient();

  $('.testim i').click(function () {

    if ($(this).hasClass('fa-chevron-right')) {

      $('.testim .active').fadeOut(100, function () {

        $(this).removeClass('active').next().addClass('active').fadeIn();

        checkClient();

      })

    } else {

      $('.testim .active').fadeOut(100, function () {

        $(this).removeClass('active').prev().addClass('active').fadeIn();

        checkClient();

      })

    }

  })

  $('body').fadeIn(2000);

  $('.links').click(function () {

    $('.menu-box').show();

  })

  $('.fa-close').click(function () {

    $('.menu-box').hide();

  });

  $('.menu-box ul li').click(function () {

    $('html, body').animate({

      scrollTop: $('#' + $(this).data('value')).offset().top

    }, 2000)

    $('.menu-box').hide();

  })

})