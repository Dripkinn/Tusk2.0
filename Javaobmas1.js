const arr = [1, null, 'test', undefined]
function convertArrToObj() {
  console.log(Object.assign({}, arr));
}
convertArrToObj()