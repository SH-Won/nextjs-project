import {useRouter} from 'next/router'
import {useEffect,useState} from 'react';
import {Loader} from 'semantic-ui-react'
import Head from 'next/head';
import axios from 'axios';
import Item from '../../src/component/Item';

const Post = ({post,name}) =>{
    //const router = useRouter();
    //const {postId} = router.query;
    
    
    return (
        <>
        <Head>
            <title>{post.title}</title>
            <meta name="description" content={post.description}></meta>
        </Head>
        {name} 환경입니다.
      {post && <Item post={post}/>}
      </>
    );

}

export async function getServerSideProps(context){
    const postId=context.params.postId;
    const apiUrl =`http://fmall.herokuapp.com/api/posts/getPostDetail?postId=${postId}&type=single`;
    const res = await axios.get(apiUrl)
    const data = res.data[0];

    return{
        props:{
            post:data,
            name:process.env.name
        }
    }
}

/*
Next js 모든 페이지 사전 렌더링 (pre-rendering)
더 좋은 퍼포먼스
검색엔진 최적화 (SEO)

1.정적생성
2. Server Side Rendering (SSR, Dynamic Rendering)

차이점은 언제 html을 생성하는가

[정적생성]
-프로젝트가 빌드하는 시점에 html파일들이 생성
-모든 요청에 재사용
-퍼포먼스 이유로, next js는 정적 생성을 권고
-정적 생성된 페이지들은 CDN에 캐시
-getStaticProps / getStaticPaths

[서버사이드 렌더링]은 매 요청마다 html을 생성
-항상 최신 상태 유지
-getServerSideProps

*/

export default Post