<template>
    <div>
        <home-header></home-header>
        <home-swiper :list=" swiperList"></home-swiper>
        <home-icons :list=" iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
  import HomeHeader from './../components/Header'
  import HomeSwiper from './../components/Swiper'
  import HomeIcons from './../components/Icons'
  import HomeRecommend from './../components/Recommend'
  import HomeWeekend from './../components/Weekend'
  import axios from 'axios'
  import {mapState} from 'vuex'
  //引入并打包全局的静态资源文件 —— ES6导入语法
  import '../assets/css/bootstrap.css'
  import '../assets/css/font-awesome.css'
  import '../assets/css/animate.css'
  import '../assets/css/app.css'
 

  export default {
    name: 'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data (){
      return {
          lastCity:'',
          swiperList:[],
          iconList:[],
          recommendList:[],
          weekendList:[]
      }
    },
    computed:{
        ...mapState(['city'])
    },
  
    methods: {
        getHomeInfo(){
           axios.get('index.json?city='+this.city).then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res=res.data
            if(res.ret&&res.data){
                const data=res.data;
            
                this.swiperList=data.swiperList;
                this. iconList=data.iconList;
                this.recommendList=data.recommendList
                this. weekendList=data. weekendList
            }
            console.log(res)
        }
    },
    mounted(){
       // console.log("mounted")
       this.lastCity=this.city
         this.getHomeInfo()
    },
    activated(){
        if(this.lastCity!==this.city){
            this.lastCity=this.city
                this.getHomeInfo()
        }
        //console.log('数据更换重新发送请求')
    }
  }
</script>

<style scoped>

</style>