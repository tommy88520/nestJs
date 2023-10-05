import { useRef } from 'react';
import Button from '../button/Button';
import classes from './events-search.module.css';
const EventSearch = (props: any) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  function submitHandler(event: any) {
    event.preventDefault();
    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;
    props.onSearch(selectedYear, selectedMonth);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={yearInputRef}>
            <option value='2021'>2021</option>
            <option value='2023'>2023</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthInputRef}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
          </select>
        </div>
      </div>
      <Button text={'Find Event'} />
    </form>
  );
};

export default EventSearch;
