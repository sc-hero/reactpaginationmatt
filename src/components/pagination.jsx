import "../index.css"
import React, {useState, useEffect} from "react";

const Pagination = ({
  courses,
  currentPage = 1,
  setCurrentPage,
  coursesPerPage,
  containerStyle,
  paginationStyle,
  paginationItemStyle,
  styleObj
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(courses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...pageNumbers];
    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";
    if (pageNumbers.length < 6) {
      tempNumberOfPages = pageNumbers;
    } else if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pageNumbers.length];
    } else if (currentPage === 4) {
      const sliced = pageNumbers.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, pageNumbers.length];
    } else if (currentPage > 4 && currentPage < pageNumbers.length - 2) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = pageNumbers.slice(currentPage - 2, currentPage); // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = pageNumbers.slice(currentPage, currentPage + 1); // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        pageNumbers.length,
      ]; // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentPage > pageNumbers.length - 3) {
      // > 7
      const sliced = pageNumbers.slice(pageNumbers.length - 4); // slice(10-4)
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentPage === dotsInitial) {
      // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      setCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentPage === dotsRight) {
      setCurrentPage(arrOfCurrButtons[3] + 2);
    } else if (currentPage === dotsLeft) {
      setCurrentPage(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentPage);
  }, [currentPage, pageNumbers]);
  return (
    <div
      style={styleObj}
      className={`parent flex justify-center mb-20 ${containerStyle}`}
    >
      <ul className={`pagination flex ${paginationStyle}`}>
        {currentPage > 1 && (
          <li className={`page-item px-4 text-white ${paginationItemStyle}`}>
            <button
              className="page-button py-1"
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Prev
            </button>
          </li>
        )}

        {arrOfCurrButtons.map((number) => (
          <li key={number} className="page-item px-4 text-white">
            <button
              onClick={() => paginate(number)}
              className={[
                currentPage === number && "bg-custom-color1 rounded px-3 py-1",
                "px-5 py-1",
              ]}
            >
              {number}
            </button>
          </li>
        ))}
        {arrOfCurrButtons.length != 1 && (
          <li className="page-item px-4 text-white">
            <button
              className="py-1"
              onClick={() =>
                setCurrentPage((prev) =>
                  prev === pageNumbers.length ? prev : prev + 1
                )
              }
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;