let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
Number.prototype.plus = function() {
  return a + b
}
console.log((a).plus(b));