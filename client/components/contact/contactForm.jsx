/** @jsx jsx */
import React, {
  useState,
  useEffect
} from "react";
import { useForm } from "react-hook-form"
import { jsx, css } from '@emotion/react'

import SubmittedModal from "./SubmittedModal";

import post from "../functions/post";
import sendClientEmail from "../functions/sendClientEmail";
import sendDataEmail from "../functions/sendDataEmail";

import style from "../../style/style";
import layout from "../../style/layout"

const api = '/api/contact'

const inputCss = [layout.width100, layout.leftMargin, layout.leftPadding, layout.input, style.fade]
const labelCss = [layout.flex, layout.row, layout.marginHalfRem]
const inputCont = [layout.flex, layout.col, style.incon]
const toFrom = [layout.marginHalfRem, style.font1rem, style.incon]
const contDiv = [layout.flex, layout.col, layout.justStart, layout.width100]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
    errors
  } = useForm();

  useEffect(() => {
    reset()
  }, [isSubmitSuccessful])

  const submitForm = (data) => {
    post(api, data)
    sendClientEmail(data.contactName, data.email)
    sendDataEmail(data)
    setSubmitted(!submitted)
  }


  if (!submitted) {
    return (
      <>
        <div css={contDiv}>
          <p css={toFrom}>To:
            <span css={[layout.leftPadding, style.font2rem, style.pfDisp]}>Quintin</span>
          </p>
          <p css={toFrom}>From:</p>
        </div>

        <form id="contact-form"
          onSubmit={handleSubmit((data) => submitForm(data))}
          css={[...contDiv, layout.leftPadding]}>
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
                css={[layout.padding25, style.font1rem, style.incon, style.hoverA]}
                style={{ width: 'fit-content', backgroundColor: '#fafafa00' }} />
            </div>
          </div>
        </form>
      </>
    )
  } else {
    return <SubmittedModal submitted={submitted}
      setSubmitted={setSubmitted} />
  }

}
