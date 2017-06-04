function Graph(vNum){
  this.vertexes=vNum;
  this.edges=0;//表示总边数
  this.adj=[];//数组下标即可表示顶点
  for (var i = 0; i < this.vertexes; i++) {
    this.adj[i]=[];//创建二维数组，存储每个顶点的相邻顶点
    this.adj[i].push('');//将相邻顶点初始化为字符串
  }
  this.marked=[];
  for(var j=0;j<this.vertexes;j++){
    this.marked[j]=false;
  }
  this.addEdge=addEdge;
  this.showGraph=showGraph;
  this.dfs=dfs;
  this.bfs=bfs;
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
  function dfs(v){
    this.marked[v]=true;
    if (this.adj[v]!=undefined) {
      console.log('vistited vertex: '+v);
    }
    for(var w in this.adj[v]){
      if (!this.marked[this.adj[v][w]]) {
        this.dfs(this.adj[v][w]);
      }
    }
  }
  function bfs(v){
    var q=[];
    var present;
    this.marked[v]=true;
    q.push(v);
    while (q.length>0) {
      present=q.shift();
      if (this.adj[present]!=undefined) {
        console.log('visited vertex: '+present);
      }
      for (var i=0;i<this.adj[present].length;i++) {//访问相邻点
        if (this.marked[this.adj[present][i]]==false) {//判断相邻点是否被访问过
          this.marked[this.adj[present][i]]=true;//标记后入栈
          q.push(this.adj[present][i]);//如果未被访问过则添加到访问列表
        }
      }
    }
  }
  var g=new Graph(5);
  g.addEdge(0,1);
  g.addEdge(0,2);
  g.addEdge(1,3);
  g.addEdge(2,4);
  g.showGraph();
  g.bfs(0);//从顶点0开始深度搜索；
