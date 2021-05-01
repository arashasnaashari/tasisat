import Link from "next/link";

const Compo = () => {
  return (
    <>
      <div
        className="sm:text-lg z-40 flex flex-row flex-nowrap fixed justify-around md:justify-between bottom-0 h-20
       md:w-2/3 w-full left-0 rounded-md font-IranianSans md:static px-2 md:text-xl border-t-2 border-gray-900 md:border-0 text-xs text-center md:mx-auto font-semibold sm:h-20 align-middle items-center bg-white md:bg-opacity-0"
      >
        <a
          href="/"
          className={`md:hover:text-gray-800 md:dark:hover:text-white`}
        >
          <div className="w-8 md:hidden sm:w-11">
            <svg
              className={`stroke-current text-gray-500 `}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          خانه
        </a>
        <Link href="/about">
          <a className={`md:hover:text-gray-800 md:dark:hover:text-white`}>
            <div className="w-8 md:hidden sm:w-11">
              <svg
                className={`stroke-current text-gray-500 `}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            خدمات
          </a>
        </Link>

        <div className=" flex items-center">
          <Link href="/category">
            <a className={`md:hover:text-gray-800 md:dark:hover:text-white`}>
              <div className="w-8 md:hidden sm:w-11 mr-2">
                <svg
                  className={`stroke-current text-gray-500 `}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              فروشگاه
            </a>
          </Link>

          <span>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-5 h-5 hidden md:block stroke-current md:hover:text-gray-800 md:dark:hover:text-white`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </span>
        </div>
        <Link href="/dashboard">
          <a className={`md:hover:text-gray-800 md:dark:hover:text-white`}>
            <div className="w-8 md:hidden sm:w-11">
              <svg
                className={`stroke-current text-gray-500 `}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            دشبورد
          </a>
        </Link>

        <a
          href="/blog"
          className={`md:hover:text-gray-800 md:dark:hover:text-white`}
        >
          <div className="w-8 md:hidden sm:w-11">
            <svg
              className={`stroke-current text-gray-500 `}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          بلاگ
        </a>
      </div>
    </>
  );
};

export default Compo;
