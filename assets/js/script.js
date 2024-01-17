"use strict";
// navbar variables
const nav = document.querySelector(".mobile-nav");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");
// navToggle function
const navToggleFunc = function () {
  nav.classList.toggle("active");
};
navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);
// theme toggle variables
const themeBtn = document.querySelectorAll(".theme-btn");
for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener("click", function () {
   
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    for (let i = 0; i < themeBtn.length; i++) {
      themeBtn[i].classList.toggle("light");
      themeBtn[i].classList.toggle("dark");
    }
  });
}
/*------- user profile drop down menu -----------*/
function toggleDropdown() {
  var dropdownContent = $("#dropdownContent");
  dropdownContent.toggle();

  $(document).on("click", function (event) {
    if (!event.target.closest("#dropdownBtn")) {
      dropdownContent.hide();
    }
  });
}
/*-------------- Slider ----------*/

jQuery(document).ready(function ($) {
  var slideCount = $("#slider2 ul li").length;
  var slideWidth = $("#slider2 ul li").width();
  var slideHeight = $("#slider2 ul li").height();
  var sliderUlWidth = slideCount * slideWidth;
  $("#slider2").css({ width: slideWidth, height: slideHeight });
  $("#slider2 ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });
  $("#slider2 ul li:last-child").prependTo("#slider2 ul");

  function moveLeft() {
    $("#slider2 ul").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#slider2 ul li:last-child").prependTo("#slider2 ul");
        $("#slider2 ul").css("left", "");
      }
    );
  }

  function moveRight() {
    $("#slider2 ul").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#slider2 ul li:first-child").appendTo("#slider2 ul");
        $("#slider2 ul").css("left", "");
      }
    );
  }

  // Slider Arrows
  $("#slider2 .prevarrow2").click(function () {
    moveLeft();
  });
  $("#slider2 .nextarrow2").click(function () {
    moveRight();
  });

  // auto play function
  setInterval(function () {
    moveRight();
  }, 3000);
});

// services check box
$(document).ready(function () {
  // Select All button functionality
  $("#selectAllBtn").click(function () {
    $(".checkbox").prop("checked", !$(".checkbox").prop("checked"));
  });
});
/* counter  */
$(document).ready(function() {
    var count = 3; // Initial count value
    var price = 100; // Price per item

    // Update the count display and total amount
    function updateCounter() {
        $('.count').text(count);
        $('.amount').text(count * price);
    }

    // Increment button click event
    $('.increment').click(function() {
        count++;
        updateCounter();
    });

    // Decrement button click event
    $('.decrement').click(function() {
        if (count > 0) {
            count--;
            updateCounter();
        }
    });

    // Purchase All button click event
    $('.purchase-all').click(function() {
        alert('All items purchased!');
    });

    // Initial counter update
    updateCounter();
});
