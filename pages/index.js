import SliderHot from "../component/index/slider";
import Landing from "../component/index/landing";
import Service from "../component/index/service";

export default function Home({ hotbook }) {
  return (
    <>
      <Landing />
      <Service />
      {/* <SliderHot data={hotbook} /> */}
    </>
  );
}
// export async function getServerSideProps(context) {
//   const reshot = await fetch("https://bookgram.vercel.app/api/hotbook/0/8", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });
//   const hotbook = await reshot.json();

//   return {
//     props: { hotbook },
//   };
// }
