// Pagination.tsx

import React from "react";
import useProducts from "@/hooks/use-products";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
  const { currentPage, totalPages, nextPage, prevPage } = useProducts();
  onPageChange(currentPage);

  return (
    <div className="flex justify-center lg:w-fit xs:w-[200px] items-center my-4">
      <button
        onClick={() => prevPage()}
        disabled={currentPage === 1}
        className="mr-2 px-4 py-2 flex flex-row gap-x-2 bg-blue-600 text-neutral-100 hover:bg-blue-900 transition delay-100 duration-500 rounded-md cursor-pointer"
      >
        <ChevronLeft />
        <p>Предыдущее</p>
      </button>

      <span className="text-gray-700">
        Стр. {currentPage} из {totalPages}
      </span>

      <button
        onClick={() => nextPage()}
        disabled={currentPage === totalPages}
        className="ml-2 px-4 py-2 flex flex-row gap-x-2 bg-blue-600 text-neutral-100 hover:bg-blue-900 transition delay-100 duration-500 rounded-md cursor-pointer"
      >
        <p>Следующее</p>
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
