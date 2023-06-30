const arr = [1, 1, 1, 'test', 'test'];
let s = 0;
function countFromArr(acc, el) {
  arr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
      s = acc;
      return acc;
  }, {})
console.log(s);
}
countFromArr(0, 2);