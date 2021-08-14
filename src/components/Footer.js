import React from 'react'
import styles from '../landing.module.css'
import Fb from '../images/fb.png'
import Instagram from '../images/insta.png'
import Youtube from '../images/utube.png'

const icons = [
    {
        id: 1,
        image: Fb,
        name: 'facebook',
    },
    {
        id: 2,
        image: Instagram,
        name: 'instagram',
    },
    {
        id: 3,
        image: Youtube,
        name: 'youtube',
    }
]
export default function Footer() {
    return (
        <div className={styles.footer}>
            {icons.map(icon => {
                return(
                    <div className={styles.icon} key={icon.id}>
                        <img src={icon.image} alt={icon.name}/>
                    </div>
                )
            })}
        </div>
    )
}
