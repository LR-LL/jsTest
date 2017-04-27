function Dictionary(){
  this.dataStore=new Array();
  this.add=add;
  this.find=find;
  this.remove=remove;
  this.showAll=showAll;
  this.show=show;
  this.getDataToArray=getDataToArray;
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
function show(key){
  console.log(key+"->"+this.dataStore[key]);
}
function showAll(){
   Object.keys(this.dataStore).forEach(function(key){console.log(key+"->"+this.dataStore[key]);},this);
}
function clear(){
  Object.keys(this.dataStore).forEach(function(key){
    delete this.dataStore[key];
  },this);
}
function getDataToArray(file){
  var fs=require('fs');
  var numbers=fs.readFileSync(file,"utf-8");
  numbers=numbers.split("\n");//根据换行符分离成数组，每个元素后会多个空格，且数组末尾多个空字符串；
  numbers=numbers.filter(function(x){return x!=='';});//将数组末尾的空字符串过滤掉
  for(var i=0;i<numbers.length;i++){
    numbers[i]=numbers[i].trim();
  }//将数组每个元素末尾的空格过滤掉
  return numbers;
}
var dictionary=new Dictionary();
var numbers=dictionary.getDataToArray("phoneNumber.txt");
for(var i=0;i<numbers.length;i++){
  var aNumber=numbers[i].split(" ");
  dictionary.add(aNumber[0],aNumber[1]);
}
dictionary.showAll();
dictionary.clear();
dictionary.showAll();
