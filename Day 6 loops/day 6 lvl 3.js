import { countriesfull } from "./countries.js"
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

  const cc=[
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
  let sortedCountries=cc.sort(),i=0
  console.log(sortedCountries)//2

  console.log(webTechs.sort())//3
  console.log(mernStack.sort())

  let l=[],nl=[]//4 & 6
    for(i=0;i<countriesfull.length;i++){
    if (countriesfull[i].includes('land'))
    l.push(countriesfull[i])
    else
    nl.push(countriesfull[i])
    }
console.log(l)

let cl=[]//5
for(i=0;i<countriesfull.length;i++)
cl.push(countriesfull[i].length)
console.log(countriesfull[cl.indexOf(Math.max(...cl))])

let l4=[]//7
for(i=0;i<countriesfull.length;i++){
if (countriesfull[i].length==4)
l4.push(countriesfull[i])
}
console.log(l4)

let l2m=[]//8
for(i=0;i<countriesfull.length;i++){
if (countriesfull[i].split(' ').length>=2)
l2m.push(countriesfull[i])
}
console.log(l2m)

let crev=[]//9
for(i=countriesfull.length-1;i>=0;i--){
    crev.push(countriesfull[i])
}
console.log(crev)



