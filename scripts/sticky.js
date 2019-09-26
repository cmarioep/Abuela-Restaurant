// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};


// Get the header
var header = document.getElementById("menuBar");



// Get the offset position of the navbar
var sticky = menuBar.offsetTop;


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        menuBar.classList.add("sticky");
        
    } else {
        menuBar.classList.remove("sticky");
    }
  }

  




