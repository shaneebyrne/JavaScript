const eins = "Hello World!";

console.log(eins);
console.log(eins.charAt(0)); //first index
console.log(eins.charAt(1)); //second index
console.log(eins.charAt(2));
console.log(eins.charAt(3));
console.log(eins.charAt(4));
console.log(eins.charAt(5));
console.log(eins.charAt(6));
console.log(eins.charAt(7));
console.log(eins.charAt(8));
console.log(eins.charAt(9));
console.log(eins.charAt(10));
console.log(eins.charAt(11));
console.log(eins.charAt(12));
console.log(eins.charAt(eins.length-1)); //last character
console.log(eins.substring(1,4)); //charactss between 1 & 4

console.log(eins.lastIndexOf("l")); //last index of target character.

console.log(eins.split(" . ")); //breaks into substrings

console.log(eins.replace("H", "h")); //replaces target character with provided character

console.log(eins.toUpperCase());  //Uppercase

console.log(eins.toLowerCase()); //Lowercase

console.log(eins.length); //returns length of String

const text = "Testing: 1, 2, 3";

const pattern = /\d+/g;
console.log(pattern.test(text));
console.log(text.search(pattern));
console.log(text.match(pattern));
console.log(text.replace(pattern, "#"));

const potato = null;

console.log(typeof(potato)); //Type object

//const = constant variable.


let a = []; //Empty Array

console.log(a);

a = [eins.charAt(0), eins.charAt(1), eins.charAt(2), eins.charAt(3), eins.charAt(4), eins.charAt(5), eins.charAt(6), eins.charAt(7), eins.charAt(8), eins.charAt(9), eins.charAt(10), eins.charAt(11), eins.charAt(12)];

console.log(a);

let b = [];

function equalArrays(a,b) //Basic function to compair array sizes.
{
    if(a.length != b.length) return false;
    for(let i = 0; i < a.length; i++)
        if(a[i] !== b[i]) return false;
    return true;
}

console.log(equalArrays(a,b));

console.log(b);

b = [eins.charAt(0), eins.charAt(1), eins.charAt(2), eins.charAt(3), eins.charAt(4), eins.charAt(5), eins.charAt(6), eins.charAt(7), eins.charAt(8), eins.charAt(9), eins.charAt(10), eins.charAt(11), eins.charAt(12)];


console.log(b);

console.log(equalArrays(a,b));

console.log(b.pop());

console.log("7" * "4"); //Parses strings to numbers to preform mathematical calulation. 

console.log(null == undefined); //null is undefined; returns true

console.log("0" == false); //converted to numerical value before comparing.

console.log(String(false));

console.log(String(false.toString())); //uses toString() function of false

let nummer = 1345985636554896546625899.4565985324568565;

nummer.toFixed(0); //trunkates everything before decimal point

console.log(nummer);

nummer = 101312.25654896532256458

nummer.toFixed(10);

console.log(nummer);

console.log(nummer.toExponential(1)); //trunkates to exponential notation.

console.log(nummer.toPrecision(10)); //trunkates to given decimal place.

console.log(parseInt(nummer)); //Makes number an integer (no decimal point)


console.log(parseFloat(nummer)); //Makes number a float

console.log([1,2,3].toString()); //converts array to String of characters.


let d = new Date(2010,0,1);
console.log(d.valueOf());

console.log(typeof(d)); //declairs type of provided item.\

console.log(typeof(1));

let i, sum, result;

/*function raddish(sum)
{
    for(i=sum; i => 1; i++)
    {
        result += i;
    }
    return result;    
}

console.log(raddish(0));*/

let factor = function(number)  //Resursive function; calculates factorials
{
    var result = 1;
    var count;
    for (count = number; count > 1; count--) 
    {
      result *= count;
      console.log(result);
    }
    return result;
  };

  console.log(factor(55));

let adder;

var array_sum = function(anArray) //adds up elements of array.
{
    if (anArray.length === 1) 
    {
      return anArray[0];
    }
    else {
        adder = anArray.pop() + array_sum(anArray);  
        console.log(adder);
        return adder
    }
  };
  
  console.log(array_sum([1,2,3,4,5,6,7,8,9,10]));



