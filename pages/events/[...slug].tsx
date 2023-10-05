import { Fragment } from 'react';
import ResultsTitle from '@/components/events/results-title';
import { getFilteredEvents } from '@/data/dummy-data';
import { useRouter } from 'next/router';
import EventList from '@/components/events/events-list';
import Button from '@/components/button/Button';
import ErrorAlert from '@/components/error/error-alert';
function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData);

  if (!filterData) {
    return (
      <div className='center'>
        <ErrorAlert>
          <p> loading......</p>;
        </ErrorAlert>
      </div>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth < 1 || numMonth > 12) {
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

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

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

export default FilteredEventsPage;
