import Head from 'next/head'
import Navbar from '@components/Navbar';
import Code from '@components/Code';
import { Inter, Playfair_Display, Raleway, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {

  return (
    <>
      <Head>
        <title>next/fonts | Next 13 Pages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 ">
          <h1 className="dark:text-white text-2xl font-semibold mb-2">Example next/fonts Usage</h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-4">
            <div className={inter.className}>
              <h2 className="dark:text-white text-xl font-semibold pb-3 pt-5">Inter</h2>
              <p className="dark:text-white pb-2">Regular 400</p>
              <p className="dark:text-white font-medium pb-2">Medium 500</p>
              <p className="dark:text-white font-semibold pb-2">SemiBold 600</p>
              <p className="dark:text-white font-bold pb-2">Bold 700</p>
              <p className="dark:text-white font-extrabold pb-2">Bold 800</p>
            </div>
            <div className={playfair.className}>
              <h2 className="dark:text-white text-xl font-semibold pb-3 pt-5">Playfair Display</h2>
              <p className="dark:text-white pb-2">Regular 400</p>
              <p className="dark:text-white font-medium pb-2">Medium 500</p>
              <p className="dark:text-white font-semibold pb-2">SemiBold 600</p>
              <p className="dark:text-white font-bold pb-2">Bold 700</p>
              <p className="dark:text-white font-extrabold pb-2">Bold 800</p>
            </div>
            <div className={raleway.className}>
              <h2 className="dark:text-white text-xl font-semibold pb-3 pt-5">Raleway</h2>
              <p className="dark:text-white pb-2">Regular 400</p>
              <p className="dark:text-white font-medium pb-2">Medium 500</p>
              <p className="dark:text-white font-semibold pb-2">SemiBold 600</p>
              <p className="dark:text-white font-bold pb-2">Bold 700</p>
              <p className="dark:text-white font-extrabold pb-2">Bold 800</p>
            </div>
            <div className={roboto.className}>
              <h2 className="dark:text-white text-xl font-semibold pb-3 pt-5">Roboto</h2>
              <p className="dark:text-white pb-2">Regular 400</p>
              <p className="dark:text-white font-medium pb-2">Medium 500</p>
              <p className="dark:text-white font-semibold pb-2">SemiBold 600</p>
              <p className="dark:text-white font-bold pb-2">Bold 700</p>
              <p className="dark:text-white font-extrabold pb-2">Bold 800</p>
            </div>
          </div>

          <p className="dark:text-white mt-4">To use the font in all your pages, add it to _app.js file under /pages as shown below:</p>
          <Code name="pages/_app" className="mb-4" code={`import { Inter, Roboto } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter()
// If you can't use a variable font, you will need to specify a weight:
const roboto = Roboto({
  weight: '400',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}`} />

          <Code name="pages/nextfonts" className="mb-4" code={`import { Inter, Playfair_Display, Raleway, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin', display: 'swap'] })
const playfair = Playfair_Display({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

<div className={inter.className}>
  <h2 className="dark:text-white text-xl font-semibold pb-3 pt-5">Inter</h2>
  <p className="dark:text-white pb-2">Regular 400</p>
  <p className="dark:text-white font-medium pb-2">Medium 500</p>
  <p className="dark:text-white font-semibold pb-2">SemiBold 600</p>
  <p className="dark:text-white font-bold pb-2">Bold 700</p>
  <p className="dark:text-white font-extrabold pb-2">Bold 800</p>
</div>
<div className={playfair.className}>
  <h2 className="dark:text-white text-xl font-semibold pb-3 pt-5">Playfair Display</h2>
  <p className="dark:text-white pb-2">Regular 400</p>
  <p className="dark:text-white font-medium pb-2">Medium 500</p>
  <p className="dark:text-white font-semibold pb-2">SemiBold 600</p>
  <p className="dark:text-white font-bold pb-2">Bold 700</p>
  <p className="dark:text-white font-extrabold pb-2">Bold 800</p>
</div>
<div className={raleway.className}>
  <h2 className="dark:text-white text-xl font-semibold pb-3 pt-5">Raleway</h2>
  <p className="dark:text-white pb-2">Regular 400</p>
  <p className="dark:text-white font-medium pb-2">Medium 500</p>
  <p className="dark:text-white font-semibold pb-2">SemiBold 600</p>
  <p className="dark:text-white font-bold pb-2">Bold 700</p>
  <p className="dark:text-white font-extrabold pb-2">Bold 800</p>
</div>
<div className={roboto.className}>
  <h2 className="dark:text-white text-xl font-semibold pb-3 pt-5">Roboto</h2>
  <p className="dark:text-white pb-2">Regular 400</p>
  <p className="dark:text-white font-medium pb-2">Medium 500</p>
  <p className="dark:text-white font-semibold pb-2">SemiBold 600</p>
  <p className="dark:text-white font-bold pb-2">Bold 700</p>
  <p className="dark:text-white font-extrabold pb-2">Bold 800</p>
</div>`} />

        </div>
      </main >
    </>
  )
}
