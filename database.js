var site = Array("http://iroquois.tripod.com/ICOC/home.html", "https://www.campmenorah.com/", "http://test.woodwind.org/clarinet/BBoard/read.html?f=1&i=21968&t=21603", "http://www.moelinks.com/", "https://www.ibiblio.org/elvis/oldeps.html", "https://www.ibiblio.org/elvis/elvlinks.html");

function randomSite() {
  var randomSite = site[Math.floor(Math.random() * site.length)];
  document.getElementById('randomSite').value = randomSite;
}