const arr = ['dog', 'cat', 'puppy', 'cockroach'];

const plural = arr.map(x => x + 's');

console.log(plural)

const randNumb = Math.random() * (6 - 1) + 1;
class Die {
    constructor () {
        this.value = Math.round(randNumb);
        }
    }

var newDie = new Die()
console.log(newDie.value)

const friends = ['mike', 'bill', 'ted', 'emma', 'dan', 'frank', 'ben', 'bob', 'jeff', 'tony']
let x = 0;
const list = document.getElementById('list')

document.getElementById('btn').addEventListener('click', function() {
    const friends = ['mike', 'bill', 'ted', 'emma', 'dan', 'frank', 'ben', 'bob', 'jeff', 'tony']
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(friends[x]));
    list.appendChild(entry);
    x = x + 1;
});
