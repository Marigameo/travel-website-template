import React from 'react'
import styles from '../landing.module.css'

const links = [
    {
        id: 1,
        name: 'Blog',
        link: '/#',
    },
    {
        id: 2,
        name: 'About',
        link: '/#',
    },
    {
        id: 3,
        name: 'Contact',
        link: '/#',
    }
]
export default function Header() {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>TravelFaLife</h1>
            <ul className={styles.navLinks}>
                {links.map(link => <li key={link.id}><a href={link.link}>{link.name}</a></li>)}
            </ul>
        </nav>
    )
}
