import { countries } from "./countries.js"
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


  const k = Object.keys(users)
  console.log(k)
  let slen=[]
   for(const e of k){ //1
     slen.push(users[e]['skills'].length)
   }
   let maxi = Math.max(...slen)
  for(const e of k){
     if (maxi ==  users[e]['skills'].length)
     console.log(e)
   }


   let c = 0,gc = 0
   for(const e of k){ //2
   if (users[e]['isLoggedIn'])
   c++
   if(users[e]['points']>=50)
   gc++
  }   
  console.log(c,gc)//2

  for(const e of k){ 
    if( users[e]['skills'].includes('MongoDB','Express','React','Node'))
    console.log(`MERN stack developer ${e}`)
  }//3

  users.Nivas={
    email: 'Nivas@Nivas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
  console.log(users.hasOwnProperty('Nivas'))//4

console.log(Object.keys(users))
console.log(Object.values(users))

for(const e of countries)//5
console.log(e.name,e.capital,e.population,e.languages)