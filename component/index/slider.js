import { useKeenSlider } from "keen-slider/react";
import SlideBook from "./BookSlide";
const A = ({ data }) => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 100px)": {
        slidesPerView: 1.5,
        mode: "free-snap",
      },
      "(min-width: 360px)": {
        slidesPerView: 2.3,
        mode: "free-snap",
      },
      "(min-width: 768px)": {
        slidesPerView: 4.5,
        mode: "free-snap",
      },
      "(min-width: 1024px)": {
        slidesPerView: 4.5,
        mode: "free-snap",
      },
    },
    slidesPerView: 4.5,
    spacing: 15,
    rtl: true,
  });
  return (
    <>
      <div className="flex justify-between p-3 mb-2">
        <div>
          <a className="text-gray-300 text-sm">{" <<"}بیشتر</a>
        </div>
        <div>
          <h1 className=" font-Seogi text-2xl font-bold dark:text-gray-100">
            محبوب ترین ها
          </h1>{" "}
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {data.map((e) => {
          return <SlideBook data={e} key={e._id} rate={e.star / e.nstar} />;
        })}
      </div>
    </>
  );
};
export default A;
