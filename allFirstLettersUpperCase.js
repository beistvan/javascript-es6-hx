const allFirstLettersUpperCase = (str) => {
    const words = str.split(" ");
    let result = "";
    for (word of words) {
        if (word.length > 0) {
            result += word[0].toUpperCase() + word.substring(1) + " ";
        } else {
            result += " ";
        }
    }
    return result;
};