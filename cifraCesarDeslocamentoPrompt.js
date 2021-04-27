var frase = "";
var alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var frase = prompt("Introduza a frase:").toLowerCase();
var off = prompt("Introduza o deslocamento:");
var x = parseInt(off);
var keep = [];

for (var i = 0; i < frase.length; i++)
{
 if(frase[i] != ' ')
 {
   for (var j = 0; j < alfa.length; j++)
   {
     if (frase[i] == alfa[j])
     {
       keep[i] = alfa[(j + x) % alfa.length];
       break;
     }
   }
 }
 else
 {
   keep[i] = ' ';
 }
}
alert(keep.join(""));