function HashTable(){
  this.table=new Array(137);
  this.values=[];
  this.simpleHash=simpleHash;
  this.put=put;
  this.get=get;
  this.showDistro=showDistro;
}
function simpleHash(key){
  var total=0;
  for (var i = 0; i < key.length; i++) {
    total+=key.charCodeAt(i);
  }
  return total % this.table.length;
}
function put(key,data){
  var pos=this.simpleHash(key);
  if(this.table[pos] == undefined){
    this.table[pos]=key;
    this.values[pos]=data;
  }else{
    while (this.table[pos]!=undefined) {
      pos++;
    }
    this.table[pos]=key;
    this.values[pos]=data;
  }
}
function get(key){
  var pos=this.simpleHash(key);
  if(pos>-1){
    for(var i=pos;this.table[i]!=undefined;i++){
      if(this.table[i]==key){
        return this.values[i];
      }
    }
  }
  return undefined;
}
function showDistro(){
  for(var i=0;i<this.table.length;i++){
    if(this.table[i]!=undefined){
      console.log(this.table[i]+":"+this.values[i]);
    }
  }
}
function readData(file){
  var fs=require("fs");
  var data=fs.readFileSync(file,"utf-8");
  data=data.split("\n");
  data=data.filter(function(x){return x!="";});
  for(var i=0;i<data.length;i++){
    data[i]=data[i].trim();
  }
  return data;
}
var key,data;
var hashT=new HashTable();
var wordList=readData("wordDefinition.txt");
for (var i = 0; i < wordList.length; i++) {
  key=wordList[i].split(" ")[0];
  data=wordList[i].split(" ")[1];
  hashT.put(key,data);
}
hashT.showDistro();
console.log(hashT.get("wintersweet"));
