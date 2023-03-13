import cn from "classnames";
import styles from "./Item.module.scss";
import checkmarkIcon from "../../assets/images/checkmark-icon.svg";
import moveIcon from "../../assets/images/move-icon.svg";
import editIcon from "../../assets/images/edit-icon.svg";
import closeIcon from "../../assets/images/close-icon.svg";
import { useDispatch } from "react-redux";
import { changeTodoStatus, deleteTodo } from "../../store/todo/todoSlice";

type ItemProps = {
  id: string;
  title: string;
  isCompleted: boolean;
};

function Item({ id, title, isCompleted }: ItemProps): JSX.Element {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(changeTodoStatus(id));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(id));
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
        onClick={handleCompleteClick}
      />
      <p>{title}</p>
      <img
        className={styles.editIcon}
        src={editIcon}
        alt="Иконка редактировать"
        title="Редактировать"
        width={15}
        height={15}
      />
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
        onClick={handleDeleteClick}
      />
    </li>
  );
}

export default Item;
