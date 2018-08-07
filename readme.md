# Adding Big Numbers
Codewars 4kyu Kata

Tags: *String*, *Integers*


## Index

[1. Instructions](#1-instructions/) 

[2. Lessons learned](#2-lessons-learned)

[3. Clever Codewars solution](#3-clever-codewars-solution)

## 1. Instructions

```
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. 
The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99"); -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
```

## 2. Lessons learned
### Large Integers
[Working with large integers in JavaScript](http://2ality.com/2012/07/large-integers.html)  
[Adding big, beautiful, powerful numbers together in JavaScript](https://lowrey.me/adding-big-beautiful-powerful-numbers-together-in-javascript/)  
[Long Numbers - Adding](https://trans4mind.com/personal_development/JavaScript/longnumAdd.htm)  
[Large Number Addition in Javascript](https://hard-coded.com/2017/large-number-addition/)  
[Double tilde](https://medium.com/@nguyenminhphuc/what-is-double-tilde-in-javascript-908537354fb8)  

### padStart()
[Mozilla .padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)  
[String padding: .padStart() and .padEnd()](https://codeburst.io/learn-javascript-es-2017-string-padding-padstart-padend-88e90783e7de)  
[How does String.padStart actually work?](https://medium.com/front-end-hacking/how-does-string-padstart-actually-work-abba34d982e)  
Codewars does not accept .padStart, so I had to write a simple approach by myself:  
```javascript
const padZeroStart = (string, length, symbol) => {
		const stringLength = string.length;
		const diffLength = length - stringLength;
		let result = [...string];
		for(let i = 0; i < diffLength; i++) {
			result.unshift(symbol);
		}
		return result;
	}
```  

## 3. Clever Codewars solution
```javascript
function add (a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}
```