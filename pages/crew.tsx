import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

import content from '../data.json'
import { PAGE_TITLE } from '../constants/pages/crew'

const Crew: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const crewData = content.crew[currentIndex]

  return (
    <div className="min-h-screen w-full bg-crew-mobile md:bg-crew-tablet xl:bg-crew-desktop bg-cover bg-no-repeat">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_TITLE} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <section className="text-white pt-6 lg:pt-16 text-center">
          <PageHeader pageIndex="02" pageTitle={PAGE_TITLE} />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative w-44 h-44 md:w-[572px] md:h-[572px] -mb-6 md:mt-3 lg:mt-14 mx-auto order-1 md:order-3">
              <Image
                src={crewData.images.png}
                alt={crewData.name}
                layout="fill"
                className="object-contain"
              />
            </div>
            <section className="text-white pt-6 text-center lg:text-left md:-mb-6 order-2 lg:order-2 lg:flex lg:flex-col-reverse lg:justify-center">
              <section className="space-x-4 lg:space-x-6 py-5 border-t-[1px] md:border-0 border-opacity-20 lg:pt-24">
                {content.crew.map((crewMember, index) => (
                  <button
                    className={`w-[10px] h-[10px] lg:w-4 lg:h-4 rounded-full bg-white hover:bg-opacity-50 ${
                      currentIndex === index
                        ? 'bg-opacity-100'
                        : 'bg-opacity-20'
                    }`}
                    key={crewMember.name}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </section>

              <article>
                <h3 className="font-bellefair text-subheading2 md:text-2xl lg:text-heading4 text-white text-opacity-50 uppercase pb-2 lg:pb-4">
                  {crewData.role}
                </h3>
                <h2 className="font-bellefair text-2xl md:text-[40px] lg:text-heading3 leading-[46px] uppercase pb-5 whitespace-nowrap">
                  {crewData.name}
                </h2>
                <p className="font-barlow text-base lg:text-body leading-7 md:max-w-prose md:mx-auto text-space-accent lg:max-w-md lg:mx-0">
                  {crewData.bio}
                </p>
              </article>
            </section>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Crew
