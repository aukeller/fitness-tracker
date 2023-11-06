document.addEventListener("click", function (event) {
  if (event.target.classList.contains("decrease")) {
    decreaseWeight(event.target);
  } else if (event.target.classList.contains("increase")) {
    increaseWeight(event.target);
  }
});

function decreaseWeight(button) {
  const weightElement = button.nextElementSibling;
  const weightValue = parseFloat(weightElement.textContent);
  weightElement.textContent = (weightValue - 2.5).toString();
}

function increaseWeight(button) {
  const weightElement = button.previousElementSibling;
  const weightValue = parseFloat(weightElement.textContent);
  weightElement.textContent = (weightValue + 2.5).toString();
}
