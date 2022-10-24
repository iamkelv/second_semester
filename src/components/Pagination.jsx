import React from "react";

export const Pagination = ({ data, totalData, dataPerPage, paginated }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }
  const totalPageNumber = () => {};
  return (
    <div>
      {pageNumber.map((number) => (
        <button key={number} onClick={() => paginated(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};
