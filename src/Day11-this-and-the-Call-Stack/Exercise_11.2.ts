//Exercise 11.2: Write a simple function that calls another function, logging the order of execution.

function trap1(){

    console.log("Starting firstFunction.");
    trap2()
    console.log("First function finished")
}

function trap2(){

    console.log("Second function called")


}

trap1()
