import React from "react";

export default function Pagination  ({page, setPage})  {

  const Previous = () => {
    const currPage = page !== 1 ? page-1 : page 
    setPage(currPage)
  }

  const Next = () => {
    if(page < 10){
      setPage(page + 1)
    }
  };

  return (
    <>
      <div className="my-3 d-flex justify-content-between align-items-center">
        <button
          className="px-3 py-1 m-1 text-center btn-primary"
          onClick={Previous}
        >
          Previous
        </button>
        <button
          className="px-3 py-1 m-1 text-center btn-primary"
          onClick={Next}
        >
          Next
        </button>
      </div>
    </>
  );
};