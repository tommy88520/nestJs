import classes from './comment-list.module.css';

function CommentList(props: any) {
  return (
    <ul className={classes.comments}>
      {props.items.map((e: any) => (
        <li key={e._id}>
          <p>{e.text}</p>
          <div>
            By <address>{e.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
