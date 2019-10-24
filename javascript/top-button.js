// source: w3schools - Scroll Back To Top Button
// link: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// Get the button
const topButton = document.getElementById("id-top-button");

// When scrolling down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

// show or hide the button based on distance from top
function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When clicking on the button, scroll to the top of the document
function goToTop() {
  document.documentElement.scrollTop = 0; 
}
