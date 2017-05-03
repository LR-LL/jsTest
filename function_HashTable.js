function HashTable(){
  this.table=new Array(137);
  this.simpleHash=simpleHash;
  this.showDistro=showDistro;
  this.put=put;
  this.get=get;
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
    if(this.table[i]!==undefined){
      console.log(i+": "+this.table[i]);
    }
  }
}
function put(data){
  var pos=this.simpleHash(data);
  this.table[pos]=data;
}
function get(key){
  return this.table[this.simpleHash(key)];
}
