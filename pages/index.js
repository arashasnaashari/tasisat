import Landing from "../components/index/landing";
import Service from "../components/index/service";
import SliderService from "../components/index/SliderService";
import SliderStore from "../components/index/SliderStore";
import SliderStore2 from "../components/index/SliderStore2";
import About from "../components/index/about";
export default function Home() {
  return (
    <>
      <Landing />
      <Service />
      <SliderService />
      <About />
      <SliderStore />
      <SliderStore2 />
    </>
  );
}
export async function getServerSideProps(cntx) {
  return {
    props: { data: "arash" },
  };
}
