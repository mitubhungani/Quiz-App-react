import React, { useState } from 'react';

const QuizApp = () => {
  const questions = [
    {
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      options: {
        A: "<script name='script.js'>",
        B: "<script src='script.js'>",
        C: "<script href='script.js'>",
        D: "<script ref='script.js'>"
      },
      correct: "B"
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: {
        A: "msg('Hello World');",
        B: "alertBox('Hello World');",
        C: "alert('Hello World');",
        D: "msgBox('Hello World');"
      },
      correct: "C"
    },
    {
      question: "Which of the following is not a reserved word in JavaScript?",
      options: {
        A: "interface",
        B: "throws",
        C: "program",
        D: "short"
      },
      correct: "C"
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      options: {
        A: "var colors = (1:'red', 2:'green', 3:'blue')",
        B: "var colors = 'red', 'green', 'blue'",
        C: "var colors = ['red', 'green', 'blue']",
        D: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
      },
      correct: "C"
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: {
        A: "onchange",
        B: "onclick",
        C: "onmouseclick",
        D: "onmouseover"
      },
      correct: "B"
    },
    {
      question: "How do you declare a JavaScript variable?",
      options: {
        A: "variable carName;",
        B: "var carName;",
        C: "v carName;",
        D: "string carName;"
      },
      correct: "B"
    },
    {
      question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
      code: "<p id='demo'>This is a demonstration.</p>",
      options: {
        A: "document.getElementById('demo').innerHTML = 'Hello World!';",
        B: "document.getElementByName('demo').innerHTML = 'Hello World!';",
        C: "document.getElementByTagName('p').innerHTML = 'Hello World!';",
        D: "document.getElement('p').innerHTML = 'Hello World!';"
      },
      correct: "A"
    },
    {
      question: "How do you create a function in JavaScript?",
      options: {
        A: "function myFunction()",
        B: "function:myFunction()",
        C: "function = myFunction()",
        D: "function => myFunction()"
      },
      correct: "A"
    },
    {
      question: "How do you call a function named 'myFunction'?",
      options: {
        A: "call myFunction()",
        B: "call function myFunction()",
        C: "myFunction()",
        D: "Call.myFunction()"
      },
      correct: "C"
    },
    {
      question: "How can you add a comment in JavaScript?",
      options: {
        A: "'This is a comment",
        B: "<!--This is a comment-->",
        C: "//This is a comment",
        D: "*This is a comment*"
      },
      correct: "C"
    },
    {
      question: "What will the following code return: Boolean(10 > 9)?",
      options: {
        A: "false",
        B: "true",
        C: "NaN",
        D: "undefined"
      },
      correct: "B"
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: {
        A: "*",
        B: "x",
        C: "=",
        D: "-"
      },
      correct: "C"
    },
    {
      question: "What is the correct JavaScript syntax to write 'Hello World'?",
      options: {
        A: "('Hello World')",
        B: "document.write('Hello World')",
        C: "response.write('Hello World')",
        D: "('Hello World').document.write"
      },
      correct: "B"
    },
    {
      question: "Which method can be used to find the length of a string?",
      options: {
        A: "length()",
        B: "getLength()",
        C: "strlen()",
        D: "length"
      },
      correct: "D"
    },
    {
      question: "Which built-in method sorts the elements of an array?",
      options: {
        A: "changeOrder(order)",
        B: "order()",
        C: "sort()",
        D: "arrange()"
      },
      correct: "C"
    },
    {
      question: "Which of the following is a way to create an object in JavaScript?",
      options: {
        A: "var obj = {};",
        B: "var obj = ();",
        C: "var obj = [];",
        D: "var obj = <>;"
      },
      correct: "A"
    },
    {
      question: "How do you round the number 7.25 to the nearest integer?",
      options: {
        A: "Math.rnd(7.25)",
        B: "Math.round(7.25)",
        C: "rnd(7.25)",
        D: "round(7.25)"
      },
      correct: "B"
    },
    {
      question: "How can you detect the client’s browser name?",
      options: {
        A: "navigator.appName",
        B: "browser.name",
        C: "client.navName",
        D: "window.browser"
      },
      correct: "A"
    },
    {
      question: "Which JavaScript method is used to access an HTML element by id?",
      options: {
        A: "getElementById()",
        B: "getElement(id)",
        C: "getElementByID()",
        D: "getIdElement()"
      },
      correct: "A"
    }
  ];

  const [selectedOptions, setSelectedOptions] = useState({});
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (questionIndex, option) => {
    if (!isAnswered) {
      setSelectedOptions({
        ...selectedOptions,
        [questionIndex]: option,
      });
    }
  };

  const handleSubmit = () => {
    if (Object.keys(selectedOptions).length !== questions.length) {
      alert("All are required");
      return;
    }
    setIsAnswered(true);
  };

  const handleQuestions = () => (
    <div className="space-y-8">
      {questions.map((question, index) => (
        <div key={index} className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">{question.question}</h3>
          <div className="grid grid-cols-1 gap-4">
            {Object.entries(question.options).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleOptionClick(index, key)}
                className={`p-4 border rounded-lg transition-colors duration-200 ${
                  isAnswered
                    ? key === question.correct
                      ? 'bg-green-500 text-white border-green-500'
                      : selectedOptions[index] === key
                      ? 'bg-red-500 text-white border-red-500'
                      : 'bg-gray-200 text-gray-700 border-gray-200'
                    : selectedOptions[index] === key
                    ? 'bg-blue-200 border-blue-400'
                    : 'bg-white hover:bg-blue-50 border-gray-300'
                }`}
                disabled={isAnswered}
              >
                {key}. {value}
              </button>
            ))}
          </div>
        </div>
      ))}
      {!isAnswered && (
        <button
          onClick={handleSubmit}
          className="mt-8 py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-colors duration-200"
        >
          Submit Answers
        </button>
      )}
    </div>
  );

  return (
    <div className="container mx-auto p-8 min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">QuizApp</h2>
      {handleQuestions()}
    </div>
  );
};

export default QuizApp;