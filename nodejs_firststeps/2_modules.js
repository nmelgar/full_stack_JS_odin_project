//with x, y parameters
const doSum = (x, y) => {
    return x + y
}

const doSubtraction = (x, y) => {
    return x - y
}
// module.exports = doSum;
// exports.doSum = doSum;

//export the object
module.exports = {
    doSum,
    doSubtraction
}