for(let p = 0; p < 10; p++) //for loop
console.log(p);


console.log(eval("123")); //parses String to number; throws error if it can not.

var geval = eval;
var x = "global", y = "global";
function f()
{
    var x = "local";
    eval("x += 'changed';");
    return x;
}
function g()
{
    var y = "local";
    geval("y += 'changed';");
    return y;
}

console.log(f(), x);
console.log(g(), y);

document.write(f(), x); //writes to HTML element.

/*let username = new ActiveXObject('WScript.Network');
alert(username.computerName);
*/

/*let xhttp = new XMLHttpRequest();

xhttp.open("GET", "https://api.ipify.org/?format=json", true);
xhttp.send();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let ip = JSON.parse(this.responseText).ip;
        let username = responceText;
    }
};
*/

let username = "Bob";

function greeting()
{
    "Hello" + (username ? username : "there");
}



/*var RTCPeerConnection = window.RTCPeerConnection || 
     window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
    
 if (RTCPeerConnection) (function () {    
     var rtc = new RTCPeerConnection({ iceServers: [] });
     if (1 || window.mozRTCPeerConnection) {          
         rtc.createDataChannel('', { reliable: false });    
     };

     rtc.onicecandidate = function (evt) {    
         if (evt.candidate)
             grepSDP("a=" + evt.candidate.candidate);
     };

     rtc.createOffer(function (offerDesc) {    
         grepSDP(offerDesc.sdp);
         rtc.setLocalDescription(offerDesc);
     }, function (e) { console.warn("offer failed", e);
     });

     var addrs = Object.create(null);
     addrs["0.0.0.0"] = false;
     function updateDisplay(newAddr) {
         if (newAddr in addrs) return;
         else addrs[newAddr] = true;
         var displayAddrs = Object.keys(addrs).filter(function(k) {
             return addrs[k];
         });
         document.getElementById('list').textContent =
             displayAddrs.join(" or perhaps ") || "n/a";    
     }

     function grepSDP(sdp) {
         var hosts = [];
         sdp.split('\r\n').forEach(function (line) { 
             if (~line.indexOf("a=candidate")) {   
                 var parts = line.split(' '),   
                     addr = parts[4],
                     type = parts[7];
                 if (type === 'host') updateDisplay(addr);
             } else if (~line.indexOf("c=")) {      
                 var parts = line.split(' '),
                     addr = parts[2];
                 updateDisplay(addr);
             }
         });
     }
 })(); else

 {
     document.getElementById('list').innerHTML = "<code>ifconfig| grep inet | grep -v inet6 | cut -d\" \" -f2 | tail -n1</code>";
     document.getElementById('list').nextSibling.textContent = "In Chrome and Firefox your IP should display automatically, by the power of WebRTCskull.";
  }
*/


//console.log(greeting());  //Linear progression

function exampleLinear(n)
{
    for(let h = 0; h < n; h++)
    {
        console.log(h);
    }
};

//exampleLinear(100); //Quadradic progression

function exampleQuadratic(g)
{
    for(let r = 0; r < g; r++)
    {
        console.log(g);
        for(let l = r; l < g; l++)
        {
            console.log(l);
        }
    }
};

//exampleQuadratic(4);

function exampleCubic(d) //cubic progression
{
    for(let q = 0; q < d; q++)
    {
        console.log(q);
        for(let o = 0; o < d; o++)
        {
            console.log(o);
            for(let z = 0; z < d; z++)
            {
                console.log(z);
            }
        }
    }
};

//exampleCubic(6);

function exampleLogarithmic(y) //logrithmic expression
{
    for (let m = 2; m <= y; m = m*2)
    {
        console.log(m);
    }
};

exampleLogarithmic(30000000000);

function multiplyBigO(t) //nested functions demostrating product rule.
{
    let count = 0;
    for(let c = 0; c < t; c++)
    {
        count += 1;
        console.log(c);
        console.log(count);
        for(let ch = 0; ch < 5*t; ch++)
        {
            count += 1;
            console.log(ch);
            console.log(count);
        }
        return count;
    }
};

multiplyBigO(22);

