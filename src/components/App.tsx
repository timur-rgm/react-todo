import styles from "./App.module.scss";
import checkmarkIcon from "../assets/images/checkmark-icon.svg";
import editIcon from "../assets/images/edit-icon.svg";
import closeIcon from "../assets/images/close-icon.svg";

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Введите задачу..."
          />
          <button className={styles.button} type="submit">
            Добавить
          </button>
        </form>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <img
              className={styles.completeIcon}
              src={checkmarkIcon}
              alt="Иконка выполнено"
              width={22}
              height={22}
            />
            Разработка архитектуры проекта
            <img
              className={styles.editIcon}
              src={editIcon}
              alt="Иконка редактировать"
              width={15}
              height={15}
            />
            <img
              className={styles.closeIcon}
              src={closeIcon}
              alt="Иконка удалить"
              width={22}
              height={22}
            />
          </li>
          <li className={styles.listItem}>
            <img
              className={styles.completeIcon}
              src={checkmarkIcon}
              alt="Иконка выполнено"
              width={22}
              height={22}
            />
            Разворачивание и старт проекта
            <img
              className={styles.editIcon}
              src={editIcon}
              alt="Иконка редактировать"
              width={15}
              height={15}
            />
            <img
              className={styles.closeIcon}
              src={closeIcon}
              alt="Иконка удалить"
              width={22}
              height={22}
            />
          </li>
          <li className={styles.listItem}>
            <img
              className={styles.completeIcon}
              src={checkmarkIcon}
              alt="Иконка выполнено"
              width={22}
              height={22}
            />
            Пробелы в теории
            <img
              className={styles.editIcon}
              src={editIcon}
              alt="Иконка редактировать"
              width={15}
              height={15}
            />
            <img
              className={styles.closeIcon}
              src={closeIcon}
              alt="Иконка удалить"
              width={22}
              height={22}
            />
          </li>
          <li className={styles.listItem}>
            <img
              className={styles.completeIcon}
              src={checkmarkIcon}
              alt="Иконка выполнено"
              width={22}
              height={22}
            />
            Заплатить за свет
            <img
              className={styles.editIcon}
              src={editIcon}
              alt="Иконка редактировать"
              width={15}
              height={15}
            />
            <img
              className={styles.closeIcon}
              src={closeIcon}
              alt="Иконка удалить"
              width={22}
              height={22}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
