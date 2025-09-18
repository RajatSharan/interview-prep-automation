//Exercise 12.1: Create a class called Dog with a constructor that takes a name and a breed. Add a method bark that logs a message.


class Dog{
    
   name:string
   breed:string

    constructor (name:string,breed:string){

        this.name=name
        this.breed=breed
      
    }
       bark (){

            console.log(`${this.name} the ${this.breed} is barking.`)

        }

}

const dog= new Dog("LMN","Golder retriver")

dog.bark()