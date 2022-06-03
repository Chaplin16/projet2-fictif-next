import React from "react";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function Blog(props) {
  return (
    <div>
      <div className={styles.main}>
        <div>
          <h1>Bienvenue sur le blog 😃</h1>
          <p>Voici les articles</p>
        </div>
        <div className={styles.content}>
          {props.data.map((item) => (
            <div className={styles.card} key={uuidv4()}>
              <div className={styles.cardBody}>
                <p>
                  {`Auteur :`} {item.id}
                </p>
                <h2 className={styles.h2}>{item.title}</h2>
                <p className="card-title">{item.body.slice(0, 20) + `...`}</p>
                <Link
                  href={`/blog/${item.id.toString()}`}
                  className="card-link"
                >
                  <a>Lire cet article</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const quote = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await quote.json();

  return {
    props: {
      data,
    },
  };
}
