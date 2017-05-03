function HashTable(){
  this.table=new Array(137);
  this.simpleHash=betterHash;//根据需要赋值为simpleHash还是betterHash;
  this.showDistro=showDistro;
  this.put=put;
  //this.get=get;
}
function simpleHash(key){
  var total=0;
  for(var i=0;i<key.length;i++){
    total+=key.charCodeAt(i);//将字符串键值的每个字符的ASCII值相加
  }
  return total % this.table.length;//对哈希表长度取余即为该键值散列后的值
}
function betterHash(key){
  var total=0;
  var H=37;
  for(var i=0;i<key.length;i++){
    total+=H*total+key.charCodeAt(i);
  }
  return total % this.table.length;
}
function showDistro(){
  for(var i=0;i<this.table.length;i++){
    if(this.table[i]!==undefined){//注意undefined和"undefined"，没存值应是undefined表示不存在，并不是"undefined"值；
      console.log(i+": "+this.table[i]);
    }
  }
}
function put(data){
  var pos=this.simpleHash(data);
  this.table[pos]=data;
}

var someNames=["David","Jennifer","Donnie","Raymond","Cynthia","Mike","Clayton","Danny","Jonathan"];
var hashT=new HashTable();
for(var i=0;i<someNames.length;i++){
  hashT.put(someNames[i]);
}
hashT.showDistro();
