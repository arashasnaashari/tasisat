import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";

import React from "react";
const A = () => {
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    breakpoints: {
      "(min-width: 300px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
      "(min-width: 768px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 5,
        mode: "free-snap",
      },
    },
    slidesPerView: 1,
    spacing: 1,
    rtl: true,
  });

  const data = [
    {
      image: "store1.png",
      text: "محصول #1",
    },
    {
      image: "store2.png",
      text: "محصول #2",
    },
    {
      image: "store3.png",
      text: "محصول #3",
    },
    {
      image: "store2.png",
      text: "محصول #2",
    },
    {
      image: "store4.png",
      text: "محصول #4",
    },
  ];

  return (
    <div className=" dark:text-white mx-6 mb-8 my-20">
      <div className="flex justify-between p-3 mb-2">
        <div></div>
        <div>
          <h1 className="font-Vazir text-2xl font-bold dark:text-gray-100">
            پرفروش ترین محصولات
          </h1>
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider mb-10 bg-gray-200 p-4 h-80">
        {data.map((e) => {
          return (
            <div className="keen-slider__slide px-10">
              <div className="hover:bg-gray-400 bg-gray-300 h-80 w-48 flex flex-col justify-around ">
                <img
                  src={`/img/${e.image}`}
                  width="140"
                  className="mx-auto"
                ></img>
                <h1 className="text-center mb-10">{e.text}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default A;
