import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout'

import content from '../public/data.json'

const Technology: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const techData = content.technology[currentIndex]

  return (
    <div className="min-h-screen w-full bg-technology-mobile md:bg-technology-tablet xl:bg-technology-desktop bg-cover bg-no-repeat">
      <Head>
        <title>Technology</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <section className="text-white pt-6 text-center">
          <h1 className="font-barlow-condensed text-subheading2 uppercase pb-8">
            <span className="text-white text-opacity-25 pr-2">03</span> Space
            launch 101
          </h1>

          <article className="-mx-6 block">
            <Image
              src={techData.images.landscape}
              alt={techData.name}
              width={375}
              height={170}
            />
          </article>

          <section className="space-x-4 py-5">
            {content.technology.map((tech, index) => (
              <button
                className={`font-bellefair text-base w-10 h-10 rounded-full border-[1px] border-opacity-25 ${
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

          <article>
            <h3 className="font-barlow-condensed text-sm text-space-accent tracking-widest uppercase pb-2">
              The terminology...
            </h3>
            <h2 className="font-bellefair text-2xl uppercase pb-4">
              {techData.name}
            </h2>
            <p className="font-barlow text-[15px] leading-6 text-space-accent">
              {techData.description}
            </p>
          </article>
        </section>
      </Layout>
    </div>
  )
}

export default Technology
