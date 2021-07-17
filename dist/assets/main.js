// copy
function copy(value) {
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

// cookie notice
$(".times-c1m9tu").click(function hideCookieNotice(){
  $(".cookieNotice-xrj9n7").fadeOut();
});

$(document).ready(function showCookieNotice() {
  var isshow = localStorage.getItem('cookie-notice');
  if (isshow== null) {
    localStorage.setItem('cookie-notice', 1);
      $('.cookieNotice-xrj9n7').show();
    }
});

// costum select boxes
$('select').each(function () {
  var $this = $(this),
  numberOfOptions = $(this).children('option').length;
  $this.addClass('s-hidden');
  $this.wrap('<div class="select"></div>');

  $this.after('<div class="styledSelect"></div>');
  var $styledSelect = $this.next('div.styledSelect');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');
  $styledSelect.click(function (e) {
      e.stopPropagation();
      $('div.styledSelect.active').each(function () {
          $(this).removeClass('active').next('ul.options').hide();
      });
      $(this).toggleClass('active').next('ul.options').toggle();
  });

  $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
  });
  $(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
  });
});

// accordion
var acc = document.getElementsByClassName("accordion-dy5byx");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-x08em9");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// tips
tippy('.premium-xafbb8', {
  content: 'This is an exclusive premium feature.',
  animation: 'shift-toward-subtle',
  theme: 'dark',
});

tippy('.info-b00xkk', {
  content: 'Requires advanced configuration.',
  animation: 'shift-toward-subtle',
  theme: 'dark',
});

// start AOS
$(document).ready(function () {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  // fade in mobile nav
  $(".showPopup-e9fypy").click(function() { 
    $(".mobilePopup-bgaqvw").fadeIn(500);
  });

  $(".times-gbkon9").click(function() { 
    $(".mobilePopup-bgaqvw").fadeOut(500);
  });
});

// dashboard tips
tippy('.item-97w8ng', {
  content: 'Status',
  animation: 'shift-toward-subtle',
  theme: 'dark',
  placement: 'bottom',
});

tippy('.item-lnvdtb', {
  content: 'Coupons',
  animation: 'shift-toward-subtle',
  theme: 'dark',
  placement: 'bottom',
});

tippy('.item-0ldjbp', {
  content: 'Statistics',
  animation: 'shift-toward-subtle',
  theme: 'dark',
  placement: 'bottom',
});

tippy('.item-pnsui8', {
  content: 'Share Files',
  animation: 'shift-toward-subtle',
  theme: 'dark',
  placement: 'bottom',
});

tippy('.item-ihm72u', {
  content: 'Commands',
  animation: 'shift-toward-subtle',
  theme: 'dark',
  placement: 'bottom',
});

tippy('.copy-aozx9w', {
  content: 'Copied',
  animation: 'shift-toward-subtle',
  theme: 'dark',
  placement: 'top',
  trigger: 'click',
});

// settings tips
tippy('.info-ff9lg5', {
  content: 'Please specify the name of the channel you want to use.',
  animation: 'shift-toward-subtle',
  theme: 'dark',
  placement: 'top',
});

// coupons
tippy('.zap-pfblh8', {
  content: 'Copied',
  animation: 'shift-toward-subtle',
  theme: 'dark',
  placement: 'top',
  trigger: 'click',
});

// bad words
$('.word-j9dus3').on('click', function(){
  var value = $(this).attr('name');

  if (value != null) {
    $('<input />').attr('type', 'hidden')
      .attr('name', 'word')
      .attr('value', value)
      .appendTo('#manageBadWords');
    $('#manageBadWords').submit()
  }
});

const userDropdown = document.getElementById('userDropdown');
userDropdown.style.display = 'flex';

tippy('.item-xt58px', {
  content: userDropdown,
  animation: 'shift-toward-subtle',
  theme: 'dark',
  placement: 'bottom',
  interactive: true,
  trigger: 'click',
  arrow: false,
});

// dashboard announcement
$(".times-tw3kjf").click(function hideCookieNotice(){
  $(".accouncement-xbb093").fadeOut();
});

$(document).ready(function showCookieNotice() {
  var isshow = localStorage.getItem('announcement-box');
  if (isshow== null) {
    localStorage.setItem('announcement-box', 1);
      $('.accouncement-xbb093').show();
    }
});
