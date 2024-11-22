import React from 'react'
import style from './style.module.css'
import Card from './card'

import heartIcon from '@/../public/icons/heart.png';
import law from '@/../public/icons/law.png';
import health from '@/../public/icons/health.png';
import chat from '@/../public/icons/chat.png';

const container = () => { 
  return (
    <div className={style.links_container}>
        <Card icon={{img: heartIcon.src, alt: "Icone de saúde"}} color='var(--color-red-100)' path='/pedagogico'/>
        <Card icon={{img: health.src, alt: "Icone de saúde"}} color='var(--color-blue)'/>
        <Card icon={{img: law.src, alt: "Icone de saúde"}} color='var(--color-cyan)'/>
        <Card icon={{img: chat.src, alt: "Icone de saúde"}} color='var(--color-yellow)'/>
    </div>
  )
}

export default container