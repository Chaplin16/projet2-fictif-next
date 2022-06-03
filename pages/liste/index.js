import React from "react";
import styles from "../../styles/Liste.module.css";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function Liste(props) {
  return (
    <div className={styles.main}>
      <h1 className="text-center mt-3">La liste des utilisateurs</h1>
      {props.data.map((item) => (
        <div className="d-flex justify-content-between mt-3 border border-2  align-items-center pe-3 ps-3 p-2 rounded" key={uuidv4()}>
          <p>{item.name}</p>
          <Link href={`/liste/${item.id.toString()}`}>
            <a> 🧾 Contacter</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const quote = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await quote.json();

  return {
    props: {
      data,
    },
  };
}
