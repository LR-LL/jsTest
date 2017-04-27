function Dictionary(){
  this.dataStore=new Array();
  this.add=add;
  this.find=find;
  this.remove=remove;
  this.showAll=showAll;
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
   Object.keys(this.dataStore).forEach(function(key){console.log(key+"->"+this.dataStore[key]);},this);
}
var pBook=new Dictionary();
pBook.add("Mike","123");
pBook.add("David","345");
pBook.add("Cynthia","456");
pBook.showAll();
pBook.remove("David");
pBook.showAll();
