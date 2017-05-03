function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
    this.buildChains = buildChains;
}

function simpleHash(key) {
    var total = 0;
    for (var i = 0; i < key.length; i++) {
        total += key.charCodeAt(i); //将字符串键值的每个字符的ASCII值相加
    }
    return total % this.table.length; //对哈希表长度取余即为该键值散列后的值
}

function betterHash(key) {
    var total = 0;
    var H = 37;
    for (var i = 0; i < key.length; i++) {
        total += H * total + key.charCodeAt(i);
    }
    return total % this.table.length;
}

function showDistro() {
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i][0] !== undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

function put(key) {
    var pos = this.simpleHash(key);
    var index = 0;
    if (this.table[pos][0] == undefined) {
        this.table[pos][index] = key;
    } else {
        while (this.table[pos][index] !== undefined) {
            ++index;
        }
        this.table[pos][index] = key;
    }
}

function buildChains() {
    for (var i = 0; i < this.table.length; i++) {
        this.table[i] = new Array();
    }
}

function get(key) {
    var pos = this.simpleHash(key);
    var index = 0;
    if (this.table[pos][index] == key) {
        return this.table[pos][index];
    } else {

        while (this.table[pos][index] !== key) {
            index++;
        }
        return this.table[pos][index];
    }
    return undefined;
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hashT = new HashTable();
hashT.buildChains();
for (var i = 0; i < someNames.length; i++) {
    hashT.put(someNames[i]);
}
var s = "";
console.log(s + hashT.get(someNames[2]));
hashT.showDistro();
