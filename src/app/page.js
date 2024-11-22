import Intro from "@/components/Intro/Intro";
import Navbar from "@/components/Navbar/Navbar";
import LinksContainer from "@/components/cardLink/container";
import CardsContainer from "@/components/CardsContainer/container";
import AboutUs from "@/components/AboutUs/container";
import Footer from "@/components/assets/Footer/Footer";
import introImg from "@/../public/img/home_img.png";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Intro
        description={
          " Um espaço dedicado a apoiar pais e responsáveis de crianças com autismo. Aqui, você encontrará informações essenciais sobre legislações, orientações médicas, recursos educacionais e dicas práticas para ajudar no dia a dia."
        }
        img={{
          src: introImg.src,
          alt: "Uma médica auxiliando uma criança de cor",
        }}
        title={"Autismo"}
        color="var(--color-orange)"
        pieces={["left"]}
      />
      <LinksContainer />
      <CardsContainer />
      <AboutUs />
      <Footer />
    </main>
  );
}
