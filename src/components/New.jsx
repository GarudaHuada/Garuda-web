import { useEffect, useRef, useState } from "react";
import { UserIcon, CalendarIcon } from "@heroicons/react/outline";
import NewsModal from "./NewsModal";

const New = ({ data }) => {
  const ref = useRef();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showModal && ref.current && !ref.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <article
      key={data.id}
      className="flex flex-col items-center md:flex-row gap-4 md:gap-10"
    >
      <div className="bg-purple-300 grow-0 shrink-0 basis-48">
        <img
          src={import.meta.env.BASE_URL + data.thumbnail}
          alt=""
          className="object-cover object-center w-52 h-52"
        />
      </div>
      <div>
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold">{data.title}</h3>

          <div className="text-gray-400 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <UserIcon className="w-5 h-5" />
              <p>{data.author}</p>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-5 h-5" />
              <p>
                {new Intl.DateTimeFormat("id-ID", {
                  dateStyle: "full",
                }).format(new Date(data.publishedDate))}
              </p>
            </div>
          </div>

          <p className="text-justify">
            {data.content[0].length > 400
              ? `${data.content[0].slice(0, 400)}...`
              : data.content[0]}
          </p>
        </div>
        <div>
          <button
            type="button"
            className="mt-4 bg-gray-900 text-white font-medium text-sm px-5 py-2.5 text-center"
            onClick={() => setShowModal(true)}
          >
            Lebih Lanjut
          </button>
        </div>
      </div>

      {showModal && (
        <NewsModal setIsOpen={setShowModal} data={data} ref={ref} />
      )}
    </article>
  );
};

export default New;
