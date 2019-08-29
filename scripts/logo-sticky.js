window.onscroll = function() {myFunction2()};

var logo = document.getElementById("logo");
var header = document.getElementById("menu");

var logosticky = menu.offsetTop;


function myFunction2() {
    if (window.pageYOffset > logosticky) {
        logo.classList.add("sticky-logo");

    } else {
        logo.classList.remove("sticky-logo");
    }
  }
