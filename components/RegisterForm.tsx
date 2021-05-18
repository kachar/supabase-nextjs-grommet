import {
  Box,
  BoxProps,
  Button,
  Form,
  FormField,
  RadioButtonGroup,
  RangeInput,
  Spinner,
  Text,
  TextInput,
} from 'grommet'
import { useUpsert } from 'react-supabase'
import { PropsWithChildren, useState, useEffect } from 'react'

import { useAuth } from 'hooks/useAuth'
import useDeviceSize from 'hooks/useDevice'

import UserAvatar from './UserAvatar'
import FacebookLogin from './FacebookLogin'

type FormData = {
  id?: string
  name: string
  email: string
  phone: string
  sex: string
  birthday: number
}

const FormSection = ({ children, ...rest }: PropsWithChildren<BoxProps>) => (
  <Box direction="row" gap="medium" justify="center" margin={{ bottom: 'medium' }} {...rest}>
    {children}
  </Box>
)

export default function RegisterForm() {
  const { user } = useAuth()
  const [{ fetching }, executeUpsert] = useUpsert<FormData>('users')

  const device = useDeviceSize()
  console.log(user, device)

  const [value, setValue] = useState<FormData>({
    id: undefined,
    name: '',
    email: '',
    phone: '',
    sex: '',
    birthday: 2000,
  })

  useEffect(() => {
    if (user) {
      setValue((prev) => ({
        ...prev,
        id: user?.id,
        email: user?.email,
        name: user?.user_metadata.full_name,
        avatar_url: user?.user_metadata.avatar_url,
      }))
    }
  }, [user])

  if (fetching) {
    return <Spinner />
  }

  return (
    <Box width="large" elevation="medium" round pad="large">
      <Form<FormData>
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onSubmit={async ({ value }) => {
          console.log(value)
          await executeUpsert(value)
        }}>
        <Box direction="row" margin={{ bottom: 'large' }} justify="center">
          <UserAvatar />
        </Box>
        <FacebookLogin />
        <FormSection>
          <FormField width="100%" name="name" htmlFor="name" label="Name" required>
            <TextInput id="name" name="name" type="name" />
          </FormField>
          <FormField width="100%" name="email" htmlFor="email" label="Email" required>
            <TextInput id="email" name="email" type="email" />
          </FormField>
        </FormSection>
        <FormSection>
          <Box direction="column" width="100%">
            <FormField width="100%" name="phone" htmlFor="phone" label="Phone" required>
              <TextInput id="phone" name="phone" type="phone" />
            </FormField>
            <RadioButtonGroup
              id="sex"
              name="sex"
              direction="row"
              justify="center"
              margin={{ top: 'small' }}
              options={['male', 'female']}
            />
          </Box>
          <FormField width="100%" name="birthday" htmlFor="birthday" label="Year of birth" required>
            <Text textAlign="center" weight="bold" margin="small" size="large">
              {value.birthday}
            </Text>
            <RangeInput name="birthday" id="birthday" min={1980} max={2010} />
          </FormField>
        </FormSection>
        <Box direction="row" gap="medium" width="50%" margin={{ horizontal: 'auto', top: 'large' }}>
          <Button fill type="submit" primary label="Register" />
        </Box>
      </Form>
    </Box>
  )
}
