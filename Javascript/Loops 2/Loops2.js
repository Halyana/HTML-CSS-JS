/*var answer = prompt("are we there yet?");

while(answer !== "yes" && answer !== "ja") {
	var answer = prompt("are we there yet?");
}

alert("YAY, WE MADE IT!!")

*/

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("are we there yet?");
}

alert("YAY, WE MADE IT!!")