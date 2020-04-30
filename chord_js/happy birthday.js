// npm install chordsheetjs
var ChordSheetJS = require('chordsheetjs').default;

const chordSheet = `
{title: Happy Birthday to you}

Happy [A]Birthday [E]to you
Happy [E]Birthday [A]to you
Happy [A7]Birthday dear [D]Johnny
Happy [A]Birthday [E]to [A]you
`
.substring(1);

const parser = new ChordSheetJS.ChordProParser();
const song = parser.parse(chordSheet);

const formatter = new ChordSheetJS.HtmlDivFormatter();
// const formatter = new ChordSheetJS.HtmlTableFormatter();
const disp = formatter.format(song);

console.log(disp)