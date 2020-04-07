import React from 'react'
import './style.css'
import Sidebar from '../SideBar'

const Layout=props=>{
    return(
        <React.Fragment>
            <div className="container">
                {props.children}
                <Sidebar />
            </div>
            <div>
                this is fotter for all the pages
            </div>
        </React.Fragment>
    )
}

export default Layout