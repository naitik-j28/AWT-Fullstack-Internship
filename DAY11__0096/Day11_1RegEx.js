// const regex=/Catholic/g;
const str1="Nory was a Catholic becoz her mother was a Catholic and Navy's mother was a Catholic because her father was a Catholic,because her mother was a Catholic,or had been";
document.write(str1);
// document.write("<hr><br/>",str1.replace(regex,"Hindu"));
document.write("<hr><br/>",str1.replace("Catholic","Hindu"));

const regex1=/Nory/i;
var output=regex1.exec(str1);
document.write("<br/>",output);

var matchcase=regex1.test(str1);
document.write("<br/>",matchcase);

let txt="What wHat whAt whaT!!!";
let result=txt.match(/[A-Z]/g);
document.write("<br/>",result);