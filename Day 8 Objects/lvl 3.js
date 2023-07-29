import { users ,products} from "./users.js"
const personAccount={
    firstName:'a',
    lastName:'b',
    incomes:{x:20000,y:30000},
    expenses:{q:13000,w:2000},
    totalIncome:function(){return this.incomes.x+this.incomes.y},
    totalExpense:function(){return this.expenses.q+this.expenses.w},
    accountInfo:function(){return `${this.firstName} ${this.lastName} ${this.totalIncome()}`},
    addIncome:function(src,amount){this.incomes[src]=amount;return this.incomes},
    addExpense:function(exp,amount){this.expenses[exp]=amount;return this.expenses},
    accountBalance:function(){return this.totalIncome()-this.totalExpense()}
}
console.log(
    personAccount.accountInfo(),
    personAccount.totalIncome(),
    personAccount.totalExpense(),
    personAccount.addIncome('z',10000),
    personAccount.addExpense('v',1000),
    personAccount.accountBalance()
)//1

const signUp=function(name,email,password){
    let f = 0
    let id =0
    for (const e of users){
    if (e.username==name)
    f++
    }
    if (f==1)
    return `User Already Exist`
    else {
    const d = new Date()
    const m =d.getMinutes()
    const day=`${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${m<10?`0${m}`:m} ${m>12?'P.M':'A.M'}`
    users[users.length-1]={_id:id+=1,username:name,
    email:email,password:password,createdAt:day,isLoggedIn:false
    }
    }
}
console.log(signUp('Mahe','mahe@mahe.com','1234'))
console.log(users[users.length-1])//2

const signIn=function(name,password){
    let f = 0
    for (const e of users){
    if (e.username==name & e.password==password)
    f++
    }
    if (f==1)
    return `Logged in`
    else {
    return `please sign up`
    }
    }

console.log(signIn('Harikesh',12222)) //2b

function rateProduct(product,userid,rate){
    let f =0
    for(const e of products){
        if(e.name==product){
            f=1
            e.ratings.push({userId:userid,rate:rate})
            console.log(e)
            break
        }
    }
    if (f==0)
    console.log('product not found')    
}
rateProduct('TV','john',6)
rateProduct('TV','johny',9)

function averageRating(product){
    let f =0,sum=0
    for(const e of products){
        if(e.name==product){
            f=1
        if (e.ratings.length!=0)
        {for( const i of e.ratings){
            sum+=i.rate
        }
        return `Average rating of ${e.name}: ${Math.round(sum/e.ratings.length)}`
    }
        else
            return "No Ratings Yet!"
        }}
        if (f=0){
            console.log(`product not exist`)
        }}

console.log(averageRating('TV'))//3

function likeProduct(userid,product){
    let f=0
    for(const e of products){
         if (e.name==product )
         {
            f=1
            console.log(e.likes.includes(userid))
            if(e.likes.includes(userid)==false)
                e.likes.push(userid)
            else{
                e.likes=e.likes.filter(t=>t!=userid)
            }

        }
    }
    if (f==0)
    return `product not found`
    else
    return products
}
console.log(likeProduct('123','TV'))
console.log(likeProduct('123','mobile phone'))