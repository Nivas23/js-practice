let firstName,lastName,country,city,age,isMarried,year //1
firstName='hello',lastName='world',country='India',city='TamilNadu',isMarried=false,age=20
console.log(typeof firstName,typeof lastName,typeof country,typeof city,typeof isMarried,typeof age,'\n')

console.log('10'===10,'\n') //2

console.log(parseInt('9.8')===10,'\n') //3

console.log(9==9) //4
console.log(10>9)
console.log(30!=20,'\n')

console.log(9==='9') //4
console.log(10<9)
console.log(0==1,'\n')

/*4>3 true,
4>=3 true,
4<3 false,
4<=3 false,
4==4 true,
4===4 true,
4!=4 false,
4!==4 false,
4!='4' false,
4=='4' true
4=== '4' false*/

console.log(4>3,4>=3,4<3,4<=3,4==4,4===4,4!=4,4!==4,4!='4',4=='4',4==='4')
console.log('python'.length<'jargon'.length,'\n') //5

/*4 > 3 && 10 < 12 true
4 > 3 && 10 > 12 false
4 > 3 || 10 < 12 true
4 > 3 || 10 > 12 true
!(4 > 3) false
!(4 < 3) true
!(false) true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 === '4') true
There is no 'on' in both dragon and python - false*/

console.log(4 > 3 && 10 < 12, 4 > 3 && 10 > 12, 4 > 3 || 10 < 12, 4 > 3 || 10 > 12, !(4 > 3), !(4 < 3), !(false), !(4 > 3 && 10 < 12), !(4 > 3 && 10 > 12), !(4 === '4'))
console.log(!'dragon'.includes('on')&&!'python'.includes('on')) //6

const now=new Date() //7
console.log(now.getFullYear(),now.getMonth()+1,now.getDate(),now.getDay()+1,now.getHours(),now.getMinutes())
console.log(now.getTime(),Date.now())

