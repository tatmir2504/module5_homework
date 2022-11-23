const arr = [3, 3, 3, 3];
let condt = true;
for (let i = 0; i < arr.length -1; i++) {
if (arr[i] !== arr[i + 1]) {
condt = false
}
}
console.log(condt); 