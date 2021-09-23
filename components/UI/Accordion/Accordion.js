import React from "react";

import style from "./Accordion.module.scss";
import MyAccordion from "./MyAccordion";
import Api from "./AccordionApi";
import { Fragment } from "react";

import Input from "../Input";
const Accordion = () => {
  const content = Api.map((item) => {
    return (
      <MyAccordion
        isOpen={item.isOpen}
        key={item.id}
        id={item.id}
        question={item.question}
        answer={item.answer}
      />
    );
  });

  return (
    <Fragment>
      <div className={style.accordion}>
        <h1>Frequently Asked Questions</h1>
        {content}
        <div className={style.accordionEmails}>
          <Input />
        </div>
      </div>
    </Fragment>
  );
};

export default Accordion;