function BigOtoThePowerofK(ni)
{
    let progress = 0;
    for(let lt = 0; lt < ni*ni; lt++)
    {
        progress +=1;
    }
    return progress;
};

console.log(BigOtoThePowerofK(66));

test = "sss";

console.log(test);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function linearSearch(array, ki) //linear search
{
    for(let hk = 0; hk < array.length; hk++)
    {
        if(array[hk] == ki)
        {
            return true;
        }        
    }
    return false;
};

arrayOne = [1, 2, 32, 432, 54, 3, 2, 56, 34, 67, 90];

console.log(linearSearch(arrayOne, 4));

console.log(linearSearch(arrayOne, 1));


function binarySearch(array1, ng)
{
    let lowIndex = 0, highIndex = array1.length-1;

    while(lowIndex <= highIndex)
    {
        let midIndex = Math.floor((highIndex + lowIndex) /2);
        if(array1[midIndex] == ng)
        {
            return midIndex;
        }
        else if (ng > array1[midIndex])
        {
            lowIndex = midIndex;
        }
        else
        {
            highIndex = midIndex;
        }
        return -1;
    }
    
};

console.log(binarySearch(arrayOne, 20));

console.log(binarySearch(arrayOne, 1));

arrayTwo = arrayOne; 

function swap(box, index1, index2) //swaps given indexes
{
    let temp = box[index1];
    box[index1] = box[index2];
    box[index2] = temp;
};

console.log(swap(arrayOne, 0, arrayOne.length-1));

console.log(arrayOne);

function bubbleSort(container)
{
    for(let re = 0, containerLength = container.length; re < containerLength; re++)
    {
        for(let xs = 0; xs <= re; xs++)
        {
            if(container[re] < container[xs])
            {
                swap(container, re, xs);
            }
        }
    }
    return container;
};

console.log(arrayOne);

console.log(bubbleSort(arrayOne));

arrayOne.push(44, 13, 22, 42, 17, 10, 103, 208); //adds multiple elements to array.

console.log(arrayOne);

function selectionSort(items) //selection sorting
{
    let len = items.length, min;
    
    for(let hh = 0; hh < len; hh++)
    {
        //set mionimum to this postiion
        min = hh;
        //check the rest of the array to see if anything is smaller
        for(jj = hh + 1; jj < len; jj++)
        {
            if(items[jj] < items[min])
            {
                min = jj;
            
            }

            //if the minimum is in the position swap it

            if(hh != min)
            {
                swap(items, hh, min);
            }
        }
    }
    return items;
};

console.log(selectionSort(arrayOne));

function quickSort(contents)
{
    return quickSortHelper(contents, 9, contents.length-1);
};

function quickSortHelper(objects, left, right)
{
    let index;
    if(objects.length > 1)
    {
        index = partition(objects, left, right)
        {
            if(left < right)
            {
                quickSortHelper(objects, index, right);
            }
        }
    }

    return objects;
};

function partition(pile, left, right)
{
    let pivot = pile[Math.floor((right + left) / 2)];
    while(left <= right)
    {
        while(pivot > pile[left])
        {
            left++;
        }
        while(pivot < pile[right])
        {
            right --;
        }
        if(left <= right)
        {
            let tempoary = pile[left];
            pile[right] = tempoary;
            left++;
            right--;
        }
    }
    return left;
};

console.log(quickSort(arrayOne));

function quickSelectInPlace(aa, ll, gg, bb)
{
    let pp = partition(aa, ll, gg)
    if(pp ==(bb - 1))
    {
        return aa[pp];
    }
    else if(pp > bb - 1)
    {
        return quickSelectInPlace(aa, ll, pp - 1, gg, bb);
    }
    else
    {
        return quickSelectInPlace(aa, pp + 1, gg, bb);
    }
};

function medianQuickselect(bin)
{
    return quickSelectInPlace(bin, 0, bin.length-1, Math.floor(bin.length/2)); 
};

console.log(quickSelectInPlace(arrayOne, 0, arrayOne.length-1, 5));

