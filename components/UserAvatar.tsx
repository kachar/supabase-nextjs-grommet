import { Avatar } from 'grommet'
import { User } from 'grommet-icons'
import { useAuth } from 'hooks/useAuth'

export default function UserAvatar() {
  const { user } = useAuth()
  if (user) {
    return <Avatar src={user.user_metadata.avatar_url} size="large" />
  }

  return (
    <Avatar size="large" background="light-3">
      <User />
    </Avatar>
  )
}
