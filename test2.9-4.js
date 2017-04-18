function alphaList(){
  this.alphas=[];
  this.add=add;
  this.alphaFormWord=alphaFormWord;
}
function add(item){
  this.alphas.push(item);
}
function alphaFormWord(){
  console.log(this.alphas.join(""));
}
var alphaList1=new alphaList();
alphaList1.add('j');
alphaList1.add('s');
alphaList1.alphaFormWord();