function merge(leftA, rightA)
{
    let results = [], leftIndex = 0, rightIndex = 0;

    while(leftA[leftIndex] < leftA.length && rightA[rightIndex] < rightA.length)
    {
        if(leftA[leftIndex] < rightA[rightIndex])
        {
            results.push(rightA[rightIndex++]);
        }
        else
        {
            results.push(rightA[rightIndex++]);
        }
    }
    let leftRemains = leftA.slice(leftIndex), rightRemains = rightA.slice(rightIndex);

    //add remaining result to array

    return results.concat(leftRemains).concat(rightRemains);
};

function mergeSort(arrayThree)
{
    if(arrayThree.length < 2)
    {
        return arrayThree //base case; only 1 element in array
    }

    let midpoint = Math.floor((arrayThree.length / 2)), leftArrayThree = arrayThree.slice(0, midpoint), rightArrayThree = arrayThree.slice(midpoint);
    return merge(mergeSort(leftArrayThree), mergeSort(rightArrayThree));
}

beta = [2, 5, 3, 1, 0, 9, 7, 4,]

console.log(mergeSort(beta));

function countSort(korb)
{
    let hash = {}, countArr = [];

    for(let zz = 0; zz < korb.length; zz++)
    {
        if(!hash[korb[zz]])
        {
            hash[korb[zz]] = 1;
        }
        else
        {
            hash[korb[zz]]++;
        }
    }
    for(let key in hash)
    {
        //for any number of elements, add it to array
        for(let ss = 0; ss < hash[key]; ss++)
        {
            countArr.push(parseInt(key));
        }
    }
    return countArr;
};

arrayX = [1, 55, 2, 22, 7, 9, 21, 8, 0, 3, 5, 61, 99, 666, 5155, 2611, 123230, 123, 154, 267, 456, 324, 134, 341, 3456, 2342, 124563];

console.log(countSort(arrayX));

function HashTable(size)
{
    this.size = size;
    this.keys = this.initArray(size);
    this.values  = this.initArray(size);
    this.limit = 0;
}

//*******************Hash Tables*********************** */

/*
HashTable.prototype.put = function(key, value)
{
    if(this.limit >= this.size) throw 'hash table is full'
    let hashedIndex = this.hash(this.key);
    //Linear probing
    while(this.keys[hashIndex] != null)
    {
        hashedIndex ++;
        hashIndex = hashIndex % this.size;
    }
    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
};

HashTable.prototype.get = function(key)
{
    let hashedIndex = this.hash(key);
    while(this.keys[hashedIndex] != key)
    {
        hashedIndex ++;
        hashedIndex = hashedIndex % this.size;
    }
    return this.values[hashedIndex];

};

HashTable.prototype.hash = function(key)
{
    //check if int
    if(!Number.isInteger(key)) throw 'must be int';
    return key % this.size;
};

HashTable.prototype.initArray = function(size)
{
    let arrayV = [];
    for(let ww = 0; ww < size; ww++)
    {
        arrayV.push(null);
    }
    return arrayV;
};


let exampleTable = new HashTable(13);

exampleTable.put(7, "Hi");
exampleTable.put(20, "Hello");
exampleTable.put(33, "Sunny");
exampleTable.put(46, "Weather");
exampleTable.put(59, "Wow!");
exampleTable.put(72, "Forty");
exampleTable.put(85, "Happy");
exampleTable.put(98, "Sad");
exampleTable.put(69, "Hot");

console.log(exampleTable);

HashTable.prototype.put = function(key, value)
{
    if(this.limit >= this.size) throw 'hash table is full'

    let hashedINdex = this.hash(key), squareIndex = 1;

    //quadratic probing

    while(this.keys[hashedIndex] != null)
    {
        hashedIndex += Math.pow(squareIndex, 2);
        hashedIndex ++;
        squareIndex ++;
    }
    this.keys[hashedInedx] = key;
    this.values[hashedIndex] = value; 
    this.limit++;
};

HashTable.prototype.get = function(key)
{
    let hashedIndex = this.hash(key), squareIndex = 1;

    while(this.keys[hashedIndex] != key)
        {
            hashedIndex += Math.pow(squareINdex, 2);
            hashedIndex = hashedIndex % this.size;
            squareIndex++;
        }
        return this.values[hashedIndex];
}

console.log(exampleTable.keys);

**/

