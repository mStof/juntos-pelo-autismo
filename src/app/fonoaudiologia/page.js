import Article from "@/components/assets/Article/Article";
import CardInfo from "@/components/assets/CardInfo/CardInfo";
import Footer from "@/components/assets/Footer/Footer";
import Intro from "@/components/Intro/Intro";
import Navbar from "@/components/Navbar/Navbar";
import introImg from "@/../public/img/doctor.png";
import style from './style.module.css'

const Fonoaudiologia = () => {
  return (
    <>
      <Navbar />
      <Intro
        description={
          "Lorem ipsum dolor sit amet consectetur. Sit et non massa enim eu. Ultricies convallis at vitae vel suspendisse tellus turpis eget. Hendrerit enim risus at cursus. Nisl in nascetur urna ac platea enim."
        }
        img={{
          src: introImg.src,
          alt: "Imagem de uma médica com uma criança em seu colo",
        }}
        title={"Fonoaudiologia"}
        color="var(--color-blue)"
        pieces={["top", "left"]}
      />
      <article className={style.article_color_info}>
        <Article
          img={{}}
          text={
            "Lorem ipsum dolor sit amet consectetur. Sit et non massa enim eu. Ultricies convallis at vitae vel suspendisse tellus turpis eget. Hendrerit enim risus at cursus. Nisl in nascetur urna ac platea enim."
          }
        />
        <Article
          isInvert
          img={{}}
          text={
            "Lorem ipsum dolor sit amet consectetur. Sit et non massa enim eu. Ultricies convallis at vitae vel suspendisse tellus turpis eget. Hendrerit enim risus at cursus. Nisl in nascetur urna ac platea enim."
          }
        />
        <article className={style.cards_container}>
          <CardInfo
            title={"Legislação"}
            content={
              "There is no one who loves pain itself, who because it is pain..."
            }
          />
          <CardInfo
            title={"Legislação"}
            content={
              "There is no one who loves pain itself, who because it is pain..."
            }
          />
          <CardInfo
            title={"Legislação"}
            content={
              "There is no one who loves pain itself, who because it is pain..."
            }
          />
          <CardInfo
            title={"Legislação"}
            content={
              "There is no one who loves pain itself, who because it is pain..."
            }
          />
          <CardInfo
            title={"Legislação"}
            content={
              "There is no one who loves pain itself, who because it is pain..."
            }
          />
          <CardInfo
            title={"Legislação"}
            content={
              "There is no one who loves pain itself, who because it is pain..."
            }
          />
        </article>
      </article>
      <article className={style.container_info}>
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

export default Fonoaudiologia;
