// function showVerticalMessage(str) {
//     let verticalMsg = '';

//     if (str[0] == 'м') {
//         let upperletter = str[0].toUpperCase();
//         verticalMsg += `${upperletter}\n`;

//     } else {
//         verticalMsg += `${str[0]}\n`;
//     }

//     for (let i = 1; i <= 9 && i < str.length; i++) {
//         verticalMsg += `${str[i]}\n`;
//     }

//     console.log(verticalMsg);
// }

// showVerticalMessage('what you gonna do');
// showVerticalMessage('марафон');


function showVerticalMessage(str) {
    const UPPER_LETTER = 'м';
    const MAX_LENGTH = 10;

    let verticalMsg = '';
    
    if (str.startsWith(UPPER_LETTER)) {
        verticalMsg = str[0].toUpperCase() + str.slice(1, MAX_LENGTH);

    } else {
        verticalMsg = str.slice(0, MAX_LENGTH);
    }

    for (let char of verticalMsg) {
        console.log(char);
    }
    console.log('\n')
}

showVerticalMessage('what you gonna do');
showVerticalMessage('марафон');
