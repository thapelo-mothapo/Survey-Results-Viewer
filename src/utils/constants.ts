type SURVEY_STATUS = "Live" | "Closed";

export type SurveyType = {
  id: number;
  survey_name: string;
  creator: string;
  responses: SurveyResponseType[];
  launch_date: string;
  close_date: string;
  status: SURVEY_STATUS;
};

export type SurveyResponseType = {
  name: string;
  duration: number;
  skipped: number;
  completed: number;
  completed_date: string;
};
