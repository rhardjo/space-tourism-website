import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";

import content from "../public/data.json";

const Destinations: NextPage = () => {
  const [activeDestinationIndex, setActiveDestinationIndex] =
    useState<number>(0);
  const destinationData = content.destinations[activeDestinationIndex];

  return (
    <div className="min-h-screen w-full bg-destination-mobile md:bg-destination-tablet xl:bg-destination-desktop bg-cover bg-no-repeat">
      <Head>
        <title>{destinationData.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <section className="text-white pt-12 text-center">
          <h1 className="font-barlow-condensed text-subheading2 uppercase pb-8">
            <span className="text-white text-opacity-25 pr-2">01</span> Pick
            your destination
          </h1>

          <Image
            src={destinationData.images.png}
            alt={destinationData.name}
            width={170}
            height={170}
          />

          <section className="space-x-6 py-6">
            {content.destinations.map((destination, index) => (
              <button
                className={`uppercase font-barlow-condensed text-sm ${
                  activeDestinationIndex === index && "border-b-2"
                }`}
                key={destination.name}
                onClick={() => setActiveDestinationIndex(index)}
              >
                {destination.name}
              </button>
            ))}
          </section>

          <article>
            <h2 className="font-bellefair text-heading3 uppercase">
              {destinationData.name}
            </h2>
            <p className="font-barlow text-base text-space-accent">
              {destinationData.description}
            </p>
            <hr className="my-8 opacity-20" />
            <h4 className="font-barlow-condensed text-sm text-space-accent uppercase pb-1">
              Avg. distance
            </h4>
            <span className="font-bellefair text-xl uppercase">
              {destinationData.distance}
            </span>
            <h4 className="font-barlow-condensed text-sm text-space-accent uppercase pb-1 mt-8">
              Est. travel time
            </h4>
            <span className="font-bellefair text-xl uppercase">
              {destinationData.travel}
            </span>
          </article>
        </section>
      </Layout>
    </div>
  );
};

export default Destinations;
