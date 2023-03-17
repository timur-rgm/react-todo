import Form from "../Form/Form";
import List from "../List/List";
import styles from "./App.module.scss";

function App(): JSX.Element {

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;
