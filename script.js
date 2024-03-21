var sound = new Audio("minecraft_click.mp3");

document.getElementById("big").addEventListener("click", function() {
    sound.play();
});
document.getElementById("big2").addEventListener("click", function() {
    sound.play();
});
document.getElementById("big3").addEventListener("click", function() {
    sound.play();
});
document.getElementById("about").addEventListener("click", function() {
    sound.play();
});
document.getElementById("grade").addEventListener("click", function() {
    sound.play();
});
var Quotes = [
	  "Made in the Philippines!", 
    "Not actually Minecraft!", 
    "Woo, Sir Jeric!", 
    "Bees, bees, bees, bees!", 
    "Hobo humping slobo babe!", 
    "Make Friends!!", 
    "I'm Carl but call me anytime!!", 
    "Casual gaming!",
   "Go Sci-High!",
   "Also try Chess!",
   "Ang Pogi Mo!",
   "Ang Ganda Mo!",
   "Mang Ray the Best!",
   "Universe starts with U,N,I!",
   "Try our work!",
   "May the force be with you!"
];

function displayQuote(){

    var num = Math.floor(Math.random() * 16);

    document.getElementById("quote").innerHTML = Quotes[num];

}
