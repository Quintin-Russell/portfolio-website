/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/react'

import style from "../../style/style";
import layout from "../../style/layout"

export default function SubmittedModal(props) {
  return (
    <>
      <div onClick={() => props.setSubmitted(!props.submitted)}
        css={[layout.flex, layout.col, layout.alignC, layout.justCent, layout.width80, style.textCent, style.borderLight, style.cursor]}>
        <p css={[style.font3rem, style.pfDisp]}>Thanks for reaching out!</p>
        <p css={[style.font2rem, style.monts]}>We just sent you an email. Quintin will get in touch with you soon!</p>
        <p css={[style.incon]}>-Submit Another Message-</p>
      </div>
    </>
  )
}
