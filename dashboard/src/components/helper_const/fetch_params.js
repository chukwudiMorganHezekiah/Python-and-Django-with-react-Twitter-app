export default (method)=>{
    var token = localStorage.getItem('token');
    return  {
        method:method,
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json, text/plain, */*",
            "Authorization":`Token ${token}`
        }
    }
}