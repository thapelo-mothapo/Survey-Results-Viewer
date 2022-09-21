import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Frown from "../../assets/frown.svg";
import Smile from "../../assets/Smile.svg";
import BackArrow from "../../assets/back-arrow.svg";

import Pagination from "../../components/pagination";
import Table from "../../components/table";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { SurveyType } from "../../utils/constants";
import PageNotFound from "../404";
import SurveyResponse from "../../components/surveys/SurveyDetails";

const SURVEY_TABLE_HEADING = [
  "Name",
  "Duration (min)",
  <span style={{ display: "flex", alignItems: "center" }}>
    <i style={{ marginRight: "8px" }}>Skipped</i>
    <img src={Frown} alt="" />
  </span>,
  <span style={{ display: "flex", alignItems: "center" }}>
    <i style={{ marginRight: "8px" }}>Completed</i>
    <img src={Smile} alt="" />
  </span>,
  "Date Completed",
];

const SurveyDetails: React.FC = () => {
  const [survey, setSurvey] = useState<SurveyType>();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [responsesPerPage, setResponsesPerPage] = useState(5);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = () => {
      setTimeout(async () => {
        await axios
          .get(`http://localhost:3000/surveys/${id}`)
          .then((response) => {
            setSurvey(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, 1500);
    };

    fetchData();
  }, [id]);

  const indexOfLastResponse: number = currentPage * responsesPerPage;
  const indexOfFirstResponse: number = indexOfLastResponse - responsesPerPage;
  const currentResponses = survey?.responses.slice(
    indexOfFirstResponse,
    indexOfLastResponse
  );

  if (loading) return <Spinner />;
  if (!currentResponses?.length) return <PageNotFound />;

  return (
    <main>
      <header>
        <h1 className="heading-title">{survey?.survey_name}</h1>

        <div className="heading-action">
          <Link to={"/"}>
            <img src={BackArrow} alt="" />
          </Link>
        </div>
      </header>

      <Table
        headings={SURVEY_TABLE_HEADING}
        children={currentResponses?.map((response, index) => (
          <SurveyResponse key={index} response={response} />
        ))}
      />

      <Pagination
        surveysPerPage={responsesPerPage}
        totalSurveys={survey?.responses.length!}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setSurveysPerPage={setResponsesPerPage}
      />
    </main>
  );
};

export default SurveyDetails;
