import React from "react";
import "./index";
import { Link } from "react-router-dom";
import "./App"
const Paginationpage = ({ postsPerPage, totalPosts, paginate, prev, next }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.round(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="list">
        <>
          <button onClick={prev}>prev</button>
          {pageNumbers.map((item) => (
            <li key={item}>
              {" "}
              <button onClick={() => paginate(item)}>{item}</button>{" "}
            </li>
          ))}
          <button onClick={next}>next</button>
        </>
      </ul>
    </nav>
  );
};

export default Paginationpage;
