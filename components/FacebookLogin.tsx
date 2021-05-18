import { useCallback } from 'react'
import { useSignIn } from 'react-supabase'
import { Box, Button, Layer, Spinner } from 'grommet'

import { routes } from 'routes'
import { useAuth } from 'hooks/useAuth'

export default function FacebookLogin() {
  const { user } = useAuth()
  const [{ error, fetching }, signIn] = useSignIn({
    options: { redirectTo: `${process.env.NEXT_PUBLIC_VERCEL_URL}${routes.home}` },
  })
  const handleLogin = useCallback(async () => await signIn({ provider: 'facebook' }), [])

  if (user) return null
  if (fetching) return <Spinner />
  if (error) {
    return (
      <Layer modal={false} full="horizontal" position="bottom" background="status-critical">
        <Box align="center" pad="small">
          {error?.message}
        </Box>
      </Layer>
    )
  }

  return (
    <Box direction="row" margin={{ bottom: 'large' }} justify="center">
      <Button
        primary
        size="small"
        color="#4267B2"
        label="Facebook Login"
        style={{ borderRadius: 0 }}
        onClick={handleLogin}
      />
    </Box>
  )
}
