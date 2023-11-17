import Head from 'next/head'
import Navbar from '@components/Navbar';
import Link from 'next/link';
import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from '@components/Spinner';

const linkClassName = "text-sky-500 hover:text-sky-600 transition-all text-sm font-medium block mb-1"

export default function CSR() {
  const [posts, setPosts] = useState(null)

  async function getPosts() {
    try {
      const res = await axios.get(`${process.env.API_URL}/api/posts`)
      setPosts(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>Client Side Rendering  | Next 13 Pages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 ">
          <h1 className="dark:text-white text-2xl font-semibold mb-2">Client Side Rendering using Axios and Loading Component</h1>
          <h2 className="dark:text-white text-xl font-medium mt-2">All Post</h2>

          <div className="my-8 dark:text-white">

            {posts ?
              posts.map(item => {
                return (
                  <div key={item.id} className="p-4 rounded-md border dark:border-neutral-800 mb-3">
                    <Link href={`/csr/${item.id}`} className={`${linkClassName} text-lg font-semibold`}>{item.title}</Link>
                    <p className="dark:text-gray-300 text-neutral-600 mt-1 text-sm">{item.body}</p>
                  </div>
                )
              })
              :
              <div className="flex w-full h-48 items-center justify-center">
                <Spinner />
              </div>
            }

          </div>

        </div>
      </main >
    </>
  )
}
