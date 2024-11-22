import style from './style.module.css';


const Article = ({isInvert = false, img, text}) => {
  return (
    <div className={style.article_container} style={{flexDirection: isInvert ? "row-reverse" : "row"}}>
        {img && <img className={style.img_explain} src={img.src} alt={img.alt} />}
        <p className={style.paragraph}>
            {text}
        </p>
    </div>
  )
}

export default Article