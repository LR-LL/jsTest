function Dictionary(){
  this.dataStore=new Array();
  this.add=add;
  this.find=find;
  this.remove=remove;
  this.showAll=showAll;
  this.showAllSorted=showAllSorted;
  this.show=show;
  this.getDataToArray=getDataToArray;
  this.clear=clear;
}
function add(key,value){
  this.dataStore[key]=value;
}
function find(key){
  return this.dataStore[key];
}
function remove(key){
  delete this.dataStore[key];
}
function show(key){
  console.log(key+"->"+this.dataStore[key]);
}
function showAll(){
   Object.keys(this.dataStore).forEach(function(key){console.log(key+": "+this.dataStore[key]);},this);
}
function showAllSorted(){
  var sortedKeys=Object.keys(this.dataStore).sort();
   sortedKeys.forEach(function(key){console.log(key+": "+this.dataStore[key]);},this);
}
function clear(){
  Object.keys(this.dataStore).forEach(function(key){
    delete this.dataStore[key];
  },this);
}
function getDataToArray(file){
  var fs=require('fs');
  var numbers=fs.readFileSync(file,"utf-8");
  numbers=numbers.split("\n");//根据换行符分离成数组，每个元素后会多个空格，且数组末尾多个空字符串；
  numbers=numbers.filter(function(x){return x!=='';});
  for(var i=0;i<numbers.length;i++){
    numbers[i]=numbers[i].trim();
  }
  return numbers;
}
function showWordFreq(file){
  var d=new Dictionary();
  var data=d.getDataToArray("EnglishText.txt").join(" ").split(" ");
  //通过getDataToArray函数得到以换行符分离了的数组，需要得到一个单词间只有空格符的字符串
  //，然后以空格分离该字符串得到以单个单词为元素的数组
  var filterData=[];
  var j=0;
  for(var i in data){//i is string
    if(data.indexOf(data[i])==i){//data.indexOf(data[i]) is number, so use"=="
      filterData[j++]=data[i];
    }
  }
  for(var k=0;k<filterData.length;k++){
    var count=0;
    for(var m in data){
      if(data[m]===filterData[k]){
        count++;
      }
    }
    d.add(filterData[k],count);
  }
  d.showAllSorted();
}
showWordFreq("EnglishText.txt");
