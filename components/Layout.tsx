import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { routes } from 'routes'
import { Book, Github, Home, View } from 'grommet-icons'
import { Box, Button, Footer, Header, Main, Text } from 'grommet'

type LayoutProps = React.PropsWithChildren<{
  title?: string
}>

export default function Layout({
  title = 'Supabase / Next.js / Grommet Starter',
  children,
}: LayoutProps) {
  return (
    <Box fill>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header elevation="medium" background="brand" justify="center" pad="small">
        <Link href={routes.home}>
          <Button icon={<Home />} hoverIndicator label="Home" />
        </Link>
        <Link href={routes.docs}>
          <Button icon={<Book />} hoverIndicator label="Docs" />
        </Link>
        <Link href={routes.demo}>
          <Button icon={<View />} hoverIndicator label="Demo" />
        </Link>
        <Button
          label="Github"
          target="_blank"
          hoverIndicator
          icon={<Github />}
          href="https://github.com/kachar/supabase-nextjs-grommet"
        />
      </Header>

      <Main
        // flex
        pad="large"
        fill={false}
        align="center"
        overflow="auto"
        justify="center"
        direction="column">
        {children}
      </Main>

      <Footer elevation="medium" background="dark-1" pad="small" justify="center">
        <Text size="xsmall">Supabase / Next.js / Grommet Starter</Text>
        <Text size="xsmall">{new Date().getFullYear()}</Text>
      </Footer>
    </Box>
  )
}
