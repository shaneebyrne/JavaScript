class vehicle
{
  constructor(type, color, idNum, owner)
  {
    this.type = type;
    this.color = color;
    this.idNum = idNum;
    this.owner = person(name, age, height, weight, address, phonenumber);
  }

  getType = function()
  {
      return type;
  }

 

}

const aPerson = new person("John", 36, 1.85, 240, "2231 Main Street", "760-867-5309")
const aVehicle = new vehicle("Ford", "Red", 1001359, aPerson);
console.log(aVehicle);