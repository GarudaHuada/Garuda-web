import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { news } from "../data.json";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import New from "./New";

const News = () => {
  const [currentItems, setCurrentItems] = useState(null);
  const [itemsPerPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(news.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(news.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % news.length;
    setItemOffset(newOffset);
  };

  return (
    <section>
      <header className="bg-gray-100 flex">
        <div className="w-[8px] bg-gray-900"></div>
        <h2 className="uppercase text-2xl font-semibold py-3 px-6">
          Berita Terbaru
        </h2>
      </header>

      <div className="py-9 space-y-8 md:space-y-4">
        {currentItems &&
          currentItems.map((item) => <New key={item.id} data={item} />)}
        <ReactPaginate
          breakLabel="..."
          nextLabel={<ChevronRightIcon className="w-5 h-5 text-gray-800" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<ChevronLeftIcon className="w-5 h-5 text-gray-800" />}
          pageClassName="py-2 px-3 leading-tight text-gray-700 bg-white border border-gray-300 hover:bg-gray-200 hover:text-gray-700"
          previousClassName="block py-2 px-3 ml-0 leading-tight text-gray-700 bg-white rounded-l border border-gray-300 hover:bg-gray-200 hover:text-gray-700"
          nextClassName="block py-2 px-3 leading-tight text-gray-700 bg-white rounded-r border border-gray-300 hover:bg-gray-200 hover:text-gray-700"
          containerClassName="mt-4 flex justify-center items-center md:justify-end -space-x-px"
          activeClassName="py-2 px-3 text-gray-600 bg-gray-300 border border-gray-300 hover:bg-gray-100 hover:text-gray-900"
          renderOnZeroPageCount={null}
        />
      </div>
    </section>
  );
};

export default News;
