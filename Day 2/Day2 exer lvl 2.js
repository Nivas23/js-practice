//level 2
let s='The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(s) //1

let s1='"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
console.log('\n',s1) //2

console.log('\n',typeof '10',typeof 10)
console.log(typeof +'10',typeof 10) //3

console.log('\n',parseFloat('9.8'),10)
console.log(Math.round(parseFloat('9.8')),10) //4

console.log('python'.includes('on'),'jargon'.includes('on'),'\n') //5

console.log('I hope this course is not full of jargon'.includes('jargon'),'\n') //6

console.log(Math.floor(Math.random()*101),'\n') //7

console.log(Math.floor(Math.random()*51)+50,'\n') //8

console.log(Math.floor(Math.random()*256),'\n') //9

let j='JavaScript'
let i=Math.floor(Math.random()*(j.length)) //10
console.log(j[i],'\n')

console.log('1 1 1 1 1 \n2 1 2 4 8\
\n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125\n') //11

let e='You cannot end a sentence with because because because it is a conjunction'
console.log(e.indexOf('because'))
console.log(e.substr(31,23))