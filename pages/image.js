import Head from 'next/head'
import Navbar from '@components/Navbar';
import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from '@components/Spinner';
import Image from 'next/image';
import Code from '@components/Code';

export default function CSR() {
  const [images, setImages] = useState(null)

  async function getImages() {
    try {
      const res = await axios.get(`${process.env.API_URL}/api/images`)
      setImages(res.data.slice(0,3))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <>
      <Head>
        <title>next/image | Next 13 Pages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 ">
          <h1 className="dark:text-white text-2xl font-semibold mb-2">next/image in next 13</h1>
          <p className="dark:text-white">Next.js 13 introduces a powerful new Image component, allowing you to easily display images without layout shift and optimize files on-demand for increased performance.</p>

          <div className="my-8 dark:text-white">
            {images ?
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {images.map(item => {
                  return (
                    <a key={item.id} href={item.url} className="group group-hover:cursor-pointer" target="_blank" rel="noopener noreferrer">
                      <div className="relative h-52">
                        <Image alt={`Image of ${item.name}`} src={item.imageSrc} fill={true} className="rounded-md duration-700 ease-in-out group-hover:opacity-70" />
                      </div>
                    </a>
                  )
                })}
              </div>
              :
              <div className="flex w-full h-48 items-center justify-center">
                <Spinner />
              </div>
            }
          </div>

          <Code code={`import Image from 'next/image';

{images ?
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
    {images.map(item => {
      return (
        <a key={item.id} href={item.url} className="group group-hover:cursor-pointer" target="_blank" rel="noopener noreferrer">
          <div className="relative h-52">
            <Image alt={'Image of \${item.name}'} src={item.imageSrc} fill={true} className="rounded-md duration-700 ease-in-out group-hover:opacity-70" />
          </div>
        </a>
      )
    })}
  </div>
  :
  <div className="flex w-full h-48 items-center justify-center">
    <Spinner />
  </div>
}`} />

        </div>
      </main >
    </>
  )
}
