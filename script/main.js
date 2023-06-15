//СНОСКИ
$(document).ready(function() {
  $(".footnotes__button").click(function() {
    let buttonText = $(this).find('span').text();

    if (buttonText === 'Развернуть сноски') {
      $(this).find('span').text('Свернуть блок');
    } else {
      $(this).find('span').text('Развернуть сноски');
    }

    $(".footnotes__list").slideToggle();
    let isOpen = $(this).find(".footnotes__arrow").attr("data-open");
    isOpen = isOpen === "true" ? "false" : "true";
    $(this).find(".footnotes__arrow").attr("data-open", isOpen);
  });




  $(document).ready(function() {
    $('.card__head').click(function() {
      let cardBody = $(this).siblings('.card__body');
      cardBody.slideToggle();
      $(this).find('svg').toggleClass('open');
    });
  });





  $(".header__expanded__link").mouseleave(function () {
    $(this).children(".expanded__link__hidden").hide()
    $(this).animate({
      height: '62px'
    }, 300);
    $(this).attr("data-open", "false");
  })

  $(".header__expanded__link").click(function() {
    let isOpen = $(this).attr("data-open");
    if (isOpen === "true") {
      $(this).children(".expanded__link__hidden").hide()
      $(this).animate({
        height: '62px'
      }, 300);
    } else {
      $(this).children(".expanded__link__hidden").show()
      $(this).animate({
        height: '168px'
      }, 300);
    }
    $(this).attr("data-open", isOpen === "true" ? "false" : "true");
  });

  $(".hamburger").click(function() {
    document.body.style.overflow = 'hidden';
    $(".header__mobile__menu").attr("data-open", 'true');
  });

  $(".closed__mobile__header").click(function() {
    document.body.style.overflow = '';
    $(".header__mobile__menu").attr("data-open", 'false');
  });

  $('.mobile__expanded__button').click(function() {
    $(this).siblings('.mobile__expanded__menu').slideToggle()
    $(this).children('.expanded__icon').toggleClass('open')

  })


});

// $(document).ready(function() {
//   $(window).scroll(function() {
//     let windowHeight = $(window).height();
//     let scrollPos = $(window).scrollTop();
//     let elementPos = $('.animated__title').offset().top;
//
//     // Проверяем, находится ли элемент в зоне видимости
//     if (scrollPos > elementPos - windowHeight + 200) {
//       $('.animated__title').css('opacity', '1');
//     }
//   });
// });

//
// $(document).ready(function() {
//
//   $('body').scroll(function() {
//     var windowHeight = $(window).height();
//     var scrollPos = $(window).scrollTop();
//
//     // Для каждого элемента с классом .fade-in
//     $('.animated__title').each(function() {
//       var elementPos = $(this).offset().top;
//
//       // Проверяем, находится ли элемент в зоне видимости
//       if (scrollPos > elementPos - windowHeight + 40) {
//         $(this).css({
//           'opacity': '1',
//           'transform': 'translateY(0)'
//         });
//       }
//     });
//   });
// });
document.addEventListener('DOMContentLoaded', function() {
  var animatedTitles = document.querySelectorAll('.animated__title');
  var container = document.querySelector('.container');

  function animateTitles() {
    var windowHeight = container.clientHeight;
    var scrollPos = container.scrollTop;

    animatedTitles.forEach(function(title) {
      var elementPos = title.offsetTop;

      if (scrollPos > elementPos - windowHeight + 200) {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }
    });
  }

  animateTitles();

  container.addEventListener('scroll', animateTitles);
});

document.addEventListener('DOMContentLoaded', function() {
  var animatedTitles = document.querySelectorAll('.animated__title');

  function animateTitles() {
    var windowHeight = window.innerHeight;
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    animatedTitles.forEach(function(title) {
      var elementPos = title.offsetTop;

      if (scrollPos > elementPos - windowHeight + 200) {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }
    });
  }

  animateTitles();

  window.addEventListener('scroll', animateTitles);
});


$(document).ready(function() {
  // Получаем все элементы <sup> на странице и добавляем им функцию обработчика события click
  $('sup').click(function() {
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
  });
});





//SLIDER
let swiper = new Swiper(".slider", {
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".about__slider", {
  loop: true,
  navigation: {
    nextEl: ".about-button-next",
    prevEl: ".about-button-prev",
  },
});
