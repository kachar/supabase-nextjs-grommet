import { Link } from 'grommet-icons'
import { Anchor, Box, Heading, List } from 'grommet'

import Layout from 'components/Layout'
import RepoLink from 'components/RepoLink'

export const Home = (): JSX.Element => (
  <Layout title="Documentation">
    <Box align="center" margin="large">
      <Heading>Documentation</Heading>

      <RepoLink />

      <List
        primaryKey="name"
        data={[
          {
            name: (
              <Anchor
                target="_blank"
                rel="noopener noreferrer"
                icon={<Link />}
                href="https://supabase.io/"
                label="supabase.io"
              />
            ),
          },
          {
            name: (
              <Anchor
                target="_blank"
                rel="noopener noreferrer"
                icon={<Link />}
                href="https://nextjs.org/"
                label="next.js"
              />
            ),
          },
          {
            name: (
              <Anchor
                target="_blank"
                rel="noopener noreferrer"
                icon={<Link />}
                href="https://v2.grommet.io/"
                label="grommet"
              />
            ),
          },
          {
            name: (
              <Anchor
                target="_blank"
                rel="noopener noreferrer"
                icon={<Link />}
                href="https://www.typescriptlang.org/"
                label="TypeScript"
              />
            ),
          },
          {
            name: (
              <Anchor
                target="_blank"
                rel="noopener noreferrer"
                icon={<Link />}
                href="https://eslint.org/"
                label="ESLint"
              />
            ),
          },
          {
            name: (
              <Anchor
                target="_blank"
                rel="noopener noreferrer"
                icon={<Link />}
                href="https://jestjs.io/"
                label="Jest"
              />
            ),
          },
        ]}
      />
    </Box>
  </Layout>
)

export default Home
