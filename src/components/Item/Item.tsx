import EdiText from "react-editext";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { changeTodoStatus, deleteTodo, editTodo } from "../../store/todo/todoSlice";
import checkmarkIcon from "../../assets/images/checkmark-icon.svg";
import moveIcon from "../../assets/images/move-icon.svg";
import closeIcon from "../../assets/images/close-icon.svg";
import styles from "./Item.module.scss";

type ItemProps = {
  id: string;
  title: string;
  isCompleted: boolean;
};

function Item({ id, title, isCompleted}: ItemProps): JSX.Element {
  const dispatch = useDispatch();

  const handleTodoComplete = () => {
    dispatch(changeTodoStatus(id));
  };

  const handleTodoDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleTodoEdit = (value: string) => {
    dispatch(editTodo({value, id}));
  };

  return (
    <li className={cn(styles.item, { [styles.completed]: isCompleted })}>
      <img
        className={styles.completeIcon}
        src={checkmarkIcon}
        alt="Иконка выполнено"
        title="Завершить"
        width={25}
        height={25}
        onClick={handleTodoComplete}
      />
      <p>
        <EdiText
          type="text"
          value={title}
          onSave={handleTodoEdit}
          showButtonsOnHover
          submitOnUnfocus
          submitOnEnter
          editButtonClassName={styles.editButton}
          saveButtonClassName={styles.saveButton}
          cancelButtonClassName={styles.cancelButton}
        />
      </p>
      <img
        className={styles.moveIcon}
        src={moveIcon}
        alt="Иконка переместить"
        title="Переместить"
        width={22}
        height={22}
      />
      <img
        className={styles.closeIcon}
        src={closeIcon}
        alt="Иконка удалить"
        title="Удалить"
        width={22}
        height={22}
        onClick={handleTodoDelete}
      />
    </li>
  );
}

export default Item;
