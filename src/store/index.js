import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)
//let defaultCity='上海'
//try{
    //if(localStorage.cty){
       // defaultCity=localStorage.cty
    //}
//}catch(e){}//避免出现异常
export default new Vuex.Store({
    state,
        //localStorage.cty||'葫芦岛'

    //actions:{
         //changeCity(ctx,city){
                // ctx.commit("changeCity",city)
         //}
     //},
    mutations,
    getters:{
        doubleCity(state){
            return state.city + '' + state.city
        }
    }
})