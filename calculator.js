
const btns = document.querySelectorAll('.btn');
let screen = document.querySelector('.defaultScreen');

let defaultScreen = {
	defaultValue:0
}

screen.value = defaultScreen.defaultValue;


let calculateProcess = {
	step1:[], // 첫 숫자 넣기
	step2:undefined, // 넣은 숫자 동기화
	step3:undefined,
}		

let resultBefore = [];
let resultAfter = undefined;
let result = undefined;


btns.forEach(btn=>{
	
	btn.addEventListener('click',()=>{
		
		let deleteSpace = undefined;
		let resultChangeToNumber = undefined;

		
		if(btn.dataset.attr == 'operator'){
			let combineNum = calculateProcess.step1.join(" ");
			
			resultBefore.push(combineNum);
			resultBefore.push(btn.dataset.calculateType);

			
			if(btn.dataset.calculateType =='plus'){
				// console.log('더하기');
			}
			if(btn.dataset.calculateType =='minus'){
				// console.log('더하기')
			}
			if(btn.dataset.calculateType =='multiply'){
				// console.log('더하기')
			}
			if(btn.dataset.calculateType =='devide'){
				// console.log('더하기')
			}

			screen.value = combineNum.replace(/\s/g, ''); //현재값 표시
			calculateProcess.step1.length = 0;
			resultAfter = resultBefore;
		};
        
        if(btn.dataset.attr =='result'){
			
			resultAfter = resultBefore.filter((el)=>el !== '+'); // 연산자 중 + 제거
			deleteSpace = resultAfter.map(item => item.replace(/\s/g, '')); // 결합 중 밠생한 공백 제거
			resultChangeToNumber = deleteSpace.map(item => parseFloat(item)); // parseFloat으로 문자열을 수로 바꾸기

			result = resultChangeToNumber.reduce((stack,el)=>{
				return stack + el
			},0)
			
			screen.value = result;
		}


		if(btn.dataset.attr =='num'){			
			let value = btn.value;
			calculateProcess.step1.push(value);
		}

		if(btn.dataset.attr =='reset'){
			console.log('초기화하기')
		};

		
	})
})