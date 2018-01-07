var reset = document.getElementById('reset');
var print = document.getElementById('print');
var noBorder = document.getElementById('noBorder');

var currentElement;

// REMOVE BORDER

// TODO: fix function so user can remove border from all elements
// var circle = document.querySelectAll('circle');
// var currentElement;
//
// noBorder.addEventListener('click', function() {
//   circle.classList.add('border');
// });

// RESET COLORING
// reset.addEventListener('click', function() {
//   console.log('RESET');
//   XXX.classList.add('no-color');
// });

// TODO: refactor code
// PICK ELEMENT

// var currentElement;
//
// var circles = document.querySelectorAll('.circle');
// circles.forEach(function(circle) {
//   circle.addEventListener('click', function() {
//     currentElement = circle.id;
//   });
// });

// COLOR ELEMENT
colors = [
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
  'white'
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
// Check if class with color already exists.
// If it does - removes it to add the new class

function hasColor(element, color) {
  return (' ' + element.className + ' ').indexOf(' ' + color + ' ') > -1;
}

var colors = document.querySelectorAll('.color');
colors.forEach(function(color) {
  color.addEventListener('click', function() {
    console.log('adding the color ' + this.id + ' to ' + currentElement);
    currentElement.classList.add(this.id);
    for (var i = 0; i < colors.length; i++) {
      if (hasColor(currentElement, colors[i])) {
        console.log('removes ', colors[i]);
        currentElement.classList.remove(colors[i]);
      }
    }
  });
});

// var yellow = document.getElementById('yellow');
// var orange = document.getElementById('orange');
// var darkGreen = document.getElementById('darkGreen');
// var green = document.getElementById('green');
// var turquoise = document.getElementById('turquoise');
// var lightBlue = document.getElementById('lightBlue');
// var peach = document.getElementById('peach');
// var blue = document.getElementById('blue');
// var purple = document.getElementById('purple');
// var pink = document.getElementById('pink');
// var red = document.getElementById('red');
// var brown = document.getElementById('brown');
// var black = document.getElementById('black');
// var grey = document.getElementById('grey');
// var white = document.getElementById('white');
//
