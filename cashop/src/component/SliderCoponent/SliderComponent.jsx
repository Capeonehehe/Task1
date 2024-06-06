import { Image } from "antd";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({arrImage}) => {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    return(
        <Slider settings={settings}>
            {arrImage.map((image) => {
                return(
                    <Image src={image} alt='slider' preview={false} width='100%' />
                )
            })}
        </Slider>
    );
}

export default SliderComponent;