/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/react'

import style from "../../style/style";
import layout from "../../style/layout";

import JavaScript from '../../../server/public/images/techIcons/javascript.png'
import jQuery from '../../../server/public/images/techIcons/jquery.png'
import ReactJS from '../../../server/public/images/techIcons/react.png'
import NodeJS from '../../../server/public/images/techIcons/node.png'
import PostgreSQL from '../../../server/public/images/techIcons/postgresql.png'

const imgObj = {
  'JavaScript': JavaScript,
  'jQuery': jQuery,
  'ReactJS': ReactJS,
  'NodeJS': NodeJS,
  'PostgreSQL': PostgreSQL
}

export default function TechIconList(props) {
  const techArr = JSON.parse(props.techs)
  const parseImg = (tech) => {
    if (!tech) return null
    return (
      <img src={imgObj[tech]}
        css={[layout.width20]}
        alt={tech} />
    )
  }

  return (
    <div css={[layout.flex, layout.alignC, layout.justCent]}>
      {
        techArr.map(x => {
          return parseImg(x)
        })
      }
    </div>

  )
}
