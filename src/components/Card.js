import React from 'react'
import styles from './card.module.css'

export default function Card({card}) {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardText}>{card.details}</div>
            <a href={card.link} className={styles.cardLink}>{card.action}</a>
        </div>
    )
}
