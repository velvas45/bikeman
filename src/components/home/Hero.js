import React from 'react'
import Lottie from 'react-lottie'
import HeroAnimation from '../../data/lottieFiles/hero.json'
import lottieHelper from '../../helper/lottieHelper'
import styles from './hero.module.css'

export default function Hero() {
    return (
        <div className={styles.hero_layout}>
            <div className={styles.hero_layoutTitle}>
                <h3>Hello, Welcome to Bikeman</h3>
                <p>If you interest about bike, and wanna to goes? This is the right place for you.</p>
            </div>

            <div className={styles.hero_layoutContent}>
                <Lottie 
                    options={lottieHelper(HeroAnimation)}
                    height={300}
                    width={300}
                />
            </div>
        </div>
    )
}
