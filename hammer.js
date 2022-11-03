// Get a reference to an element
var square = document.querySelector('.square');
var square2 = document.querySelector('.square2');
var square3 = document.querySelector('.square3');
var img = document.querySelector('.img')

// Create a manager to manager the element
var manager = new Hammer.Manager(square);
var manager2 = new Hammer.Manager(square2)
var manager3 = new Hammer.Manager(square3);
var managerimg = new Hammer.Manager(img)
// Create a recognizer
var Press = new Hammer.Press({
  time: 500
});

var Tap = new Hammer.Tap({
    Tap: 1
})

var Press2 = new Hammer.Press({
    time: 500
  });
  
// Create a recognizer
var Tap = new Hammer.Tap({
    taps: 1
  });

// Add the recognizer to the manager
manager.add(Press);
manager2.add(Press2)
manager3.add(Tap);
managerimg.add(Tap);

// Subscribe to desired event
manager.on('press', function(e) {
  e.target.classList.toggle('expand');
});

manager2.on('press', function(e) {
    e.target.classList.toggle('expand');
  });

manager3.on('tap', function(e) {
    e.target.classList.toggle('expand');
  });

managerimg.on('tap', function(e){
    e.target.classList.toggle('expand')
})








