import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState,useEffect} from 'react';
import ItemList from '../src/component/ItemList';
import {Header,Divider,Loader} from 'semantic-ui-react'
import axios from 'axios';
// http://fmall.herokuapp.com/api/posts/getPosts
export default function Home({posts}) {
  /*
   const [posts,setPosts]=useState([]);
   const [isLoading,setIsLoading]=useState(true);
 
   const API_URL = 'http://fmall.herokuapp.com/api/posts/getPosts';
   const API_URL = process.env
   const getData = () =>{
      axios.get(API_URL)
      .then(response => {
        setPosts([...response.data])
        setIsLoading(false);
      })

   }   

   useEffect(()=>{
          getData()
   },[])
   */

  return (
    <div>
      <Head>
        <title>SH Won | next.js</title>
        <meta name="description" content="SH Won 홈입니다."></meta>
      </Head>
       {posts && 
        <>
          <Header as="h3" style={{ paddingTop: "20px" }}>
            요리
          </Header>
          <Divider />
          <ItemList posts={posts} />
        </>
          }
    </div>
  );
}
export async function getStaticProps(){
     const apiUrl = `http://fmall.herokuapp.com/api/posts/getPosts`;
     const res = await axios.get(apiUrl);
     const data = await res.data;

     return {
       props:{
         posts:data
       }
     }

}