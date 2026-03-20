import { ArrowRightIcon, GearIcon, DiagramIcon, LightningIcon } from '@components/icons'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from 'nextra-theme-docs'
import { MdxIcon } from 'nextra/icons'
import docsCardDark from 'public/assets/card-1.dark.png'
import docsCard from 'public/assets/card-1.png'
import luso8Image from 'public/assets/luso8-main-page.png'
import voxtraImage from 'public/assets/votra.png'
import { Feature, Features } from './_components/features'
import { MotionDiv, MotionH3 } from './_components/framer-motion'
import { I18n } from './_components/i18n-demo'
import styles from './page.module.css'
import './page.css'
import type { FC } from 'react'

export const metadata: Metadata = {
  description:
    'Documentation for Rexplore AI Systems. Explore Luso8 Cloud, Voxtra voice infrastructure, and industrial automation systems built by Rexplore Research Labs.'
}

const IndexPage: FC = () => {
  return (
    <div className="home-content">
      <div className="content-container">
        <h1 className="headline">
          Documentation for <br className="max-sm:hidden" />
          Rexplore AI Systems
        </h1>
        <p className="subtitle">
          Explore Luso8 Cloud, Voxtra voice infrastructure, and industrial automation systems{' '}
          <br className="max-md:hidden" />
          built by Rexplore Research Labs.
        </p>
        <p className="subtitle" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className={styles.cta} href="/docs">
            Get Started <span>→</span>
          </Link>
          <Link className={styles.cta} href="#products" style={{ background: 'transparent', border: '2px solid currentColor', color: 'inherit', boxShadow: 'none' }}>
            Explore Products
          </Link>
        </p>
      </div>
      <div id="products" className="features-container x:border-b nextra-border">
        <div className="content-container">
          <h2 className="text-center text-4xl font-bold mb-4">Our AI Systems</h2>
          <p className="text-center text-lg mb-12 opacity-80">Powerful platforms built on cutting-edge AI research</p>
          <Features>
            <Feature
              index={0}
              large
              centered
              id="luso8-card"
            >
              <Image src={luso8Image} alt="Luso8 Cloud" loading="eager" className="rounded-lg" />
              <h3>Luso8 Cloud</h3>
              <p className="text-center">
                AI-native business operating system for customer data, engagement, and growth.
              </p>
            </Feature>
            <Feature
              index={1}
              large
              centered
              id="voxtra-card"
            >
              <Image src={voxtraImage} alt="Voxtra" loading="eager" className="rounded-lg" />
              <h3>Voxtra</h3>
              <p className="text-center">
                Voice infrastructure for AI agents, bridging telephony systems like Asterisk with real-time AI.
              </p>
            </Feature>
            <Feature
              index={2}
              large
              centered
              id="industrial-card"
              className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white"
            >
              <GearIcon className="w-16 h-16 mb-4 mx-auto" />
              <h3>Industrial Automation</h3>
              <p className="text-center">
                Autonomous systems for industrial operations powered by multi-agent AI.
              </p>
            </Feature>
          </Features>
        </div>
      </div>
      <div className="features-container">
        <div className="content-container">
          <h2 className="text-center text-4xl font-bold mb-4">Built on Rexplore Research</h2>
          <p className="text-center text-lg mb-12 opacity-80 max-w-3xl mx-auto">
            Our systems are powered by advanced research in reinforcement learning, multi-agent systems, and autonomous agents.
            We build AI that learns, adapts, and collaborates to solve complex real-world problems.
          </p>
          <Features>
            <Feature index={3} centered>
              <LightningIcon className="w-12 h-12 mb-4 mx-auto" />
              <h3>Reinforcement Learning</h3>
              <p className="text-center">
                Systems that learn optimal behaviors through interaction and feedback, continuously improving performance.
              </p>
            </Feature>
            <Feature index={4} centered>
              <DiagramIcon className="w-12 h-12 mb-4 mx-auto" />
              <h3>Multi-Agent Systems</h3>
              <p className="text-center">
                Coordinated AI agents working together to solve complex problems that single agents cannot handle alone.
              </p>
            </Feature>
            <Feature index={5} centered>
              <LightningIcon className="w-12 h-12 mb-4 mx-auto" />
              <h3>Autonomous Agents</h3>
              <p className="text-center">
                Self-directed AI systems that perceive, reason, and act independently to achieve goals in dynamic environments.
              </p>
            </Feature>
          </Features>
        </div>
      </div>
      <div className="features-container x:border-t nextra-border">
        <div className="content-container">
          <h2 className="text-center text-4xl font-bold mb-4">How Everything Connects</h2>
          <p className="text-center text-lg mb-12 opacity-80 max-w-3xl mx-auto">
            Rexplore systems connect data, communication, and intelligence to form a unified AI ecosystem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Luso8</h3>
              <p className="opacity-70">Customer intelligence & data platform</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Voxtra</h3>
              <p className="opacity-70">Voice communication layer</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Industrial</h3>
              <p className="opacity-70">Real-world execution & automation</p>
            </div>
          </div>
          <p className="text-center text-lg font-medium">
            Together, they form a complete AI system for modern businesses.
          </p>
          <p className="subtitle text-center mt-8">
            <Link className={styles.cta} href="/docs">
              Explore Documentation <span>→</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
