import React, { useState, ChangeEvent, FormEvent } from 'react';

interface InputCategories {
  [key: string]: string[];
}

const QuizPage = () => {
  const inputs: InputCategories = {
    Biographical: ["Ethnicity", "Gender", "Age", "Demographic", "Annual Family Income", "Will be requiring aid, (Y/N)"],
    Personality: ["How would you describe yourself in one word", "On a scale of one to ten, how much would you say you are a social person", "On a scale of one to ten, how confident do you think you are in dealing with high levels of stress and performance pressure", "In a sentence or two, how would you describe your ideal college experience. (Don't stress! Not an essay)", "What do you think constitutes as fun?", "The Greatest Weekend Plan is: "],
    AcademicCurrentStanding: ["Current GPA", "GPA trajectory, last n-8 years", "SAT/ACT scores", "Any APs taken whatsoever", "Academic Competitions Won/Participated in", "Any Research that you were a part of", "Did you start any companies/organizations?", "What about extra curricular, what did you do besides academics?", "What's something fun that you have done that has had an impact on other people?", "What about your leadership experiences?", "Anything missing?"]
  };
  
  const [answers, setAnswers] = useState<{ [key: string]: { [key: string]: any } }>({
    Biographical: {},
    Personality: {},
    AcademicCurrentStanding: {},
  });

  const handleInputChange = (
    category: string,
    question: string,
    value: any 
  ) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [category]: {
        ...prevAnswers[category],
        [question]: value,
      },
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can process the answers here, for example, send them to a server
    console.log(answers);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(answers).map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            {inputs[category].map((question: string) => (
              <div key={question}>
                <label>{question}</label>
                <input
                  type="text"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(category, question, e.target.value)}
                />
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuizPage;
