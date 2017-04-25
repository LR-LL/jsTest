function Node(element){
  this.element=element;
  this.next=null;
}//创建节点类，初始next指向null；
function LinkedList(){
  this.head=new Node("head");
  this.find=find;
  this.insert=insert;
  this.remove=remove;
  this.display=display;
  this.findPrevious=findPrevious;
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
  current.next=newNode;
}
function display(){
  var currNode=this.head;
  while (currNode.next!==null) {
    console.log(currNode.next.element);
    currNode=currNode.next;
  }
}
function findPrevious(element){//寻找元素为element前面的节点
  var currNode=this.head;
  while ((currNode.next.element!==element)&&(currNode.next!==null)) {
    currNode=currNode.next;
  }
  return currNode;
}
function remove(element){
  var preNode=this.findPrevious(element);
  if(preNode.next!==null){
    preNode.next=preNode.next.next;
  }
}
