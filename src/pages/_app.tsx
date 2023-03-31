import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '@/components/layout'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default App
