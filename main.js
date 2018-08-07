const add = (a, b) => {
	
	const lengthA = a.length + 1;
	const lengthB = b.length + 1;
	let arrayA = [];
	let arrayB = [];
	
	const padZeroStart = (string, length, symbol) => {
		const stringLength = string.length;
		const diffLength = length - stringLength;
		let result = [...string];
		for(let i = 0; i < diffLength; i++) {
			result.unshift(symbol);
		}
		return result;
	}

	if(lengthA > lengthB) {
		arrayB = padZeroStart(b, lengthA, '0');
		arrayA = padZeroStart(a, lengthA, '0');
	} else {
		arrayA = padZeroStart(a, lengthB, '0');
		arrayB = padZeroStart(b, lengthB, '0');
	}
	
	/*const arrayA = A.split('');
	const arrayB = B.split('');*/

	let result = [];
	let acc = 0;
	for(let i = arrayA.length; 0 <= i; i--) {
		let resultTemp = parseInt(arrayA[i]) + parseInt(arrayB[i]) + acc;
		if(resultTemp >= 10) {
			result.push(resultTemp - 10);
			acc = 1;
		} else {
			result.push(resultTemp);
			acc = 0;
		}
	}

	return result = result.join('');
}