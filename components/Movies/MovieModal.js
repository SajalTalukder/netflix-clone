import React from "react";
import style from "./MovieModal.module.scss";

const MovieModal = (props) => {
  return (
    <div onClick={props.onClose} className={style.backdrop}>
      <div className={style.modal}>{props.children}</div>
    </div>
  );
};

export default MovieModal;
