function solve(sentence, word){
    let output = [];
    let pattern = `\\b${word}\\b`;
    let regex = new RegExp(pattern, 'gi');
    let match = regex.exec(sentence);

    while(match){
        output.push(match);
        match = regex.exec(sentence);
    }
    console.log(output.length);
}
solve('The waterfall was so high, that the child couldn’t see its peak.',
    'the');