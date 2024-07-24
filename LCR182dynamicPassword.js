/**
 * @param {string} password
 * @param {number} target
 * @return {string}
 */
var dynamicPassword = function(password, target) {
    //自己想的方法太复杂
    //忽略了字符串自带的slice方法！

    /*let arr = Array.from(password)
    //注意 slice是不包括的 即最后一位的开的！！！！
    let front = arr.slice(0,target)
    let end = arr.slice(target,arr.length)
    return end.concat(front).join('');*/

    //答案本来只需要一句话
    return password.slice(target) + password.slice(0, target);
};

password = "s3cur1tyC0d3"
target = 4
let answer = dynamicPassword(password,target)
console.log(answer)