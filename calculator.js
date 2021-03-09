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
    console.log('계산');
};

// 버튼 클릭 시
const btns = Array.from(document.querySelectorAll('.btn'));
btns.map((btn) => {
    btn.addEventListener('click', function () {
        // 계산 초기값
        let defaultValueAll = {
            numberBefore: 0,
            numberAfter: 0,
        };

        // 계산
        if (this.dataset.attr === 'operator') {
            // console.log('연산자')
            calculate();
            if (this.value === '+') {
                console.log('더하기');
            }
            // if(this.value ==='-'){
            //     console.log('뺴기')
            // }
            // if(this.value ==='x'){
            //     console.log('곱하기')
            // }
            // if(this.value ==='/'){
            //     console.log('나누기')
            // }
        }

        // 숫자
        if (this.dataset.attr === 'number') {
            let numberCurrent = this.value;
            console.log(numberCurrent);
            // console.log(typeof this.value);
            let numberBefores = Object.entries(defaultValueAll.numberBefore);
            let numberBeforePush = numberBefores.push(numberCurrent);
            console.log(numberBefores);
            console.log(numberBeforePush);
            // defaultValue.displayValue = this.value;
            // console.log(defaultValue)
        }

        // 상태를 보여줌
        // defaultValue.displayValue = this.value;
        // displayScreen();
    });
});
