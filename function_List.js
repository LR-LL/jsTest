function List(){
  this.listSize=0;
  this.pos=0;
  this.dataStore=[];
  this.clear=clear;
  this.find=find;
  this.toString=toString;
  this.insert=insert;
  this.append=append;
  this.remove=remove;
  this.front=front;
  this.end=end;
  this.prev=prev;
  this.next=next;
  this.hasNext=hasNext;
  this.hasPrev=hasPrev;
  this.length=length;
  this.currPos=currPos;
  this.moveTo=moveTo;
  this.getElement=getElement;
  this.contains=contains;
}
function clear(){
  delete this.dataStore;
  this.dataStore.length=0;
  this.listSize=0;
  this.pos=0;
}
function find(element){
  for(var i=0;i<this.dataStore.length;i++){
    if(this.dataStore[i]===element){
      return i;
    }
  }
  return -1;
}
function toString(){
  return this.dataStore;//返回了一个数组;
}
function insert(element,after){
  var inserPos=this.find(after);//找到被插入元素位置的前一个元素位置
  if(insertPos>-1){
    this.dataStore.splice(inserPos+1,0,element);
    ++this.listSize;//插入完成后，更新列表长度；
    return true;
  }
  return false;
}
function append(element){
  this.dataStore[this.listSize++]=element;
}
function remove(element){
  var elementPos=this.find(element);//找到要删除元素的位置
  if(elementPos>-1){
    this.dataStore.splice(elementPos,1);
    --this.listSize;//删除完成后更新列表长度
    return true;
  }
  return false;
}
function front(){
  this.pos=0;//移动当前位置到列表首位
}
function end(){
  this.pos=this.listSize-1;//移动当前位置到列表末尾
}
function prev(){
  if(this.pos>=0){
    this.pos=this.pos-1;//往前移一位；
  }
}
function next(){
  if(this.pos<this.listSize){
    this.pos=this.pos+1;//往后移一位
  }
}
function hasNext(){
  return this.pos<this.listSize;
}
function hasPrev(){
  return this.pos>=0;
}
function length(){
  return this.listSize;
}
function currPos(){
  return this.pos;
}
function moveTo(position){
  this.pos=position;
}
function getElement(){
  return this.dataStore[this.pos];
}
function contains(element){
  if(this.find(element)>-1){
    return true;
  }else{
    return false;
  }
}
