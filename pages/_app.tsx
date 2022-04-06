import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ReactGA from 'react-ga'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GeistProvider, CssBaseline } from '@geist-ui/core'

ReactGA.initialize("UA-80324378-28");


function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, []);

  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}


export default MyApp
