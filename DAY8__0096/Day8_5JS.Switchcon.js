document.write("Switch Case 1...");
var month = 12;
switch(month){
    case 10:
        document.write("<br>October");
        break;
    case 11:
        document.write("<br>November");
        break;
    case 12:
        document.write("<br>December");
        break;
    default: 
        document.write("<br>Wrong Input");
}

document.write("<br><br>Switch Case 2...")
var month = "july";
switch(month){
    case "june":
        document.write("<br>6th Month");
        break;
    case "july":
        document.write("<br>7th month");
        break;
    default: 
        document.write("<br>Wrong Input");
}

document.write("<br><br>if else...");
var marks = 81;
if (marks>90){
    document.write("<br>Very Good");
}
else if(marks>80){
    document.write("<br>Good");
}
else if(marks>65){
    document.write("<br>Average");
}
else{
    document.write("<br>Poor");
}