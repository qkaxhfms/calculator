//과정

/*
1. 버튼을 누른다.
2. 누른 값(1)을 저장한다
3. 연산자를 누른다.
4. 누른값이 화면에 표시되어야 한다.
*/

console.log("hello");

const btns = document.querySelectorAll('.btn');

let calculateProcess = {
	step1:[], // 첫 숫자 넣기
	step2:undefined, // 넣은 숫자 동기화
	step3:undefined,
}		

let resultBefore = [];
let resultAfter = [];
let result = undefined;

btns.forEach(btn=>{
	
	btn.addEventListener('click',()=>{				
		
		if(btn.dataset.attr == 'operator'){
			console.log(calculateProcess.step1);
			let combineNum = calculateProcess.step1.join(" ");
			
			resultBefore.push(combineNum);
			resultBefore.push(btn.dataset.calculateType);
			// 			
			calculateProcess.step1.length = 0;
			
			if(btn.dataset.calculateType =='plus'){
				// console.log('더하기')
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
		};
        
        if(btn.dataset.attr =='result'){
            console.log('결과');
            // resultAfter = resultBefore;
            // console.log(resultAfter);
			console.log(resultBefore);
			// resultAfter.forEach(elem => {
			// 	result +=elem;
			// })
			// console.log(result);
        }
		
		if(btn.dataset.attr =='num'){
			
			let value = btn.value;
			calculateProcess.step1.push(value);
			console.log(calculateProcess.step1);
			// calculateProcess.step2 = combineNumStep1; 
			// console.log(calculateProcess.step2);
		}
		
	})
})

