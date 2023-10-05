import Link from 'next/link';
import ArrowRightIcon from '../icons/arrow-right-icon';

import classes from './button.module.scss';
interface iButton {
  link?: string;
  text: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Button: React.FC<iButton> = ({ link, text, onClick }) => {
  // const { link, children } = items;
  return link ? (
    <Link href={link} className={classes.btn}>
      <span>{text}</span>
      <span className={classes.icon}>
        <ArrowRightIcon />
      </span>
    </Link>
  ) : (
    <button className={classes.btn} onClick={() => onClick} aria-hidden='true'>
      {text}
    </button>
  );
};
export default Button;
