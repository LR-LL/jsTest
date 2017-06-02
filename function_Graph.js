//第一步，创建一个顶点类来保存顶点和边，类似于链表和二叉树的node类。但是在介绍图后面的内容中并未用到，因为采用边表示方法
function Vertex(label,wasVisited){
  this.label=label;
  this.wasVisited=wasVisited;
}
function Graph(vNum){
  this.vertexes=vNum;
  this.edges=0;//表示总边数
  this.adj=[];//数组下标即可表示顶点
  for (var i = 0; i < this.vertexes; i++) {
    this.adj[i]=[];//创建二维数组，存储每个顶点的相邻顶点
    this.adj[i].push('');//将相邻顶点初始化为字符串
  }
  this.addEdge=addEdge;
  this.showGraph=showGraph;
}
  function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }
  function showGraph(){
    var s='';
    for(var i=0;i<this.vertexes;i++){
      s='';
      for(var j=0;j<this.adj[i].length;j++){
        s+=this.adj[i][j]
      }
      console.log(i+'->'+s);
    }
  }
