import React from "react";
import styles from "../../styles/Liste.module.css";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function User(props) {
    const router = useRouter();

    return (
        <div className={styles.card}>
            <div>
                <h1>{props.data.name}</h1>
                <h2 className="text-muted">Username: {props.data.username}</h2>
                <ul className="card list-group list-group-flush rounded">
                    <li className="list-group-item">Email: {props.data.email}</li>
                    <li className="list-group-item">Site Web: {props.data.website}</li>
                    <li className="list-group-item">Téléphone: {props.data.phone}</li>
                </ul>
            </div>
        </div>
    );
}

//on apporte les données
export async function getStaticProps(context) {
    const user = context.params.user;
    const quote = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user}`
    );
    const data = await quote.json();

    return {
        props: {
            data,
        },
    };
}

//on cree les chemins
export async function getStaticPaths() {
    const quote = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await quote.json();
    const paths = data.map((item) => ({ params: { user: item.id.toString() } }));
    return {
        paths,
        fallback: false,
    };
}
