import getAllCardsData from "@/lib/getAllCardsData";
import Image from "next/image";

export default async function Home() {
  const data = await getAllCardsData();
  console.log(data);

  return (
    <div className="p-4">
      {data.map((dt) => (
        <div key={dt.id} className="mb-4 p-4 border rounded">
          <h2 className="text-xl font-bold">{dt.title}</h2>
        </div>
      ))}
    </div>
  );
}
