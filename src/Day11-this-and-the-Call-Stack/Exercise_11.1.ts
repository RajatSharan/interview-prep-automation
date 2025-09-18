//Exercise 11.1: Create an object with a method that logs this. Call the method to see what this refers to.


const Repo ={

    model:2021,
    make :"BMW",
    Year : 2024,
    modelRate(){
        console.log(this.model)

    }

}

Repo.modelRate()