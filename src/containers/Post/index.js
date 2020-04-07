import React from 'react'
import './style.css'
import BlogPost from '../../components/BlogPost'
import Sidebar from '../../components/SideBar'
import Layout from '../../components/Layout'

const Post=(props)=>{
    return(
            <Layout>
                <BlogPost {...props} />
            </Layout>
    )
}

export default Post