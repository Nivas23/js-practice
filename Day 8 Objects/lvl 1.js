const dog ={}//1
console.log(dog)//2

dog.name="husky"
dog.legs=4
dog.age=10
dog.bark=()=>"woof woof"
console.log(dog,dog.bark()) //3

const {name,legs,age,bark} = dog
console.log(name,legs,age,bark())//4

dog.breed="pomerian"
dog.getDogInfo=function(){return`${this.name} is a dog it has ${this.legs} legs and it is ${this.age} old`}
console.log(dog.getDogInfo())//5

