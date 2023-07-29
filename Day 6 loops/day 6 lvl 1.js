let i=0//1
for(i=0;i<11;i++){console.log(i)}
i=0
while(i<11){console.log(i);i++}
i=0
do{console.log(i);i++;}while(i<11)

for(i=10;i>=0;i--){console.log(i)} //2
i=10
while(i>=0){console.log(i);i--}
i=10
do{console.log(i);i--;}while(i>=0)

n=12//3
for(i=0;i<=n;i++){console.log(i)}

for(i=1;i<8;i++){console.log('#'.repeat(i))}//4

for(i=0;i<11;i++){console.log(`${i} x ${i} = ${i*i}`)}//5

console.log('i\ti^2\ti^3')
for(i=0;i<11;i++){console.log(`${i}\t${i**2}\t${i**3}`)}//6

for(i=0;i<101;i++){if (i%2===0)console.log(i)}//7

for(i=0;i<101;i++){if (i%2!==0)console.log(i)}//8

let s=0//10
for(i=0;i<101;i++){s+=i}console.log(`The sum of all numbers from 0 to 100 is ${s}.`)

let e=0,o=0
for(i=0;i<101;i++){i%2==0?e+=i:o+=i }//11
console.log(`The sum of all evens from 0 to 100 is ${e}. And the sum of all odds from 0 to 100 is ${o}.`)

sums=[];sums.push(e,o)//12
console.log(sums)

let a=[]//13
for(i=0;i<5;i++){a[i]=Math.floor(Math.random()*11)}
console.log(a)

a.splice();let r//14
for(i=0;i<5;i++){
    r=Math.floor(Math.random()*101)
    if (a.indexOf(r)==-1)
    a[i]=r 
    else
    a[i]=Math.floor(Math.random()*11)
}
console.log(a)

let j=[],k=''//15
id='abcdefghijklmnopqrstuvwxyz0123456789'
a=id.split('')
for(i=0;i<6;i++){
    r=Math.floor(Math.random()*36)
    if (j.indexOf(r)==-1)
    j[i]=r 
    else
    j[i]=Math.floor(Math.random()*36)
    k+=a[j[i]]}
console.log(k);





