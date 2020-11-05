class vehicle 
{
    constructor(type, length, weight, color, idNum)
    {
        this.type = type;
        this.length = length;
        this.weight = weight;
        this.color = color;
        this.idNum = idNum;
        
    }

    getWeight()
    {
        return this.weight;
    }

    getLength()
    {
        return this.length;
    }

    getType()
    {
        return this.type;
    }

    getColor()
    {
        return this.color;
    }

    getIDnum()
    {
        return this.idNum;
    }

    toString()
    {
        return `Vehicle type: ${this.getType()} Vehicle Length: ${this.getLength()} Meters Vehicle Weight: ${this.getWeight()} Kilo(s)  Vehicle Color: ${this.getColor()}  ID Number: ${this.getIDnum()}`
    }


   
    
}

const vehicle1 = new vehicle("car", 20.55, 4000, "Red", "164920A902");

console.log(vehicle1);

console.log(vehicle1.getColor());

console.log(vehicle1.getType());

console.log(vehicle1.toString());