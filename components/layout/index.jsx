
import Navbar from '../../components/Navbar'
import Footer from '../Footer/Footer'
import Subscribe from '../Subscribe'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from 'react-use-cart'
import { ThemeProvider } from 'next-themes'


export default function RootLayout({ children }) {
  
  return (
    <>
    <ThemeProvider>

      <CartProvider>
        <Navbar />
        <Toaster />
        <main>{children}</main>
        <Subscribe />
        <Footer />
      </CartProvider>
    </ThemeProvider>

    </>
  )
}
