import RootLayout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <RootLayout>
    <Component {...pageProps} />
  </RootLayout>
}

export default MyApp
