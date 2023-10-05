import Button from '@/components/button/Button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import classes from './event-item.module.scss';
interface EventItemProps {
  event: {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
  };
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  // console.log(event);
  const { title, image, date, location, id } = event;
  const newData = new Date(date).toLocaleDateString('zh-TW', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(',', '\n');
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{newData}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink} text={'Explore link'}></Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
