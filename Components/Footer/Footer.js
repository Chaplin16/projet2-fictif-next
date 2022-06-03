import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'
import Image from 'next/image'
import logo from "../../public/assets/logo-aurore-creation-web.png"

export default function Footer() {
  return (
    <>
    <div className={styles.footer}>
        <div className='d-flex flex-column justify-content-center'>
            <Link href="https://aurorecreationweb.fr">
                <a className='text-white text-decoration-none'>Aurore Création Web</a>
            </Link>
            <p>
            <Image width='60px' height='30px' src={logo} alt="logo d'Aurore Création Web" />
            </p>
        </div>
        <div className={styles.pixabay}>
            <span>Image par </span>
            <Link href="https://pixabay.com/fr/users/clker-free-vector-images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=49006">
                <a>Clker-Free-Vector-Images <br /></a>
            </Link>
            <span>  de </span>
            <Link href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=49006">
                <a> Pixabay</a>
            </Link>
        </div>
    </div>
    </>
  )
}
