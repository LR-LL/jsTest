function HashTable(){
  this.table=new Array(137);
  this.buildChains=buildChains;
  this.simpleHash=simpleHash;
  this.put=put;
  this.get=get;
  this.showDistro=showDistro;
}
function buildChains(){
  for(var i=0;i<this.table.length;i++){
    this.table[i]=new Array();
  }
}
function simpleHash(key){
  var total=0;
  for(var i=0;i<key.length;i++){
    total+=key.charCodeAt(i);
  }
  return total % this.table.length;
}
function put(key,data){
  var pos=this.simpleHash(key);
  var i=0;
  if(this.table[pos][i]==undefined){
    this.table[pos][i]=key;
    this.table[pos][i+1]=data;
  }else{
    i=i+2;
    while (this.table[pos][i]!=undefined) {
      i=i+2;
    }
    this.table[pos][i]=key;
    this.table[pos][i+1]=data;
  }
}
function get(key){
  var pos=this.simpleHash(key);
  var i=0;
  if(this.table[pos][i]==key){
    return this.table[pos][i+1];
  }else {
    i=i+2;
    while (this.table[pos][i]!=key) {
      i=i+2;
    }
    return this.table[pos][i+1];
  }
  return undefined;
}
function showDistro(){
  var j;
  for(var i=0;i<this.table.length;i++){
    j=0;
    while(this.table[i][j]!=undefined){
      console.log(this.table[i][j]+":"+this.table[i][j+1]);
      j=j+2;
    }
  }
}
function readData(file){
  var fs=require("fs");
  data=fs.readFileSync(file,"utf-8");
  data=data.split("\n");
  data=data.filter(function (x){return x!="";});
  for(var i=0;i<data.length;i++){
    data[i]=data[i].trim();
  }
  return data;
}
var hashT=new HashTable();
hashT.buildChains();
var wordList=readData("wordDefinition.txt");
for(var i=0;i<wordList.length;i++){
  key=wordList[i].split(" ")[0];
  data=wordList[i].split(" ")[1];
  hashT.put(key,data);
}
hashT.showDistro();
console.log(hashT.get("apple"));
