const isPrime = (num) => {
    if (num <= 1) {
        return false;
    } else {
        let isOk = true;
        let div = 2;
        while(div * div <= num) {
            if (num % div === 0){
                isOk = false;
                break;
            }
            div++;
        }
        return isOk;
    }
};