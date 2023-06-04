const smallestDivisor = (num) => {

    if (num < 1){
        return NaN;
    }

    if (num === 1) {
        return 1;
    }

    div = 2;
    while (num % div > 0) {
        div++;
    }

    return div;
};