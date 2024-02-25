import { Client,Databases,Storage ,Account, Query, ID} from "appwrite";
import conf from "../conf/conf";
export class Services  {
    client = new Client()
    account
    databases
    bucket  //storage 

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId); 
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
     }

     async createPost({title,slug,content,featuredImage,status,userId}){
        try {
          const data =   await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{   // here slug is used as document ID
                    title,content,featuredImage,status,userId
            })
            console.log(data);
        } catch (error) {
            console.log("Appwrite service :: createPost :: error",error)
        }
     }

     async updatePost(slug,{title,content,featuredImage,status}){  // here we use slug as documentId  
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,content,featuredImage,status,
            })
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error",error)
        }
     }

     async deletePost (slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
            return true // so once the post is deleted we return the status as true to handle it on components 
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error)
            return false
        }
     }


     async getPost (slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
        } catch (error) {
            console.log("Appwrite service :: getPost :: error",error)
        }
     }

     async getPosts(queries = [Query.equal("status","active")]){  // here we provide a default param if user just calles getPosts withhout any argument then this param is used
            try {                                                 // i.e the posts which have status as active are returned 
                return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,
            queries
            )
            } catch (error) {
                
            }
     }



     //file upload service  and delete service 

     async uploadFile(file){
        try {
            return  await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file)
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error)
            return false
        }
     }

     async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId,fileId)
             return true
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error)
            return false
        }
     }

     getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileId)
     }
}


const service = new Services()
export default service
