let defaultCity='上海'
try{
    if(localStorage.cty){
        defaultCity=localStorage.cty
    }
}catch(e){}//避免出现异常

export default{
    city:defaultCity
}