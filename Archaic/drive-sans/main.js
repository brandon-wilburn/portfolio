var pathEls = document.querySelectorAll('path');

// Line CSS
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var length = pathEl.getTotalLength();
  var oL = length;
  var cR;

  // Line Length
  var offsetLength = Math.round(Math.random() * 1);
  if (offsetLength<1) {
    oL = oL/2;
  } else {
    oL = oL/4
  }

  // Line color
  var colorR = Math.round(Math.random() * 2);
   if (colorR==0) {
    cR = "#e1a586";
  } else if (colorR==1) {
    cR = "#d74f6f";
  } else {
    cR = "#17a2af";
  }

  pathEl.setAttribute('stroke-dasharray', oL);
  pathEl.setAttribute('stroke', cR);
}

var cS = document.querySelectorAll('.letterBox');

// Animation
// Iterate through every letter container
for (var k = 0; k < cS.length; k++) {
  var chilldren = cS[k].querySelectorAll('path');
  for (var c = 0; c < chilldren.length; c++) {
    // Iterate through the paths of this container
    var thisP = chilldren[c];
    var thisL = thisP.getTotalLength();
    var tron = anime({
      targets: thisP,
      strokeDashoffset: [0, thisL],
      duration: anime.random(2000, 10000),
      delay: anime.random(0, 1000),
      loop: true,
      direction: 'linear',
      easing: 'easeOutQuint',
      easing: 'steps(50)',
      autoplay: true
    });
  }
}

// Mousing over on a container increases stroke-width of its child elements
var boxes = document.querySelectorAll('.svgContainer');
var container = document.querySelectorAll('.anim');
for (v = 0; v < boxes.length; v++) {
  boxes[v].addEventListener('mouseover', function(event) {
    var clickedElem = event.target;
    var theKidspt2 = clickedElem.querySelectorAll('path');
    $('.anim').css({
      "filter": "drop-shadow(0px 0px 5px rgba(226,214,191,0.2))"
    })
    for (h=0; h<theKidspt2.length; h++) {
      theKidspt2[h].setAttribute('stroke-width', '5px');
    }
  });
    boxes[v].addEventListener('mouseleave', function(event) {
    var clickedElem = event.target;
    var theKidspt2 = clickedElem.querySelectorAll('path');
    for (h=0; h<theKidspt2.length; h++) {
      theKidspt2[h].setAttribute('stroke-width', '1px');
      $('.anim').css({
      "filter": "none"
    })
    }
  });

}

var boxes = document.querySelectorAll('#splashContainer');
var container = document.querySelectorAll('#splash');
for (v = 0; v < boxes.length; v++) {
  boxes[v].addEventListener('mouseover', function(event) {
    var clickedElem = event.target;
    var theKidspt2 = clickedElem.querySelectorAll('path');
    $('#splash').css({
      "filter": "drop-shadow(0px 0px 5px rgba(226,214,191,0.2))"
    })
    for (h=0; h<theKidspt2.length; h++) {
      theKidspt2[h].setAttribute('stroke-width', '3px');
    }
  });
    boxes[v].addEventListener('mouseleave', function(event) {
    var clickedElem = event.target;
    var theKidspt2 = clickedElem.querySelectorAll('path');
    for (h=0; h<theKidspt2.length; h++) {
      theKidspt2[h].setAttribute('stroke-width', '1px');
      $('#splash').css({
      "filter": "none"
    })
    }
  });

}
