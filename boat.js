class boat extends vehicle
{
    constructor(type, length, weight, color, idNum)
    {
       super(type, length, weight, color, idNum);
       this.engine = " ";
       this.make = " ";
       this.model = " ";
       this.productionYear = 0;
       this.sail = false;
    }

    hasSail(verify)
    {
        if(verify == true)
        {
            this.sail = true;
        }
        else
        {
            this.sail = false
        }

        return this.sail;
     }

     getSail()
     {
         return this.sail;
     }
}

const boat1 = new boat("Boat", 1.85, 4000, "Blue", "214220A0");

console.log(boat1);

console.log(boat1.getSail());

console.log(boat1.hasSail(true));

console.log(boat1.getSail());

console.log(boat1.weight);

console.log(boat1.toString());

