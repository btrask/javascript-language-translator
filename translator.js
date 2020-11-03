javascript:(function(){/*JavaScript Language Translator*/

/*
Natural language popularity: https://en.wikipedia.org/w/index.php?title=List_of_languages_by_total_number_of_speakers&oldid=985867421

Programming language popularity: https://web.archive.org/web/20201028024557/https://www.tiobe.com/tiobe-index/

Also: https://web.archive.org/web/20201022204512/https://www.visualcapitalist.com/100-most-spoken-languages/
*/

var langMap = {
/*1*/
/*C at bottom*/
"Mandarin": /\bJava\b/g,
"Hindi": /\bPython\b/g,
"Spanish": /\bC\+\+/g,
"French": /\bC#/g,

/*5*/
"Arabic": /\bVisual Basic\b/g,
"Bengali": /\bJava[Ss]cript\b/g, ".bn": /\.js\b/g,
"Russian": /\bPHP\b/g,
"in Portuguese": /\bin R\b/g,
"Indonesian": /\bSQL\b/g,

/*10*/
"Urdu": /\bPerl\b/g,
"German": /\bGroovy\b/g,
"Japanese": /\bRuby\b/g,
"Swahili": /\bGo(lang)?\b/g,
"Marathi": /\bMatlab\b/gi,

/*15*/
"Telugu": /\bSwift\b/g,
"Turkish": /\b(Assembly|Asm|ASM)\b/g,
"Cantonese": /\b(Objective-C|Obj-C)\b/g,
"Tamil": /\bClassic Visual Basic\b/g,
"Western Punjabi": /\bPL[/]SQL\b/g,

/*20*/
"Wu Chinese": /\bSAS\b/g,
"Korean": /\b(Delphi|Object Pascal|Pascal)\b/g,
"Vietnamese": /\bScratch\b/g,
"Hausa": /\bTransact-SQL\b/g,

/*25*/
"Javanese": /\bRust\b/g,
"Egyptian Arabic": /\bDart\b/g,
"Italian": /\bLogo\b/g,
"Thai": /\bScala\b/g,
"Gujarati": /\bABAP\b/g,

/*30*/
"Kannada": /\bScheme\b/g,
"Persian": /\bProlog\b/g,
"Bhojpuri": /\bJulia\b/g,
"Southern Min Chinese": /\bKotlin\b/g,
"Filipino": /\bD\b/g,

/*35, switched sources*/
"Burmese": /\bLisp\b/g,
"Polish": /\bCobol\b/gi,
"Yoruba": /\bFortran\b/g,
"Odia": /\bLua\b/g,
"Malayalam": /\bAda\b/g,

/*40*/
"Xiang Chinese": /\bPowerShell\b/g,
"Maithili": /\bABL\b/g,
"Ukrainian": /\bBash\b/g,
"Moroccan Arabic": /\bAlice\b/g,
"Eastern Punjabi": /\bVHDL\b/g,

/*45*/
"Sunda": /\bHaskell\b/g,
"Algerian Arabic": /\bType[Ss]cript\b/g,
"Sudanese Arabic": /\bApex\b/g,
"Nigerian Pidgin": /\bStandard ML\b/g,
"Zulu": /\bFoxPro\b/g,
"Igbo": /\bAwk\b/g,


/* Replace last due to "C" ambiguity */
"English": /\bC\b/g,
};
var langs = Object.keys(langMap);


function domReplace(elem) {
if(Node.TEXT_NODE == elem.nodeType) {

for(var i = 0; i < langs.length; i++) {
elem.replaceData(0, elem.data.length, elem.data.replace(langMap[langs[i]], langs[i]));
}

}
for(var i = 0; i < elem.childNodes.length; i++) domReplace(elem.childNodes[i]);
}


var html = document.documentElement;
html.normalize();
domReplace(html);


})()