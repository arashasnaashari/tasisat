const Compo = ({ data, rate }) => {
  return (
    <div className="keen-slider__slide" key={data._id}>
      <div className="flex flex-col" style={{ direction: "rtl" }}>
        <a href={`/book/${data._id}`}>
          <a>
            <img
              src={data.image}
              className="rounded-xl w-56 h-40"
            ></img>
          </a>
        </a>
        <a href={`/book/${data._id}`}>
          <h1 className="dark:text-white font-Vazir text-sm">{data.title}</h1>
        </a>
        <a href={`/ketab/author/${data.author}/0/7`}>
          <h1
            className="dark:text-gray font-Vazir text-gray-400 break-all cursor-pointer"
            style={{ fontSize: "10px" }}
          >
            {data.author}
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Compo;
