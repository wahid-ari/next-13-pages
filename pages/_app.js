import { GlobalProvider } from "@utils/GlobalContext";
import "@styles/globals.css";
import "@styles/prism.css";
import { Inter, Roboto_Mono, Playfair_Display, Raleway, Roboto } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })
const roboto = Roboto({ subsets: ['latin'], weight: '400', variable: '--font-roboto' })

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <div className={`${inter.variable} ${roboto_mono.variable} ${playfair.variable} ${raleway.variable} ${roboto.variable}`}>
        <Component {...pageProps} />
      </div>
    </GlobalProvider>
  )
}

export default MyApp