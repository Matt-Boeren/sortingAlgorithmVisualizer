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

async function sleep(ms){
	return new Promise((resolve) => setTimeout(resolve, ms));
}

