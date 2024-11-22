import style from "./style.module.css";
import imgBg from '@/../public/nav_bg.png';
import imgTest from "@/../public/img/card_img_test.png";


const CardInfo = ({ img = { src: imgTest.src, alt: "Test alt img" }, content, title }) => {
  return (
    <div className={style.card_container}>
      <img src={img.src} alt={img.alt} />
      <div className={style.card_info}>
        <div className={style.title_container}>
          <img src={imgBg.src} alt="" className={style.imgBg} />
          <h2 className={style.title}>{title}</h2>
        </div>
        <p className={style.content}>{content}</p>
        <button className={style.info_btn}>
          <img src={imgBg.src} alt="" className={style.imgBg} />
          <span>Ver</span>
        </button>
      </div>
    </div>
  );
};

export default CardInfo;
