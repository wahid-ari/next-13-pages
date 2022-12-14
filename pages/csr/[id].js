import Navbar from "@components/Navbar"
import Spinner from "@components/Spinner"
import Head from "next/head"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import axios from "axios"

export default function CSR() {
  const router = useRouter()
  const id = router.query.id
  const [post, setPost] = useState(null)

  async function getPost() {
    try {
      const res = await axios.get(`${process.env.API_URL}/api/posts/detail/${id}`)
      setPost(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPost()
  }, [id])

  return (
    <>
      <Head>
        <title>Client Side Rendering | Next 13 Pages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 ">
          <h1 className="dark:text-white text-2xl font-semibold">Client Side Rendering</h1>
          <h2 className="dark:text-white text-xl font-medium mt-2">Detail Post</h2>

          <div className="my-8 dark:text-white">
            {post ?
              <>
                <h3 className="dark:text-white text-xl font-medium mt-1">{post.title}</h3>
                <p className="dark:text-gray-300 text-neutral-600 mt-2">{post.body}</p>
              </>
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