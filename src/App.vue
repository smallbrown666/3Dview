<template>
  <div id="app">
    <div class="header">
      <ul>
        <!-- <li><a href="javaScrpt:;"></a></li> -->
         <li><a href="javaScript:;"> Home </a></li>
        <li><a href="javaScript:;"> 登陆 </a></li>
        <li><a href="javaScript:;"> 注册 </a></li>
        <li><a href="javaScript:;"> 用户 </a></li>
      </ul>
    </div>
    <div class="main">
       <router-view></router-view>
      <!-- 因为这里设置了路由出口 home组件的路由自动匹配到了这里 -->
    </div>
  </div>
</template>

<style lang="less">
  .header{
      height: 60px;
      background-color: #151c31;
      box-shadow: 0 1px 2px #999;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      ul{
        display: flex;
        color: #57697e;
        li{
          width: 60px;
          height: 26px;
          line-height: 26px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.3);
          margin-right: 16px;
        }
      }
    }
</style>
<script>
    //引入CSS公共样式
    import '@/assets/css/public.css'
    //在组件中  如果写了JS代码 则必须将组件给暴露出去
    export default{
      name:'App'
    }
</script>
