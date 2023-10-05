import EventList from '@/components/events/events-list';
import { useRouter } from 'next/router';
import { getAllEvents } from '@/data/dummy-data';
import EventSearch from '@/components/events/events-search';
function AllEventsPage() {
  const router = useRouter();
  function findEventsHandler(year: any, month: any) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={getAllEvents()} />
    </div>
  );
}
export default AllEventsPage;
