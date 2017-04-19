function Deque(){
  this.dataStore=[];
  this.rearEnqueue=rearEnqueue;//向队尾添加一个元素
  this.frontEnqueue=frontEnqueue;
  this.rearDequeue=rearDequeue;
  this.frontDequeue=frontDequeue;//删除队首元素
  this.front=front;//读取队首元素
  this.back=back;//读取队尾元素
  this.toString=toString;//显示队列内的所有元素
  this.empty=empty;//判断队列是否为空
  this.count=count;//返回队列中元素个数；
}
function rearEnqueue(element){
  this.dataStore.push(element);//从数组末端添加元素；
}
function frontEnqueue(element){
  this.dataStore.unshift(element);//从数组前端添加元素；
}
function rearDequeue(){
  return this.dataStore.pop();//弹出数组最后一个元素
}
function frontDequeue(){
  return this.dataStore.shift();//弹出数组第一个元素
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
function count(){
  return this.dataStore.length;
}
/////////////////////////测试双向队列
var q=new Deque();
q.rearEnqueue("a");
q.rearEnqueue("b");
q.frontEnqueue("c");
console.log(q.toString());
q.rearDequeue();
console.log(q.toString());
q.frontDequeue();
console.log(q.toString());
