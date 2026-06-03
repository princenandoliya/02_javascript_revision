

class car {
    constructor(name,price,color){
        this.name=name,
        this.price=price,
        this.color=color
    }
}

const car1=new car("Audi",7000000,"black");

console.log(car1);

console.log(car1.name);


//modifying proptes with dot notation
car1.name="BMW";

console.log(car1)

//using []breacket.

car1["color"]="black";

console.log(car1);