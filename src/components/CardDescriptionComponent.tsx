import React from "react";
import styles from "./CardDescriptionComponent.module.css";
import { Button } from "./Button";

interface Props {
  name: string;
  subtitle: string;
  src: string;
  textCard: string;
  icon?: string;
  numberPrincipio?: string;
  slug: string;
}

export const CardDescriptionComponent = ({
  name,
  subtitle,
  src,
  textCard,
  icon,
  numberPrincipio,
  slug
}: Props) => {
  return (
    <>
      <article className={styles.card}>
        <picture>
          <img src={src} alt={name} />
        </picture>
        <article>
          <h3>
            {icon ? (
              <>
                <img src={icon} alt={name} className={styles.icon} />
                {name}
              </>
            ) : numberPrincipio ? (
              <>
                <h3 className={styles.principio}>
                  <span className={styles.number}>{numberPrincipio}</span>
                    {name}

                </h3>
              </>
            ) : (
              name
            )}
          </h3>
          <h4>{subtitle}</h4>
          <p>{textCard}</p>
          <div>
          <Button text={`Leer más acerca de ${name}`} url={`/componentes/${slug}`} />
          </div>
        </article>
      </article>
    </>
  );
};
