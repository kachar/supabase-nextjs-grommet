import { Box, Button, Heading } from 'grommet'

import Layout from 'components/Layout'
import RepoLink from 'components/RepoLink'

export const Home = (): JSX.Element => (
  <Layout>
    <Box align="center" margin="large">
      <Heading>Supabase / Next.js / Grommet Starter!</Heading>

      <RepoLink />

      <Box direction="row" gap="small">
        <Button primary label="Contribute" />
        <Button label="Demo" />
      </Box>
    </Box>
  </Layout>
)

export default Home
