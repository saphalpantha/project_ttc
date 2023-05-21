import { Fragment } from 'react'
import Header from '../components/Header/Header'
import '../styles/globals.css'
import Footer from '../components/Footer/Footer'

export default function App({ Component, pageProps }) {
  return<Fragment> <Header/> <Component {...pageProps} /><Footer/> </Fragment>
}
