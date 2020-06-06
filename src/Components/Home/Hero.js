import React from 'react'
import Layout from '../../Layout'

export default function Hero() {
    return (
        <Layout bg='#E0EBE8'>
            <div style={{minHeight:"80vh", display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div>
                <p style={{fontSize:'5rem',fontFamily: `'Rouge Script', cursive`,color:'#3E9C87'}}>I'm Vishwa.</p>
                </div>
                <br></br>
                <div>
                <p style={{fontSize:'1rem', fontFamily:'Roboto, sans-serif',color:'#3E9C87'}}>a computer engineer.</p>
                </div>
            </div>
            
  
        </Layout>
    )
}
