const arr=[]

const arr1=[1,2,3,4,5,6,7,8,9]

console.log(arr1.length)

console.log(arr1[0],arr1[Math.floor(arr1.length/2)],arr1[arr1.length-1])

const mixedDataTypes=[1,[3,2],"hi",null,true,undefined]
console.log(mixedDataTypes)

const itCompanies=['Facebook','Google','Microsoft','Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)

console.log(itCompanies.length)

console.log(itCompanies[0],itCompanies[Math.floor(itCompanies.length/2)],itCompanies[itCompanies.length-1])

console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],itCompanies[6])

console.log(itCompanies[0].toUpperCase(),itCompanies[1].toUpperCase(),itCompanies[2].toUpperCase(),itCompanies[3].toUpperCase(),itCompanies[4].toUpperCase(),itCompanies[5].toUpperCase(),itCompanies[6].toUpperCase())

console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies`)

let p=itCompanies.indexOf("Amazon")
p==-1?console.log("company not found"):console.log(itCompanies[p])

console.log(itCompanies.sort())

console.log(itCompanies.reverse())

console.log(itCompanies.slice(0,3))

console.log(itCompanies.reverse().slice(0,3))

console.log(itCompanies.slice(1,itCompanies.length-1))

itCompanies.shift()
console.log(itCompanies)

itCompanies.splice(2,2)
console.log(itCompanies)

itCompanies.pop()
console.log(itCompanies)

itCompanies.splice(0,itCompanies.length)
console.log(itCompanies)


