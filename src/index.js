module.exports = function multiply(first, second) {
  // your solution
  let arg1 = BigInt(first);
  let arg2 = BigInt(second);
  let res = BigInt(arg1*arg2);
  return String(res);

}
