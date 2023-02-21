import RootLayout from '../components/layout'
import '../styles/globals.css'
import '../styles/chrome-bug.css'
import '../styles/base.css'
import {StateContext} from '../context/StateContext'

function MyApp({ Component, pageProps }) {
  return(
    <StateContext>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </StateContext>
    
  )
}

export default MyApp
