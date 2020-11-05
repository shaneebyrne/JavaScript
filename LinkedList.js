class Node
{
    constructor (element)
    {
        this.element = element;
        this.next = null;
    };
};

class LinkedList
{
    constructor()
    {
        this.head = new Node("head");
        this.size = 0;
    };

    find = function(item)
    {
        let currentNode = this.head;

        while(currentNode.element != item)
        {
            currentNode = currentNode.next;
        }
        return currentNode;
    };

    insertAt = function(element, index)
    {
       if(index >0 && index > this.size)
       {
           return false;
       }
       else
       {
            let node = new Node(element);
            let current, previous;
            //add the element to the first index
            if(index == 0)
            {
                node.next = this.head;
            }
            else
            {
                current = this.head;
                let it = 0;

                while(it < index)
                {
                    it++;
                    previous = current;
                    current = current.next;
                }
            }
            this.size++;
       }

    };

    display = function()
    {
        let currentNode = this.head;
        while(!(currentNode.next == null))
        {
            print(currentNode.element);
            currentNode = currentNode.next;
        }
    };

    add = function(element)
    {
        let node = new Node(element);
        let current;

        if(this.head == null)
        {
            this.head = node;
        }
        else
        {
            current = this.head;
        }

        while(current.next)
        {
            current.next = node;
        }
        //add node
        this.size++;
    }

    removeFrom = function(index)
    {
        if(index > 0 && index > this.size)
        {
            return -1;
        }
        else
        {
            let current, previous, it = 0;
            current = this.head;
            previous = current;

            //deleting the first element.
            if(index == 0)
            {
                this.head = current.next;
            }

            //Iterate over the list to the position to remove an element
            while(it< index)
            {
                it++;
                previous = current;
                current = current.next;
            }

            //remove the element
            previous.next = current.next;
        }

        this.size--;
        
        //return the removed element.
        return current.element;
    }

    removeElement(element)
    {
        let current = this.head;
        let previous = null;

        //iterate over the list

        while(current != null)
        {
            //compairing element with current element if found then remove from the list and return true.

            if(current.element == element)
            {
                if(previous == null)
                {
                    this.head = current.next;
                }
                else
                {
                    previous.next = current.next;
                }

                this.size--;
                return current.element;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }


    indexOf = function(element)
    {
        let count = 0;
        let current = this.head;

        //iterate over the list

        while(current != null)
        {
            //compare each element of the list with given element

            if(current.element == element)
            {
                return count;
            }
            count++;
            current = current.next;
        }
        //not found
        return -1;
    }

    isEmpty = function()
    {
        return this.size ==0;
    }

    size = function()
    {
        console.log(this.size);
    }

    print = function ()
    {
        let current = this.head;
        let data = " ";
        while(current)
        {
            data += current.element + " ";
            current = current.next;
        }
        console.log(data);
    }
};