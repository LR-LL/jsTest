function Stack(){
  this.dataStore=[];
  this.top=0;
  this.pop=pop;
  this.push=push;
  this.peek=peek;
  this.length=length;
  this.clear=clear;
}
function pop(){
  return this.dataStore[--this.top];//弹出栈顶元素的同时更新栈顶元素的位置this.top
}
function push(element){
  return this.dataStore[this.top++]=element;//压入新元素之后的同时更新栈顶元素的位置
}
function peek(){
  return this.dataStore[this.top-1];//只是显示栈顶元素，并不更新栈顶元素的位置，所以没有更改栈
}
function length(){
  return this.top;
}
function clear(){
  this.top=0;
}
//////////////////////////////////////////////////////////
function mulBase(num,base){
  var s=new Stack();
  do{
    s.push(num % base);
    num=Math.floor(num/=base);
  } while(num>0);
  var converted="";
  while(s.length()>0){
    converted+=s.pop();//与字符串相加得到字符串形式
  }
  return converted;
}
var num=32;
var base=2;
var newNum=mulBase(num,base);
console.log(newNum);
