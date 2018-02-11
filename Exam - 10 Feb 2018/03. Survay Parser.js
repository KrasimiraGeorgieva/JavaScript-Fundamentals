function solve(str) {
    let surveyDataRegex = /<\/?svg>/g;
    let surveyRegex = /<svg>\s*<cat>.*?(\[.*]).*<\/cat>\s*<cat>(.*?<g><val>(\d+)<\/val>(\d+)<\/g>.*?)<\/cat>\s*<\/svg>/g;
    let ratingRegex = /<g><val>(\d+)<\/val>(\d+)<\/g>/g;
    let survey = surveyRegex.exec(str);
    if (!surveyDataRegex.test(str)) {
        console.log('No survey found');
        return;
    }

    if (survey === null) {
        console.log('Invalid format');
        return;
    }

    let votesResult = 0;
    let totalRating = 0;
    let secondCat;

    while ((secondCat = ratingRegex.exec(survey[2])) !== null) {
        votesResult += Number(secondCat[2]);
        totalRating += Number(secondCat[1]) * Number(secondCat[2]);
    }

    let label = survey[1].slice(1, -1);
    let averageRating = Math.round(totalRating / votesResult * 100) / 100;

    console.log(`${label}: ${averageRating}`);

}

solve("<svg><cat><text>How do you rate the special menu? [Food -Special]</text></cat><cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>");

/*solve('<svg>\n' +
    '<cat><text>Which is your favourite meal from our selection?</text></cat>\n' +
    '<cat>\n' +
    '<g><val>Fish</val>15</g>\n' +
    '<g><val>Prawns</val>31</g>\n' +
    '<g><val>Crab Langoon</val>12</g>\n' +
    '<g><val>Calamari</val>17</g>\n' +
    '</cat>\n' +
    '</svg>');*/
