class AuthService{
    
    
    static login(){
        //http call
        AuthService.isLoggedIn=true;
        
    }
    static logout(){
        AuthService.isLoggedIn=false;
        
    }
    static getLoggedIn(){
        return AuthService.isLoggedIn; 
    }
}
AuthService.isLoggedIn=false;

export default AuthService;