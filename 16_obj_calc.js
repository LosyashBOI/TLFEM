function Calc(mathOp, a, b) {
    a = Number(a);
    b = Number(b);

    let operations = {
        sum: a + b,
        sub: a - b,
        multi: a * b,
        div: a / b,
        rem: a % b,
        exp: a ** b,
    };

    let isValid = (mathOp in operations && !isNaN(operations[mathOp]));

    if (isValid) {
        return operations[mathOp];

    } else if (!(mathOp in operations) && mathOp != '') {
        return 'unknown operation';

    } else {
        return 'Error';
    }
}

console.log( Calc("sum", 1, '1д') );
console.log( Calc("exp", 3, 2) );
console.log( Calc("div", 3, '3') );
console.log( Calc("mult", 10, 4) );
console.log( Calc("multi", 4) );