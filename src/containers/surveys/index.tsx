import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

import BackArrow from "../../assets/back-arrow.svg";

import Pagination from "../../components/pagination";
import Table from "../../components/table";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { SurveyType } from "../../utils/constants";
import NotFound from "../404";
import SurveyResponse from "../../components/surveys/SurveyDetails";

const SURVEY_TABLE_HEADING = [
  "Name",
  "Duration (min)",
  "Skipped",
  "Completed",
  "Date Completed",
];

const SurveyDetails: React.FC = () => {
  const [survey, setSurvey] = useState<SurveyType>();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [responsesPerPage, setResponsesPerPage] = useState(5);

  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = () => {
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

    fetchPosts();
  }, [id]);

  const indexOfLastResponse: number = currentPage * responsesPerPage;
  const indexOfFirstResponse: number = indexOfLastResponse - responsesPerPage;
  const currentResponses = survey?.responses.slice(
    indexOfFirstResponse,
    indexOfLastResponse
  );

  if (loading) return <Spinner />;
  if (!currentResponses?.length) return <NotFound />;

  return (
    <main>
      <header>
        <div className="heading-title">
          <h1>{survey?.survey_name}</h1>
          <p>Creator: {survey?.creator}</p>
        </div>
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
