  
'use strict';


let currentOp = '',
    currentVal = 0;

function digitBtnHandler() {
  const digits = document.querySelectorAll('.digit');
  digits.forEach(digit => {
    digit.addEventListener('click', (evt) => {
		const screen = document.querySelector('.screen');
		let targetDigit = evt.target.innerText;
		screen.value += targetDigit;
		// screenFormat(targetDigit);
    })
  })
}

function calculate(operator, val1, val2) {
	if (operator === '+') {
		return val1 + val2;
	} else if (operator === '-') {
		return val1 - val2;
	} else if (operator === '*') {
		return val1 * val2;
	} else if (operator === '/') {
		return val1 / val2;
	}
}

function operatorBtnHandler() {
  const operatorBtns = document.querySelectorAll('.operator');
  operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (evt) => {
		const screen = document.querySelector('.screen');
		let screenVal = Number(screen.value);
		if (evt.target.innerText === '=') {
			screen.value = calculate(currentOp, currentVal, screenVal);
			currentOp = '';
			return;
		}
		if (currentOp === '') {
			currentVal = Number(screen.value);
		} else {
			currentVal = calculate(currentOp, currentVal, screenVal);
		}
		screen.value = '';
		currentOp = evt.target.innerText;
    })
  })
}

function clearBtnHandler() {
	const clearBtn = document.querySelector('.clear');
	clearBtn.addEventListener('click', () => {
		const screen = document.querySelector('.screen');
			currentOp = '';
			currentVal = 0;
			screen.value = '';
	})
}

function decimalBtnHandler() {
	const decimalBtn = document.querySelector('.decimal');
	decimalBtn.addEventListener('click', () => {
		const screen = document.querySelector('.screen');
		let screenVal = screen.value;
			if (!screenVal.includes('.')) {
				let addDecimal = screen.value + '.';
				screen.value = addDecimal;
			}
	})
}



function init() {
	digitBtnHandler();
	operatorBtnHandler();
	clearBtnHandler();
	decimalBtnHandler();
}

init();