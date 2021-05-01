import Landing from "../component/index/landing";
import Service from "../component/index/service";
export default function Home() {
  return (
    <>
      <Landing />
      <Service />
    </>
  );
}
export async function getServerSideProps(cntx) {
  return {
    props: { data: "arash" },
  };
}
