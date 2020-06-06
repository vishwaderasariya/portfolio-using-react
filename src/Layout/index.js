import React from 'react'

const Layout= ({children,bg}) =>{
    console.log(children)
    return (
        <div style={{backgroundColor:bg}}>
        <div style={{maxWidth:"1200px ", margin:'0px auto'}}>
            {children}
        </div>
        </div>
    )
}
export default Layout