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
//////////////////////////
function checkParenthesis(expression){
  var s=new Stack();
  var o={key:"",index:0};
  for(var i=0;i<expression.length;i++){
    if(expression[i]==="("){
      o={key:expression[i],index:i};
      s.push(o);
    }else if(expression[i]===")"){
      if(s.length()>0){
        s.pop();
      }else {
        return i;
      }
    }
  }
  if(s.length()>0){
    return s.pop()["index"];
  }else {
    return true;
  }
}
console.log(checkParenthesis("2.3+23/12+(3.14159*0.24))"));
