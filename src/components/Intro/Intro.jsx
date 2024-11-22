import style from "./style.module.css";

export default function Intro({title, description, img, color = '#ff0', pieces = []}) {
  return (
    <article className={style.intro_container} style={{"--_primary-color": color}}>
      <div className={style.intro_wrapper}>
        <div className={style.info_container}>
          <h1 className={style.title}>{title}</h1>
          <p className={style.paragraph}>
            {description}
          </p>
        </div>
        <div className={style.img_container}>
          {pieces.map((piece) => {
            return <div key={crypto.randomUUID()} className={`${style.piece} ${style['piece_' + piece]}`}></div>
          })}
          <img src={img.src} alt={img.alt} />
        </div>
      </div>
        <div className={style.divider_line}></div>
    </article>
  );
}
