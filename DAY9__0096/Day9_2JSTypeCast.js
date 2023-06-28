document.write("demo<br>");
document.write(Number("3.14787868"),"<br>");
document.write(Number("    "),"<br>");
document.write(Number(""),"<br>");
document.write(Number("99 88"),"<br>"); 

document.write("<br><br>Exponential No.<br>");
let numexp=3.14;
document.write("<br>",numexp.toExponential(1));
document.write("<br>",numexp.toExponential(2));
document.write("<br>",numexp.toExponential(4));       
document.write("<br>",numexp.toExponential(6)); 

document.write("<br><br>Fixed No.<br>");
let numfixed=3.14;
document.write("<br>",numfixed.toFixed());
document.write("<br>",numfixed.toFixed(2));
document.write("<br>",numfixed.toFixed(4));       
document.write("<br>",numfixed.toFixed(6));

document.write("<br><br>Precision No.<br>");
let numprec=3.14;
document.write("<br>",numprec.toPrecision());
document.write("<br>",numprec.toPrecision(2));
document.write("<br>",numprec.toPrecision(4));       
document.write("<br>",numprec.toPrecision(6));

document.write("<br><br>Number Method Example<br>");
document.write(Number(true) + "<br>");
document.write(Number(false) + "<br>");
document.write(Number("10") + "<br>");
document.write(Number("  10") + "<br>");
document.write(Number("10  ") + "<br>");
document.write(Number(" 10  ") + "<br>");
document.write(Number("10.33") + "<br>"); 
document.write(Number("10,33") + "<br>");
document.write(Number("10 33") + "<br>");
document.write(Number("John"));

document.write("<br><br>ParseInt Example<br>");
document.write(
    parseInt("-10") + "<br>" +
    parseInt("-10.33") + "<br>" +
    parseInt("10") + "<br>" +
    parseInt("10.33") + "<br>" +
    parseInt("10 20 30") + "<br>" + 
    parseInt("years 10")); 

document.write("<br><br>ParseFloat Example<br>");
document.write(
    parseFloat("-10") + "<br>" +
    parseFloat("-10.33") + "<br>" +
    parseFloat("10") + "<br>" +
    parseFloat("10.33") + "<br>" +
    parseFloat("10 20 30") + "<br>" +    
    parseFloat("years 10"));   

document.write("<br><br>DATE Example<br>");    
document.write("<br/>", new Date());
document.write("<br/>", new Date("1970-01-01"));
document.write("<br/>", new Date(2018,11,23,10,30));
document.write("<br/>", new Date("October 13,2014 11:30:00"));

var d=new Date();
document.write("<br>",d.toString());
document.write("<br>",d.toUTCString());
document.write("<br>",d.toDateString());
document.write("<br>",d.toISOString());

document.write("<br>",d.getTime());
document.write("<br>",d.getDate());
document.write("<br>",d.getDay());
document.write("<br>",d.getFullYear());
document.write("<br>",d.getHours());
document.write("<br>",d.getMonth());