function Dictionary(){
  this.dataStore=new Array();
  this.add=add;
  this.find=find;
  this.remove=remove;
  this.showAll=showAll;
  this.count=count;
  this.clear=clear;
}
function add(key,value){
  this.dataStore[key]=value;
}
function find(key){
  return this.dataStore[key];
}
function remove(key){
  delete this.dataStore[key];
}
function showAll(){
   Object.keys(this.dataStore).sort().forEach(function(key){console.log(key+"->"+this.dataStore[key]);},this);
}
function count(){
  var n=0;
  for(var key in Object.keys(this.dataStore)){
    ++n;
  }
  return n;
}
function clear(){
  Object.keys(this.dataStore).forEach(function(key){delete this.dataStore[key];},this);
}
var pBook=new Dictionary();
pBook.add("Mike","123");
pBook.add("David","345");
pBook.add("Cynthia","456");
pBook.showAll();
console.log(pBook.count());
pBook.remove("David");
pBook.showAll();
console.log(pBook.count());
pBook.clear();
console.log(pBook.count());
