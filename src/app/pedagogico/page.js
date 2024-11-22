import Article from "@/components/assets/Article/Article";
import Footer from "@/components/assets/Footer/Footer";
import Intro from "@/components/Intro/Intro";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import style from "./style.module.css";
import introImg from '@/../public/img/pedagogic_img.png';

const Pedagogico = () => {
  return (
    <>
      <Navbar />
      <Intro
        title={"Pedagógico"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Sit et non massa enim eu. Ultricies convallis at vitae vel suspendisse tellus turpis eget. Hendrerit enim risus at cursus. Nisl in nascetur urna ac platea enim."
        }
        img={{src: introImg.src, alt: "Uma mpedica adotando uma criança de cor"}}
        color="var(--color-red-100)"
        pieces={['top', 'left']}
      />
      <article className={style.article_info_color}>
        <Article
          img={{}}
          text={
            "Lorem ipsum dolor sit amet consectetur. Sit et non massa enim eu. Ultricies convallis at vitae vel suspendisse tellus turpis eget. Hendrerit enim risus at cursus. Nisl in nascetur urna ac platea enim."
          }
        ></Article>
        <Article
          img={{}}
          isInvert
          text={
            "Lorem ipsum dolor sit amet consectetur. Sit et non massa enim eu. Ultricies convallis at vitae vel suspendisse tellus turpis eget. Hendrerit enim risus at cursus. Nisl in nascetur urna ac platea enim."
          }
        ></Article>
        <Article
          img={{}}
          isInvert
          text={
            "Lorem ipsum dolor sit amet consectetur. Sit et non massa enim eu. Ultricies convallis at vitae vel suspendisse tellus turpis eget. Hendrerit enim risus at cursus. Nisl in nascetur urna ac platea enim."
          }
        ></Article>
      </article>
      <article className={style.article_info}>
        <Article
          img={{}}
          text={
            "Lorem ipsum dolor sit amet consectetur. Sit et non massa enim eu. Ultricies convallis at vitae vel suspendisse tellus turpis eget. Hendrerit enim risus at cursus. Nisl in nascetur urna ac platea enim."
          }
        />
      </article>
      <Footer />
    </>
  );
};

export default Pedagogico;
