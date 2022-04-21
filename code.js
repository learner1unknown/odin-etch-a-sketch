
// Creating container to hold grid and boxes
const container = document.querySelector('#container');

// Create grid
const grid = document.createElement('div');
grid.classList.add('grid'); 
grid.setAttribute('style', 'display: grid; grid-template-columns: repeat(15, 32px);');    


/*
Set up intial grid
- event listener for mousever is made 
- if amouse passes over box its bckground is changed to orange
*/

for(let i=0; i<225; i++) {
    var box = document.createElement('div');

    box.classList.add('box'); 
    box.setAttribute('style', 'border: 1px solid black; width: 30px ; height: 30px ;');

    box.addEventListener("mouseover", function(e) {
        // highlight the mouseover target
        e.target.style.backgroundColor = "orange";
    })

    grid.appendChild(box);
}
container.appendChild(grid);

/*
Clear All
- Clear all button is selected
- event listener for click is made 
- on click select all the boxes  and loop thorugh each box and set its background to white
*/
const clear = document.querySelector('.clear');

clear.addEventListener("click", function() {

    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.backgroundColor = "white";
    }

})


/*
Eraser
- eraser button is selected
- event listener for click is made 
- on click select all the boxes  and whenever a mouse runs over the box set its background to white
*/

const eraser = document.querySelector('.eraser');

eraser.addEventListener("click", function() {

    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", function(e) {
            // highlight the mouseover target
            e.target.style.backgroundColor = "white";
        })
    }

})