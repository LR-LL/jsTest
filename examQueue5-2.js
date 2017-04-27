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
function count(){
  return this.dataStore.length;
}
function Dancer(name,sex){
  this.name=name;
  this.sex=sex;
}
function getDancers(males,females){
  var fs=require('fs');
  // var names=fs.readFile("dancers.txt","utf-8").split("\n");//read函数没成功执行
  var names=fs.readFileSync("dancers.txt","utf-8");
  names=names.split("\n");
  names=names.filter(function(x){return x!=='';});
  for(var i=0;i<names.length;i++){
    names[i]=names[i].trim();
  }
  for(var j=0;j<names.length;j++){
    var dancer=names[j].split(" ");
    var sex=dancer[0];
    var name=dancer[1];
    if(sex==="F"){
      females.enqueue(new Dancer(name,sex));
    }else{
      males.enqueue(new Dancer(name,sex));
    }
  }
}
function dance(males,females){
  console.log("The dance partners are:\n");
  while (!females.empty()&&!males.empty()) {
    person=females.dequeue();
    console.log("Female dancer is:"+person.name);//console.log自带换行
    person=males.dequeue();
    console.log("and the male dancer is:"+person.name+"\n");
  }
}
var maleDancers=new Queue();
var femaleDancers=new Queue();
getDancers(maleDancers,femaleDancers);
dance(maleDancers,femaleDancers);
if(!femaleDancers.empty()){
  console.log(femaleDancers.front().name+"is waiting to dance.");
}
if(!maleDancers.empty()){
  console.log(maleDancers.front().name+"is waiting to dance.");
}
