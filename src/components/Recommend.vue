<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link tag="li"
            :to="'/detail/' + item.id"
            class="item border-bottom" v-for="item of list" :key="item.id">
                    <img  class="item-img" :src="item.imgUrl" >
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
           
        </ul>
    </div>
</template>
<script>
    export default{
        name:"HomeRecommend",
        props:{
            list:Array
        },
        data(){
            return {
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import '../assets/styles/mixins.styl'
    .title
        margin-top:.2rem
        line-height:.8rem
        background: #eee
        text-indent:.2rem
    .item
        display:flex
        height:2.6rem
        overflow:hidden
    .item-img
        width:2.7rem
        height:2.7rem
        padding:.1rem
    .item-info
        flex:1
        padding:.1rem
        min-width:0
    .item-title
        line-height:.54rem
        font-size:.32rem
        ellipsis()
    .item-desc
        line-height:.4rem
        color:#ccc
        ellipsis()
    .item-button
        line-height :.4rem
        background: #ff9300
        padding:0 .3rem
        border-radius:.06rem
        margin-top:.3rem
        color:#fff

</style>