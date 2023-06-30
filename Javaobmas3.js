const arr = [{test: 1}, {test: 2}, {test: 3}, {test: 1}, {test: 1}];
let s = []
function groupByField(arr, key) {
  return arr.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
console.log(groupByField(arr, 'test'));