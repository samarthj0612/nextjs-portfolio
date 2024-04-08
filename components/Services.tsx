import React from 'react'

import cards from "@/data/services"
import styles from "@/public/styles/Services.module.css"

const Services = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>
        I can help you with...
      </h1>

      <div className={styles.cards}>
        {cards.map((card) => {
          return (
            <div className={styles.card}>
              <h2>{card.idx}</h2>
              <h4>{card.heading}</h4>
              <p>{card.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services;
