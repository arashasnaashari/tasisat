import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";

import React from "react";
const A = () => {
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 100000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    breakpoints: {
      "(min-width: 300px)": {
        slidesPerView: 1.4,
        mode: "free-snap",
      },
      "(min-width: 768px)": {
        slidesPerView: 2.2,
        mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 4.5,
        mode: "free-snap",
      },
    },
    slidesPerView: 1,
    spacing: 15,
    rtl: true,
  });
  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);
  const data = [
    {
      image: "inner1.jpg",
      text: "خدمت #1",
    },
    {
      image: "inner2.jpg",
      text: "خدمت #2",
    },
    {
      image: "inner3.jpg",
      text: "خدمت #3",
    },
    {
      image: "inner4.jpg",
      text: "خدمت #4",
    },
    {
      image: "inner5.jpg",
      text: "خدمت #5",
    },
  ];

  return (
    <div className=" dark:text-white mx-6 mb-8">
      <div className="flex justify-between p-3 mb-2">
        <div></div>
        <div>
          <h1 className="font-Vazir text-2xl font-bold dark:text-gray-100">
            خدمات ویژه
          </h1>
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider mb-10">
        {data.map((e) => {
          return (
            <div
              className="keen-slider__slide w-56 h-44"
              style={{
                backgroundImage: `url(/img/${e.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                backgroundSize: "cover",
              }}
            >
              <div className="bg-gray-200 absolute left-0 bottom-0 w-full h-10 text-right font-IranianSans p-1">
                <h1>{e.text}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default A;
