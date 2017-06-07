function Graph(vNum){
  this.vertexes=vNum;
  this.vertexList=[];
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
  this.edgeTo=[];//本节算法只能用于只有一条路径的图中寻找某节点
  this.addEdge=addEdge;
  this.showGraph=showGraph;
  this.dfs=dfs;
  this.bfs=bfs;
  this.pathTo=pathTo;
  this.hasPathTo=hasPathTo;
  this.topSort=topSort;
  this.topSortHelper=topSortHelper;
}
  function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }
  // function showGraph(){
  //   var s='';
  //   for(var i=0;i<this.vertexes;i++){
  //     s='';
  //     for(var j=0;j<this.adj[i].length;j++){
  //       s+=this.adj[i][j]+' ';
  //     }
  //     console.log(i+' ->'+s);
  //   }
  // }
  function showGraph(){
    var s='';
    for(var i=0;i<this.vertexes;i++){
      s='';
      for(var j=0;j<this.adj[i].length;j++){
        if (this.adj[i][j]!=undefined&&this.vertexList[this.adj[i][j]]!=undefined) {
          s+=this.vertexList[this.adj[i][j]]+' ';
        }

      }
      console.log(this.vertexList[i]+' ->'+s);
    }
  }
  function dfs(v){
    this.marked[v]=true;
    if (this.adj[v]!=undefined) {
      console.log('visited vertex: '+v);
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
          this.edgeTo[this.adj[present][i]]=present;
          this.marked[this.adj[present][i]]=true;//标记后入栈
          q.push(this.adj[present][i]);//如果未被访问过则添加到访问列表
        }
      }
    }
  }
  function pathTo(v){
    var source=0;
    if (!this.hasPathTo(v)) {//先判断是否能被搜到，搜不到说明不在图中
      return undefined;
    }
    var path=[];
    for(var i=v;i!=source;i=this.edgeTo[i]){
      path.push(i);
    }
    path.push(source);
    return path;
  }
  function hasPathTo(v){
    return this.marked[v];
  }
  function topSort(){
    var stack=[];
    var visited=[];
    for(var i=0;i<this.vertexes;i++){
      visited[i]=false;
    }
    for(var i=0;i<this.vertexes;i++){
      if (visited[i]==false) {
        this.topSortHelper(i,visited,stack);
      }
    }
    for(var i=0;i<stack.length;i++){
      if (stack[i]!=undefined&&stack[i]!=false) {
        console.log(this.vertexList[stack[i]]);
      }
    }
  }
  function topSortHelper(v,visited,stack){
    visited[v]=true;
    for(var i in this.adj[v]){
      if (!visited[this.adj[v][i]]) {
        this.topSortHelper(visited[this.adj[v][i]],visited,stack);
      }
    }
    stack.push(v);
  }
var g=new Graph(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.vertexList=['CS1','CS2','Data Structures','Assembly Language','Oprating Systems','Algorithms'];
g.showGraph();
g.topSort();
