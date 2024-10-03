var posts=["2024/10/01/hello-world/","2024/10/04/渲染流水线概述/","2024/10/03/一种工程命名的规范/","2024/10/03/标准光照模型/","2024/10/04/灯光的意义与构成/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };