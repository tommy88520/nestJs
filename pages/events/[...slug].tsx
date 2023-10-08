import { Fragment } from 'react';
import ResultsTitle from '@/components/events/results-title';
import { getFilteredEvents } from '@/data/api-util';
import { useRouter } from 'next/router';
import EventList from '@/components/events/events-list';
import Button from '@/components/button/Button';
import ErrorAlert from '@/components/error/error-alert';
function FilteredEventsPage({ filteredEvents, hasError, numYear, numMonth }: any) {
  // const router = useRouter();
  // const filterData = router.query.slug;
  // console.log(filterData);

  if (!filteredEvents) {
    return (
      <div className='center'>
        <ErrorAlert>
          <p> loading......</p>;
        </ErrorAlert>
      </div>
    );
  }

  if (hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Not a Numberr</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events' text={'Show all events1'} />
        </div>
      </Fragment>
    );
  }

  if (!filteredEvents || !filteredEvents.length) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> No events found for the chosen filter</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events' text={'Show all events1'} />
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  const filterData = params.slug;
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth < 1 || numMonth > 12) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination:'/error'
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  console.log(1, filteredEvents);

  return {
    props: { filteredEvents, numYear, numMonth },
  };
}

export default FilteredEventsPage;
