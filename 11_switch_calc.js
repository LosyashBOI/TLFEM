function calc(mathOp, a, b) {
    if (typeof a == 'number' && typeof b == 'number' && mathOp != '') {
        switch (mathOp) {
            case 'sum':
                return a + b;
            
            case 'sub':
                return a - b;

            case 'multi':
                return a * b;

            case 'div':
                return a / b;
            
            case 'rem':
                return a % b;

            case 'exp':
                return a ** b;

            default:
                return 'unknown operation';
        }
    } else {
        return 'Error';
    }
}

console.log(calc('multi', 9, 10));