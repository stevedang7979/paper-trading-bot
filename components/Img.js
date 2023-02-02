import React from "react";
import Image from "next/image";

export default function Img(props) {
  const { img, imgAlt, width, height, layout, objectFit } = props;
  var attributes = {
    width: width,
    height: height,
    layout: layout && "fill",
    objectFit: objectFit,
  };
  return (<Image src={`/images/${img}`} alt={imgAlt} {...attributes} priority />);
}
