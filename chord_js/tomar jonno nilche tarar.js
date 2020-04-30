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
{title: তোমার জন্য নীলচে তারার একটুখানি আলো}

{Verse}
[D]তোমার জন্য [E]নীলচে তারার [B]একটুখানি [F#m]আলো
[D]ভোরের রং [E]রাতে মিশে [B]কালো [F#m]. . .
[D]কাঠ গোলাপের [E]সাদার মায়া [B]মিশিয়ে দিয়ে [F#m]ভাবি
[D]আবছা নীল [E]তোমার লাগে [B]ভালো। [F#m]. . .

[D]ভাবনা আমার [A]শিমুল ডালে [E]লালচে আগুন জ্বালে
[D]মহুয়ার বনে [C#m]মাতাল হাওয়া [B]খেলে।
[D]একমুঠো রোদ [A]আকাশ ভরা তারা
[E]ভেজা মাটিতে জলের নকশা করা
[D]মনকে শুধু [C#m]পাগল করে [B]ফেলে।

[D]তোমায় ঘিরে [E]এতগুলো রাত [B]অধীর হয়ে জেগে [F#m]থাকা
[D]তোমায় ঘিরে [C#m]আমার ভালো [B]লাগা । [F#m]. . .
[D]আকাশ ভরা [E]তারার আলোয় [B]তোমায় দেখে [F#m]দেখে
[D]ভালোবাসার পা-[E]খি মেলে মন ভোলা-[B]নো পাখা ।
`
.substring(1);

const parser = new ChordSheetJS.ChordProParser();
const song = parser.parse(chordSheet);

const formatter = new ChordSheetJS.HtmlDivFormatter();
// const formatter = new ChordSheetJS.HtmlTableFormatter();
const disp = formatter.format(song);

console.log(disp)