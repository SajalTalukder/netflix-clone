import React, { useState } from "react";
import { Fragment } from "react";
import style from "./MyAccordion.module.scss";
const MyAccordion = (props) => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow((prev) => {
      return !prev;
    });
  };

  return (
    <Fragment>
      <div className={style.accordionBody}>
        <div className={style.accordionQuestionBody}>
          <h2 className={style.accordionQuestion}>{props.question}</h2>
          <span className={style.accordionIcon} onClick={showHandler}>
            {show ? "-" : "+"}
          </span>
        </div>
        {show && (
          <div className={style.accordionAns}>
            <p>{props.answer}</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default MyAccordion;
