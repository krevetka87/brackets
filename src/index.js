module.exports = function check(str, bracketsConfig) {
  let pattern = bracketsConfig.map(el => el.join(''));
  function cut(str) {
    let newStr = str;
    for (let elem of pattern) {
      newStr = newStr.replace(elem, '')
    }
    if (str === newStr) {
      return newStr;
    }
    else {
      return cut(newStr);
    }

  }
  return cut(str) === '';

}
