import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = [
  {
    img: "logo_01",
    url: "",
  },
  {
    img: "logo_02",
    url: "",
  },
  {
    img: "logo_03",
    url: "",
  },
  {
    img: "logo_04",
    url: "",
  },
  {
    img: "logo_05",
    url: "",
  },
  {
    img: "logo_06",
    url: "",
  },
  {
    img: "logo_07",
    url: "",
  },
  {
    img: "logo_08",
    url: "",
  }
];

const BrandFive = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {LogoSlider.map((val, i) => (
        <div className="item" key={i}>
          <div className="img-meta d-flex align-items-center justify-content-center">
            <a href={val.url}>
              <img width={110} height={90} src={`images/logo/${val.img}.png`} alt="logo" />
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BrandFive;
