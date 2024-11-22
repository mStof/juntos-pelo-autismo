import React from "react";
import style from "./style.module.css";
import Article from "../assets/Article/Article";
import imgLogoFull from "@/../public/logo_full.svg";
import imgTest from '@/../public/img/card_img_test.png';

const container = () => {
  return (
    <article className={style.aboutUs_container}>
        <h2 className={style.aboutUs_title}>Sobre nós</h2>
      <Article
        img={{ src: imgLogoFull.src, alt: "Imagem da logo verão inteira" }}
        text={
          "Lorem Ipsum is simply dummy text of  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <Article
        img={{ src: imgTest.src, alt: "aaa" }}
        text={
          "Lorem Ipsum is simply dummy text of  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        
      />
      <Article
        img={{ src: imgTest.src, alt: "aaa" }}
        text={
          "Lorem Ipsum is simply dummy text of  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        isInvert
      />
    </article>
  );
};

export default container;
