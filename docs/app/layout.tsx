import { getEnhancedPageMap } from '@components/get-page-map'
import { NextraLogo, VercelLogo } from '@components/icons'
import { ChatButton } from '@components/inkeep-chat-button'
import cn from 'clsx'
import type { Metadata } from 'next'
import NextImage from 'next/image'
import { Footer, Layout, Link, Navbar } from 'nextra-theme-docs'
import { Anchor, Banner, Head } from 'nextra/components'
import type { FC } from 'react'
import inkeep from './showcase/_logos/inkeep.png'
import xyflow from './showcase/_logos/xyflow.png'
import './globals.css'

export const metadata: Metadata = {
  description: 'Documentation for Rexplore AI Systems - Luso8 Cloud, Voxtra voice infrastructure, and industrial automation.',
  metadataBase: new URL('https://docs.rexplore.ai'),
  keywords: [
    'Rexplore',
    'AI Systems',
    'Luso8',
    'Voxtra',
    'Industrial Automation',
    'Multi-agent AI',
    'Voice Infrastructure',
    'Reinforcement Learning'
  ],
  generator: 'Next.js',
  applicationName: 'Rexplore Docs',
  appleWebApp: {
    title: 'Rexplore Docs'
  },
  title: {
    default: 'Rexplore Docs – AI Systems Documentation',
    template: '%s | Rexplore Docs'
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    siteName: 'Rexplore Docs',
    locale: 'en_US',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://docs.rexplore.ai'
  },
  alternates: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    canonical: './'
  }
}

const banner = (
  <Banner>
    🚀 Welcome to Rexplore Research Labs Documentation.{' '}
    <Link href="/docs" className="text-current!">
      Get Started
    </Link>
  </Banner>
)
const navbar = (
  <Navbar
    logo={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <NextImage src="/logo.png" alt="Rexplore" width={28} height={28} />
        <span style={{ fontWeight: 600 }}>Rexplore Docs</span>
      </div>
    }
    projectLink="https://github.com/rexplore"
  />
)
const footer = (
  <Footer className="flex-col items-center md:items-start">
    <p className="text-xs">
      © {new Date().getFullYear()} Rexplore Research Labs. All rights reserved.
    </p>
    <p className="mt-2 text-xs opacity-60">
      Building AI systems with reinforcement learning and multi-agent architectures.
    </p>
  </Footer>
)

const RootLayout: FC<LayoutProps<'/'>> = async ({ children }) => {
  const pageMap = await getEnhancedPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <ChatButton />
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/rexplore/docs.rexplore.ai"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
          toc={{}}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
