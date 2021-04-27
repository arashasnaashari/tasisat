import dbConnect from "../utils/dbConnect";
import Book from "../model/Book";
export default function Home({ data }) {
  return (
    <>
      <div className="w-full bg-gray-800 text-white h-screen">
        <p className="text-2xl p-3 w-1/2 mx-auto">start point</p>
        <div className="mx-auto w-1/2">
          {JSON.parse(data).map((e) => {
            return (
              <h1 key={e._id} className="rounded-lg bg-gray-700 p-1 m-3">
                {e.title}
              </h1>
            );
          })}
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(cntx) {
  await dbConnect();
  const dataaaa = await Book.find({}).select({ title: 1 }).limit(10).lean();
  return {
    props: { data: JSON.stringify(dataaaa) },
  };
}
