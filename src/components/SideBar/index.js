import React,{useState,useEffect} from 'react'
import './style.css'
import Card from '../UI/Card'
import blogPost from '../../data/data.json'
import { NavLink } from 'react-router-dom'


const Sidebar=(props)=>{

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        const posts=blogPost.data
        setPosts(posts)
    },[posts])

    return(
        <div className="sidebarContainer">
            <Card style={{ marginBottom:'20px',padding:'20px',boxSizing:'border-box' }}>
                <div className="cardHeader">
                    <span>About US</span>
                    <div className="about-me">
                        <img alt="about me" src={require('../../assets/about-me.jpeg')} />
                    </div>
                    
                </div>

                <div className="cardBody">
                        <span className="personalBio">
                            i am mohammad yazarloo a web developer specialization front end and back end ...
                            <br />i create this web page with react
                        </span>
                    </div>

            </Card>

            <Card style={{ marginBottom:'20px',padding:'20px',boxSizing:'border-box' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{ marginBottom:'20px',padding:'20px',boxSizing:'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">
                    
                    {
                        posts.map(post=>{
                            return(
                                <NavLink key={post.slug} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3> {post.slug} </h3>
                                        <span> {post.postedOn} </span>
                                    </div>
                                </NavLink>
                            )
                        })
                    }

                </div>

            </Card>


        </div>
    )
}

export default Sidebar