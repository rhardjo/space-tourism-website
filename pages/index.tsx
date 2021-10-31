import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

import {
  PAGE_TITLE,
  CALL_TO_ACTION,
  HERO_TEXT_LARGE,
  HERO_DESCRIPTION,
  HERO_TEXT_SMALL,
} from '../constants/pages/homepage'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full bg-home-mobile md:bg-home-tablet xl:bg-home-desktop bg-cover bg-no-repeat">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_TITLE} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="h-full lg:grid lg:grid-cols-2 lg:items-end lg:gap-64">
          <section className="text-white pt-12 md:pt-28 lg:pt-64 text-center lg:text-left">
            <h2 className="font-barlow-condensed text-subheading2 md:text-xl lg:text-heading5 uppercase text-space-accent">
              {HERO_TEXT_SMALL}
            </h2>
            <h1 className="font-bellefair text-[80px] md:text-heading1 md:pt-4 lg:pt-6 uppercase">
              {HERO_TEXT_LARGE}
            </h1>
            <p className="font-barlow text-space-accent text-base lg:text-lg mx-auto lg:mx-0 md:leading-7 lg:leading-8 md:max-w-sm lg:max-w-md p-2 lg:p-0">
              {HERO_DESCRIPTION}
            </p>
          </section>

          <Link href="/destination">
            <a className="flex justify-center items-center font-bellefair uppercase text-xl md:text-heading4 text-space-black leading-6 tracking-wide bg-white h-36 w-36 md:h-60 md:w-60 lg:h-72 lg:w-72 rounded-full mx-auto lg:mr-0 mt-20 md:mt-40 transition-shadow hover:ring-[5rem] ring-white ring-opacity-10">
              {CALL_TO_ACTION}
            </a>
          </Link>
        </div>
      </Layout>
    </div>
  )
}

export default Home
