function HashTable(){
  this.table=new Array(137);//存储散列后的键；
  this.values=[];//存储键的对应值
  this.simpleHash=simpleHash;
  this.showDistro=showDistro;
  this.put=put;
  this.get=get;
}
function simpleHash(key){
  key=""+key;//将数字键值转化为字符串形式；不然charCodeAt函数无作用
  var total=0;
  for(var i=0;i<key.length;i++){
    total+=key.charCodeAt(i);//将字符串键值的每个字符的ASCII值相加
  }
  totoal=total % this.table.length;
  return total;//对哈希表长度取余即为该键值散列后的值
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
    if(this.table[i]!==undefined){
      console.log(i+": "+this.table[i]+" "+this.values[i]);
    }
  }
}
function put(key,data){
  var pos=this.simpleHash(key);
  if(this.table[pos]==undefined){
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
  var hash=-1;
  hash=this.simpleHash(key);
  if(hash>-1){
    for (var i = hash; this.table[hash]!=undefined; i++) {
      if(this.table[i]==key){
        return this.values[i];
      }
    }
  }
  return undefined;
}
var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hashT = new HashTable();
for (var i = 0; i < someNames.length; i++) {
    hashT.put(i,someNames[i]);
}
hashT.showDistro();
console.log(hashT.get(2));
