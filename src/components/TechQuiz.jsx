import { useState } from 'react';
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { quizQuestions } from '../data/quizQuestions.js';

export default function TechQuiz() {
  const [started, setStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const complete = started && questionIndex === quizQuestions.length;
  const question = quizQuestions[questionIndex];

  function restart() {
    setStarted(true);
    setQuestionIndex(0);
    setSelected(null);
    setScore(0);
  }

  function answer(index) {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.answer) setScore((current) => current + 1);
  }

  function next() {
    setQuestionIndex((current) => current + 1);
    setSelected(null);
  }

  return (
    <div className="quiz-panel">
      <div className="quiz-heading"><span className="feature-kicker"><Sparkles size={15} /> QUICK CHALLENGE</span><h3>How curious<br />are <span className="serif-italic">you?</span></h3><p>Ten quick questions. No pressure, just a little tech discovery.</p></div>
      <div className="quiz-stage">
        {!started ? (
          <div className="quiz-intro"><span className="quiz-count">10 QUESTIONS · ABOUT 3 MIN</span><h4>Ready for a quick<br />knowledge check?</h4><button className="button button-quiz" type="button" onClick={() => setStarted(true)}>Start quiz <ArrowRight size={15} /></button></div>
        ) : complete ? (
          <div className="quiz-result" role="status"><span className="quiz-count">QUIZ COMPLETE</span><div className="score-number">{score}<span> / {quizQuestions.length}</span></div><h4>{score >= 8 ? 'Brilliant curiosity.' : score >= 5 ? 'A solid start.' : 'Every expert starts somewhere.'}</h4><p>You can explore any topic that sparked your interest with the GDG community.</p><button className="button button-quiz" type="button" onClick={restart}><RotateCcw size={15} /> Try again</button></div>
        ) : (
          <div className="quiz-question" aria-live="polite">
            <div className="quiz-progress-line"><span>QUESTION {String(questionIndex + 1).padStart(2, '0')} / {quizQuestions.length}</span><span>{Math.round(((questionIndex + 1) / quizQuestions.length) * 100)}%</span></div>
            <div className="quiz-progress"><span style={{ width: `${((questionIndex + 1) / quizQuestions.length) * 100}%` }} /></div>
            <span className="quiz-topic">{question.topic}</span><h4>{question.question}</h4>
            <div className="quiz-options">{question.options.map((option, index) => {
              const isCorrect = selected !== null && index === question.answer;
              const isWrong = selected === index && index !== question.answer;
              return <button className={`quiz-option${isCorrect ? ' correct' : ''}${isWrong ? ' incorrect' : ''}`} key={option} type="button" disabled={selected !== null} onClick={() => answer(index)}><span>{String.fromCharCode(65 + index)}</span>{option}</button>;
            })}</div>
            {selected !== null && <div className={`answer-feedback ${selected === question.answer ? 'is-correct' : 'is-incorrect'}`} role="status">{selected === question.answer ? 'That’s right!' : `Not quite. The answer is: ${question.options[question.answer]}`}</div>}
            <button className="button button-quiz quiz-next" type="button" disabled={selected === null} onClick={next}>{questionIndex === quizQuestions.length - 1 ? 'See my score' : 'Next question'} <ArrowRight size={15} /></button>
          </div>
        )}
      </div>
    </div>
  );
}