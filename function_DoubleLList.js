function Node(element){
  this.element=element;
  this.next=null;
  this.previous=null;
}//创建节点类，初始next指向null；
function DoubleLList(){
  this.head=new Node("head");
  this.find=find;
  this.insert=insert;
  this.remove=remove;
  this.display=display;
  this.findLast=findLast;
  this.dispReverse=dispReverse;
}
function find(element){
  var currNode=this.head;
  while (currNode.element!==element) {
    currNode=currNode.next;
  }
  return currNode;
}
function insert(element,item){//在item元素后添加element;
  var newNode=new Node(element);
  var current=this.find(item);
  newNode.next=current.next;
  newNode.previous=current;
  current.next=newNode;
}
function display(){
  var currNode=this.head;
  while (currNode.next!==null) {
    console.log(currNode.next.element);
    currNode=currNode.next;
  }
}
function remove(element){
  var currNode=this.find(element);
  if(currNode.next!==null){
    currNode.previous.next=currNode.next;
    currNode.next.previous=currNode.previous;
    currNode.next=null;
    currNode.previous=null;
  }else{
    currNode.previous.next=currNode.next;
    currNode.next=null;
    currNode.previous=null;
  }
}
function findLast(){
  var currNode=this.head;
  while (currNode.next!==null) {
    currNode=currNode.next;
  }
  return currNode;
}
function dispReverse(){
  var currNode=this.findLast();
  while (currNode.previous!==null) {
    console.log(currNode.element);
    currNode=currNode.previous;
  }
}
var cities=new DoubleLList();
cities.insert("Beijing","head");
cities.insert("Shanghai","Beijing");
cities.insert("Shenzhen","Shanghai");
cities.insert("Changsha","Shenzhen");
cities.display();
cities.remove("Changsha");
cities.display();
cities.dispReverse();
