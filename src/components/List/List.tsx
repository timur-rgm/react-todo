import * as Tabs from "@radix-ui/react-tabs";
import { useSelector } from "react-redux";
import {
  getAllTodos,
  getActiveTodos,
  getCompletedTodos,
} from "../../store/todo/selectors";
import Item from "../Item/Item";
import { useTabValue } from "../../hooks/useTabValue";
import styles from "./List.module.scss";

function List(): JSX.Element {
  const [value, setValue] = useTabValue();

  const todos = useSelector(getAllTodos);
  const activeTodos = useSelector(getActiveTodos);
  const completedTodos = useSelector(getCompletedTodos);

  const isTodosEmpty = !todos.length;
  const isActiveTodosEmpty = !activeTodos.length;
  const isCompletedTodosEmpty = !completedTodos.length;

  if (!isTodosEmpty) {
    return (
      <ul className={styles.list}>
        <Tabs.Root
          defaultValue="tab1"
          value={value}
          onValueChange={(value) => setValue(value)}
        >
          <Tabs.List
            className={styles.tabsList}
            aria-label="Manage your account"
          >
            <Tabs.Trigger className={styles.tabsTrigger} value="tab1">
              Все ({todos.length})
            </Tabs.Trigger>
            <Tabs.Trigger
              className={styles.tabsTrigger}
              value="tab2"
              disabled={isActiveTodosEmpty}
            >
              Активные ({activeTodos.length})
            </Tabs.Trigger>
            <Tabs.Trigger
              className={styles.tabsTrigger}
              value="tab3"
              disabled={isCompletedTodosEmpty}
            >
              Завершенные ({completedTodos.length})
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className={styles.tabsContent} value="tab1">
            {todos.map((todo) => (
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
