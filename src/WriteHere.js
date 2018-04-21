import LinkedListFunction from './actions/LinkedListFunction'
const newList = new LinkedListFunction()


// Write your operations on the list here - beginning
newList.add('Kitten')
newList.add('Dog')
newList.add('Cow')
newList.add('Bull')
newList.add('Dinosaur')
console.log(newList.size())
// Write your operations on the list here - end

/*
Available functions:
newList.add('') // to add a new item
newList.removeAt(index) // to remove an item with index
newList.addAt(index, element) // to add element at a particular index
newList.elementAt(index) // to get element at an index
newList.indexOf(element) // to get the index of element
newList.isEmpty() // to check if list is empty - boolean
newList.remove(element) // to remove an element from value
newList.head() // to get the head element
newList.size() // to get the size of the list
*/


export default newList