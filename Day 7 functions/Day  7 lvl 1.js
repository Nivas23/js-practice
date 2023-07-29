function fullname(){console.log('mark manson')}
fullname()//1

function fullname1(fname,lname){return `${fname} ${lname}`}
console.log(fullname1('dave','beckam'))//2

function sum(num1,num2){return num1+num2}
console.log(sum(5,10))//3

function areaOfRectangle(l,b){return `area of rectangle ${l*b}`}
console.log(areaOfRectangle(2,3))//4

function perimeterOfRectangle(l,b){return `perimeter of rectangle ${2*l*b}`}
console.log(perimeterOfRectangle(2,3))//5

function volumeOfRectPrism(l,w,h){return `volume of rectangle prism ${l*w*h}`}
console.log(volumeOfRectPrism(2,3,5))//6

function areaOfCircle(r){return `area of circle ${Math.round(Math.PI*r*r)}`}
console.log(areaOfCircle(3))//7

function circumOfCircle(r){return `circumference of circle ${Math.round(2*Math.PI*r)}`}
console.log(circumOfCircle(3))//8

function density(m,v){return `density of a substance ${m/v}`}
console.log(density(5,20))//9

function speed(d,t){return `speed of an object ${d/t}`}
console.log(speed(9,20))//10

function weight(m,g){return `weight of an object ${Math.round(m*g)}`}
console.log(weight(5,9.8))//11

function convertCelsiusToFahrenheit(c){return `Fahrenheit ${Math.round((c*(9/5))+32)}o`}
console.log(convertCelsiusToFahrenheit(32))//12

function BMI(w,h){
    let bmi = w/(h*h)
    if (bmi<18.5)
    console.log(`BMI:${bmi} - underweight`)
    else if (bmi>=18.5 && bmi<=24.9)
    console.log(`BMI:${bmi} - Normal weight`)
    else if (bmi>=25 && bmi<=29.9)
    console.log(`BMI:${bmi} - Overweight`)
    else if (bmi>=30)
    console.log(`BMI:${bmi} - Obese`)
}BMI(41,180)//13

function checkSeason(m){
    let summer = ['june','july','august']
    let spring = ['march','april','may']
    let autumn = ['september','october','november']
    let winter = ['december','january','february']
    if (summer.indexOf(m)!=-1)
    console.log(`summer`)
    else if (spring.indexOf(m)!=-1)
    console.log(`spring`)
    else if (autumn.indexOf(m)!=-1)
    console.log(`autumn`)
    else if (winter.indexOf(m)!=-1)
    console.log(`winter`)
}checkSeason('october')//14

function findMax(n1,n2,n3){
    if(n1>n2 && n1>n3)
    console.log(`${n1} is the largest`)
    else if (n2>n3)
    console.log(`${n2} is the largest`)
    else
    console.log(`${n3} is the largest`)
}findMax(10,34,1)//15


