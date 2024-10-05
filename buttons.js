const buttonContainer = document.getElementById("buttonContainer");

const sortingAlgorithms = [
  { name: "Bubble Sort", func: bubbleSort },
  { name: "Selection Sort", func: selectionSort },
  { name: "Insertion Sort", func: insertionSort },
  { name: "Quicksort", func: quickSort }
];

sortingAlgorithms.forEach(algorithm => {
  const button = document.createElement("button");
  button.innerText = algorithm.name;
    
  button.addEventListener('click', async function () {
    let newArray = createRandomArray(arrayLength);
		disableButtons();
    await algorithm.func(newArray);
		reableButtons();
	});
    
  buttonContainer.appendChild(button);
});

function disableButtons(){
	const buttons = buttonContainer.querySelectorAll("button");

	for(let i = 0; i < buttons.length; i++){
		buttons[i].disabled = true;
	}
}

function reableButtons(){
	const buttons = buttonContainer.querySelectorAll("button");

	for(let i = 0; i < buttons.length; i++){
		buttons[i].disabled = false;
	}
}
