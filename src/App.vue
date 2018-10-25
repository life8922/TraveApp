<template>
  <div id="app">
  <!--路由插槽-->
  <keep-alive exclude="Detail">
     <!--vue自带的标签 路由的内容被加载一次 会缓存 下一次再进入会从内存里调数据-->
      <router-view/>
    </keep-alive>
  </div>
</template>


