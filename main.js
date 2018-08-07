const add = (a, b) => {
	
	const lengthA = a.length + 1;
	const lengthB = b.length + 1;
	let arrayA = [];
	let arrayB = [];
	let result = [];
	let acc = 0;
	
	const padZeroStart = (string, length) => {
		const stringLength = string.length;
		const diffLength = length - stringLength;
		let result = [...string];
		for(let i = 0; i < diffLength; i++) {
			result.unshift('0');
		}
		return result;
	}

	if(lengthA > lengthB) {
		arrayB = padZeroStart(b, lengthA);
		arrayA = padZeroStart(a, lengthA);
	} else {
		arrayA = padZeroStart(a, lengthB);
		arrayB = padZeroStart(b, lengthB);
	}

	for(let i = arrayA.length - 1; 0 <= i; i--) {
		let resultTemp = parseInt(arrayA[i]) + parseInt(arrayB[i]) + acc;
		if(resultTemp >= 10) {
			result.unshift(resultTemp - 10);
			acc = 1;
		} else {
			result.unshift(resultTemp);
			acc = 0;
		}
	}

	if(result[0] == '0') {
		result.shift();
		return result.join('');
	} else {
		return result.join('');
	}
}