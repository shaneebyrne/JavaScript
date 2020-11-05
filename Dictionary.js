class Dictionary
{
    constructor()
    {
        this.dataStore = [];
    };
    
    add = function(key, value) //adds given key (index value) and value to Dictionary.
    {
            this.dataStore[key] = value;
    };
    
    find = function(key) //finds key (index value) in Dictionary
    {
        return this.dataStore[key];
    };

    remove = function(key) //removes desingated key (index) and value from Dictionary
    {
        delete this.dataStore[key];
    };

    objectPrint = function() //prints keys and value of each object in Dictionary.
    {
        for(let key in Object.keys(this.dataStore))
        {
            console.log(`Key ${key} equals ${this.dataStore[key]}`);
        }
    };

    count = function() //counts number of objects in Dictionary.
    {
        let n = 0;
        for(let key in Object.keys(this.dataStore))
        {
            ++n;
        }
        return n;
    };
};


let wordBook = new Dictionary();

wordBook.add(0, "Gun");
wordBook.add(1, "Knife");
wordBook.add(2, "Chainsaw");
wordBook.add(3, "Huge-FuckOff Gun");
wordBook.add(4, "Sword");
wordBook.add(5, "Baton");
wordBook.add(6, "Bit of Wood");
wordBook.add(7, "Bomb");

wordBook.objectPrint();

wordBook.remove(2);

wordBook.objectPrint();

wordBook.add(2, "Huge-FuckOff Chainsaw");

wordBook.objectPrint();

console.log(wordBook.find(6));

console.log(wordBook.count());


