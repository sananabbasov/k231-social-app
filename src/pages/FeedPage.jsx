import React, { useEffect, useState } from 'react'
import FeedCard from '../components/FeedCard'

function FeedPage() {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        await fetch("http://localhost:4000/posts").then(x => x.json()).then(x => setPosts(x))
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className='my-6'>
            <div className='flex justify-between'>
                <div>
                    Left
                </div>
                <div className='w-[60%]'>
                    {
                        posts.map((post, index) => (
                            <FeedCard  key={index} postData={post}  />
                        ))
                    }
                </div>
                <div>
                    Right
                </div>
            </div>

        </div>
    )
}

export default FeedPage