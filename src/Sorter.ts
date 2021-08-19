class Sorter {
    // Defining the type of property collection
    collection: number[];
    // Initializing collection
    constructor(collection: number[]) {
        this.collection = collection; 
    }

    sort(): void {
        const { length } = this.collection;
    }

    /* Short option for initializing collection and defining its type
    constructor(public collection: number[]) {
        this.collection = collection; 
    } */
}