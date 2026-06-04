//push manually


const car = ["bmw","verna","Audi","i20"]

console.log(car)

function puahmanually(){

    let count = 0

    for(let i of car){
        count++
    }
    
    car[count] = "thar"
    console.log(car)
}

puahmanually()

car.pop()
console.log("first element remove:",car)

//unshiftmanually

function unshiftmanually(){

    for(let i = car.length-1;i>=0;i--){

        car[i+1]=car[i]
    }

    car[0] = "thar"

    console.log(car)
}

unshiftmanually()

car.shift()
console.log("first element remove",car)