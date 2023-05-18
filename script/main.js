//СНОСКИ
$(document).ready(function() {
  $(".footnotes__button").click(function() {
    $(".footnotes__list").slideToggle();
    let isOpen = $(this).find(".footnotes__arrow").attr("data-open");
    isOpen = isOpen === "true" ? "false" : "true";
    $(this).find(".footnotes__arrow").attr("data-open", isOpen);
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







//SLIDER
let swiper = new Swiper(".slider", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
});
var swiper2 = new Swiper(".about__slider", {
  loop: true,
  navigation: {
    nextEl: ".about-button-next",
    prevEl: ".about-button-prev",
  },
});