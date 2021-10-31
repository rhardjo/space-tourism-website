import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

import content from '../data.json'
import {
  PAGE_TITLE,
  STATS_DISTANCE,
  STATS_TIME,
} from '../constants/pages/destination'

const Destination: NextPage = () => {
  const [activeDestinationIndex, setActiveDestinationIndex] =
    useState<number>(0)
  const destinationData = content.destinations[activeDestinationIndex]

  return (
    <div className="min-h-screen w-full bg-destination-mobile md:bg-destination-tablet xl:bg-destination-desktop bg-cover bg-no-repeat">
      <Head>
        <title>{destinationData.name}</title>
        <meta name="description" content={PAGE_TITLE} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="lg:grid lg:grid-cols-2 lg:items-end lg:gap-64">
          <section className="text-white pt-12 text-center">
            <PageHeader pageIndex="01" pageTitle={PAGE_TITLE} />

            <div className="relative mx-auto my-4 lg:mt-14 h-44 w-44 md:h-72 md:w-72 lg:h-[445px] lg:w-[445px] lg:ml-16">
              <Image
                src={destinationData.images.png}
                alt={destinationData.name}
                layout="fill"
                className="object-contain"
              />
            </div>
          </section>
          <section className="text-white text-center lg:text-left">
            <section className="space-x-6 py-6 md:py-8">
              {content.destinations.map((destination, index) => (
                <button
                  className={`uppercase font-barlow-condensed text-sm md:text-subheading2 pb-2 md:pb-3 border-white hover:border-b-[3px] hover:border-opacity-50 ${
                    activeDestinationIndex === index &&
                    'border-b-2 md:border-b-[3px]'
                  }`}
                  key={destination.name}
                  onClick={() => setActiveDestinationIndex(index)}
                >
                  {destination.name}
                </button>
              ))}
            </section>

            <article className="md:max-w-xl mx-auto">
              <h2 className="font-bellefair text-heading3 md:text-[80px] lg:text-heading2 md:leading-[92px] uppercase">
                {destinationData.name}
              </h2>
              <p className="font-barlow text-base lg:text-body leading-[28px] lg:pt-4 text-space-accent">
                {destinationData.description}
              </p>
              <hr className="my-8 lg:mt-14 opacity-20" />
              <aside className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <section>
                  <h4 className="font-barlow-condensed text-sm tracking-widest text-space-accent uppercase pb-3">
                    {STATS_DISTANCE}
                  </h4>
                  <span className="font-bellefair text-subheading1 uppercase">
                    {destinationData.distance}
                  </span>
                </section>
                <section>
                  <h4 className="font-barlow-condensed text-sm tracking-widest text-space-accent uppercase pb-3">
                    {STATS_TIME}
                  </h4>
                  <span className="font-bellefair text-subheading1 uppercase">
                    {destinationData.travel}
                  </span>
                </section>
              </aside>
            </article>
          </section>
        </div>
      </Layout>
    </div>
  )
}

export default Destination
