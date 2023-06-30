let sum = 0;
let i = 0
while (i < 5) {
  let value = +prompt("Введите аргумент", '');
  i += 1;
  if (!value) continue;
  sum += value;
}
console.log(sum)