import Head from 'next/head'
import Navbar from '@components/Navbar';

const linkClassName = "text-sky-500 hover:text-sky-600 transition-all text-sm font-medium block mb-1"

export default function Home() {

  return (
    <>
      <Head>
        <title>Next 13 Pages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 ">
          <h1 className="dark:text-white text-xl font-semibold pb-8">Example NextJS 13 using Pages</h1>
          <h1 className="dark:text-white text-2xl font-semibold pb-8">Next Data</h1>

          <div className="mb-6">
            <h1 className="dark:text-white text-xl font-medium pb-3">Spotify</h1>
            <a href={`${process.env.API_URL}/api/spotify`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/spotify
            </a>
            <a href={`${process.env.API_URL}/api/spotify/artist`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/spotify/artist
            </a>
            <a href={`${process.env.API_URL}/api/spotify/albums`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/spotify/albums
            </a>
            <a href={`${process.env.API_URL}/api/spotify/albums/bintang-di-surga`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/spotify/albums/bintang-di-surga
            </a>
            <a href={`${process.env.API_URL}/api/spotify/tracks`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/spotify/tracks
            </a>
            <a href={`${process.env.API_URL}/api/spotify/tracks/bintang-di-surga`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/spotify/tracks/bintang-di-surga
            </a>
          </div>

          <div className="mb-6">
            <h1 className="dark:text-white text-xl font-medium pb-3">Avatars</h1>
            <a href={`${process.env.API_URL}/api/avatars`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/avatars
            </a>
            <a href={`${process.env.API_URL}/api/avatars?id=1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/avatars?id=1
            </a>
            <a href={`${process.env.API_URL}/api/avatars/2`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/avatars/2
            </a>
          </div>

          <div className="mb-6">
            <h1 className="dark:text-white text-xl font-medium pb-3">Customers</h1>
            <a href={`${process.env.API_URL}/api/customers`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/customers
            </a>
            <a href={`${process.env.API_URL}/api/customers?id=1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/customers?id=1
            </a>
            <a href={`${process.env.API_URL}/api/customers/1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/customers/1
            </a>
          </div>

          <div className="mb-6">
            <h1 className="dark:text-white text-xl font-medium pb-3">Images</h1>
            <a href={`${process.env.API_URL}/api/images`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/images
            </a>
            <a href={`${process.env.API_URL}/api/images/1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/images/1
            </a>
          </div>

          <div className="my-6">
            <h1 className="dark:text-white text-xl font-medium pb-3">Github User</h1>
            <a href={`${process.env.API_URL}/api/github`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/github
            </a>
            <a href={`${process.env.API_URL}/api/github/vercel`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/github/vercel
            </a>
          </div>

          <div className="my-6">
            <h1 className="dark:text-white text-xl font-medium pb-3">Github Repository</h1>
            <a href={`${process.env.API_URL}/api/repos`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/repos
            </a>
            <a href={`${process.env.API_URL}/api/repos/nextjs`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/repos/nextjs
            </a>
          </div>

          <div className="my-6">
            <h1 className="dark:text-white text-xl font-medium pb-3">Github Orgs</h1>
            <a href={`${process.env.API_URL}/api/orgs`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/orgs
            </a>
            <a href={`${process.env.API_URL}/api/orgs/github`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/orgs/github
            </a>
          </div>

          <div className="my-6">
            <h1 className="dark:text-white text-xl font-medium pb-3">Github Emojis</h1>
            <a href={`${process.env.API_URL}/api/emojis`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/emojis
            </a>
          </div>

          <div className="my-6">
            <h1 className="dark:text-white text-xl font-medium pb-3">Users</h1>
            <a href={`${process.env.API_URL}/api/users`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/users
            </a>
            <a href={`${process.env.API_URL}/api/users/1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/users/1
            </a>
          </div>

          <div className="my-6">
            <h1 className="dark:text-white text-xl font-medium pb-3">Posts</h1>
            <a href={`${process.env.API_URL}/api/posts`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/posts
            </a>
            <a href={`${process.env.API_URL}/api/posts?user=1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/posts?user=1
            </a>
            <a href={`${process.env.API_URL}/api/posts?user=1&id=1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/posts?user=1&id=1
            </a>
            <a href={`${process.env.API_URL}/api/posts?id=1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/posts?id=1
            </a>
            <a href={`${process.env.API_URL}/api/posts/user/1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/posts/user/1
            </a>
            <a href={`${process.env.API_URL}/api/posts/detail/1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/posts/detail/1
            </a>
          </div>

          <div className="my-6">
            <h1 className="dark:text-white text-xl font-medium pb-3">Comments</h1>
            <a href={`${process.env.API_URL}/api/comments`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/comments
            </a>
            <a href={`${process.env.API_URL}/api/comments/post/1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/comments/post/1
            </a>
            <a href={`${process.env.API_URL}/api/comments/detail/1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/comments/detail/1
            </a>
          </div>

          <div className="my-6">
            <h1 className="dark:text-white text-xl font-medium pb-3">Todos</h1>
            <a href={`${process.env.API_URL}/api/todos`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/todos
            </a>
            <a href={`${process.env.API_URL}/api/todos/user/1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/todos/user/1
            </a>
            <a href={`${process.env.API_URL}/api/todos/detail/1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/todos/detail/1
            </a>
          </div>

        </div>
      </main >
    </>
  )
}