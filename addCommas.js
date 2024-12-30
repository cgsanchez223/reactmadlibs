function addCommas(num) {
    // Need to convert negative numbers to positive
    let sign = "";
    if (num < 0) sign= "-";
    num = Math.abs(num);

    // We then convert it to a string and then split the decimal sides
    let [number, decimal] = num.toString().split(".");

    if (decimal) {
        return `${sign}${insertCommas(number)}.${decimal}`;
    }

    return `${sign}${insertCommas(number)}`;
}

function insertCommas(str) {
    let commaIdx = 0;
    let commaStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        commaStr = str[i] + commaStr;
        commaIdx++;

        // For 1,000 we need to add a comma after every third character
        if (commaIdx % 3 === 0 && i !== 0) {
            commaStr = "," + commaStr;
        }
    }

    return commaStr;
}

module.exports = addCommas;