import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { getAllPostIds, getPostData } from '../../lib/posts'

const Post = ({ postData }:{
 postData:{
  title: string
  date:string
  contentHtml:string
 } 
}) => {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}/>
      </article>
    </div>
  )
}

export default Post

export const getStaticPaths:GetStaticPaths=async () => {
  const paths = getAllPostIds();
  //[params:{id:'pre-renddering'},{...}]
  return {
    paths,
    fallback: false
  }
}

//데이터 가져오기
export const getStaticProps: GetStaticProps =async ({params}) => {
  const postData = await getPostData(params.id as string)
  return {
    props:{
      postData
    }
  }
}