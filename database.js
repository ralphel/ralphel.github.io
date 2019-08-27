var site = Array("www.wodc.org", "song2", "song3", "song4", "song5", "song6");

function randomSite() {
  var randomSite = site[Math.floor(Math.random() * site.length)];
  document.getElementById('randomSite').value = randomSite;
}