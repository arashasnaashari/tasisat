const Compo = () => {
  return (
    <div className="flex flex-row justify-around flex-nowrap h-96 bg-gray-200 items-center my-20 px-4">
      <div>
        <img src="/img/mobile.png" className=" w-56"></img>
      </div>
      <div
        className="flex flex-col justify-around"
        style={{ direction: "rtl" }}
      >
        <div>
          <h1 className="font-IranianSans md:text-2xl text-sm font-bold">
            متخصصان محلی مورد اعتماد را برای
          </h1>
          <h1 className="font-IranianSans md:text-2xl text-sm font-bold">
            همه کارهایی که باید انجام دهید، پیدا کنید.
          </h1>
        </div>
        <div className=" md:mt-20 mt-10 text-sm md:text-base">
          <p>
            اپلیکیشن استادکار را دانلود کنید و هر کاری را که دارید رایگان سفارش
            دهید
          </p>
          <div className="flex flex-row mt-10">
            <div
              style={{
                backgroundImage: "url(/img/bazar.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                backgroundSize: "contain",
              }}
              className="md:w-36 h-10 w-20"
            ></div>
            <div
              style={{
                backgroundImage: "url(/img/pwa.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                backgroundSize: "contain",
              }}
              className="md:w-36 h-10 w-20"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compo;
