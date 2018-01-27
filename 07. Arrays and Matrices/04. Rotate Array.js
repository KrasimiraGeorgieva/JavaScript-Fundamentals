function solve(arr) {
  let rotatedCount = Number(arr.pop());
  rotatedCount = rotatedCount % arr.length;
    for (let i = 0; i < rotatedCount; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

  console.log(arr.join(' '));
}
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);