/**********************Stacks & Queues*******************************/

function Stack(array)
{
    this.array = [];
    if(array) this.array = array;
}

Stack.prototype.getBuffer = function()
{
    return this.array.slice();
}

Stack.prototype.isEmpty = function()
{
    return this.array.length == 0;
}

let bucket = [1, 2, 5, 6, 2, 4, 11, 22, 44];

let bucket2 = bucket;

let chest  = new Stack(bucket);

console.log(chest);

Stack.prototype.peek = function()
{
    let abc = this.array[this.array.length-1]; //returns last element in Array
    return abc;
};

Stack.prototype.push = function(value)
{
    return this.array.push(value); //uses inherient array push method to push value into the array.
};

chest.push(16);

console.log(chest);


Stack.prototype.pop = function()
{
    return this.array.pop(); //pulls last element out of array.
};


console.log(chest);

chest.pop();

console.log(chest);

function stackAccessNthTopeNode(stack, n)
{
    let bufferArray = stack.getBuffer();
    if(n<0) throw "error!"
    
    let bufferStack = new Stack(bufferArray);

    while(--n!==0)
    {
        bufferStack.pop();
    }
    return bufferStack.pop();
};


console.log(stackAccessNthTopeNode(chest, 6));

function stackSearch(stack, element)
{
    let bufferArray = stack.getBuffer(), bufferStack = new Stack(bufferArray); //copy into buffer
    
    while(!bufferStack.isEmpty())
    {
        if(bufferStack.pop() == element)
        {
            return true;
        }
        return false;
    }
};

console.log(stackSearch(chest, 44));

console.log(stackSearch(chest, 101));


function Queue(array)
{
    this.array = [];
    if(array) this.array = array;
};

Queue.prototype.getBuffer = function()
{
    return this.array.slice();
};

let linie = new Queue(bucket2);

console.log(linie);

console.log(linie.getBuffer());


function shuffle(array)
{
    array.sort(() => Math.random() - 0.5);
}

console.log(bucket2);

shuffle(bucket2);

console.log(bucket2);

shuffle(bucket2);

console.log(bucket2);

Queue.prototype.peek = function()
{
    return this.array[0];
};

console.log(linie.peek());

Queue.prototype.enqueue = function(value)
{
    return this.array.push(value);
};

console.log(linie.enqueue(66));

Queue.prototype.dequeue = function()
{
    return this.array.shift();
};

function queueAccessNthTopNode(queue, n)
{let bufferArray = queue.getBuffer();
    
    if(n <= 0) throw 'error'
    
    let bufferQueue = new Queue(bufferArray);
    
    while(--n !== 0)
    {
        bufferQueue.dequeue();
    }
    return bufferQueue.Queue.dequeue();
};

/*****************Dictionaries************************/

/*function Dictionary()
{
    this.datastore = new Array();
};

let book = new Dictionary();

Dictionary.prototype.add = function(key, value)  //two arguments key and value, key functions as the index for the value element.
{
    this.datastore[key] = value;
};

book.add(0, "Peas");
book.add(1, "Carrots");
book.add(2, "Tomatos");
book.add(3, "Greenbeans");
book.add(4, "Potatos");

console.log(book);

Dictionary.prototype.find = function(key)  //looks for "key" in datatype and returns it.
{
    return this.datastore[key];
};

console.log(book.find(2));

Dictionary.prototype.remove = function(key) //removes given index value (key)
{
    delete this.datastore[key];
};


console.log(book.remove(2));

console.log(book);

book.add(2, "Green Beans");


Dictionary.prototype.print = function()
{
    for(let key in Object.keys(this.datastore))
    {
        console.log(`Key  ${key} equals ${this.datastore[key]}` );
    }
};

book.print();
*/
//module.export = {Stack, Dictionary};
let book = new Dictionary();

book.add(0, "Car");
book.add(1, "Bike");
console.log(book);
console.log(book.count());

let alpha = new Stack();

alpha.push("Eggs");

alpha.push("Milk");

alpha.push("Cheese");

alpha.push("Bread");

alpha.push("Meat");

alpha.push("Rice");

console.log(alpha);

console.log(alpha.clear());