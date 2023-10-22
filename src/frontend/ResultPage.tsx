import React, { useState, useEffect } from 'react';
import './LoginPage.css'; // You can change this if you have a separate CSS file for ResultPage

export default function ResultPage() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://0.0.0.0:8080/openai')
      .then((response) => response.json())
      .then((data) => setData(data.output)) // Assuming the API response has an 'output' field
      .catch((error) => console.log('Error fetching data:', error));
  }, []);

  return (
    <div className="result-container">
      <h1>Result:</h1>
      <p>{data}</p>
    </div>
  );
}
