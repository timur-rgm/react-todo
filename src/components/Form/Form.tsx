import {FormEvent, useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todo/todoSlice";
import { createTodo } from "../../helpers/createTodo";
import styles from "./Form.module.scss";
import cn from "classnames";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputRef =  useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const handleInputChange = (value: string) => {
    setIsValid(true);
    setInputValue(value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!inputValue.trim()) {
      setIsValid(false);
      setInputValue("");
      inputRef?.current?.focus();
      return;
    }

    const newTodo = createTodo(inputValue);
    dispatch(addTodo(newTodo));
    setInputValue("");
    setIsValid(true);
    inputRef?.current?.focus();
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      {!isValid && (
        <p className={styles.errorMessage}>Поле не может быть пустым</p>
      )}
      <input
        ref={inputRef}
        className={cn(styles.input, { [styles.invalid]: !isValid })}
        type="text"
        placeholder="Придумайте задачу"
        autoFocus
        value={inputValue}
        onChange={(evt) => handleInputChange(evt.target.value)}
        onBlur={() => setIsValid(true)}
      />
      <button className={styles.button} type="submit">
        Добавить
      </button>
    </form>
  );
}

export default Form;
