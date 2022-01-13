import { activities } from "../data.json";
import ActivityCard from "./ActivityCard";

const Activities = () => {
  return (
    <section>
      <header className="bg-gray-100 flex">
        <div className="w-[8px] bg-gray-900"></div>
        <h2 className="uppercase text-2xl font-semibold py-3 px-6">
          Kegiatan Terbaru
        </h2>
      </header>

      <div className="py-9 flex justify-center overflow-x-hidden">
        <div className="pb-8 px-[1vw] w-full flex overflow-x-auto gap-8 snap-x scrollbar-thin">
          {activities.map((data) => {
            return <ActivityCard key={data.id} data={data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
