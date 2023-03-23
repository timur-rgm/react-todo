import { useState } from "react";
import { useSelector } from "react-redux";
import {
  getAllTodos,
  getActiveTodos,
  getCompletedTodos,
} from "../../store/todo/selectors";

import * as Tabs from "@radix-ui/react-tabs";

import Item from "../Item/Item";
import { useTabValue } from "../../hooks/useTabValue";
import { tabValues } from "../../const/tabs";

import styles from "./List.module.scss";

function List(): JSX.Element {
  const [value, setValue] = useTabValue();
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  const todos = useSelector(getAllTodos);
  const activeTodos = useSelector(getActiveTodos);
  const completedTodos = useSelector(getCompletedTodos);

  if (!todos.length) {
    return <p className={styles.listEmpty}>Список задач пока пуст...</p>;
  }

  return (
    <ul className={styles.list}>
      <Tabs.Root
        defaultValue={tabValues.all}
        value={value}
        onValueChange={(value) => setValue(value)}
      >
        <Tabs.List className={styles.tabsList} aria-label="Manage your account">
          <Tabs.Trigger className={styles.tabsTrigger} value={tabValues.all}>
            Все ({todos.length})
          </Tabs.Trigger>
          <Tabs.Trigger
            className={styles.tabsTrigger}
            value={tabValues.active}
            disabled={!activeTodos.length}
          >
            Активные ({activeTodos.length})
          </Tabs.Trigger>
          <Tabs.Trigger
            className={styles.tabsTrigger}
            value={tabValues.completed}
            disabled={!completedTodos.length}
          >
            Завершенные ({completedTodos.length})
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className={styles.tabsContent} value={tabValues.all}>
          {todos.map((todo) => (
            <Item
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              key={todo.id}
              draggedTaskId={draggedTaskId}
              onDraggedTaskIdChange={setDraggedTaskId}
            />
          ))}
        </Tabs.Content>
        <Tabs.Content className={styles.tabsContent} value={tabValues.active}>
          {activeTodos.map((todo) => (
            <Item
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              key={todo.id}
              draggedTaskId={draggedTaskId}
              onDraggedTaskIdChange={setDraggedTaskId}
            />
          ))}
        </Tabs.Content>
        <Tabs.Content
          className={styles.tabsContent}
          value={tabValues.completed}
        >
          {completedTodos.map((todo) => (
            <Item
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              key={todo.id}
              draggedTaskId={draggedTaskId}
              onDraggedTaskIdChange={setDraggedTaskId}
            />
          ))}
        </Tabs.Content>
      </Tabs.Root>
    </ul>
  );
}

export default List;
