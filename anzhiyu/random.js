var posts=["2024/10/04/GDC2021-设计解谜游戏的30堂课/","2024/10/03/一种工程命名的规范/","2024/10/04/一种简单玉石Shader的实现思路/","2024/10/01/hello-world/","2024/10/03/标准光照模型/","2024/10/04/渲染流水线概述/","2024/10/04/灯光的意义与构成/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };