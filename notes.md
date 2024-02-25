the enviroment variable file should always be present in the root of the app that is the main outer home directory 


** envirnment variable file always load for the first time only once 



2} so while making the auth service we design the architecture of code in such a way that in case we want to switch to any other backend service other than appwrite we would be able to do it easily 

so what we do is that we setup an abstraction in such a way that the frontend components will have access to just the methods such that  login logout and createuser and we handle those methods inside a different file in a single file and write the appwrite logic there so that the frontend component wont have to deal with it and just transfer the email and password or any neccessary data for those methods and call those methods and recieve the output 

doing this what we able to achieve is that in future if we want to change the backend service from appwrite to any other we can easily do that by just changing some logic in the main file in this case appwrite/auth.js and the components will stay same and will call the same methods from them 

to achieve this we create a class called As AuthService that is a template inside the auth file which will have all the methods to create a user and login logout and creating sessions etc and we just provide a new object each time a user is creeated from this file 

we do this to make a quality code that is a productin grade code where we separate business logic from UI 



the project structure =>{
    1} created the file and installed the various packages
    2} setup backend and env variables created .env file and conf/conf.js to put environment variables and access them
    3} created the appwrite folder and made auth.js and config.js file to make services such as auth and other service to access the backend and interact with backend

    4} setup the store/redux to store the global context of login data i.e. able to check if user is logged in 

    5} made a main containerFolder in which we make a containerComponent to wrap the componenets in it 

    6} made various small reuseable compoenets such as button input select etc to use in any component

    7} Made header component with Navitems array which includes navitems and slugs i.e.path to direct the user which clicked on those items  

    8} Making main major componenets Login SignUp  using react-hook-form and the reusable components we made earlier

    9} making a authLayout to  make a ProtectedFunction to render the children of this function based on some conditions
        it is nothing but a mechanism to protect routes and pages 


}