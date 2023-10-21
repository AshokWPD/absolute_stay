$(".res-close").on("click", function () {
  $(".navbar-collapse").removeClass("show");
});

$(".navbar-toggler").on("click", function () {
  $("body").addClass("back-drop");
});

$(".navbar-toggler.res-close").on("click", function () {
  $("body").removeClass("back-drop");
});

$(".fav-btn").click(function () {
  $(this).find('img').toggle();
});
$(".pass-btn,.confirm-btn").click(function (e) {
  e.preventDefault();
});
$(".pass-btn").click(function () {
  $(this).find('img').toggle();

  var $pass = $('#password');
  if ($pass.attr('type') === 'text') {
    $pass.attr('type', 'password');
  } else {
    $pass.attr('type', 'text');
  }
});
$(".confirm-btn").click(function () {
  $(this).find('img').toggle();
  var $confirm = $('#re-password');
  if ($confirm.attr('type') === 'text') {
    $confirm.attr('type', 'password');
  } else {
    $confirm.attr('type', 'text');
  }
});

$('.otp-input input').keyup(function () {
  var inputLength = $(this).val().length;
  var maxLength = $(this).attr('maxlength');
  if (inputLength === maxLength) {
    $(this).next().focus();
  }
});

$('.loc-toggle').click(function () {
  $('#loc-drop').toggle();
});

$('.loc-toggle').keyup(function () {
  var filter = $(this).val().toLowerCase();
  $('#loc-drop li').filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(filter) > -1);
  });
});
$(document).click(function (event) {
  var target = event.target;
  if (!$(target).is('.loc-toggle') && !$(target).parents().is('.dropdown')) {
    $('#loc-drop').hide();
  }
});

$('#loc-drop li').click(function () {
  $('#loc-drop li').removeClass('selected');
  $(this).addClass('selected');
  $('.dropdown-search').val($(this).text());
  $('#loc-drop').hide();
});


$('.budget-toggle').click(function () {
  $('#budget-drop').toggle();
});
$('.gender-toggle').click(function () {
  $('#gender-drop').toggle();
});
$('.share-toggle').click(function () {
  $('#share-drop').toggle();
});


$('.done-btn').click(function () {

  $(".dropdown-menu").hide();
});



$(window).on('scroll', () => {
  const header = $('header');
  if (window.scrollY > 0) {
    header.addClass('sticky');
  } else {
    header.removeClass('sticky');
  }
});


