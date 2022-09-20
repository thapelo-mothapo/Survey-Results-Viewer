import ChevronLeft from "../../assets/chevron-left.svg";
import ChevronRight from "../../assets/chevron-right.svg";
import "./styles.css";

interface PaginationProps {
  surveysPerPage: number;
  totalSurveys: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
  currentPage: number;
  setSurveysPerPage: (perPage: number) => void;
}
const Pagination = ({
  surveysPerPage,
  totalSurveys,
  setCurrentPage,
  currentPage,
  setSurveysPerPage,
}: PaginationProps) => {
  const maxPages: number = Math.ceil(totalSurveys / surveysPerPage);

  return (
    <nav className="pagination">
      <span style={{ marginRight: "8px" }}>Rows per page:</span>
      <select
        value={surveysPerPage}
        onChange={(event) => setSurveysPerPage(parseInt(event.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>

      <span>
        {currentPage} of {maxPages}
      </span>

      <img
        className="prev-btn"
        src={ChevronLeft}
        alt=""
        onClick={() => setCurrentPage((prev: number) => prev - 1)}
        style={{ pointerEvents: !--currentPage ? "none" : "auto" }}
      />
      <img
        className="next-btn"
        src={ChevronRight}
        alt=""
        style={{ pointerEvents: currentPage >= maxPages - 1 ? "none" : "auto" }}
        onClick={() =>
          setCurrentPage((prev: number) => {
            return prev + 1;
          })
        }
      />
    </nav>
  );
};

export default Pagination;
