function solve(arr) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

    for (let i = 0; i < arr.length; i += 2) {
        let question = arr[i];
        let answer = arr[i + 1];

        xml += `\t<question>\n\t\t${question}\n\t</question>\n`;
        xml += `\t<answer>\n\t\t${answer}\n\t</answer>\n`;
    }

    xml += '</quiz>';

    console.log(xml);
}
solve(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]);