const addDigits = (num) => {
    if (num % 1000000 < 10) {
        return num;
    }
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = parseInt(num / 10);
    }
    return addDigits(sum);
};