import React from "react";
import styles from "../styles/Gallery.module.css";
import { v4 as uuidv4 } from "uuid";

import Image from "next/image";
import img1 from "../public/assets/ville-ny-1.jpg";
import img2 from "../public/assets/ville-ny-2.jpg";
import img3 from "../public/assets/ville-ny-3.jpg";
import img4 from "../public/assets/ville-ny-4.jpg";
import img5 from "../public/assets/ville-ny-5.jpg";
import img6 from "../public/assets/ville-ny-6.jpg";
import img7 from "../public/assets/ville-ny-7.jpg";
import img8 from "../public/assets/ville-ny-8.jpg";
import img9 from "../public/assets/ville-ny-9.jpg";
import img10 from "../public/assets/ville-ny-10.jpg";


export default function Gallery() {

  const photo = [
    {
      url: img1,
      alt: "New York: Times Square 🤩",
    },
    {
      url: img2,
      alt: "New York: Pont de Brooklyng 😍",
    },
    {
      url: img6,
      alt: "Lumière de la ville ✨",
    },
    {
      url: img3,
      alt: "Rose de nuit 😃",
    },
    {
      url: img4,
      alt: "San Fransisco 👌",
    },
    {
      url: img5,
      alt: "Ahhh Paris Beautiful! 👌",
    },
    {
      url: img9,
      alt: "Reflets féériques 👌",
    },
    {
      url: img7,
      alt: "New Yord au clair de lune 👌",
    },
    {
      url: img8,
      alt: "Circulation by night",
    },
    {
      url: img10,
      alt: "Dauphins de nuit",
    },
  ];

  return (
    <main>
      <div className={styles.main}>
        <h1 className="text-center p-3">Galerie Photos</h1>
        <div className="d-flex justify-content-around flex-wrap ">
          {photo.map((item) => (
            <p className={styles.card} key={uuidv4()}>
              <Image src={item.url} alt={item.alt} />
              <span>{item.alt}</span>
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}