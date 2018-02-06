function solve(str) {
    let match = /^<message((?:\s[a-z]+="[A-Za-z0-9 .]+")+)>((?:.|\n)+)<\/message>$/.exec(str);
    if (match !== null) {
		let to = /\bto="([A-Za-z0-9 .]+)"/.exec(match[1]);
        let from = /\bfrom="([A-Za-z0-9 .]+)"/.exec(match[1]);
        if(to !== null && from !== null){
            let result = `<article>\n  <div>From: <span class="sender">${from[1]}</span></div>\n`;
            result += `  <div>To: <span class="recipient">${to[1]}</span></div>\n  <div>\n`;
        let message = match[2].split('\n');
            for (let i = 0; i < message.length; i++) {
                result += `\t<p>${message[i]}</p>\n`;

            }
            result += '  </div>\n</article>';
            console.log(result);
        } else {
			console.log('Missing attributes');
        }
    } else {
        console.log('Invalid message format');
    }
}

//solve('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>');
solve('<message from="Alice" timestamp="1497254112">Same old, same old</message>');