class Stack
{
    constructor()
    {
        this.dataStore = [];
        this.top = 0;
    }

    push = function(value)
    {
        this.dataStore.push[this.top++] = value;
    }

    pop = function()
    {
        this.dataStore[--this.top];
    }

    length = function()
    {
        return this.top;
    }

    clear = function()
    {
        this.top = 0;
    }
}




