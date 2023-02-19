
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer/index'
import Subscribe from '../Subscribe'


export default function RootLayout({ children }) {
  
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Subscribe />
      <Footer />
    </>
  )
}
