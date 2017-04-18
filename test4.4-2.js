function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.pop = pop;
    this.push = push;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function pop() {
    return this.dataStore[--this.top]; //弹出栈顶元素的同时更新栈顶元素的位置this.top
}

function push(element) {
    return this.dataStore[this.top++] = element; //压入新元素之后的同时更新栈顶元素的位置
}

function peek() {
    return this.dataStore[this.top - 1]; //只是显示栈顶元素，并不更新栈顶元素的位置，所以没有更改栈
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}
///////////////////////////////////
function convertToSuffix(expression) {
    var ops = new Stack();
    var oprators = new Stack();
    var convert = "";
    var expSplit = expression.split(/[\s]/);//输入表达式需数值符号间用空格分开
    for (var i = 0; i < expSplit.length; i++) {
        if (!isNaN(expSplit[i])) {
            //ops.push(expSplit[i]);
            convert += expSplit[i]+" ";//将数值直接输出
        } else {
            if (oprators.length() === 0 || expSplit[i] === "(") {
                oprators.push(expSplit[i]);//若栈为空或者是左括号直接入栈；
            } else {
                if (expSplit[i] === "+" || expSplit[i] === "-") {//若是加减号
                    while (oprators.length() > 0) {
                        if (oprators.peek() === "(") {
                            oprators.push(expSplit[i]);
                            break;
                        } else if (oprators.peek() === "+" || oprators.peek() === "-" || oprators.peek() === "*" || oprators.peek() === "/") {
                            convert += oprators.pop()+" ";
                        }
                    }//，遍历栈，如果栈顶是左括号直接入栈，如果是其他将栈内元素一一弹出并输出；
                    if(oprators.length()===0){
                      oprators.push(expSplit[i]);
                    }//弹栈完成后将元素压入栈
                }
                if (expSplit[i] === "*" || expSplit[i] === "/") {//若是乘除号，
                    while (oprators.length() > 0) {
                        if (oprators.peek() === "(" || oprators.peek() === "+" || oprators.peek() === "-") {
                            oprators.push(expSplit[i]);
                            break;
                        } else if (oprators.peek() === "*" || oprators.peek() === "/") {
                            convert += oprators.pop()+" ";
                        }
                    }//遍历栈，遇到栈顶元素为左括号或者加减号(因为这些的优先级比自身低)直接入栈，若遇到栈顶元素为同级的则弹出并输出；
                    if(oprators.length()===0){
                      oprators.push(expSplit[i]);
                    }//若栈内元素全部被输出，则将元素压入栈
                }
                if (expSplit[i] === ")") {//若为右括号
                    while (oprators.peek() !== "(") {
                        convert += oprators.pop()+" ";
                    }//遍历栈，弹出元素并输出，直到栈顶元素为左括号停止
                    oprators.pop(); //弹出左括号但不赋值
                }
            }
        }
    }
    while (oprators.length()>0) {
      convert+=oprators.pop()+" ";
    }//表达式完成后，若栈内还有符号元素则一一弹出并输出
    //return convert;//这里可验证中缀表达式转后缀表达式结果；
    //接下来是计算所得后缀表达式convert的数值结果
    var suffixExp=convert.split(/[\s]/);//最后会多个空格元素
    var op1,op2,op;
    for(var j=0;j<suffixExp.length-1;j++){//所以这里遍历到长度-1
      if(!isNaN(suffixExp[j])){
        ops.push(suffixExp[j]);
      }else {
        if(suffixExp[j]==="+"){
          op1=Number(ops.pop());//符号“+”会导致和符号相加而连接并不计算，所以需要转换为数字，但是其他运算符不会；
          op2=Number(ops.pop());
          op=op2+op1;
          ops.push(op);
        }else if(suffixExp[j]==="-"){
          op1=ops.pop();
          op2=ops.pop();
          op=op2-op1;
          ops.push(op);
        }else if(suffixExp[j]==="*"){
          op1=ops.pop();
          op2=ops.pop();
          op=op2*op1;
          ops.push(op);
        }else if(suffixExp[j]==="/"){
          op1=ops.pop();
          op2=ops.pop();
          op=op2/op1;
          ops.push(op);
        }
      }
    }
    return ops.pop();
}
var str="2.3 + 23 / 12 + ( 3.14 * 0.24 )";
var str2="9 + ( 3 - 1 ) * 3 + 10 / 2";
console.log(convertToSuffix(str2));
