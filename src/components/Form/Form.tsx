import styles from "./Form.module.scss";

function Form() {
  return (
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
  );
}

export default Form;
