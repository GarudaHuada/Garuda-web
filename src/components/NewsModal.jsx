import { forwardRef, useEffect } from "react";
import { UserIcon, CalendarIcon } from "@heroicons/react/outline";

const NewsModal = forwardRef(({ setIsOpen, data }, ref) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div
      className={`flex overflow-y-auto overflow-x-hidden fixed bg-black bg-opacity-60 z-50 justify-center items-center inset-0 md:h-full`}
    >
      <div
        ref={ref}
        className="relative px-4 w-full max-w-5xl md:h-auto text-gray-900"
      >
        <div className="relative bg-gray-200 rounded shadow max-h-[95vh] overflow-y-auto scrollbar-thin">
          <div className="p-5 rounded-t border-b border-gray-300">
            <h3 className="text-xl font-semibold text-gray-900 md:text-4xl lg:leading-snug">
              {data.title}
            </h3>
            <ul className="mt-4 space-y-3 md:space-x-5 text-sm">
              <li className="text-gray-500 inline-flex border border-gray-500 px-2.5 py-0.5 gap-2 items-center rounded">
                <UserIcon className="w-4 h-4" />
                <div>{data.author}</div>
              </li>
              <li className="text-gray-500 inline-flex border border-gray-500 px-2.5 py-0.5 gap-2 items-center rounded">
                <CalendarIcon className="w-4 h-4" />
                <div>
                  {new Intl.DateTimeFormat("id-ID", {
                    dateStyle: "full",
                  }).format(new Date(data.publishedDate))}
                </div>
              </li>
            </ul>
          </div>
          <div className="p-6 space-y-6 text-gray-900">
            {data.thumbnail && (
              <div className="max-w-xl mx-auto">
                <img
                  src={data.thumbnail}
                  alt="thumbnail"
                />
              </div>
            )}
            {data.content.map((content, index) => (
              <p key={index} className="text-base text-justify leading-relaxed">
                {content}
              </p>
            ))}
          </div>
          <div className="flex items-center p-6 space-x-2 rounded-b">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => setIsOpen(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NewsModal;
