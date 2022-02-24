import {BUTTON} from './view.js';

let operator = '';

function Calc(mathOp, a, b) {
    a = Number(a);
    b = Number(b);

    const EXPRESSIONS = {
        sum: a + b,
        sub: a - b,
        multi: a * b,
        div: a / b,
        rem: a % b,
        exp: a ** b,
    };

    return EXPRESSIONS[mathOp];
    // let isValid = (mathOp in EXPRESSIONS && !isNaN(EXPRESSIONS[mathOp]));

    // if (isValid) {
    //     return EXPRESSIONS[mathOp];

    // } else if (!(mathOp in EXPRESSIONS) && mathOp != '') {
    //     return 'unknown operation';

    // } else {
    //     return 'Error';
    // }
}

function showNum() {
    for (let num of BUTTON.NUMBERS) {
        num.onclick = function(event) {
            if (+output.textContent === 0) {
                output.textContent = null;
            }
            output.textContent += event.currentTarget.textContent;
        }
    }
}

function showOp() {
    for (let op of BUTTON.OPERATIONS) {
        op.onclick = function(event) {
            output.textContent += event.currentTarget.textContent;
            switch(event.currentTarget.textContent) {
                case '×': 
                    operator = 'multi';
                    break;

                case '÷': 
                    operator = 'div';
                    break;
                
                case '–': 
                    operator = 'sub';
                    break;

                case '+': 
                    operator = 'sum';
                    break;
            }
        }
    }
}

function backspace() {
    BUTTON.BACKSPACE.onclick = function() {
        if (output.textContent.length === 1) {
            output.textContent = 0;
        } else {
            output.textContent = output.textContent.slice(0, output.textContent.length - 1);
        }
    }
}

function clear() {
    BUTTON.CLEAR.onclick = function() {
        output.textContent = 0;
    }
}

function getResult() {
    BUTTON.RESULT.onclick = function() {
        let result = output.textContent.split(/[×÷–+]/);
        output.textContent = Calc(operator, result[0], result[1]);
    }
}

getResult();
showOp();
showNum();
clear();
backspace();
