import axios from 'axios';
import qs from 'qs';

class AuthService{
    
    
    static login(){
        //http call
        AuthService.isLoggedIn=true;
        
    }
    static logout(){
        AuthService.isLoggedIn=false;
        
    }
    static isUserLoggedIn(){
        return AuthService.isLoggedIn; 
    }

    static authenticate(userName, password){

        var encodedString = btoa("fooClientIdPassword:secret");
      
        var authlogin="Basic "+encodedString;
        console.log("encde",authlogin);
        var loginData = {grant_type:"password", username: userName, password: password, client_id: "fooClientIdPassword"};
        let axiosConfig = {
            headers : {
                "Content-type": "application/x-www-form-urlencoded",
                "Authorization" : authlogin
            }
          };
          
     
        axios.post('http://localhost:8981/spring-security-oauth-server/oauth/token',qs.stringify(loginData),axiosConfig).then((res)=>{
         console.log('res', res);
         AuthService.isLoggedIn=true;        
        },(error)=>{
            console.log("error" ,error);
            AuthService.isLoggedIn=false;
        })
    
    }
}
AuthService.isLoggedIn=false;

export default AuthService;