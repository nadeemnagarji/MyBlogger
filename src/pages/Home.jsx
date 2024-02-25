import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux';
import authService from '../appwrite/auth';

function Home() {
    const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(true);
     const userData = useSelector((state)=> state.userData)

       
    

    useEffect(() => {
        console.log(userData);
        if(userData){
            appwriteService.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                    // setLoading(false); 
                }
            })
        }
      
    }, [userData])
  



    if (userData === null) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }


    // if (loading) {
    //     return <h1>...loading</h1> // Display loading indicator while fetching posts
    // }

    return (
        <div className='w-full py-8'>
            {userData && posts.length>0 ?<Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
            :(userData?<h1>Create New Post</h1>:<h1>Login to Create Post</h1>)}
            
        </div>
    )
}

export default Home