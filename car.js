class car extends vehicle
{
    constructor(type, length, weight, color, idNum)
    {
       super(type, length, weight, color, idNum);
       this.numTires = 0;
       this.engine = " ";
       this.make = " ";
       this.model = " ";
       this.productionYear = 0;
    }
}

const car1 = new car("Car", 1.85, 4000, "Blue", "214220A0");

console.log(car1.toString());