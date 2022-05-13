/** @jsx jsx */
import React, {useState,
              useEffect} from "react";
import { jsx, css } from '@emotion/react'

import Description from "./description";
import ProjectImg from "./projectImg";

import style from "../../style/style";
import layout from "../../style/layout"

export default function Project(props) {
  const alternate = () => {
    if (props.index % 2) {
      return (
        <>
          <Description project={props.project} />

          <ProjectImg project={props.project} />
        </>
      )
    } else {
      return (
        <>
          <ProjectImg project={props.project} />

          <Description project={props.project} />
        </>
      )
    }
  }

  return (
    <>
      <div css={[layout.flex, layout.height100, layout.margin2rem, layout.width100, layout.alignC, layout.justCent]}>
      <div css={[layout.flex, layout.width80, layout.alignC, layout.justSpbw]}>
        {alternate()}
      </div>

    </div>

    </>
  )
}
