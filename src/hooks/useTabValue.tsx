import { useState } from "react";
import { useSelector } from "react-redux";
import { getActiveTodos, getCompletedTodos } from "../store/todo/selectors";
import { tabValues } from "../const/tabs";

export const useTabValue = () => {
  const [currentTabValue, setCurrentTabValue] = useState(tabValues.all);

  const activeTodos = useSelector(getActiveTodos);
  const completedTodos = useSelector(getCompletedTodos);

  const setValue = (value: string) => {
    setCurrentTabValue(value);
  };

  let value = tabValues.all;

  if (currentTabValue === tabValues.active) {
    if (!activeTodos.length) {
      setCurrentTabValue(tabValues.all);
    } else {
      value = currentTabValue;
    }

    return [value, setValue] as const;
  }

  if (currentTabValue === tabValues.completed) {
    if (!completedTodos.length) {
      setCurrentTabValue(tabValues.all);
    } else {
      value = currentTabValue;
    }

    return [value, setValue] as const;
  }

  return [value, setValue] as const;
};
