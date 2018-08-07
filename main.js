const add = (a, b) => {
	
	const lengthA = a.length + 1;
	const lengthB = b.length + 1;
	let arrayA = [];
	let arrayB = [];
	
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
		arrayB = padZeroStart(b, lengthA, '0');
		arrayA = padZeroStart(a, lengthA, '0');
	} else {
		arrayA = padZeroStart(a, lengthB, '0');
		arrayB = padZeroStart(b, lengthB, '0');
	}
	
	let result = [];
	let acc = 0;
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