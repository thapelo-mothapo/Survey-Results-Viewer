import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

import Pagination from "../../components/pagination";
import Table from "../../components/table";
import Survey from "../../components/surveys/Survey";
import Spinner from "../../components/Spinner";
import { SurveyType } from "../../utils/constants";
import NotFound from "../404";

const SURVEY_TABLE_HEADING = [
  "Survey Name",
  "Created By",
  "Responses",
  "Launch Date",
  "Close Date",
  "Status",
  "",
];

const Dashboard: React.FC = () => {
  const [surveys, setSurveys] = useState<SurveyType[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [surveysPerPage, setSurveysPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = () => {
      setTimeout(async () => {
        await axios
          .get("http://localhost:3000/surveys/")
          .then((response) => {
            setSurveys(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log("survey fetch faild", error);
            setLoading(false);
          });
      }, 1500);
    };

    fetchPosts();
  }, []);

  const indexOfLastSurvey: number = currentPage * surveysPerPage;
  const indexOfFirstSurvey: number = indexOfLastSurvey - surveysPerPage;
  const currentSurveys = surveys.slice(indexOfFirstSurvey, indexOfLastSurvey);

  if (loading) return <Spinner />;
  if (!currentSurveys.length) return <NotFound />;

  return (
    <main>
      <h1>Surveys</h1>
      <Table
        headings={SURVEY_TABLE_HEADING}
        children={currentSurveys.map((survey, index) => (
          <Survey survey={survey} key={index} />
        ))}
      />

      {!loading && (
        <Pagination
          surveysPerPage={surveysPerPage}
          totalSurveys={surveys.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setSurveysPerPage={setSurveysPerPage}
        />
      )}
    </main>
  );
};

export default Dashboard;
