
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

var slideIndex = 1;
showSpans(slideIndex);

function plusDivs(n) {
  showSpans(slideIndex += n);
}
function showSpans(n) {
  var i;
  var s =
  document.getElementsByClassName("slides");
  if (n > s.length)
  {slideIndex = 1}
  if (n < 1)
  { slideIndex = s.length} ;
  for (var i = 0; i < s.length; i++) {
    s[i]
  }

}
