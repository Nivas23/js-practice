{ //1
    let age=prompt("Enter your age:"),w
    if (age>=18){
    alert("You are old enough to drive.")}
    else{
        w=18-age
        alert(`You are left with ${w} years to drive`)
    }
}

{ //2
    let yourAge=prompt("Enter your age:"),myAge=30
        if (myAge<yourAge){
            console.log(`You are ${yourAge-myAge} years older than me`)}
        else{
            console.log(`I am ${myAge-yourAge} years older than you`)}
}

{ //3
    let a=4,b=3
    if (a>b)
        console.log(`${a} is greater than ${b}`)
    else
        console.log(`${a} is less than ${b}`)
}

{ //3
    let a=4,b=3
    a>b?console.log(`${a} is greater than ${b}`):   console.log(`${a} is less than ${b}`)
}

{//4
    let n=prompt("enter no:")
    if (n%2===0)
        console.log(`${n} is an even number`)
    else
        console.log(`${n} is a odd number`)
}

//level - 2

{ //1
    let s=prompt("Enter score:")
if (s>=80 && s<=100)
    console.log("A grade")
else if (s>=70 && s<=89)
    console.log("B grade")
else if (s>=60 && s<=69)
    console.log("C grade")
else if (s>=50 && s<=59)
    console.log("D grade")
else
    console.log("F grade")
}

{ //2
let m=prompt("Enter month").toLowerCase()
if (m==='september' || m==='october'||m==='november')
console.log("Autumn")
else if(m==='december' || m==='january' || m==='february')
    console.log("Winter")
else if(m==='march' || m==='april' || m==='may')
    console.log("Spring")
else
    console.log("Summer")
}

{//3 - working day or not
    let day=prompt("Enter day:").toLowerCase()
    if(day==='saturday'||day ==='sunday')
        console.log(`${day} is a weekend`)
    else
        console.log(`${day} is a working day`)
}

//level-3

{//1 - number of days in a month
let mon=prompt("Enter month:").toLowerCase(),no
if (mon==="january"||mon==="march"||mon==="may"||mon==="july"||mon==="august"||mon==="october"||mon==="december")
{no=31}
else if(mon==="february")
{no=28}
else if(mon==='april'||mon==='june'||mon==='september'||mon==='november')
{no=30}
if (no)
    console.log(`${mon} has ${no} days.`)
else
    console.log("Enter valid value")
}

{ //2
let mon=prompt("Enter month:").toLowerCase(),y=prompt("Enter year:"),no
if (mon==="january"||mon==="march"||mon==="may"||mon==="july"||mon==="august"||mon==="october"||mon==="december")
{no=31}
else if(mon==="february"){
    if (y%4===0)
        no=29
    else
        no=28}
else if(mon==='april'||mon==='june'||mon==='september'||mon==='november')
{no=30}
if (no)
    console.log(`${mon} has ${no} days.`)
else
    console.log("Enter valid value")
}

