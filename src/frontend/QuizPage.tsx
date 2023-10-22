import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // You can add any initialization or fetch operations here if needed.
    setLoading(false); // Setting loading to false after the operations are done.
  }, []);

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true); // Setting loading to true when starting the submit operation.
    try {
      const response = await axios.post('http://127.0.0.1:8000/form1', answers, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        console.log('Data sent successfully:', response.data);
      } else {
        console.log('Server returned a non-200 status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false); // Setting loading to false after the submit operation is done.
  };

  return (
    <div style={{ background: 'lightblue', padding: '20px' }}>
      <h1 style={{ color: 'blue' }}>Quiz</h1>
      <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
        {Object.keys(inputs).map((category) => (
          <div key={category}>
            <h2 style={{ color: 'blue' }}>{category}</h2>
            {inputs[category].map((question: string) => (
              <div key={question}>
                <label style={{ color: 'blue' }}>{question}</label>
                <input
                  type="text"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(category, question, e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid blue' }}
                  value={answers[category][question] || ''}
                />
              </div>
            ))}
          </div>
        ))}
        <button type="submit" style={{ background: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default QuizPage;
