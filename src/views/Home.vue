<template>
  <div class="index">
    <div class="side">
      <ul>
        <li><router-link :to="{name:'index'}">首页</router-link></li>
        <li><router-link :to="{name:'sun'}"> 日出日落</router-link></li>
         <li><router-link :to="{name:'line'}"> 折线图</router-link></li>
         <li><router-link :to="{name:'pie'}"> 饼状图</router-link></li>
          <li><router-link :to='{name:"RichText"}'>富文本</router-link></li>
          <li><router-link :to='{name:"Suburst"}'>旭日图</router-link></li>
          <li><router-link :to='{name:"PictorialBar"}'>象形柱图</router-link></li>
          <li><router-link :to='{name:"Gauge"}'>仪表盘</router-link></li>
          <li><router-link :to='{name:"City3d"}'>3D城市</router-link></li>
           <li><router-link :to='{name:"Globe3d"}'>3D地球</router-link></li>
            <li><router-link :to='{name:"Music"}'>跳动音频</router-link></li>

      </ul>
    </div>
    <div class="content">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
<style lang='less'>


  .index{
    display: flex;
    height:100%;
  }
  .side{
    width: 240px;
    height: 700px;
    background: #2d2d36;
    ul{
      width: 200px;
      margin: 0 auto;
      color: #57697e;
      li{
        height: 52px;
        line-height: 52px;
        text-indent: 3em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 6px;
        a.router-link-active{
          color: orangered;
        }
        //&表示li元素本身
        &:hover{
            color:#0f0;
        }
      }
      // li:hover{

      // }

      
    }
  }

  .content{
    width: calc(100vw - 240px);
    // width:
    height: 700px;
    background-color: skyblue;
    &>div{
      width: 100%;
      height: 100%;
    }
  }


  

</style>

