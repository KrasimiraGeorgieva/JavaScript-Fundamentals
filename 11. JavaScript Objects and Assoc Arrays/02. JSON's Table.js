function solve(arrStr) {
    let str = '<table>\n';

    for (let obj of arrStr) {
        str += '\t<tr>\n';
        let arr = JSON.parse(obj);
        for (let value in arr) {
            if (arr.hasOwnProperty(value)) {
                str += `\t\t<td>${escapeChars(arr[value] + '')}</td>\n`;
            }
        }
        str += '\t<tr>\n';
    }
    str += '</table>';
    console.log(str);

    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}','{"name":"Teo","position":"Lecturer","salary":1000}','{"name":"Georgi","position":"Lecturer","salary":1000}']);