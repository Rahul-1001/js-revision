
// let car = {
//     make: "Toyota",
//     model: "camri",
//     year: 2020,
//     start: function() {
//         return `${this.make} car got started in ${this.year}`;
//     }
// };

// console.log(car.start());





 
function Person(name,age)
{
    this.name=name
    this.age=age
}

let john=new Person("rahul",22);
// console.log(john.name);


function Animal(type)
{
    this.type=type;
}
Animal.prototype.speak=function()
{
    return`${this.type} makes a sound`
}







//**************   INHERITANCE **************************** */


class Vehicle{

    constructor(make,model)
    {
        this.make=make
        this.model=model
    }
   //methods  
    start()
    {
        return `${this.model} is a car from ${this.make}`
    }

}



class car extends Vehicle{
   drive(){
    return `${this.make}: This is an inheritance example`
   }


}

let myCar=new car("toyota","corolla")
console.log(myCar.start());
console.log(myCar.drive());

  