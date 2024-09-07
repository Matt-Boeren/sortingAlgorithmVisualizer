async function bubbleSort(array){
	let sort = array.slice();
	for(let i = 0; i < sort.length; i++){
		for(let j = 0; j < sort.length - i - 1; j++){
			if(sort[j] > sort[j+1]){
				let buffer = sort[j];
				sort[j] = sort[j+1];
				sort[j+1] = buffer;
			}
			showArray(sort, j + 1);
			await sleep(1);
		}
	}
}

async function selectionSort(array){
	let sort = array.slice();
	for(let i = 0; i < sort.length; i++){
		let min = sort[i];
		let index = i;
		for(let j = i; j < sort.length; j++){
			if(sort[j] < min){
				min = sort[j];
				index = j;
			}
		}
		let buffer = sort[i];
		sort[i] = sort[index];
		sort[index] = buffer;

		showArray(sort, index);
		await sleep(1);
	}
}

async function insertionSort(array){
	let sort = array.slice();
	for(let i = 1; i < sort.length; i++){
		let j = i;
		while(j >= 0){
			if(sort[j] < sort[j-1]){
				let buffer = sort[j];
				sort[j] = sort[j-1];
				sort[j-1] = buffer;
			}
			else{
				break;
			}
			showArray(sort, j);
			await sleep(1);
			j--;
		}
	}
}

let totalArray = [];
async function quickSort(array){
	let sort = array.slice();
	quickSortRec(sort, 0, sort.length);
}

async function quickSortRec(array, start, end){
	let less = [];
	let more = [];
	let pivot = array[end - 1];
	let tempArray = [];
	for(let i = start; i < end; i++){
		tempArray.push(array[i]);
	}
	for(let i  = 0; i < tempArray.length - 1; i++){
		if(tempArray[i] > pivot){
			more.push(tempArray[i]);
		}
		else{
			less.push(tempArray[i]);
		}
	}
	totalArray = [];
	for(let i = 0; i < start; i++){
		totalArray.push(array[i]);
	}
	for(let i = 0; i < less.length; i++){
		totalArray.push(less[i]);
	}
	totalArray.push(pivot);
	for(let i = 0; i < more.length; i++){
		totalArray.push(more[i]);
	}
	for(let i = end; i < array.length; i++){
		totalArray.push(array[i]);
	}
	showArray(totalArray, end - 1);
	await sleep(1);
	if(less.length > 1){
		await quickSortRec(totalArray, start, start + less.length);
	}
	if(more.length > 1){
		await quickSortRec(totalArray, end - more.length, end);
	}
}

async function sleep(ms){
	return new Promise((resolve) => setTimeout(resolve, ms));
}
