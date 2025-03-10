import React from "react";
import { Label } from "@/components/Label";
import styles from "./FundamentosTecnicos.module.css";
import { CardFundamentos } from "@/components/CardFundamentos";
import { Button } from "@/components/Button";

export const FundamentosTecnicos = () => {
    const fundamentosDetails = [
        {
            id: "1",
            title: "Codigo Binario",
            description: "El lenguaje fundamental de las computadoras, basado en ceros y unos que representan estados eléctricos.",
            list: [
                "Represntacion digital",
                "Base de datos",
                "Codificación",
                "Comunicación"
            ],
            url: "/"
        },
        {
            id: "2",
            title: "Arquitectura de Computadoras",
            description: "La estructura y organización de los componentes de hardware y cómo interactúan entre sí. Implica el diseño de la arquitectura de la computadora.",
            list: [
                "Diseño de CPU",
                "Jerarquía de memoria",
                "Buses de datos",
                "Control de entrada/salida"
            ],
            url: "/"
        },
        {
            id: "3",
            title: "Principios Eléctricos",
            description: "Fundamentos de electricidad y circuitos que permiten el funcionamiento de los componentes electrónicos.",
            list: [
                "Voltaje y corriente",
                "Circuitos integrados",
                "Señales digitales",
                "Consumo energético"
            ],
            url: "/"
        }
    ]
  return (
    <>
      <section className={styles.section}>
        <article className={styles.article}>
          <div>
            <Label text="Principios" />
          </div>
          <h2>Fundamentos Técnicos</h2>
          <p>
          Comprende los principios técnicos que hacen posible el funcionamiento de las computadoras modernas.
          </p>
        </article>

        <section className={styles.cards}>
            {
                fundamentosDetails.map((item, index) => (
                    <CardFundamentos key={index} {...item} />
                ))
            }
        </section>

        <div className={styles.button}>
          <Button text="Ver todos los principios" url="/" />
        </div>
      </section>
    </>
  );
};
