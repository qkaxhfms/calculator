// calculator
'use strict'; //use strict 선언

// 초기값 선언
let currentOp = '',
    currentVal = 0;

// 버튼 누를때 생성
function digitBtnHandler() {
  const digits = document.querySelectorAll('.digit');
  digits.forEach(digit => {
    digit.addEventListener('click', (event) => {
		const screen = document.querySelector('.screen');
		let targetDigit = event.target.innerText;
		screen.value += targetDigit;
		console.log(targetDigit);
    })
  })
}

// 계산
function calculate(operator, val1, val2) {
	// 사칙연산
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
    operatorBtn.addEventListener('click', (event) => {
		const screen = document.querySelector('.screen');
		let screenVal = Number(screen.value);
		// console.log(screenVal)
		if (event.target.innerText === '=') {
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
		currentOp = event.target.innerText;
    })
  })
}

// 초기화
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