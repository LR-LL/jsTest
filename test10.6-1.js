function node(data, left, right) {
    this.data = data;
    this.count=1;
    this.left = left;
    this.right = right;
    this.show = show;
}

function BST() {
    this.root = null;
    this.count=0;
    this.edge=this.count-1;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove=remove;
    this.updata=updata;
    this.countNode=countNode;
    this.countEdge=countEdge;
}

function show() {
    return this.data;
}

function insert(data) {
    var newNode = new node(data, null, null);
    if (this.root == null) {
        this.root = newNode;
        this.count++;//插入后更新节点个数
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = newNode;
                    this.count++;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = newNode;
                    this.count++;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + ' ');
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show() + ' ');
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + ' ');
    }
}

function getMin() {
    var current = this.root;
    while (current.left != null) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root;
    while (current.right != null) {
        current = current.right;
    }
    return current.data;
}

function find(data) {
    var current = this.root;
    while (current) {
        if (data < current.data) {
            current = current.left;
        } else if (data > current.data) {
            current = current.right;
        } else {
            return current; //找到了返回true
        }
    }
    return null; //没找到返回false
}
function remove(data){
  this.root=removeNode(this.root,data);
  this.count--;//删除后更新节点个数
}
function removeNode(node,data){
  if (node==null) {
    return null;
  }
  if (data==node.data) {
    if (node.left==null&&node.right==null) {
      return null;
    }
    if (node.left==null) {
      return node.right;
    }
    if (node.right==null) {
      return node.left;
    }
    var tempNode=getSmallest(node.right);
    node.data=tempNode.data;
    node.right=removeNode(node.right,tempNode.data);
    return node;
  }
  else if (data<node.data) {
    node.left=removeNode(node.left,data);
    return node;
  }
  else {
    node.right=removeNode(node.right,data);
    return node;
  }
}
function getSmallest(node){
  var current = node;
  while (current.left != null) {
      current = current.left;
  }
  return current;
}
function updata(data){
  var node=this.find(data);
  node.count++;
  return node;
}
//产生随机成绩
function genArray(length){
  var arr=[];
  for (var i = 0; i < length; i++) {
    arr[i]=Math.floor(Math.random()*101);
  }
  return arr;
}
//改进insert函数和remove函数实现计算节点数量和边数量的方法
function countNode(){
  return this.count;
}
//返回边的个数的方法；
function countEdge(){
  if (this.count==0||this.count==1) {
    return 0;
  }
  return this.count-1;
}
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.remove(16);
console.log(nums.countNode());
console.log(nums.countEdge());
