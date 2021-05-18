import { Box, Heading } from 'grommet'

import Layout from 'components/Layout'
import RepoLink from 'components/RepoLink'
import RegisterForm from 'components/RegisterForm'
import LogoutButton from 'components/LogoutButton'

export const Home = (): JSX.Element => (
  <Layout title="Demo">
    <Box align="center" margin="large">
      <Heading>Components</Heading>

      <RepoLink />

      <RegisterForm />
      <Box margin={{ top: 'large' }}>
        <LogoutButton />
      </Box>
    </Box>
  </Layout>
)

export default Home
