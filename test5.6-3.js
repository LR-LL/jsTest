function Queue(){
  this.dataStore=[];
  this.enqueue=enqueue;//向队尾添加一个元素
  this.dequeue=dequeue;//删除队首元素
  this.front=front;//读取队首元素
  this.back=back;//读取队尾元素
  this.toString=toString;//显示队列内的所有元素
  this.empty=empty;//判断队列是否为空
  this.count=count;//返回队列中元素个数；
}
function enqueue(element){
  this.dataStore.push(element);
}
function front(){
  return this.dataStore[0];
}
function back(){
  return this.dataStore[this.dataStore.length-1];
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
//////////////////////////////////////优先队列，医院急诊科
function Patient(name,code){
  this.name=name;
  this.code=code;
}
function dequeue(){
  var entry=0;
  for(var i=1;i<this.dataStore.length;i++){
    if(this.dataStore[i].code>this.dataStore[entry].code){
      entry=i;
    }
  }
  return this.dataStore.splice(entry,1);//返回的是一个包含一个元素的数组；
}
function toString(){
  var retStr="";
  for(var i=0;i<this.dataStore.length;i++){
    retStr+=this.dataStore[i].name+" code:"+this.dataStore[i].code+"\n";
  }
  return retStr;
}
var p=new Patient("a",5);
var q=new Queue();
q.enqueue(p);
p=new Patient("b",4);
q.enqueue(p);
console.log("Patient being treated:");
console.log(q.dequeue()[0].name);//返回的是一个包含一个元素的数组,所以要加索引
console.log("Patient waiting to be seen:");
console.log(q.toString());
