import React from "react";
import css from "../app.module.scss";

const PaginationButtons = ({ currentPage, setCurrentPage }) => (
  <div className={css.buttonDiv}>
    <button
      onClick={() => setCurrentPage((current) => Math.max(current - 1, 1))}
      className={css.button}
    >
      Prev
    </button>
    <button
      onClick={() => setCurrentPage((current) => current + 1)}
      className={css.button}
    >
      Next
    </button>
  </div>
);

export default PaginationButtons;
