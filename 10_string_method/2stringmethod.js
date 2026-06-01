//split method 
//1
let car = "hi how are you "
console.log(car.split(" "))
console.log(car.split(""))
console.log(car.split("h"))


//startswith method 
//1
let str = "hi what is your name"
console.log(str.startsWith("h"))
console.log(str.startsWith("what"))

//substring method =

let all = "i am prince"
console.log(all.substring(0,5))
console.log(all.substring(-2))


//tolowercase method 

let text = "HI WHAT IS YOUR NAME"
console.log(text.toLowerCase())


//touppercase method 
let text1 = "hi what is your name"
console.log(text1.toUpperCase())

//trim method 


let all1 = "   hi    "
console.log("all1 length",all1.length)
console.log(all1.trim().length)


let all2 = "   hi    "
console.log("all2 length",all2.length)
console.log(all2.trimStart().length)



let all3 = "   hi    "
console.log("all3 length",all3.length)
console.log(all3.trimEnd().length)