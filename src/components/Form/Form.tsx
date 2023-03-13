import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todo/todoSlice";
import { createTodo } from "../../helpers/createTodo";
import styles from "./Form.module.scss";

function Form() {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useDispatch();

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const newTodo = createTodo(inputValue);
    dispatch(addTodo(newTodo));
    setInputValue("");
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Напишите задачу..."
        value={inputValue}
        onChange={(evt) => handleInputChange(evt.target.value)}
      />
      <button className={styles.button} type="submit">
        Добавить
      </button>
    </form>
  );
}

export default Form;
