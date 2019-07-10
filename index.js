class Human {
  constructor(gender) {
this.gender = gender;
  }
  sex(){
    console.log(`this is ${this.gender}`)
  }
}
class Person extends Human{
     constructor(name,age, gender){
      super(gender)
       this.name=name;
       this.age=age;
       
     }
     jump(){
       console.log(`this guy ${this.name} is jumping`)
     }
}

const jim = new Person('Jim', 20,'male')
jim.sex();