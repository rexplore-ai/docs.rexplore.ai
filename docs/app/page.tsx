import { GearIcon, DiagramIcon, LightningIcon } from '@components/icons'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from 'nextra-theme-docs'
import luso8Image from 'public/assets/luso8-main-page.png'
import voxtraImage from 'public/assets/votra.png'
import { Feature, Features } from './_components/features'
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
        <p
          className="subtitle"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <Link className={styles.cta} href="/voxtra">
            Get Started <span>→</span>
          </Link>
          <Link
            className={styles.cta}
            href="#products"
            style={{
              background: 'transparent',
              border: '2px solid currentColor',
              color: 'inherit',
              boxShadow: 'none'
            }}
          >
            Explore Products
          </Link>
        </p>
      </div>
      <div id="products" className="features-container x:border-b nextra-border">
        <div className="content-container">
          <h2 className="text-center text-4xl font-bold mb-4">Our AI Systems</h2>
          <p className="text-center text-lg mb-12 opacity-80">
            Powerful platforms built on cutting-edge AI research
          </p>
          <Features>
            <Feature index={0} centered id="luso8-card" className="product-card">
              <div className="product-card__media">
                <Image src={luso8Image} alt="Luso8 Cloud" loading="eager" />
              </div>
              <div className="product-card__body">
                <h3>Luso8 Cloud</h3>
                <p>
                  AI-native business operating system for customer data, engagement, and growth.
                </p>
                <span className="product-card__cta">Coming soon</span>
              </div>
            </Feature>
            <Feature
              index={1}
              centered
              id="voxtra-card"
              href="/voxtra"
              className="product-card"
            >
              <div className="product-card__media">
                <Image src={voxtraImage} alt="Voxtra" loading="eager" />
              </div>
              <div className="product-card__body">
                <h3>Voxtra</h3>
                <p>
                  Voice infrastructure for AI agents — bridging Asterisk telephony with real-time AI.
                </p>
                <span className="product-card__cta">Read the docs →</span>
              </div>
            </Feature>
            <Feature
              index={2}
              centered
              id="industrial-card"
              className="product-card product-card--dark"
            >
              <div className="product-card__media product-card__media--gradient">
                <GearIcon className="product-card__icon" />
              </div>
              <div className="product-card__body">
                <h3>Industrial Automation</h3>
                <p>
                  Autonomous systems for industrial operations powered by multi-agent AI.
                </p>
                <span className="product-card__cta">Coming soon</span>
              </div>
            </Feature>
          </Features>
        </div>
      </div>
      <div className="features-container">
        <div className="content-container">
          <h2 className="text-center text-4xl font-bold mb-4">
            Built on Rexplore Research
          </h2>
          <p className="text-center text-lg mb-12 opacity-80 max-w-3xl mx-auto">
            Our systems are powered by advanced research in reinforcement learning, multi-agent
            systems, and autonomous agents. We build AI that learns, adapts, and collaborates to
            solve complex real-world problems.
          </p>
          <Features>
            <Feature index={3} centered className="research-card">
              <div className="research-card__icon">
                <LightningIcon />
              </div>
              <h3>Reinforcement Learning</h3>
              <p>
                Systems that learn optimal behaviors through interaction and feedback,
                continuously improving performance.
              </p>
            </Feature>
            <Feature index={4} centered className="research-card">
              <div className="research-card__icon">
                <DiagramIcon />
              </div>
              <h3>Multi-Agent Systems</h3>
              <p>
                Coordinated AI agents working together to solve complex problems that single
                agents cannot handle alone.
              </p>
            </Feature>
            <Feature index={5} centered className="research-card">
              <div className="research-card__icon">
                <LightningIcon />
              </div>
              <h3>Autonomous Agents</h3>
              <p>
                Self-directed AI systems that perceive, reason, and act independently to achieve
                goals in dynamic environments.
              </p>
            </Feature>
          </Features>
        </div>
      </div>
      <div className="features-container x:border-t nextra-border">
        <div className="content-container">
          <h2 className="text-center text-4xl font-bold mb-4">How Everything Connects</h2>
          <p className="text-center text-lg mb-12 opacity-80 max-w-3xl mx-auto">
            Rexplore systems connect data, communication, and intelligence to form a unified AI
            ecosystem.
          </p>
          <div className="connect-grid">
            <div className="connect-grid__item">
              <h3>Luso8</h3>
              <p>Customer intelligence &amp; data platform</p>
            </div>
            <div className="connect-grid__item connect-grid__item--accent">
              <h3>Voxtra</h3>
              <p>Voice communication layer</p>
            </div>
            <div className="connect-grid__item">
              <h3>Industrial</h3>
              <p>Real-world execution &amp; automation</p>
            </div>
          </div>
          <p className="text-center text-lg font-medium mt-8">
            Together, they form a complete AI system for modern businesses.
          </p>
          <p className="subtitle text-center mt-8">
            <Link className={styles.cta} href="/voxtra/getting-started">
              Get started with Voxtra <span>→</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
