/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/react'

import Header from "../../components/header";
import Footer from "../../components/footer";

import style from "../../style/style";
import layout from "../../style/layout"

export default function SubmittedModal(props) {
  return (
    <>
    <div onClick={() => props.setSubmitted(!props.submitted)}
    css={[layout.flex, layout.col, layout.justCent, layout.alignC,layout.width80, style.borderLight, style.textCent, style.cursor]}>
      <p css={[style.pfDisp, style.font3rem]}>Thanks for reaching out!</p>
      <p css={[style.monts, style.font2rem]}>We just sent you an email. Quintin will get in touch with you soon!</p>
      <p css={[style.incon]}>-Submit Another Message-</p>
    </div>
    </>
  )
}
