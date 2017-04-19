function Queue(){
  this.dataStore=[];
  this.enqueue=enqueue;//向队尾添加一个元素
  this.dequeue=dequeue;//删除队首元素并返回该元素
  this.front=front;//读取队首元素
  this.back=back;//读取队尾元素
  this.toString=toString;//显示队列内的所有元素
  this.empty=empty;//判断队列是否为空
}
function enqueue(element){
  this.dataStore.push(element);
}
function dequeue(){
  return this.dataStore.shift();
}
function front(){
  return this.dataStore[0];
}
function back(){
  return this.dataStore[this.dataStore.length-1];
}
function toString(){
  var str="";
  for(var i=0;i<this.dataStore.length;i++){
    str+=this.dataStore[i]+"\n";
  }
  return str;
}
function empty(){
  if(this.dataStore.length===0){
    return true;
  }else{
    return false;
  }
}
//////////////////
var q=new Queue();
q.enqueue("Mary");
q.enqueue("Bob");
q.enqueue("Alice");
console.log(q.toString());
console.log(q.dequeue());
console.log(q.front());
console.log(q.back());
q.dequeue();
q.dequeue();
console.log(q.empty());
