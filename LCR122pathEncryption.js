/**
 * @param {string} path
 * @return {string}
 */
var pathEncryption = function(path) {
    let encryStrArray = [];
    for (let param of path){
        if(param === '.')
        param = ' '
        encryStrArray.push(param)
    }
    return encryStrArray.join('')
};
let path = "a.aef.qerf.bb";
console.log(pathEncryption(path));