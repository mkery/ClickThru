/** DO NOT NEED TO EDIT SCRIPT **/


function loadEventListeners(){
  // first, find all hotspot elements in the document
  var hotspots = document.getElementsByClassName('hotspot');

  // attatch a click event listener to each one
  for (var i = 0; i < hotspots.length; i++) {
    hotspots[i].addEventListener('click', getToDest, false);
  }
}

function getToDest()
{
  var dest = this.getAttribute("dest")
  var destScreen = document.getElementById(dest)
  var screens = document.getElementsByClassName('screen')

  // hide all the screens that are not the desination screen
  for (var i = 0; i < screens.length; i++) {
    screens[i].style.display = 'none';
  }
  // show the destination screen
  destScreen.style.display = "block"
}
