/** @jsx jsx */
import React from "react";
import { useForm } from "react-hook-form"
import { jsx, css } from '@emotion/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Header from "../../components/header";
import Footer from "../../components/footer";
import Typewriter from "../../components/typewriter";
import ViewSwap from "../../components/viewSwap";

import style from "../../style/style";
import layout from "../../style/layout"
/*
-obj = empty
-goals:
  *form element
  *submit handler
    -posts user info to db
    -sends email
    -useForm hook: https://www.youtube.com/watch?v=bU_eq8qyjic
      *const {register, handleSubmit, errors} = useForm()
        register: passed to inputs using "ref": ref={register}
        handleSubmit: takes your custom "submit handler funct" as arg;
          passed to form in onSubmit handler: onSubmit={handleSubmit(_submit handler funct_)}
*/
export default function ContactForm() {
  const { register, handleSubmit, error } = useForm();

  return (
    <>
      <div css={[layout.flex, layout.width100, layout.col, layout.justStart]}>
        <p css={[layout.marginHalfRem, style.incon, style.font1rem]}>To:
          <span css={[style.pfDisp, style.font2rem]}
            style={{ paddingLeft: '1rem' }}>Quintin</span>
        </p>
        <p css={[layout.marginHalfRem, style.incon, style.font1rem]}>From:</p>
      </div>

      <form>
        <div>
          <label htmlFor=""><input type="text" /></label>
          <label htmlFor=""><input type="text" /></label>
          <label htmlFor=""><input type="text" /></label>
          <label htmlFor=""><input type="text" /></label>
          <label htmlFor=""><input type="text" /></label>
        </div>
        <div></div>
      </form>
    </>
  )
}
