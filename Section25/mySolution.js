class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hashedKey = this._hash(key);

    if (!this.keyMap[hashedKey]) {
      this.keyMap[hashedKey] = [];
    }

    this.keyMap[hashedKey].push([key, value]);
  }

  get(key) {
    const hashedKey = this._hash(key);
    if (!this.keyMap[hashedKey]) return undefined;

    const chainedArray = this.keyMap[hashedKey];
    const found = chainedArray.find(([mapKey]) => mapKey === key);

    return found ? found[1] : undefined;
  }
}

const hashTable = new HashTable(4);
hashTable.set("hello world", "bye");
hashTable.set("dogs", "are");
hashTable.set("dozs", "are");
hashTable.set("cats", "asd");
hashTable.set("hasd", "asdas");

console.log(hashTable.keyMap);
console.log(hashTable.get("asdas"));
