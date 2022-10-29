import Head from 'next/head'
import Navbar from '@components/Navbar';
import Link from 'next/link';

const linkClassName = "text-sky-500 hover:text-sky-600 transition-all text-sm font-medium block mb-1"

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/posts`)
  const posts = await res.json()
  return { props: { posts } }
}

export default function SSR({posts}) {

  return (
    <>
      <Head>
        <title>Server Side Rendering | Next 13 Pages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 ">
          <h1 className="dark:text-white text-2xl font-semibold mb-2">Server Side Rendering using getServerSideProps</h1>
          <h2 className="dark:text-white text-xl font-medium">All Post</h2>
          <p className="dark:text-white mt-2">getServerSideProps in next 13</p>

          <div className="my-8 dark:text-white">
            {posts.map(item => {
              return (
                <div key={item.id} className="p-4 rounded-md border dark:border-neutral-800 mb-3">
                  <Link href={`${process.env.API_URL}/ssr/${item.id}`} className={`${linkClassName} text-lg font-semibold`}>{item.title}</Link>
                  <p className="dark:text-gray-300 text-neutral-600 mt-1 text-sm">{item.body}</p>
                </div>
              )
            })}
          </div>

        </div>
      </main >
    </>
  )
}