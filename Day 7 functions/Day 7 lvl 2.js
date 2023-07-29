function solveLinEquation(a,b,c){
    for(let i=-50;i<50;i++){
        for(let j=-50;j<50;j++){
            v=(a*i)+(b*j)+c
            if(v===0)
            return `solution ${i}, ${j}`
        }
    }
}console.log(solveLinEquation(1,0,-4))//2

function solveQuadEquation(a,b,c){
    v=(-b+Math.sqrt((b*b)-(4*a*c)))/2*a
    v1=(-b-Math.sqrt((b*b)-(4*a*c)))/2*a
    return `solution { ${v}, ${v1}}` 
}console.log(solveQuadEquation(1,0,-4))

function printArray(arr){console.log(...arr)}
printArray([1,2,3,4])//3

function showDateTime(){
    const d=new Date()
    console.log(`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`)
}showDateTime()//4

function swapValues(a,b){
    let temp=a;a=b;b=temp;
    return `${a}, ${b}`
}console.log(swapValues(5,4))//5

function reverseArray(arr){
    let r=[]
    for(let i=arr.length-1;i>=0;i--){
        r.push(arr[i])
    }
    return r
}console.log(reverseArray([1,12,3,4]))//6

function capitalizeArray(arr){
    cap=[]
    for(let i=0;i<arr.length;i++){
        cap.push(arr[i].toUpperCase())
    }
    return cap
}console.log(capitalizeArray(['a', 'b', 'c']))//7

function addItem(arr,a){
    arr[arr.length]=a
    return arr
}console.log(addItem([1,2,3],5))//8

function removeItem(arr,i){
    let n=(arr.slice(0,i))
    let n1 = n.concat(arr.slice(i+1,arr.length))
    return n1

}console.log(removeItem([1,2,3,4,5,6],4))//9

function sumOfNumbers(a){
    let sum=0
    for(i=1;i<=a;i++)
    sum+=i
    return sum
}console.log(sumOfNumbers(5))//10

function sumOfOdds(a){
    let sum=0
    for(i=1;i<=a;i++){
    if(i%2!==0)
    sum+=i
}
    return sum
}console.log(sumOfOdds(5))//11

function sumOfEven(a){
    let sum=0
    for(i=1;i<=a;i++){
    if(i%2===0)
    sum+=i
}
    return sum
}console.log(sumOfEven(5))//12

function evensAndOdds(a){
    let o=0,e=0
    for(i=0;i<=a;i++){
    if(i%2===0)
    e+=1
    else
    o+=1
}
    return `The number of odds are ${o}\nThe number of evens are ${e}`
}console.log(evensAndOdds(100))//13

function sum(){
    let sum=0
    for(i=0;i<arguments.length;i++)
    sum+=arguments[i]
    return sum
}console.log(sum(1,2,3,4))//14

function randomUserIp(){
    console.log(`${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}`)
}randomUserIp()//15

function randomMacAddress(){
    console.log(011)
}randomMacAddress()

function randomHexaNumberGenerator(){
    let v=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'],arr=[]
    for(i=0;i<6;i++){
        arr[i]=v[Math.floor(Math.random()*16)]
    }    console.log(v)
    let a='abcdefghijklmnopqrstuvwxyz'
    v=v.concat(a.split(''))
    v=v.concat(a.toUpperCase().split(''))
    for(i=0;i<7;i++){
        arr[i]=v[Math.floor(Math.random()*62)]
    }
    return arr.join('')
}console.log(userIdGenerator())



