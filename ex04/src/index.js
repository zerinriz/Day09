function compareDiffrentValues(m, n) {

    if (m === n) {

        return "Equal";
    }
    return "Not equal";
}
console.log(compareDiffrentValues(8, "8"));
console.log(compareDiffrentValues("8", 8));
console.log(compareDiffrentValues('8', 8));
console.log(compareDiffrentValues("8", "8"));
console.log(compareDiffrentValues(8, 8));

module.exports = compareDiffrentValues;