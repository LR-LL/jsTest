var fs=require('fs');
var names=fs.readFileSync("dancers.txt","utf-8");
names=names.split("\n");//读完之后分离之后末尾会多个空字符串元素，所以进行过滤；且每个数组元素末尾多个空格
names=names.filter(function(x){return x!=='';});//filter函数不改变原来数组，需保存返回的新数组；
console.log(names);
for(var i=0;i<names.length;i++){
  names[i]=names[i].trim();
}
console.log(names);
for(var j=0;j<names.length;j++){
  console.log(names[j]);
}
