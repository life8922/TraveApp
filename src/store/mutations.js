export default{
    changeCity(state,city){
        state.city=city
        try{localStorage.cty=city}catch(e){}
        //localStorage.cty=city//HTML5属性 类似与cookie
    }
}