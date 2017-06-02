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
        s+=this.adj[i][j]+' ';
      }
      console.log(i+' ->'+s);
    }
  }
  var g=new Graph(5);
  g.addEdge(0,1);
  g.addEdge(0,2);
  g.addEdge(1,3);
  g.addEdge(2,4);
  g.showGraph();
