// Link this js file with any html file with just its boilerplate code.

document.write("1. While loop");
let i = 0;
while (i<7) {
    document.write("<br>",i);
    i++;
}

document.write("<br><br>2. Do While loop");
let j = 0;
do {
    document.write("<br>",j);
    j++;
}
while(j<8)

document.write("<br><br>3. For loop");
var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
for (let k = 0; k < days.length; k++) {
    var element = days[k];
    document.write("<br>",element);
}

document.write("<br><br>4. For in loop");
var numbers = [45, 4, 9, 16, 25];
for (var key in numbers) {
    document.write("<br>",numbers[key]);
    // i.e. value of key is 0,1,2,3,4
}

document.write("<br><br>5. For in loop");
var s1 = "Sunday";
for (const xy of s1) {
    document.write("<br>",xy);
}