import axios from 'axios';
import qs from 'qs';
import {Config} from '../../config/config';

let authUser = null;
let accessToken=null;
class AuthService {

    static get token(){
        return accessToken;
    }
    static login(val) {
        //http call
       // AuthService.isLoggedIn = true;
       console.log("i am called login");
        accessToken=val;
        localStorage.setItem('accessToken', accessToken);

    }
    static logout() {
        console.log("i am called logout");
        accessToken=null;
        localStorage.removeItem('accessToken');

    }

    static get isUserLoggedIn() {
        if(!accessToken)
        accessToken=localStorage.getItem('accessToken');
        console.log("accessToken",accessToken);
        if(accessToken)
        return true;
       
        return false;
    }

    static async authenticate(userName, password) {

       
        var encodedString = btoa("myApp_123456:myApp_123456");
        
    
        console.log('userName', userName);
        console.log('password', password);

        var authlogin = "Basic " + encodedString;
        console.log("encde", authlogin);
        var loginData = { grant_type: "password", username: userName, password: password, client_id: "myApp_123456" };
        let axiosConfig = {
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                "Authorization": authlogin
            }
        };

        /*  axios.post('http://localhost:8981/spring-security-oauth-server/oauth/token',qs.stringify(loginData),axiosConfig).then((res)=>{
         console.log('res', res);
         AuthService.isLoggedIn=true;        
        },(error)=>{
            console.log("error" ,error);
            AuthService.isLoggedIn=false;
        })*/
        authUser = await axios.post('http://localhost:9999/oauth2-jwt-server-service/oauth/token', qs.stringify(loginData), axiosConfig)
        /*authUser.then((res)=>{
            console.log('res', res);
            accessToken=true;        
           },(error)=>{
               console.log("error" ,error);
               accessToken=false;
           });*/
        return authUser;
    }
}

export default AuthService;