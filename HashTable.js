class HashTable
{
    constructor()
    {
        this.table = new Array(137);
    };

    simpleHash = function(data)
    {
        let total = 0;
        for(let i = 0; i < data.length; ++i)
        {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    };

    put = function(data)
    {
        let position = this.simpleHash(data);
        this.table[position] = data;
    };

    showDistro()
    {
        let n = 0;
        for(let i = 0; i < this.table.length; ++i)
        {
            if(this.table[i] != undefined)
            {
                print(`${i}": " ${this.table[i]}`);
            }
        }
    };

    hash = function(string, array)
    {
        const h = 37;
        let total = 0;
        for(let i = 0; i < string.length; ++i)
        {
            total = h * total + string.charCodeAt(i); 
        }
        total = total % array.length;
        return parseInt(total);
    };
    
    getRandomInt = function(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    generateStudentData = function(array)
    {
        for(let i = 0; i < array.length; ++i)
        {
            let number = " ";
            for(let j = i; j <= i.length - 1; ++j)
            {
                number += Math.floor(Math.random() * 10);
            }
            number += this.getRandomInt(50,100);
            array[i] = number;
        }
    };

    increase = function(array)
    {
      let temp = new Array(array.length * 2);

      for(i = 0; i < array.length; i++)
      {
          for(j = i; j < array.length; j++)
          {
              temp[j] = array[i];
          }
      }
      this.table = temp;
      return temp;
    };

}