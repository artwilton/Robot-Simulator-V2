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

  document.body.addEventListener('keydown', function(event) {
    const list = document.createElement("li")
    switch (event.key) {
      case "ArrowLeft":
        list.textContent = "Left"
        document.getElementById("moves-container").prepend(list)
        break;
      case "ArrowRight":
        list.textContent = "Right"
        document.getElementById("moves-container").prepend(list)
        break;
      case "ArrowUp":
        list.textContent ="Up"
        document.getElementById("moves-container").prepend(list)
        break;
      case "ArrowDown":
        list.textContent ="Down"
        document.getElementById("moves-container").prepend(list)
        break;
    }
  })
})
