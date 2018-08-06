const add = (a, b) => {
	
	const lengthA = a.length;
	const lengthB = b.length;
	
	if(lengthA > lengthB) {
		b = b.padStart(lengthA, '0')
	} else {
		a = a.padStart(lengthB, '0')
	}
	// lengthA > lengthB ? b.padStart(lengthA, '0') : a.padStart(lengthB, '0')
	const reverseA = a.split('').reverse();
	const reverseB = b.split('').reverse();

	let result = [];
	let acc = 0;
	for(let i = 0; i < reverseA.length; i++) {
		let resultTemp = parseInt(reverseA[i]) + parseInt(reverseB[i]) + acc;
		if(resultTemp >= 10) {
			result.push(resultTemp - 10);
			acc = 1;
		} else {
			result.push(resultTemp);
			acc = 0;
		}
	}

	return result = result.reverse().join('');
}