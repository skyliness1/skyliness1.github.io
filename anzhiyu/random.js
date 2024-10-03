var posts=["2024/10/01/hello-world/","2024/10/03/标准光照模型/","2024/10/03/渲染流水线概述/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };