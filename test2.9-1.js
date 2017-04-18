function studentGrades(){
  this.grades=[];
  this.add=add;
  this.gradesMean=gradesMean;
}
function add(item){
  this.grades.push(item);
}
function gradesMean(){
  var sum=0;
  for(var i=0;i<this.grades.length;i++){
    sum+=this.grades[i];
  } 
  return sum/this.grades.length;
}
var xiaoming = new studentGrades();
xiaoming.add(60);
xiaoming.add(88);
xiaoming.add(110);
console.log(xiaoming.gradesMean());
