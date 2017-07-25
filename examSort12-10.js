function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  this.gaps = [5, 3, 1]
  for (var i = 0; i < numElements; i++) {
    this.dataStore[i] = i;
  }
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
  this.insertionSort = insertionSort;
  this.shellSort = shellSort;
}

function setData() {
  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
  }
}

function clear() {
  for (var i = 0; i < this.dataStore.length; i++) {
    this.dataStore[i] = 0;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var restr = '';
  for (var i = 0; i < this.dataStore.length; i++) {
    restr += this.dataStore[i] + ' ';
    if (i > 0 & i % 20 == 0) {
      restr += '\n';
    }
  }
  return restr;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort() {
  var num = this.dataStore.length;
  var flag; //对冒泡排序进行优化，当没有次序变化时不再循环
  for (var outer = num; outer >= 2; outer--) {
    flag = 0;
    for (var inner = 0; inner <= num - 1; inner++) {
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {
        this.swap(this.dataStore, inner, inner + 1);
        flag = 1;
      }
    }
    console.log(this.dataStore);
    if (flag == 0) {
      break;
    }
  }
}

function selectionSort() {
  var num = this.dataStore.length;
  var min;
  for (var outer = 0; outer < num - 1; outer++) {
    min = outer; //最小值的下标
    for (var inner = outer + 1; inner < num; inner++) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner;
      }
    }
    this.swap(this.dataStore, outer, min);
    console.log(this.dataStore);
  }
}

function insertionSort() {
  var temp, inner;
  for (var outer = 1; outer <= this.dataStore.length - 1; outer++) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner > 0 && (this.dataStore[inner - 1] > temp)) {
      this.dataStore[inner] = this.dataStore[inner - 1];
      inner--;
    }
    this.dataStore[inner] = temp;
    console.log(this.dataStore);
  }
}

function shellSort() {
  for (var g = 0; g < this.gaps.length; g++) {
    for (var i = this.gaps[g]; i < this.dataStore.length; i++) {
      var temp = this.dataStore[i];
      for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
        this.dataStore[j] = this.dataStore[j - this.gaps[g]];
      }
      this.dataStore[j] = temp;
    }
  }
}
var arr = new CArray(20);
arr.setData();
console.log(arr.dataStore);
arr.shellSort();
console.log(arr.toString());
