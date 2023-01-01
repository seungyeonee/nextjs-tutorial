import Head from 'next/head'
import { Inter } from '@next/font/google'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Home = ({ allPostsData }:{
  allPostsData:{
    date:string
    title:string 
    id:string
  }[]
}) => {
  return (
    <>
      <Head>
        <title>Seungyeon Lee</title>
      </Head>
      <section>
        <p>Seungyeon Lee Introduction</p>
        <p>(This is a website)</p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({id,title,date}) => 
            <li key={id}>
              <Link href={`posts/${id}`}>
              {title}
              </Link>
              <br/>
              <small>{date}</small>
            </li>
          )}
        </ul>
      </section>
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props:{
      allPostsData
    }
  }
}
