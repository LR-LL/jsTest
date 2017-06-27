function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    for (var i = 0; i < numElements; i++) {
        this.dataStore[i] = i;
    }
    this.bubbleSort=bubbleSort;
    this.selectionSort=selectionSort;
}
function setData(){
  for(var i=0;i<this.numElements;i++){
    this.dataStore[i]=Math.floor(Math.random()*(this.numElements+1));
  }
}
function clear(){
  for(var i=0;i<this.dataStore.length;i++){
    this.dataStore[i]=0;
  }
}
function insert(element){
  this.dataStore[this.pos++]=element;
}
function toString(){
  var restr='';
  for(var i=0;i<this.dataStore.length;i++){
    restr+=this.dataStore[i]+' ';
    if(i>0&i%20==0){
      restr+='\n';
    }
  }
  return restr;
}
function swap(arr,index1,index2){
  var temp=arr[index1];
  arr[index1]=arr[index2];
  arr[index2]=temp;
}
function bubbleSort(){
  var num=this.dataStore.length;
  var flag;//对冒泡排序进行优化，当没有次序变化时不再循环
  for(var outer=num;outer>=2;outer--){
    flag=0;
    for(var inner=0;inner<=num-1;inner++){
      if(this.dataStore[inner]>this.dataStore[inner+1]){
        this.swap(this.dataStore,inner,inner+1);
        flag=1;
      }
    }
    console.log(this.dataStore);
    if(flag==0){
      break;
    }
  }
}
function selectionSort(){
  var num=this.dataStore.length;
  var min;
  for(var outer=0;outer<num-1;outer++){
    min=outer;//最小值的下标
    for(var inner=outer+1;inner<num;inner++){
      if(this.dataStore[inner]<this.dataStore[min]){
        min=inner;
      }
    }
    this.swap(this.dataStore,outer,min);
    console.log(this.dataStore);
  }
}
var arr=new CArray(20);
arr.setData();
console.log(arr.dataStore);
arr.selectionSort();
console.log(arr.toString());
