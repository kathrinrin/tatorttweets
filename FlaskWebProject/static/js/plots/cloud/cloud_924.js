var word_list = [
{text: "milch", weight: 350}, 
{text: "oldenburg", weight: 182}, 
{text: "wotan", weight: 172}, 
{text: "gut", weight: 164 , html: {"class": "vertical"}}, 
{text: "korn", weight: 114 , html: {"class": "vertical"}}, 
{text: "geht", weight: 110 , html: {"class": "vertical"}}, 
{text: "falke", weight: 105}, 
{text: "#oldenburg", weight: 93 , html: {"class": "vertical"}}, 
{text: "äpfel", weight: 90}, 
{text: "kommt", weight: 89 , html: {"class": "vertical"}}, 
{text: "@tatort", weight: 87}, 
{text: "apfel", weight: 82 , html: {"class": "vertical"}}, 
{text: "hätte", weight: 78}, 
{text: "pathologin", weight: 70}, 
{text: "frau", weight: 68 , html: {"class": "vertical"}}, 
{text: "dachte", weight: 66}, 
{text: "bitte", weight: 64 , html: {"class": "vertical"}}, 
{text: "kind", weight: 64 , html: {"class": "vertical"}}, 
{text: "billstedter", weight: 61 , html: {"class": "vertical"}}, 
{text: "nix", weight: 59 , html: {"class": "vertical"}}, 
{text: "wäre", weight: 59}, 
{text: "&amp;", weight: 58 , html: {"class": "vertical"}}, 
{text: "irgendwie", weight: 57}, 
{text: "ich", weight: 56}, 
{text: "gute", weight: 56}, 
{text: "jemand", weight: 56 , html: {"class": "vertical"}}, 
{text: "zwei", weight: 56}, 
{text: "#jauch", weight: 54 , html: {"class": "vertical"}}, 
{text: "abu", weight: 52 , html: {"class": "vertical"}}, 
{text: "junge", weight: 52 , html: {"class": "vertical"}}, 
{text: "super", weight: 52 , html: {"class": "vertical"}}, 
{text: "endlich", weight: 51 , html: {"class": "vertical"}}, 
{text: "kommissar", weight: 51 , html: {"class": "vertical"}}, 
{text: "schön", weight: 51 , html: {"class": "vertical"}}, 
{text: "@wwmoehring", weight: 50 , html: {"class": "vertical"}}, 
{text: "einfach", weight: 50 , html: {"class": "vertical"}}, 
{text: "weiß", weight: 50}, 
{text: "besser", weight: 49}, 
{text: "gibt's", weight: 49}, 
{text: "nen", weight: 49 , html: {"class": "vertical"}}, 
{text: "#ard", weight: 47 , html: {"class": "vertical"}}, 
{text: "@ardtext777", weight: 47 , html: {"class": "vertical"}}, 
{text: "läuft", weight: 47 , html: {"class": "vertical"}}, 
{text: "möhring", weight: 47 , html: {"class": "vertical"}}, 
{text: "spielt", weight: 47}, 
{text: "ali", weight: 46}, 
{text: "heutigen", weight: 46}, 
{text: "nazir", weight: 46}, 
{text: "sehen", weight: 46}, 
{text: "wilke", weight: 45}, 
{text: "#homeland", weight: 44 , html: {"class": "vertical"}}, 
{text: "echt", weight: 44}, 
{text: "minuten", weight: 44}, 
{text: "bisschen", weight: 43 , html: {"class": "vertical"}}, 
{text: "gucken", weight: 43}, 
{text: "schnaps", weight: 43 , html: {"class": "vertical"}}, 
{text: "wirklich", weight: 43}, 
{text: "mann", weight: 42}, 
{text: "musik", weight: 42}, 
{text: "schlecht", weight: 42}, 
{text: "gerichtsmedizinerin", weight: 41 , html: {"class": "vertical"}}, 
{text: "kleine", weight: 41}, 
{text: "lieber", weight: 41}, 
{text: "los", weight: 41}, 
{text: "twitter", weight: 41}, 
{text: "wurde", weight: 41}, 
{text: "übrigens", weight: 41}, 
{text: "handlung", weight: 40 , html: {"class": "vertical"}}, 
{text: "nie", weight: 39 , html: {"class": "vertical"}}, 
{text: "polizei", weight: 39}, 
{text: "polizeiwillkür", weight: 39}, 
{text: "sex", weight: 39}, 
{text: "bild", weight: 38 , html: {"class": "vertical"}}, 
{text: "morgen", weight: 38 , html: {"class": "vertical"}}, 
{text: "klar", weight: 37}, 
{text: "siezen", weight: 37 , html: {"class": "vertical"}}, 
{text: "trinken", weight: 37 , html: {"class": "vertical"}}, 
{text: "bestimmt", weight: 36 , html: {"class": "vertical"}}, 
{text: "eben", weight: 36}, 
{text: "ende", weight: 36 , html: {"class": "vertical"}}, 
{text: "art", weight: 35}, 
{text: "genau", weight: 35}, 
{text: "mag", weight: 35}, 
{text: "zeit", weight: 35 , html: {"class": "vertical"}}, 
{text: "gesehen", weight: 34}, 

];
$(function() {
$("#cloud").jQCloud(word_list);
});
