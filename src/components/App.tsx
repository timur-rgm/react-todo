import * as Tabs from "@radix-ui/react-tabs";

import checkmarkIcon from "../assets/images/checkmark-icon.svg";
import moveIcon from "../assets/images/move-icon.svg";
import editIcon from "../assets/images/edit-icon.svg";
import closeIcon from "../assets/images/close-icon.svg";
import styles from "./App.module.scss";

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
          <Tabs.Root defaultValue="tab1">
            <Tabs.List className={styles.tabsList} aria-label="Manage your account">
              <Tabs.Trigger className={styles.tabsTrigger} value="tab1">
                Все (4)
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.tabsTrigger} value="tab2">
                Активные (3)
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.tabsTrigger} value="tab3">
                Завершенные (1)
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className={styles.tabsContent} value="tab1">
              <li className={styles.listItem}>
                <img
                  className={styles.completeIcon}
                  src={checkmarkIcon}
                  alt="Иконка выполнено"
                  width={22}
                  height={22}
                />
                <img
                  className={styles.moveIcon}
                  src={moveIcon}
                  alt="Иконка редактировать"
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
                <img
                  className={styles.moveIcon}
                  src={moveIcon}
                  alt="Иконка редактировать"
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
                <img
                  className={styles.moveIcon}
                  src={moveIcon}
                  alt="Иконка редактировать"
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
                <img
                  className={styles.moveIcon}
                  src={moveIcon}
                  alt="Иконка редактировать"
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
            </Tabs.Content>
            <Tabs.Content className={styles.tabsContent} value="tab2">
              <li className={styles.listItem}>
                <img
                  className={styles.completeIcon}
                  src={checkmarkIcon}
                  alt="Иконка выполнено"
                  width={22}
                  height={22}
                />
                <img
                  className={styles.moveIcon}
                  src={moveIcon}
                  alt="Иконка редактировать"
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
                <img
                  className={styles.moveIcon}
                  src={moveIcon}
                  alt="Иконка редактировать"
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
                <img
                  className={styles.moveIcon}
                  src={moveIcon}
                  alt="Иконка редактировать"
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
            </Tabs.Content>
            <Tabs.Content className={styles.tabsContent} value="tab3">
              <li className={styles.listItem}>
                <img
                  className={styles.completeIcon}
                  src={checkmarkIcon}
                  alt="Иконка выполнено"
                  width={22}
                  height={22}
                />
                <img
                  className={styles.moveIcon}
                  src={moveIcon}
                  alt="Иконка редактировать"
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
            </Tabs.Content>
          </Tabs.Root>
        </ul>
      </div>
    </div>
  );
}

export default App;
