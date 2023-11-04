const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2
console.log(map1)
const map12 = new Map();

map12.set('0', 'foo');
map12.set(1, 'bar');

const iterator1 = map12.values();
console.log(iterator1);