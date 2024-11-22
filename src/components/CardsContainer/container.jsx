'use client'
import { useState } from "react";
import CardInfo from "../assets/CardInfo/CardInfo";
import style from "./style.module.css";
import imgBg from '@/../public/nav_bg.png';


const container = () => {
    const [open, setOpen] = useState(false);
  return (
    <article className={style.card_container} style={{maxHeight: open ? "max-content" : 'calc(588px + 100px)'}}>
      <CardInfo
        title={"Test"}
        content={
          "Lorem ipsum dolor sit amet consectetur. Sit et non massa  suspendisse tellus turpis eget. Hendrerit enim risus at cursus. Nisl in nascetur urna ac platea enim."
        }
      />
      <CardInfo
        title={"Test"}
        content={
          "Lorem ipsum dolor sit amet consectetur. Sit et non massa  suspendisse tellus turpis eget. Hendrerit enim risus at cursus. Nisl in nascetur urna ac platea enim."
        }
      />
      <CardInfo
        title={"Test"}
        content={
          "Lorem ipsum dolor sit amet consectetur. Sit et non massa  suspendisse tellus turpis eget. Hendrerit enim risus at cursus. Nisl in nascetur urna ac platea enim."
        }
      />
      <CardInfo
        title={"Test"}
        content={
          "Lorem ipsum dolor sit amet consectetur. Sit et non massa  suspendisse tellus turpis eget. Hendrerit enim risus at cursus. Nisl in nascetur urna ac platea enim."
        }
      />
      <button onClick={() => setOpen(!open)}>
        <img src={imgBg.src} alt="" className={style.imgBg} />
        Ver {open ? "menos" : "mais"}
      </button>
    </article>
  );
};

export default container;
