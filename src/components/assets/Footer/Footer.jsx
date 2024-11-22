import React from "react";
import facebookIcon from '@/../public/icons/facebook.png'
import emailIcon from '@/../public/icons/email.png'
import xingIcon from '@/../public/icons/xing.png'
import style from './style.module.css'

const Footer = () => {
  return (
    <footer className={style.footer_container}>
      <a href="" target="_blank">
        <img src={emailIcon.src} alt="Email icon" />
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <img src={facebookIcon.src} alt="Facebook icon" />
      </a>
      <a href="" target="_blank">
        <img src={xingIcon.src} alt="" />
      </a>
    </footer>
  );
};

export default Footer;
