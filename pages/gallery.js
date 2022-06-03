import React from "react"
import styles from "../styles/Gallery.module.css"
import { v4 as uuidv4 } from "uuid"

import Image from "next/image";
import img1 from "../public/assets/ville-ny-1.jpg"
import img2 from "../public/assets/ville-ny-2.jpg"
import img3 from "../public/assets/ville-ny-3.jpg"
import img4 from "../public/assets/ville-ny-4.jpg"
import img5 from "../public/assets/ville-ny-5.jpg"
import img6 from "../public/assets/ville-ny-6.jpg"



export default function Gallery() {
  const photo = [
  {
    url: img1,
    alt: "New York: Times Square 🤩"
  },
  {
    url: img2,
    alt: "New York: Pont de Brooklyng 😍"
  },
  {
    url: img4,
    alt: "Pont de San Fransisco 😀"
  },
  {
    url: img6,
    alt: "Lumière de la ville ✨"
  },
  {
    url: img3,
    alt: "Touche le ciel 😃"
  },
  {
    url: img5,
    alt: "Ahhh Paris Beautiful! 👌"
  }
];
  return (
    <div>
      <h1 className="text-center p-3">Galerie Photos</h1>
      <div className="d-flex justify-content-around flex-wrap ">
        {photo.map((item) => (
          <p className={styles.card} key={uuidv4()}>
            <Image src={item.url} alt={item.alt} />
            <span>{item.alt}</span>
          </p>
        ))}
        ;
      </div>
    </div>
  );
}
