class Item {

    // static is a variable for classes
    static lastId = 0;

    constructor(text) {
        this.id = Item.lastId++;
        this.text = text;
        this.done = false;
    }
}

export default Item;