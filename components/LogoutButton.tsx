import { Button } from 'grommet'
import { Logout } from 'grommet-icons'
import { useCallback } from 'react'
import { useSignOut } from 'react-supabase'

import { useAuth } from 'hooks/useAuth'

export default function LogoutButton() {
  const { session } = useAuth()
  const [, signOut] = useSignOut()
  const handleLogout = useCallback(async () => await signOut(), [])

  if (!session) {
    return null
  }

  return (
    <Button
      reverse
      size="small"
      label="Logout"
      hoverIndicator
      icon={<Logout />}
      onClick={handleLogout}
    />
  )
}
