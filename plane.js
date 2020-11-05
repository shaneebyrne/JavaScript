class plane extends vehicle
{
    constructor(type, length, weight, color, idNum)
    {
       super(type, length, weight, color, idNum);
       this.wings = 0;
       this.engine = " ";
       this.make = " ";
       this.model = " ";
       this.productionYear = 0;
    }
}

const plane1 = new plane("Plane", 1.85, 4000, "Blue", "214220A0");

console.log(plane1);