import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todo/todoSlice";
import { createTodo } from "../../helpers/createTodo";
import styles from "./Form.module.scss";
import cn from "classnames";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const dispatch = useDispatch();

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!inputValue.trim()) {
      setIsValid(false);
      setInputValue("");
      return;
    }

    const newTodo = createTodo(inputValue);
    dispatch(addTodo(newTodo));
    setInputValue("");
    setIsValid(true);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      {!isValid && (
        <p className={styles.errorMessage}>Поле не может быть пустым</p>
      )}
      <input
        className={cn(styles.input, { [styles.invalid]: !isValid })}
        type="text"
        placeholder="Придумайте задачу"
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
