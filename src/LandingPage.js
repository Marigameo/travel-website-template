import React from 'react'
import styles from './landing.module.css'
import Card from './components/Card'
import Family from './images/family.png'
import Header from './components/Header'
import Footer from './components/Footer'

const cards = [
    {
        title: 'Trekking - get tougher',
        details: "What happened to your trekking plans happened in your last semester? Let's dig them out",
        action: 'Know how?',
        link: '/#',
    },
    {
        title: 'Arre Yaar, Goa',
        details: 'That one never happened Goa plan in every gang. Chalo, chalo - no more talks',
        action: "I'm in!",
        link: '/#',
    },
    {
        title: 'How about a refreshing voyage to Himalayas?',
        details: "Are, thalaivar fan ah? Let's pump up",
        action: 'Take me in',
        link: '/#',
    }
]
export default function LandingPage() {
    return (
        <div className={styles.container}>
        <Header/>
        <section className={styles.main}>
            <div className={styles.sectionOne}>
                <div className={styles.mainText}>
                <h1 className={styles.mainText}>Travel is here to stay!</h1>
                <p className={styles.mainText}>Why so much hype? Nothing is permanent here, we'll be back with a bang. Get your backpacks ready, refresh your travel whatsapp groups with some chatters. Wohoo!</p>
                <button className={styles.mainText}>I'm ready</button>
            </div>
            <div className={styles.mainImg}>
                <img src={Family} alt="family"/>
            </div>
            </div>
        </section>
        <div className={styles.lineWrapper}>
            <div className={styles.line}></div>
        </div>
        <div className={styles.cardSection}>
            {cards.map(card => <Card card={card}/>)}
        </div>
        <Footer/>
    </div>
    )
}
