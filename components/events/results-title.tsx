import Button from '../button/Button';
import classes from './results-title.module.css';

function ResultsTitle(props: any) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events' text={'Show all events'} />
    </section>
  );
}

export default ResultsTitle;
