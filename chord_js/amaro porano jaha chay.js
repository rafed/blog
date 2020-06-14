// npm install chordsheetjs
var ChordSheetJS = require('chordsheetjs').default;

// {subtitle: Chords by Rafed}
// {artist: Arnob}
// {lyricist: Rafed}
// {album: 3 doors down}
// {year: 1995}
// {key: C}
// {tempo: 120}

const chordSheet = `
{title: আমার পরান যাহা চায়}

{Verse}
[Cm]আমার প/[G]রান যাহা [Cm]চায়
তুমি [D#]তাই, তুমি [F]তাই [D#]গো
[G7]আমার পরান যাহা [Cm]চায়

[Cm]তোমা ছাড়া আর এ জ/[D#]গতে
মোর [Cm]কেহ নাই, [F]কিছু নাই [D#]গো
[G7]আমার পরান যাহা [Cm]চায়

তুমি [G7]সুখ যদি নাহি [Cm]পাও
যাও [G]সুখের স/[Cm]ন্ধানে [D#]যা/[F]ও.
আমি [D#]তোমারে পেয়েছি [G]হৃদয় [Cm]মাঝে
আর কি/[F]ছু নাহি [D#]চাই গো
[G7]আমার পরান যাহা [Cm]চায়

আমি [F]তোমারি বিরহে [D#]রহিব বিলীন
[F]তোমাতে করিব [C#]বাস
[G]দীর্ঘ দি/[Cm]বস, [Fm]দীর্ঘ র/[Cm]জনী,
[F]দীর্ঘ ব/[D#]রষ [G]মাস ।

যদি আর কা/[G7]রে ভালো/[Cm]বাস
যদি [G7]আর ফিরে নাহি [D#]আ/[F]স
তবে [D#]তুমি যাহা চাও [G]তাই যেন [Cm]পাও
আমি য/[F]ত দুখ [D#]পাই গো ॥
[G7]আমার পরান যাহা [Cm]চায়
`
.substring(1);

const parser = new ChordSheetJS.ChordProParser();
const song = parser.parse(chordSheet);

const formatter = new ChordSheetJS.HtmlDivFormatter();
// const formatter = new ChordSheetJS.HtmlTableFormatter();
const disp = formatter.format(song);

console.log(disp)