import * as Tabs from "@radix-ui/react-tabs";
import { useSelector } from "react-redux";
import {
  getAllTodos,
  getActiveTodos,
  getCompletedTodos,
} from "../../store/todo/selectors";
import Item from "../Item/Item";
import styles from "./List.module.scss";
import { useState } from "react";

function List(): JSX.Element {
  const [currentTabValue, setCurrentTabValue] = useState("tab1");

  const todos = useSelector(getAllTodos);
  const activeTodos = useSelector(getActiveTodos);
  const completedTodos = useSelector(getCompletedTodos);

  const isTodosEmpty = !todos.length;
  const isActiveTodosEmpty = !activeTodos.length;
  const isCompletedTodosEmpty = !completedTodos.length;

  const tabValues = {
    all: "tab1",
    active: "tab2",
    completed: "tab3",
  }

  const handleValueChange = (value: string) => {
    setCurrentTabValue(value);
  };

  const getValue = (): string => {
    let value = tabValues.all;

    if (currentTabValue === tabValues.active) {
      if (isActiveTodosEmpty) {
        value = tabValues.all;
        setCurrentTabValue(tabValues.all);
      } else {
        value = currentTabValue;
      }

      return value;
    }

    if (currentTabValue === tabValues.completed) {
      if (isCompletedTodosEmpty) {
        value = tabValues.all;
        setCurrentTabValue(tabValues.all);
      } else {
        value = currentTabValue;
      }

      return value;
    }

    return value;
  };

  if (!isTodosEmpty) {
    return (
      <ul className={styles.list}>
        <Tabs.Root
          defaultValue="tab1"
          value={getValue()}
          onValueChange={(value) => handleValueChange(value)}
        >
          <Tabs.List
            className={styles.tabsList}
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className={styles.tabsTrigger}
              value="tab1"
            >
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
          <Tabs.Content
            className={styles.tabsContent}
            value="tab1"
            onChange={() => console.log("change")}
          >
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
