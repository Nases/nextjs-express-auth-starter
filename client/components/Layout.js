import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { initGA, logPageView } from '../assets/utils/google-analytics'

export default ({ children, title }) => {
  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  console.log(process.env.GOOGLE_ANALYTICS_ID)
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}