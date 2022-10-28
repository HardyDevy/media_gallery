// a test function that runs when the button is clicked
function sampleFunction() {
  alert("You clicked the button");
}

// Mobile Navigaton Toggle
function navToggle() {
  var x = document.getElementById("main-nav");
    if (x.className === "top-nav") {
    x.className += " responsive";
  } else {
    x.className = "top-nav";
  }
}