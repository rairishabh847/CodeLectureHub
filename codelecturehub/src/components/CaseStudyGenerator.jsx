import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { URL } from "./Constant";  

 // Import API URL

function CaseStudyGenerator({ query }) {
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      generateExplanation();
    }
  }, [query]);

  const generateExplanation = async () => {
    setIsLoading(true);
    try {
      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: `Explain the problem related to "${query}". 
                1. Explain the problem. 
                2. Provide a solution in C language. 
                3. Give a practical example with expected output.`
              }
            ]
          }
        ]
      };

      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'src/components/Constant.js',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      setResponse(data.candidates[0]?.content || "No response received.");
    } catch (error) {
      console.error('Error generating explanation:', error);
      alert("API Error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-blue-900 text-xl font-semibold">Generated Explanation</h2>
      {isLoading ? <p className="text-gray-600">Generating...</p> : <Markdown>{response}</Markdown>}
    </div>
  );
}

export default CaseStudyGenerator;
