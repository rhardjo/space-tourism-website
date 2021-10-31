import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

import content from '../data.json'
import { PAGE_TITLE, TERMINOLOGY } from '../constants/pages/technology'

const Technology: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const techData = content.technology[currentIndex]

  return (
    <div className="min-h-screen w-full bg-technology-mobile md:bg-technology-tablet xl:bg-technology-desktop bg-cover bg-no-repeat overflow-hidden">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_TITLE} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <section className="text-white pt-6 lg:pt-16 text-center">
          <PageHeader pageIndex="03" pageTitle={PAGE_TITLE} />

          <div className="lg:grid lg:grid-cols-[1fr,700px,2fr] w-full">
            <article className="relative -mx-6 md:-mx-10 block w-[375px] h-[170px] md:w-[768px] md:h-[310px] lg:hidden">
              <Image
                src={techData.images.landscape}
                alt={techData.name}
                layout="fill"
                className="object-contain"
              />
            </article>
            <article className="hidden lg:block order-3 -mr-36">
              <Image
                src={techData.images.portrait}
                alt={techData.name}
                width={515}
                height={527}
              />
            </article>

            <section className="space-x-4 py-5 md:pt-14 md:pb-11 order-1 lg:grid lg:grid-cols-1 lg:space-x-0 lg:w-20 gap-8">
              {content.technology.map((tech, index) => (
                <button
                  className={`font-bellefair text-base md:text-[24px] lg:text-heading4 w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-[1px] border-opacity-25 hover:border-opacity-100 ${
                    currentIndex === index
                      ? 'bg-white text-space-black'
                      : 'bg-transparent'
                  }`}
                  key={tech.name}
                  onClick={() => setCurrentIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </section>

            <article className="order-2 lg:text-left lg:self-center">
              <h3 className="font-barlow-condensed text-sm md:text-subheading2 text-space-accent tracking-widest uppercase pb-2 md:pb-4">
                {TERMINOLOGY}
              </h3>
              <h2 className="font-bellefair text-2xl md:text-[40px] md:leading-[46px] lg:text-heading3 uppercase pb-4">
                {techData.name}
              </h2>
              <p className="font-barlow text-[15px] md:text-base leading-6 md:leading-[28px] lg:text-body max-w-md mx-auto lg:mx-0 text-space-accent">
                {techData.description}
              </p>
            </article>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Technology
