import React from 'react'
import './style.css'
import Card from '../../components/UI/Card'
import Sidebar from '../../components/SideBar'
import RecentPosts from './RecentPosts'
import blogData from '../../data/data.json'
import Layout from '../../components/Layout'


const SideIamge=props=>{
    return(
        <div style={{height:`${props.height}px`}}>
            <img src={props.src} alt="images" />
        </div>
    )
}

const ImageGallery=props=>(
    <div className="galleryPost" style={props.galleryStyle}>
    <section style={{ width:props.largeWidth }}>
        <div className="mainImageWrapper">
            <img alt="" src={require(`../../blogPostImages/${props.imagesArray[0]}`)} />
        </div>
    </section>
    <section className="sideIamgeWrapper" style={{ width:props.smallWidth }}>

        {
            props.imagesArray.map(image=>
                    <SideIamge 
                    height={props.sideImageHeight}
                    src={require(`../../blogPostImages/`+image)}
                    alt=""
                    />
                )
        }
        
         
        
    </section>
</div>

)

const imgArr=blogData.data.map(post=>post.blogImage)


const Home=props=>{

    

    const galleryHeight=450;
    const galleryStyle={
        height:galleryHeight+'px',
        overflow:'hidden',
    }

    const sideImageHeight=galleryHeight/3

    return(
        <div>
            <Card>

                <ImageGallery 
                largeWidth='70%'
                smallWidth='30%'
                sideImageHeight={sideImageHeight}
                galleryStyle={galleryStyle}
                imagesArray={imgArr}
                 />


            </Card>

                <Layout>
                    <RecentPosts style={{width:'70%'}} />
                </Layout>



        </div>
    )
}

export default Home