import { Todo } from "../models/Todo";
import classes from "./TodoItem.module.css";
import logo from "../files/cancel.svg"

const TodoItem: React.FC<{
  text: string;
  onRemoveHandler: () => void;
}> = (props) => {
  return (
    <li className={classes.item}>
      {props.text}
      <button onClick={props.onRemoveHandler}><img src={logo} width={'30px'} height={'30px'}/></button>
    </li>
  );
};

export default TodoItem;
