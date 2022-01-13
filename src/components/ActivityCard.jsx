import { CalendarIcon } from "@heroicons/react/outline";

const ActivityCard = ({ data }) => {
  return (
    <article
      key={data.id}
      className="relative bg-gray-200 shadow-lg overflow-hidden max-w-[320px] shrink-0"
    >
      <img
        src={data.thumbnail}
        alt=""
        className="block object-cover"
      />
      <div className="py-2 px-3">
        <h3 className="font-semibold text-xl mb-1">{data.title}</h3>
        <div className="flex items-center gap-2 text-gray-600">
          <CalendarIcon className="w-6 h-6" />
          <span>
            {new Intl.DateTimeFormat("id-ID", {
              dateStyle: "full",
            }).format(new Date(data.date))}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ActivityCard;
