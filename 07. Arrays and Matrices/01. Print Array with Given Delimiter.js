function solve(arr) {
let delimiter = arr.pop();
let output = "";
    for (let i = 0; i <= arr.length-1; i++) {
      output = i === 0 ? output+= arr[i] : output += delimiter + arr[i];
    }
console.log(output);
}
solve(['One','Two','Three','Four','Five','-']);