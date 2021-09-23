/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import style from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.footer}>
      <h3 className={style.footerHeading}>Questions? Contact us.</h3>
      <div className={style.row}>
        <div>
          <div className={style.footerLink1}>
            <ul className={style.footerUl}>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Investor Relations</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Speed</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={style.footerLink2}>
            <ul className={style.footerUl}>
              <li>
                <a href="/">Help center</a>
              </li>
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/">Cookie Preferences</a>
              </li>
              <li>
                <a href="/">Legal Notices</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={style.footerLink3}>
            <ul className={style.footerUl}>
              <li>
                <a href="/">Accounts</a>
              </li>
              <li>
                <a href="/">Ways to watch</a>
              </li>
              <li>
                <a href="/">Corporate Information</a>
              </li>
              <li>
                <a href="/">Only on Netflix</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className={style.footerUl}>
            <li>
              <a href="/">Media center</a>
            </li>
            <li>
              <a href="/">Terms of use</a>
            </li>
            <li>
              <a href="/">Contect Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.footermy}>
        <p>&copy; Copyright Sajal Talukder 2021</p>
      </div>
    </div>
  );
};

export default Footer;
