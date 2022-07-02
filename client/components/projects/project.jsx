/** @jsx jsx */
import React, { useState } from "react";
import useScreenSize from "../../context/use-screen-size";
import { jsx, css } from "@emotion/react";
import $ from "jquery";

import Description from "./description";
import ProjectImg from "./project-img";
import lessThan768 from "../../components/functions/less-than-768";

import style from "../../style/style";
import layout from "../../style/layout";

const contDivCss = [
  layout.flex,
  layout.width100,
  layout.alignC,
  layout.justCent,
];

export default function Project(props) {
  const screenSize = useScreenSize();

  const alternate = () => {
    if (props.index % 2) {
      return (
        <>
          <Description project={props.project} />

          <ProjectImg project={props.project} />
        </>
      );
    } else {
      return (
        <>
          <ProjectImg project={props.project} />

          <Description project={props.project} />
        </>
      );
    }
  };

  return (
    <>
      <div
        style={{ backgroundColor: "black" }}
        css={
          !lessThan768(screenSize.width)
            ? [...contDivCss, layout.margin2rem]
            : contDivCss
        }
      >
        <div
          css={[
            layout.flex,
            layout.rowMobile,
            layout.width80,
            layout.alignC,
            layout.justSpbw,
          ]}
        >
          {alternate()}
        </div>
      </div>
    </>
  );
}
