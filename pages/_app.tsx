import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Provider as SuperbaseProvider } from 'react-supabase'
import { Grommet, grommet as grommetTheme, ThemeContext } from 'grommet'

import { customTheme } from 'theme'
import { superbaseClient } from 'superbaseClient'
import { AuthProvider } from 'components/AuthProvider'

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Grommet full theme={grommetTheme}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <ThemeContext.Extend value={customTheme}>
        <SuperbaseProvider value={superbaseClient}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </SuperbaseProvider>
      </ThemeContext.Extend>
    </Grommet>
  )
}
