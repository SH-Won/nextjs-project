import React from 'react'


function landing({posts}) {
   
    
    return (
        <div style={{display:'flex',flexWrap:'wrap',width:'100%'}}>
            {posts.map(post => 
                <div key={post._id} style={{width:'20%'}}>
                <img style={{width:'100%',height:'100%'}}src={post.images[0]} />
                </div>)}      
                  </div>
    )
}

export async function getStaticProps(){
    const res = await fetch('http://fmall.herokuapp.com/api/posts/getPosts')
    const posts = await res.json();
    

    return {
        props :{
            posts
        }
    }
}

export default landing
