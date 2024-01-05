import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <a href="/api/index.html">Go to Docs</a>
    </main>
  );
}
