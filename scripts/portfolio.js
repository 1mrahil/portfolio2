window.onscroll = function() {
  scrollFunction();
};
//open menu, push content aside
function openNav() {
  document.getElementById("menu").style.width = "250px";
  document.getElementsByTagName("main")[0].style.opacity = "0.4";

  if ((document.getElementById("menu").style.width = "250px")) {
    var btn = document.getElementById("menubutton");
    btn.style.display = "none";
  } else {
    btn.style.display = "initial";
  }
}
// close menu, return content to original position
function closeNav() {
  document.getElementById("menu").style.width = "0";
  document.getElementsByTagName("main")[0].style.opacity = "1";

  if ((document.getElementById("menu").style.width = "0")) {
    var btn = document.getElementById("menubutton");
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

//scroll to top
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
