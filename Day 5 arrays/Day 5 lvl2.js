import { countries } from "./countries.js"
import { webTechs } from "./webTechs.js"

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words=text.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)
shoppingCart.push('Sugar')
console.log(shoppingCart)
let h=shoppingCart.indexOf('Honey')
shoppingCart.splice(h,1)
console.log(shoppingCart)

countries.indexOf('ethiopia')==-1?countries.push('ethiopia'):console.log('ETHIOPIA')
console.log(countries)

webTechs.indexOf('sass')==-1?webTechs.push('Sass')&&console.log(webTechs):console.log('Sass is a preprocess')

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)

//level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
console.log(ages[0],ages[ages.length-1])
console.log(ages[ages.length/2])
console.log(ages[ages.length-1]-ages[0])
let sum=0,i=0;
ages.forEach(()=>{sum=sum+ages[i];i++})
let avg=sum/ages.length
console.log(avg)



console.log(ages.slice(0,9))

console.log(ages.slice(1,ages.length-1))

const c1=countries.slice(0,countries.length/2)
const c2=countries.slice(countries.length/2,countries.length)
console.log(c1,c2)
