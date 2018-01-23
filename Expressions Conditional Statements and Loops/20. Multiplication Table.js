function solve(input) {
    let output = `<table border="1"> \n`;
    output += `<tr>`;

    for (let i = 1; i <= input; i++){
        if(i === 1){
            output += '<th>x</th>';
        }
        output += `<th>${i}</th>`;
    }
    output += `</tr>\n`;

    for (let row = 1; row <= input; row++){
        output += `<tr>`;
        output += `<th>${row}</th>`;

        for (let col = 1; col <= input; col++){
            output += `<td>${row * col}</td>`;
        }
        output += `</tr>`;
        output += `\n`;
    }
    output += `</table>`;
    console.log(output);
}
solve(5);