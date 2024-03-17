class hashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let random_prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * random_prime + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, val) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, val]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }
    return undefined;
  }
  value() {
    let valueArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valueArr.includes(this.keyMap[i][j][1])) {
            valueArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valueArr;
  }
  keys() {
    let keyArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyArr.includes(this.keyMap[i][j][0])) {
            keyArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keyArr;
  }
}

let hash = new hashTable();

hash.set("yellow", "#FFFF00");
hash.set("red", "#FF0000");
hash.set("green", "#00FF00");
hash.set("blue", "#0000FF");
hash.set("purple", "#800080");
hash.set("purple", "#800080");
hash.set("orange", "#FFA500");
hash.set("orange", "#FFA500");
hash.set("cyan", "#00FFFF");
hash.set("magenta", "#FF00FF");
console.log(hash.keys());
