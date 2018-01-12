var reset = document.getElementById('reset');
var print = document.getElementById('print');
var noBorder = document.getElementById('noBorder');

var currentElement = circa;

var circles = document.querySelectorAll('.circle');

// REMOVE BORDER
noBorder.addEventListener('click', function() {
  circles.forEach(function(c) {
    c.classList.toggle('no-border');
  });
});

// RESET COLORING
reset.addEventListener('click', function() {
  circles.forEach(function(c) {
    c.classList.add('no-color');
  });
});

// TODO: refactor code
// PICK ELEMENT

// circles.forEach(function(circle) {
//   circle.addEventListener('click', function() {
//     circles.forEach(function(circle) {
//       currentElement = circle.id;
//     });
//   });
// });

// COLOR ELEMENT
colorsArray = [
  'yellow',
  'orange',
  'darkGreen',
  'green',
  'turquoise',
  'lightBlue',
  'peach',
  'blue',
  'purple',
  'pink',
  'red',
  'brown',
  'black',
  'grey',
  'white',
  'no-color'
];

var circa = document.getElementById('circa');
var circb = document.getElementById('circb');
var circc = document.getElementById('circc');
var circd = document.getElementById('circd');
var circe = document.getElementById('circe');
var circf = document.getElementById('circf');
var circg = document.getElementById('circg');
var circh = document.getElementById('circh');
var circi = document.getElementById('circi');
var circj = document.getElementById('circj');
var circk = document.getElementById('circk');
var circl = document.getElementById('circl');
var circm = document.getElementById('circm');
var circn = document.getElementById('circn');

circa.addEventListener('click', function() {
  currentElement = circa;
});
circb.addEventListener('click', function() {
  currentElement = circb;
});
circc.addEventListener('click', function() {
  currentElement = circc;
});
circd.addEventListener('click', function() {
  currentElement = circd;
});
circe.addEventListener('click', function() {
  currentElement = circe;
});
circf.addEventListener('click', function() {
  currentElement = circf;
});
circg.addEventListener('click', function() {
  currentElement = circg;
});
circh.addEventListener('click', function() {
  currentElement = circh;
});
circi.addEventListener('click', function() {
  currentElement = circi;
});
circj.addEventListener('click', function() {
  currentElement = circj;
});
circk.addEventListener('click', function() {
  currentElement = circk;
});
circl.addEventListener('click', function() {
  currentElement = circl;
});
circm.addEventListener('click', function() {
  currentElement = circm;
});
circn.addEventListener('click', function() {
  currentElement = circn;
});

var colors = document.querySelectorAll('.color');
colors.forEach(function(color) {
  color.addEventListener('click', function() {
    var circleClasses = currentElement.classList;
    for (var i = 0; i < colorsArray.length; i++) {
      for (var j = 0; j < circleClasses.length; j++) {
        if (colorsArray[i] === circleClasses[j]) {
          currentElement.classList.remove(circleClasses[j]);
        }
      }
    }
    currentElement.classList.add(this.id);
  });
});
