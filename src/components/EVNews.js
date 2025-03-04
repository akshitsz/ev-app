import React, { useState } from "react";
import "../styles/EVNews.css";

const EVNews = () => {
  // Quiz questions
  const quizData = [
    {
      question: "Which company produced the first mass-market electric car?",
      options: ["Tesla", "Nissan", "BMW", "Ford"],
      answer: "Nissan",
    },
    {
      question: "What is the main advantage of electric vehicles?",
      options: ["Faster speed", "Eco-friendliness", "Cheaper than petrol cars", "Flying capability"],
      answer: "Eco-friendliness",
    },
    {
      question: "Which battery type is commonly used in EVs?",
      options: ["Lead-Acid", "Nickel-Metal Hydride", "Lithium-Ion", "Alkaline"],
      answer: "Lithium-Ion",
    },
  ];

  // State to track quiz answers
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Handle option selection
  const handleAnswerSelect = (questionIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
  };

  // Calculate Quiz Score
  const calculateScore = () => {
    let score = 0;
    quizData.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="ev-news">
      <h2>🔋 Latest News on Electric Vehicles</h2>
      <p>Stay updated with the latest trends, innovations, and policies in the EV world.</p>

      {/* EV News Articles */}
      <section className="news-articles">
        <article>
          <h3>🚗 Tesla Unveils New Cybertruck with Enhanced Battery</h3>
          <p>Tesla has just launched its new Cybertruck with a **500-mile range** and super-fast charging.</p>
          <a href="https://www.tesla.com/cybertruck" target="_blank" rel="noopener noreferrer">Read more</a>
        </article>

        <article>
          <h3>⚡ India to Install 5000+ EV Charging Stations by 2025</h3>
          <p>The Indian government has announced a **huge expansion of EV charging stations** across major cities.</p>
          <a href="https://www.e-amrit.niti.gov.in/" target="_blank" rel="noopener noreferrer">Read more</a>
        </article>

        <article>
          <h3>🌍 The World's Fastest EV Supercar Announced</h3>
          <p>A new EV **supercar** can reach **0-100 km/h in just 2 seconds!** This is the future of speed.</p>
          <a href="https://insideevs.com/" target="_blank" rel="noopener noreferrer">Read more</a>
        </article>
      </section>

      {/* EV YouTube Video */}
      <section className="ev-video">
        <h2>🎥 Watch the Best EV Video</h2>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/Sb0p9mIjmrM" 
          title="Best EV Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>

      {/* EV Quiz */}
      <section className="ev-quiz">
        <h2>🧠 Test Your EV Knowledge!</h2>
        {quizData.map((q, index) => (
          <div key={index} className="quiz-question">
            <h3>{q.question}</h3>
            {q.options.map((option, i) => (
              <button
                key={i}
                className={selectedAnswers[index] === option ? "selected" : ""}
                onClick={() => handleAnswerSelect(index, option)}
              >
                {option}
              </button>
            ))}
          </div>
        ))}
        <button className="btn-primary" onClick={() => setShowResults(true)}>Submit Answers</button>

        {/* Show Score */}
        {showResults && (
          <div className="quiz-results">
            <h3>🎉 Your Score: {calculateScore()} / {quizData.length}</h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default EVNews;
