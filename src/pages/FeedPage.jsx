import React from 'react'
import FeedCard from '../components/FeedCard'

function FeedPage() {
    return (
        <div className='my-6'>
            <div className='flex justify-between'>
                <div>
                    Left
                </div>
                <div>
                    <FeedCard />
                </div>
                <div>
                    Right
                </div>
            </div>

        </div>
    )
}

export default FeedPage