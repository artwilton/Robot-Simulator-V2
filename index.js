document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  // when a user presses the arrow keys, that direction (i.e. left, down, right, or up) is added to a list of directions on the right side of the robot's grid.

  // event listener for arrow keys being pressed
  // determine direction of arrow key
  // add direction to <ul id="moves-container"> as <li> elements

  const movesList = document.getElementById("moves-container")
  const moveButton = document.getElementById("move-button")

  document.body.addEventListener('keydown', function(event) {
    const list = document.createElement("li")
    switch (event.key) {
      case "ArrowLeft":
        list.textContent = "Left"
        movesList.append(list)
        break;
      case "ArrowRight":
        list.textContent = "Right"
        movesList.append(list)
        break;
      case "ArrowUp":
        list.textContent ="Up"
        movesList.append(list)
        break;
      case "ArrowDown":
        list.textContent ="Down"
        movesList.append(list)
        break;
    }
  })

  moveButton.addEventListener('click', function(event) {
    movesList.children[0].remove()

  })
})
