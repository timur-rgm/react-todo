import { useState, DragEvent, SetStateAction, Dispatch } from "react";
import { useDispatch } from "react-redux";
import {
  changeTodoStatus,
  deleteTodo,
  editTodo,
  swapTodo,
} from "../../store/todo/todoSlice";

import EdiText from "react-editext";
import cn from "classnames";

import checkmarkIcon from "../../assets/images/checkmark-icon.svg";
import moveIcon from "../../assets/images/move-icon.svg";
import closeIcon from "../../assets/images/close-icon.svg";

import styles from "./Item.module.scss";

type ItemProps = {
  id: string;
  title: string;
  isCompleted: boolean;
  draggedTaskId: string | null;
  onDraggedTaskIdChange: Dispatch<SetStateAction<string | null>>;
};

function Item({
  id,
  title,
  isCompleted,
  draggedTaskId,
  onDraggedTaskIdChange,
}: ItemProps): JSX.Element {
  const [isSelected, setIsSelected] = useState(false);

  const dispatch = useDispatch();

  const handleTodoComplete = () => {
    dispatch(changeTodoStatus(id));
  };

  const handleTodoDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleTodoEdit = (value: string) => {
    dispatch(editTodo({ value, id }));
  };

  const handleOnDrop = (evt: DragEvent<HTMLLIElement>, id: string) => {
    evt.preventDefault();
    draggedTaskId &&
      dispatch(swapTodo({ draggedId: draggedTaskId, droppedId: id }));
    setIsSelected(false);
  };

  const handleOnDragStart = (id: string) => {
    onDraggedTaskIdChange(id);
  };

  const handleOnDragLeave = () => {
    setIsSelected(false);
  };

  const handleOnDragOver = (evt: DragEvent<HTMLLIElement>) => {
    evt.preventDefault();
    setIsSelected(true);
  };

  return (
    <li
      onDragStart={() => handleOnDragStart(id)}
      onDrop={(evt) => handleOnDrop(evt, id)}
      onDragLeave={handleOnDragLeave}
      onDragOver={(evt) => handleOnDragOver(evt)}
      className={cn(styles.item, {
        [styles.completed]: isCompleted,
        [styles.selected]: isSelected,
      })}
    >
      <img
        className={styles.completeIcon}
        src={checkmarkIcon}
        alt="Иконка выполнено"
        title="Завершить"
        width={25}
        height={25}
        onClick={handleTodoComplete}
      />
      <p className={styles.text}>
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
        draggable
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
