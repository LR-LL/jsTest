function Node(element){
  this.element=element;
  this.next=null;
}
function CycleLinkedList(){
  this.head=new Node("head");
  this.head.next=this.head;
  this.find=find;
  this.insert=insert;
  this.display=display;
  this.findPrevious=findPrevious;
  this.remove=remove;
}
function find(element){
  var currNode=this.head;
  while (currNode.element!==element) {
    currNode=currNode.next;
  }
  return currNode;
}
function insert(element,item){
  var newNode=new Node(element);
  var currNode=this.find(item);
  newNode.next=currNode.next;
  currNode.next=newNode;
}
function display(){
  var currNode=this.head;
  while ((currNode.next!==null)&&(currNode.next.element!=="head")) {
    console.log(currNode.next.element);
    currNode=currNode.next;
  }
}
function findPrevious(element){
  var currNode=this.head;
  while ((currNode.next.element!==element)&&(currNode.next.element!=="head")) {
    currNode=currNode.next;
  }
  return currNode;
}
function remove(element){
  var preNode=this.findPrevious(element);
  preNode.next=preNode.next.next;
}
var list=new CycleLinkedList();
list.insert("a","head");
list.insert("b","a");
list.display();
list.remove("b");
list.display();
