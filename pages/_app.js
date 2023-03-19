import RootLayout from '../components/layout'
import '../styles/main.css'
import '../styles/globals.css'
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
