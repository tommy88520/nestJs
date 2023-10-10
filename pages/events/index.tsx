import Head from 'next/head';

import EventList from '@/components/events/events-list';
import { useRouter } from 'next/router';
import { getAllEvents } from '@/helpers/api-util';
import EventSearch from '@/components/events/events-search';
function AllEventsPage(props: any) {
  const router = useRouter();
  function findEventsHandler(year: any, month: any) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name='description' content='Find a lot of great events that allow you to evolve...' />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
