"use client";

import styles from "./page.module.css";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Se empieza el proyecto</h1>
      </div>
    </>
  );
}
