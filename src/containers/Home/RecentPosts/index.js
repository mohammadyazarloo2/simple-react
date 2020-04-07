import React from 'react'
import './style.css'
import Card from '../../../components/UI/Card'

const RecentPosts=(props)=>{
    return(
                <div style={props.style}>
                    <Card style={{ marginBottom:'20px' }}>
                        <div className="postImageWrapper">
                            <img src={require('../../../blogPostImages/3.jpeg')} alt="images" />
                        </div>

                        <div style={{ textAlign:"center" }}>
                            <span>Featured</span>
                            <h1>beatiful is always beatiful</h1>
                            <span>posted on july 6 2020 by walk</span>
                            <p>life is beatiful like a nightmare you scared but you have hope it is a dream</p>
                            <button>Read More</button>
                        </div>

                    </Card>
                    
                </div>

    )
}

export default RecentPosts