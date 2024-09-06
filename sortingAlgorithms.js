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
async function sleep(ms){
	return new Promise((resolve) => setTimeout(resolve, ms));
}

