import React from "react";
import styles from "../../styles/Blog.module.css";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function Slug(props) {
  const router = useRouter();

console.log(props)

  return (
    <div className={styles.doryann}>
      <div className="container">
        <h1 className="text-center">{props.data.title}</h1>
        <p className="text-center">{props.data.body}</p>
      </div>
    </div>
  );
}

//on apporte les données
export async function getStaticProps(context) {
  const slug = context.params.slug;
  const quote = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}` );
  const data = await quote.json();
  return {
    props: {
      data,
    },
  };
}

//on cree les chemins
export async function getStaticPaths() {
  const quote = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await quote.json();
  const paths = data.map((item) => ({ params: { slug: item.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}
