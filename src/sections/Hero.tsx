import React from "react";
import styles from "./Hero.module.css";
import { Button } from "@/components/Button";
import { SecondaryButton } from "@/components/SecondaryButton";

export const Hero = () => {
  return (
    <>
      <section className={styles.section}>
        <article className={styles.article}>
          <div>
            <p>
              <span>Bienvenido a HardwareClass</span>
            </p>
          </div>
          <h1>
            Descubre el <span> Universo del Hardware</span>
          </h1>
          <p className={styles.sub_text}>
            Una plataforma educativa donde aprenderás todo sobre los componentes
            de una computadora, su funcionamiento y los principios técnicos
            detrás de la tecnología moderna.
          </p>
          <section className={styles.buttons}>
            <Button text="Explorar componentes" url="/components" />
            <SecondaryButton text="Ver principios tecnicos" url="/principios" />
          </section>
        </article>
      </section>
    </>
  );
};
