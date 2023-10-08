import { Fragment } from 'react';
import { useRouter } from 'next/router';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';
import { getEventById, getFeaturedEvents } from '@/data/api-util';
import ErrorAlert from '@/components/error/error-alert';
function EventDetailPage({ event }: any) {
  // const router = useRouter();
  // const eventId = router.query.eventId;
  // const event: any = getEventById(eventId);

  if (!event) {
    return (
      <div className='center'>
        <p>Loading....</p>;
      </div>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p> {event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context: any) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((item: any) => ({ params: { eventId: item.id } }));
  return {
    paths: paths,
    fallback: 'blocking',
    //blocking 跟true的差別
    //blocking不會有loading畫面，但true有
  };
}
export default EventDetailPage;
