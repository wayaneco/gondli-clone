export interface SurveyQuestion {
  key: string;
  content: string;
  options: string[];
  type: 'radio' | 'multiselect';
}

export interface SurveyQuestions {
  data: {
    name: string;
    sections: ['Wellness Enthusiast', 'Business Owner'];
    questions: SurveyQuestion[];
    'Wellness Enthusiast': SurveyQuestion[];
    'Business Owner': SurveyQuestion[];
  };
}
