import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(10);
linkedList.add(-2);
linkedList.add(-4);
linkedList.sort();
linkedList.print();

const charsCollection = new CharactersCollection('XoXoGQj');
charsCollection.sort();
console.log(charsCollection.data);

const numsCollection = new NumbersCollection([100, -4, 66, 5]);
numsCollection.sort();
console.log(numsCollection.data);