import * as Tabs from "@radix-ui/react-tabs";
import Item from "../Item/Item";
import styles from "./List.module.scss";

function List(): JSX.Element {
  return (
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
          <Item title="Разработка архитектуры проекта" />
          <Item title="Разворачивание и старт проекта" />
          <Item title="Пробелы в теории" />
          <Item title="Заплатить за свет" isCompleted />
        </Tabs.Content>
        <Tabs.Content className={styles.tabsContent} value="tab2">
          <Item title="Разработка архитектуры проекта" />
          <Item title="Разворачивание и старт проекта" />
          <Item title="Пробелы в теории" />
        </Tabs.Content>
        <Tabs.Content className={styles.tabsContent} value="tab3">
          <Item title="Заплатить за свет" isCompleted />
        </Tabs.Content>
      </Tabs.Root>
    </ul>
  );
}

export default List;
