function calcAddition(num1,num2) {
    return num1+num2;
}
console.log(calcAddition(5,6));

//Without function name
const square =function(number){
    return number*number;
}
const x= square(4);
console.log(x);

//arrow function
const a=["Hydrogen","Helium","Lithium","Beryllium"];
const a2 = a.map(function(a) {
    return a.length;
});
console.log("Normal way",a2);
 const a3 =a.map((s) => s.length);
console.log("Using Arrow Function",a3); 