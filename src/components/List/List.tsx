import * as Tabs from "@radix-ui/react-tabs";
import { useSelector } from "react-redux";
import {
  getAllTodos,
  getActiveTodos,
  getCompletedTodos,
} from "../../store/todo/selectors";
import Item from "../Item/Item";
import styles from "./List.module.scss";

function List(): JSX.Element {
  const allTodos = useSelector(getAllTodos);
  const activeTodos = useSelector(getActiveTodos);
  const completedTodos = useSelector(getCompletedTodos);

  const isEmpty = !allTodos.length;

  if (!isEmpty) {
    return (
      <ul className={styles.list}>
        <Tabs.Root defaultValue="tab1">
          <Tabs.List
            className={styles.tabsList}
            aria-label="Manage your account"
          >
            <Tabs.Trigger className={styles.tabsTrigger} value="tab1">
              Все ({allTodos.length})
            </Tabs.Trigger>
            <Tabs.Trigger className={styles.tabsTrigger} value="tab2">
              Активные ({activeTodos.length})
            </Tabs.Trigger>
            <Tabs.Trigger className={styles.tabsTrigger} value="tab3">
              Завершенные ({completedTodos.length})
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className={styles.tabsContent} value="tab1">
            {allTodos.map((todo) => (
              <Item
                id={todo.id}
                title={todo.title}
                isCompleted={todo.isCompleted}
                key={todo.id}
              />
            ))}
          </Tabs.Content>
          <Tabs.Content className={styles.tabsContent} value="tab2">
            {activeTodos.map((todo) => (
              <Item
                id={todo.id}
                title={todo.title}
                isCompleted={todo.isCompleted}
                key={todo.id}
              />
            ))}
          </Tabs.Content>
          <Tabs.Content className={styles.tabsContent} value="tab3">
            {completedTodos.map((todo) => (
              <Item
                id={todo.id}
                title={todo.title}
                isCompleted={todo.isCompleted}
                key={todo.id}
              />
            ))}
          </Tabs.Content>
        </Tabs.Root>
      </ul>
    );
  } else {
    return <p className={styles.listEmpty}>Список задач пока пуст...</p>;
  }
}

export default List;
