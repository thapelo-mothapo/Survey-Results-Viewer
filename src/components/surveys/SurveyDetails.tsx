import React from "react";
import { SurveyResponseType } from "../../utils/constants";

type ResponseProps = {
  response: SurveyResponseType;
};

const SurveyResponse: React.FC<ResponseProps> = ({ response }) => {
  return (
    <tr>
      <td>{response.name}</td>
      <td>{response.duration}</td>
      <td>{response.skipped}</td>
      <td>{response.completed}</td>
      <td>{response.completed_date}</td>
    </tr>
  );
};

export default SurveyResponse;
