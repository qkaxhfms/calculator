//과정

/*
1. 버튼을 누른다.
2. 누른 값(1)을 저장한다
3. 연산자를 누른다.
4. 누른값이 화면에 표시되어야 한다.
*/

// 초기화
let defaultValue = {
    displayValue: 0,
    calculate: 0,
};

// 화면 표시
const display = document.querySelector('.defaultScreen');
let displayScreen = () => {
    console.log('화면표시');
    display.value = defaultValue.displayValue;
};

// 계산
const calculate = () => {
    let calculateProcess = [];
    console.log('사칙연산');
    // console.log(calculateProcess);
};


let step1 = [];

let numberList = [];


let result = 0;




// 버튼 클릭 시
const btns = Array.from(document.querySelectorAll('.btn'));
btns.map((btn) => {
    btn.addEventListener('click', function () {
        // 계산 초기값
        // let defaultValueAll = {

        //     numberBefore: [],
        //     numberAfter: []
        // };

        // 계산
        if (this.dataset.attr === 'operator') {
            // console.log('연산자')
            if (this.value === '+') {
                console.log('더하기');
                let combineNumber = [];
                let combineStep1 = step1.join("");
                combineNumber.push(combineStep1);
                numberList.push(combineNumber);
                numberList.join(",")
                // numberList.join(",");
                
                console.log(combineNumber);
                // console.log(numberList);

            }
            if(this.value ==='-'){
                console.log('빼기')
            }
            if(this.value ==='x'){
                console.log('곱하기')
            }
            if(this.value ==='/'){
                console.log('나누기')
            }
            if(this.value ==='cal'){
                console.log('초기화')
            }
        }


        // 숫자
        if (this.dataset.attr === 'number') {
            let numberCurrent = this.value;
            step1.push(numberCurrent);
        }



        
        // console.log(result);
        // console.log(step1);

        // 상태를 보여줌
        // defaultValue.displayValue = this.value;
        // displayScreen();
    });
});

// console.log(result);