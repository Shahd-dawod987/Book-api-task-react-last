import React from "react";
const BookImage = {
  width: "314.436px",
  height: "444.617px",
  flexShrink: 0,
};
//const bigBookImg = ImagesComponent.HomePageNocOgniaBookImage;

const BookImageApi = ({imgApi}) => {
  return <img src={imgApi} alt="hi" style={BookImage} />;
};



export default BookImageApi;
