import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthService {
    
      client = new Client()
     account;
     constructor(){
        this.client.setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId); 

        this.account = new Account(this.client)
     }
     
      async createAccount({email,password,name}){
        try {
            console.log(typeof (email) +" "+ typeof (name)+" "+ typeof (password));
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            console.log(userAccount);
            if(userAccount){
                // so if user account is created we can make it login directly
                // so here we write call the login method directly and make the user login in the account

                return this.login({email,password})

            }else{

            }
            
        } catch (error) {
                throw error
        }
            

     }

     async login({email,password}){
            try {
                let session = await this.account.createEmailSession(email,password)
                return session 
            } catch (error) {
                console.log(error +"login error");
            }
     }

     // the below method is to verify if user is logged in when he directly jumps to a page or route of an app
     async getCurrentUser (){
            try {
                return await this.account.get()
            } catch (error) {
                console.log("Appwrite service getUser :: error",error);
            }
            
            return null ; // explained in auth video chai aur code  21.00 min


     }
    

     async logout (){
            try {
                await this.account.deleteSessions()
            } catch (error) {
                console.log(error.message);
            }
     }


}

const authService = new AuthService()


export default authService


