function node(data, left, right) {
    this.data = data;
    this.count=1;
    this.left = left;
    this.right = right;
    this.show = show;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove=remove;
    this.updata=updata;
}

function show() {
    return this.data;
}

function insert(data) {
    var newNode = new node(data, null, null);
    if (this.root == null) {
        this.root = newNode;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = newNode;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = newNode;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show()+': '+node.count);
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
var fs=require('fs');
var words=fs.readFileSync('EnglishText.txt','utf-8');
words=words.split('\n');
words=words.filter(function(x){return x!=='';});
var newWords=[];
for(var i=0;i<words.length;i++){
  newWords=newWords.concat(words[i].trim().split(' '));//trim是字符串的方法，记住
}
var wordsBST=new BST();
for(var i=0;i<newWords.length;i++){
  var word=wordsBST.find(newWords[i]);
  if (word==null) {
    wordsBST.insert(newWords[i]);
  }else {
    wordsBST.updata(newWords[i]);
  }
}
wordsBST.inOrder(wordsBST.root);
