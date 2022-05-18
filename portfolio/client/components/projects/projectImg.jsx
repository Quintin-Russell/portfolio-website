/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/react'

import style from "../../style/style";
import layout from "../../style/layout"

export default function ProjectImg(props) {
  return (
    <div css={[layout.flex, layout.flex33]}>
      <img src={props.project.imgUrl}
        css={[layout.width100]}
        alt="project-demo" />
    </div>
  )
}
