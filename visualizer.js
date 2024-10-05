const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

const arrayLength = 300;
const pixHeight = Math.floor((window.innerHeight*0.90)/arrayLength);
const pixLength = Math.floor((window.innerWidth*0.99)/arrayLength);

canvas.width = arrayLength*pixLength + 2*pixHeight;
canvas.height = arrayLength*pixHeight + 2*pixHeight;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function createRandomArray(arrLength){
	let result = [];
	let sorted = [];
	for(let i = 0; i < arrLength; i++){
		sorted[i] = i+1;
	}
	for(let i = 0; i < arrLength; i++){
		const index = Math.floor(Math.random() * sorted.length);
		result[i] = sorted[index];
		sorted.splice(index, 1);
	}
	return result;
}

function showArray(array, index){
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	for(let i = 0; i < array.length; i++){
		if(i === index){
			ctx.fillStyle = "lightgreen";
		}
		else{
			ctx.fillStyle = "white";
		}
		ctx.fillRect(i*pixLength + pixHeight, canvas.height - pixHeight, pixLength, -array[i]*pixHeight);
	}
}
