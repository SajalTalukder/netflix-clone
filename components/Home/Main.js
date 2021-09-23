import React from "react";
import cls from "./Home.module.scss";
import Image from "next/image";
const Main = () => {
  return (
    <div className={cls.main}>
      <div className={cls.row}>
        <div className={cls["main__content"]}>
          <h1 className={cls["main__heading"]}>Enjoy on your TV.</h1>
          <p className={cls["main__para"]}>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="col-md-2-of-1">
          <div className={cls["main__image"]}>
            <Image src="/images/kids.png" alt="kids" width={400} height={300} />
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className={cls.row}>
        <div className="col-md-2-of-1">
          <div className={cls["main__image"]}>
            <Image
              src="/images/mobile.jpg"
              alt="kids"
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className={cls["main__content"]}>
          <h1 className={cls["main__heading"]}>
            Download your shows to watch offline..
          </h1>
          <p className={cls["main__para"]}>
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
      <div className="border"></div>
      <div className={cls.row}>
        <div className={cls["main__content-1"]}>
          <h1 className={cls["main__heading"]}>Watch everywhere.</h1>
          <p className={cls["main__para"]}>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="col-md-2-of-1"></div>
      </div>
      <div className="border"></div>
      <div className={cls.row}>
        <div className="col-md-2-of-1">
          <div className={cls["main__image"]}>
            <Image src="/images/kids.png" alt="kids" width={400} height={300} />
          </div>
        </div>
        <div className={cls["main__content"]}>
          <h1 className={cls["main__heading"]}>Create profiles for kids.</h1>
          <p className={cls["main__para"]}>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Main;
