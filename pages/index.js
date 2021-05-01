import Landing from "../components/index/landing";
import Service from "../components/index/service";
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
