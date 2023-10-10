import Head from 'next/head';
import { getFeaturedEvents } from '@/helpers/api-util';
import EventList from '@/components/events/events-list';
import NewsletterRegistration from '../components/input/newsletter-registration';
import fs from 'fs';
import Link from 'next/link';
import path from 'path';

function HomePage(props: any) {
  const { featureEvents } = props;

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name='description' content='Find a lot of great events that allow you to evolve...' />
      </Head>
      <NewsletterRegistration />
      <EventList events={featureEvents} />
    </div>
  );
}

export async function getStaticProps() {
  // const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');

  // async function readFile() {
  //   const result = await fs.promises.readFile(filePath);
  //   return result;
  // }

  // const dataObject: any = await readFile();
  // const { products } = JSON.parse(dataObject);
  const featureEvents = await getFeaturedEvents();
  if (!featureEvents) {
    return {
      redirect: {
        destination: 'no/data',
      },
    };
  }

  if (!featureEvents.length) {
    return { notFound: true };
  }
  return {
    props: {
      featureEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
