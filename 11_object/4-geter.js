let person={


    firstname:"bob",
    lastname:"Alice",


    get fullname(){
        return this.firstname + ""+ this.lastname
    }

}

console.log(person.fullname)