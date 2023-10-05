import EventItem from './event-item';
import classes from './event-list.module.scss';

interface iEventListProps {
  events: Event[];
}

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

function EventList({ events }: iEventListProps) {
  return (
    <ul className={classes.list}>
      {events.map((event: Event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
