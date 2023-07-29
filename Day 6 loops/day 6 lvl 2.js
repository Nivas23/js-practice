let j=[],k='',r //1
id='abcdefghijklmnopqrstuvwxyz0123456789'
a=id.split('')
n=16
for(i=0;i<n;i++){
    r=Math.floor(Math.random()*36)
    if (j.indexOf(r)==-1)
    j[i]=r 
    else
    j[i]=Math.floor(Math.random()*36)
    k+=a[j[i]]}
console.log(k);

id='abcdef0123456789'
a=id.split('')//2
k=''
for(i=0;i<6;i++){
    r=Math.floor(Math.random()*16)
    if (j.indexOf(r)==-1)
    j[i]=r 
    else
    j[i]=Math.floor(Math.random()*16)
    k+=a[j[i]]}
console.log(`#${k}`);

r=Math.floor(Math.random()*256)//3
g=Math.floor(Math.random()*256)
b=Math.floor(Math.random()*256)
console.log(`rgb(${r},${g},${b})`);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


let c=[]//4
for(i=0;i<countries.length;i++)
c.push(countries[i].toUpperCase())
console.log(c)

let cl=[]//5
for(i=0;i<countries.length;i++)
cl.push(countries[i].length)
console.log(cl)

let cd=[]//6
for(i=0;i<countries.length;i++)
cd.push([countries[i],countries[i].slice(0,3).toUpperCase(),countries[i].length])
console.log(cd)

let l=[],nl=[]//7
for(i=0;i<countries.length;i++){
if (countries[i].includes('land'))
l.push(countries[i])
else
nl.push(countries[i])
}
l.length==0?console.log(nl):console.log(l)

let ia=[],nia=[]//8
for(i=0;i<countries.length;i++){
if (countries[i].endsWith('ia'))
ia.push(countries[i])
else
nia.push(countries[i])
}
ia.length==0?console.log(`These are countries ends without ia \n ${nia}`):console.log(ia)

cl=[]//9
for(i=0;i<countries.length;i++)
cl.push(countries[i].length)
console.log(countries[cl.indexOf(Math.max(...cl))])

let l5=[]//10
for(i=0;i<countries.length;i++){
if (countries[i].length==5)
l5.push(countries[i])
}
console.log(l5)

wl=[]//11
for(i=0;i<webTechs.length;i++)
wl.push(webTechs[i].length)
console.log(webTechs[wl.indexOf(Math.max(...wl))])

let wd=[]//12
for(i=0;i<webTechs.length;i++)
wd.push([webTechs[i],webTechs[i].length])
console.log(wd)

mern=''//13
for(i=0;i<mernStack.length;i++)
{mern+=mernStack[i]+' '}
console.log(mern)

const fullStack = ['HTML', 'CSS', 'JS', 'React','Node', 'Express', 'MongoDB']//14
for(const e of fullStack){console.log(e)}

const fruits= ['banana', 'orange', 'mango', 'lemon']
const rev=[]
for(i=fruits.length-1;i>=0;i--)
rev.push(fruits[i])
console.log(rev)

const fullStack1 = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
for(i=0;i<fullStack1.length;i++){
    for(const v of fullStack1[i]){console.log(v)}
}








