import React from "react";
import { Link } from "react-router-dom";
import ChartSVG from "../../assets/chart.svg";
import { SurveyType } from "../../utils/constants";

const STATUS_COLOR = {
  Live: "#20C9974D",
  Closed: "#F03E3E4D",
};

type SurveyProps = {
  survey: SurveyType;
};

const Survey: React.FC<SurveyProps> = ({ survey }) => {
  return (
    <tr>
      <td>{survey.survey_name}</td>
      <td>{survey.creator}</td>
      <td>{survey.responses.length}</td>
      <td>{survey.launch_date}</td>
      <td>{survey.close_date}</td>
      <td>
        <span
          className="survey-status"
          style={{ backgroundColor: STATUS_COLOR[survey.status] }}
        >
          {survey.status}
        </span>
      </td>
      <td>
        <Link to={`/surveys/${survey.id}`}>
          <img src={ChartSVG} alt="" />
        </Link>
      </td>
    </tr>
  );
};

export default Survey;
