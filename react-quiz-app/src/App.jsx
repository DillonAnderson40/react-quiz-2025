import { useState } from 'react'; 
import './App.css'; 
import Question from './components/Question'; 
import Score from './components/Score'; 
import Header from './components/Header'; 
import Footer from './components/Footer';
 
const quizQuestions = [ 
  { 
    question: "What is the purpose of useState in React?", 
    options: [ 
      "To manage state in a functional component", 
      "To handle side effects", 
      "To perform HTTP requests", 
      "To create a new component" 
    ], 
    answer: "To manage state in a functional component" 
  }, 
  { 
    question: "What does JSX stand for?", 
    options: [       
      "JavaScript", 
      "JavaScript XML", 
      "Java Styling Extension", 
      "JavaScript Syntax Expression" 
    ], 
    answer: "JavaScript XML" 
  }, 
{ 
  question: "Which hook is used to handle side effects in functional components?", 
  options: [ 
    "useState", 
    "useEffect", 
    "useReducer", 
    "useContext" 
  ], 
  answer: "useEffect" 
},
{ 
  question: "How do you pass data from a parent component to a child component in React?", 
  options: [ 
    "Using state", 
    "Using props", 
    "Using context", 
    "Using hooks" 
  ], 
  answer: "Using props" 
},
{
  question: "What is the virtual DOM in React?",
  options: [
    "A copy of the real DOM that React uses to optimize updates",
    "A new type of database",
    "A styling framework",
    "A server-side rendering technique"
  ],
  answer: "A copy of the real DOM that React uses to optimize updates"
},
{
  question: "Which method is used to create a new React component?",
  options: [
    "React.createComponent()",
    "function ComponentName() {}",
    "new React.Component()",
    "React.newComponent()"
  ],
  answer: "function ComponentName() {}"
},
{
  question: "What is the purpose of keys in React lists?",
  options: [
    "To uniquely identify elements for efficient updates",
    "To style list items",
    "To handle events",
    "To manage state"
  ],
  answer: "To uniquely identify elements for efficient updates"
},
{
  question: "How can you optimize performance in a React application?",
  options: [
    "Using React.memo to memoize components",
    "Avoiding the use of hooks",
    "Using class components instead of functional components",
    "Disabling the virtual DOM"
  ],
  answer: "Using React.memo to memoize components"
},
{
  question: "What is the purpose of the useContext hook in React?",
  options: [
    "To manage local component state",
    "To access global state without prop drilling",
    "To perform side effects",
    "To create new components"
  ],
  answer: "To access global state without prop drilling"
},
{  question: "Which of the following is NOT a lifecycle method in React class components?",
  options: [
    "componentDidMount",
    "componentWillUnmount",
    "useEffect",
    "shouldComponentUpdate"
  ],
  answer: "useEffect"
},   
]; 
 
const App = () => { 
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [score, setScore] = useState(0); 
  const [showScore, setShowScore] = useState(false); 
  const [selectedOption, setSelectedOption] = useState(''); 
 
  const handleOptionChange = (e) => { 
 
    setSelectedOption(e.target.value); 
  }; 
 
  const handleNextQuestion = () => { 
    if (selectedOption === quizQuestions[currentQuestion].answer) { 
      setScore(score + 1); 
    } 
 
    setSelectedOption(''); 
 
    if (currentQuestion < quizQuestions.length - 1) { 
      setCurrentQuestion(currentQuestion + 1); 
    } else { 
      setShowScore(true); 
    } 
  }; 
 
  const handleRestartQuiz = () => { 
    setCurrentQuestion(0); 
    setScore(0); 
    setShowScore(false); 
    setSelectedOption(''); 
  }; 
 
  return ( 
    <div className="quiz-app">
      <Header />

      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
        ></div>
      </div>
      
      {showScore ? ( 
        <Score score={score} totalQuestions={quizQuestions.length} 
handleRestartQuiz={handleRestartQuiz} /> 
      ) : ( 
        <Question 
          questionData={quizQuestions[currentQuestion]} 
          selectedOption={selectedOption} 
          handleOptionChange={handleOptionChange} 
          handleNextQuestion={handleNextQuestion} 
          currentQuestion={currentQuestion} 
          totalQuestions={quizQuestions.length} 
        /> 
      )} 
      <Footer />
    </div> 
  ); 
}; 
 
export default App; 
