/** @jsx jsx */
import React, {useState} from "react";
import { useForm } from "react-hook-form"
import { jsx, css } from '@emotion/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import $ from 'jquery'

import Header from "../../components/header";
import Footer from "../../components/footer";
import Typewriter from "../../components/typewriter";
import ViewSwap from "../../components/viewSwap";
import SubmittedModal from "./SubmittedModal";

import post from "../functions/post";
import sendClientEmail from "../functions/sendClientEmail";

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

const api = '/api/contact'

const inputCss = [style.fade, layout.width100, layout.leftMargin, layout.leftPadding, layout.input]
const labelCss = [layout.flex, layout.row, layout.marginHalfRem]
const inputCont = [layout.flex, layout.col, style.incon]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(null)
  const { register, handleSubmit, errors } = useForm();

  const submitForm = (data) => {
    console.log(data)
    post(api, data)
    sendClientEmail(data.contactName, data.email)
    $('form#contact-form')[0].reset()
    setSubmitted(!submitted)
  }


if (!submitted){
  return (
    <>
      <div css={[layout.flex, layout.width100, layout.col, layout.justStart]}>
        <p css={[layout.marginHalfRem, style.incon, style.font1rem]}>To:
          <span css={[style.pfDisp, style.font2rem, layout.leftPadding]}>Quintin</span>
        </p>
        <p css={[layout.marginHalfRem, style.incon, style.font1rem]}>From:</p>
      </div>

      <form id="contact-form" onSubmit={handleSubmit((data) => submitForm(data))}
        css={[layout.flex, layout.col, layout.width100, layout.justStart, layout.leftPadding]}>
        <div css={inputCont}>
          <div css={labelCss}>
            <label htmlFor="contactName">Name:</label>
            <input id="contactName"
              name="contactName"
              css={inputCss}
              type="text"
              {...register("contactName", {
                required: {
                  value: true,
                  message: 'Please type your name so that I can get in touch with you.'
                },
                minLength: {
                  value: 2,
                  message: 'Please type your name so that I can get in touch with you.'
                }
              })}
            />
          </div>

          <div css={labelCss}>
            <label htmlFor="company">Company:</label>
            <input id="company"
              name="company"
              css={inputCss}
              type="text"
              {...register("company", {})} />
          </div>

          <div css={labelCss}>
            <label htmlFor="email">Email:</label>
            <input id="email"
              name="email"
              css={inputCss}
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: 'Please type your email so that I can get in touch with you.'
                },
                minLength: {
                  value: 2,
                  message: 'Please type your email so that I can get in touch with you.'
                }
              })}
            />
          </div>

          <div css={labelCss}>
            <label htmlFor="linkedInUrl">LinkedIn:</label>
            <input id="linkedInUrl"
              name="linkedInUrl"
              css={inputCss}
              type="url"
              {...register("linkedInUrl", {})} />
          </div>

          <div css={labelCss}>
            <label htmlFor="phoneNumber">Phone:</label>
            <input id="phoneNumber"
              name="phoneNumber"
              css={inputCss}
              type="tel"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: 'Please type your phone number so that I can get in touch with you.'
                },
                pattern: {
                  value: "[0-9]{3}-[0-9]{2}-[0-9]{3}"
                }
              })}
            />
          </div>


        </div>
        <div css={inputCont}>
          <label htmlFor="message"
            css={[layout.marginHalfRem]}>Message:</label>
          <textarea id="message"
            name="message"
            css={[...inputCss, layout.marginHalfRem]}
            type="text"
            {...register("message", {
              required: {
                value: true,
                message: 'Please type a message. no need to be shy :)'
              },
              minLength: {
                value: 2,
                message: 'Please type a message. no need to be shy :)'
              }
            })}
          ></textarea>
          <div css={[layout.flex, layout.justEnd]}>
            <input type="submit"
              value={`-SEND-`}
              css={[style.incon, style.font1rem, style.hoverA, layout.padding25]}
              style={{ width: 'fit-content', backgroundColor: '#fafafa00' }} />
          </div>
        </div>
      </form>
    </>
  )} else {
    return <SubmittedModal submitted={submitted}
    setSubmitted={setSubmitted}/>
  }

}
