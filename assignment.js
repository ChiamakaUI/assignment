function yugioh(num) {
    var array = [];
    if (typeof num !== 'number' || num < 1) {
        return 'Parameter must be a positive number!';
    }

    for (let lbj = 1; lbj <= num; lbj++) {
        if (lbj % 30 === 0) {
            array.push('yu-gi-oh');
        } else if(lbj % 15 === 0){
            array.push('gi-oh')
        } else if(lbj % 10 === 0){
            array.push('yu-oh');
        } else if (lbj % 6 === 0) {
            array.push('yu-gi');
        } else if (lbj % 5 === 0) {
            array.push('oh');
        } else if (lbj % 3 === 0) {
            array.push('gi');
        } else if (lbj % 2 === 0) {
            array.push('yu');
        } else {
            array.push(lbj)
        }
    }

    return array;
}

yugioh(100);
yugioh(75);