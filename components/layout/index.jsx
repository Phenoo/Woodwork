
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer/index'
import Subscribe from '../Subscribe'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from 'react-use-cart'


export default function RootLayout({ children }) {
  
  return (
    <>
      <CartProvider>
        <Navbar />
        <Toaster />
        <main>{children}</main>
        <Subscribe />
        <Footer />
      </CartProvider>
    </>
  )
}
