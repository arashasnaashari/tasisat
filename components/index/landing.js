import Header from "../Layout/Header";

const Compo = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/img/landing.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-gray-900 bg-opacity-30 font-IranianSans ">
        <Header />
        <div className="h-72 md:h-96 w-full rounded-md flex flex-row items-center justify-center">
          <div className="h-1/2 w-3/4 flex flex-col justify-around ">
            <div className="">
              <h1 className="md:text-4xl text-2xl text-center text-gray-200">
                ! یا بده ما انجام بدیم یا وسایلشو بخر
              </h1>
            </div>
            <div className="flex flex-row justify-center">
              <button className="text-black px-3 py-4 bg-gray-200 w-1/3 mr-3 rounded-md">
                فروشگاه
              </button>
              <button className="text-black px-3 py-4 bg-gray-200 w-1/3 rounded-md">
                خدمات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compo;
