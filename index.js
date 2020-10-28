document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  // when a user presses the arrow keys, that direction (i.e. left, down, right, or up) is added to a list of directions on the right side of the robot's grid.

  // event listener for arrow keys being pressed
  // determine direction of arrow key
  // add direction to <ul id="moves-container"> as <li> elements

  
  const leftText = document.createTextNode("Left")
  const rightText = document.createTextNode("Right")
  const upText = document.createTextNode("Up")
  const downText = document.createTextNode("Down")

  let list = document.createElement("LI")

  document.body.addEventListener('keydown', function(event) {
    switch (event.key) {
      case "ArrowLeft":
        list = document.createElement("LI")
        list.appendChild(leftText)
        console.log(list)
        document.getElementById("moves-container").appendChild(list)
        break;
      case "ArrowRight":
        list = document.createElement("LI")
        list.appendChild(rightText)
        console.log(list)
        document.getElementById("moves-container").appendChild(list)
        break;
      case "ArrowUp":
        list = document.createElement("LI")
        list.appendChild(upText)
        console.log(list)
        document.getElementById("moves-container").appendChild(list)
        break;
      case "ArrowDown":
        list = document.createElement("LI")
        list.appendChild(downText)
        console.log(list)
        document.getElementById("moves-container").appendChild(list)
        break;
    }
  })
})
