import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
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
      </div>
    </div>
  );
}

export default App;
