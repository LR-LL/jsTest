function monthTemps() {
    this.dataStore = [];
    this.add = add;
    this.monthMean = monthMean;
    this.aWeekMean = aWeekMean;
    this.allWeekMean = allWeekMean;
}

function add(tempsList) {
    var k, j;
    for(var m=0;m<5;m++){
      this.dataStore[m]=[];
    }
    for (var i = 0; i < tempsList.length; i++) {
        j = parseInt(i / 7);
        if(i%7===0) k=0;
        this.dataStore[j].push(tempsList[i]);
    }
}
function monthMean(){
  var sum=0,count=0;
  for(var i=0;i<this.dataStore.length;i++){
    for(var j=0;j<this.dataStore[i].length;j++){
      sum+=this.dataStore[i][j];
      count++;
    }
  }
  return sum/count;
}
function aWeekMean(week){
  var sum=0;
  for(var i=0;i<this.dataStore[week-1].length;i++){
    sum+=this.dataStore[week-1][i];
  }
  return sum/this.dataStore[week-1].length;
}
function allWeekMean(){
  var arr=[];
  for(var i=0;i<5;i++){
    arr[i]=this.aWeekMean(i+1);
  }
  console.log(arr);
}
var month1=new monthTemps();
month1.add([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);
console.log(month1.aWeekMean(2));
console.log(month1.allWeekMean());
