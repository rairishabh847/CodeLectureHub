// import React, { useState } from "react";

// // const GEMINI_API_KEY = "AIzaSyCTqz5T6MLN6iVSfuhhzaf2UBX3cFxLZ5A"; // Not safe in frontend for prod
// const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


// const GeminiCCodeGenerator = () => {
//   const [query, setQuery] = useState("");
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const fetchGeminiResult = async () => {
//     if (!query.trim()) return;
//     setLoading(true);

//     try {
//       const res = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   {
//                     text: `Generate short introduction, then C code and example for: ${query}`,
//                   },
//                 ],
//               },
//             ],
//             generationConfig: {
//               temperature: 0.7,
//               topK: 40,
//               topP: 0.95,
//               maxOutputTokens: 1024,
//             },
//           }),
//         }
//       );
      

//       const data = await res.json();
//       const content = data?.candidates?.[0]?.content?.parts?.[0]?.text;

//       setResult(content || "No result.");
//     } catch (error) {
//       console.error("Error fetching Gemini result:", error);
//       setResult("Something went wrong while fetching data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 max-w-xl mx-auto">
//       <h2 className="text-xl font-bold mb-2">C Code Generator</h2>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter a C topic (e.g., 'pointers')"
//         className="border p-2 w-full mb-2"
//       />
//       <button
//         onClick={fetchGeminiResult}
//         disabled={loading}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         {loading ? "Generating..." : "Generate Code"}
//       </button>
//       <div className="mt-4 whitespace-pre-wrap bg-gray-100 p-3 rounded">
//         {result}
//       </div>
//     </div>
//   );
// };

// export default GeminiCCodeGenerator;


//----------------------------------------new one-------------------------

// import React, { useState } from "react";

// // ✅ Secure key usage (should be defined in .env file as VITE_GEMINI_API_KEY)
// const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// const GeminiCCodeGenerator = () => {
//   const [query, setQuery] = useState("");
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const fetchGeminiResult = async () => {
//     if (!query.trim()) return;
//     setLoading(true);

//     try {
//       const res = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 role: "user", // ✅ Required by Gemini API
//                 parts: [
//                   {
//                     text: `Generate a short introduction, then C code and an example for: ${query}`,
//                   },
//                 ],
//               },
//             ],
//             generationConfig: {
//               temperature: 0.7,
//               topK: 40,
//               topP: 0.95,
//               maxOutputTokens: 1024,
//             },
//           }),
//         }
//       );

//       const data = await res.json();
//       const content = data?.candidates?.[0]?.content?.parts?.[0]?.text;

//       setResult(content || "No result.");
//     } catch (error) {
//       console.error("Error fetching Gemini result:", error);
//       setResult("Something went wrong while fetching data.");
//     } finally {
//       console.log("Gemini API Key:", import.meta.env.VITE_GEMINI_API_KEY);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 max-w-xl mx-auto">
//       <h2 className="text-xl font-bold mb-2">C Code Generator</h2>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter a C topic (e.g., 'pointers')"
//         className="border p-2 w-full mb-2"
//       />
//       <button
//         onClick={fetchGeminiResult}
//         disabled={loading}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         {loading ? "Generating..." : "Generate Code"}
//       </button>
//       <div className="mt-4 whitespace-pre-wrap bg-gray-100 p-3 rounded">
//         {result}
//       </div>
//     </div>
//   );
// };

// export default GeminiCCodeGenerator;

//==================================final code========================================
// import React, { useState } from 'react';

// const CLH = () => {
//   const [query, setQuery] = useState('');
//   const [response, setResponse] = useState('');
//   const [loading, setLoading] = useState(false);

//   // const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
//   const GEMINI_API_KEY ="AIzaSyBOI4-0Q3RQXlfICAW1MFGvBy2Vwsc9uz4";

//   const handleQuerySubmit = async () => {
//     if (!query.trim()) {
//       setResponse('Please enter a query.');
//       return;
//     }

//     setLoading(true);
//     setResponse('');

//     try {
//       const result = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [{ text: query }],
//               },
//             ],
//           }),
//         }
//       );

//       const data = await result.json();
//       const geminiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

//       setResponse(geminiText || 'No response received from Gemini.');
//     } catch (error) {
//       console.error('Error fetching Gemini response:', error);
//       setResponse('An error occurred while fetching the response.');
//     }

//     setLoading(false);
//   };

//   // return (
//   //   <div className="p-6 max-w-xl mx-auto rounded-xl shadow-md space-y-4 bg-white">
//   //     <h2 className="text-xl font-bold text-center">Gemini Text Generator</h2>
      
//   //     <textarea
//   //       value={query}
//   //       onChange={(e) => setQuery(e.target.value)}
//   //       placeholder="Enter your query here..."
//   //       className="w-full p-2 border border-gray-300 rounded"
//   //       rows={4}
//   //     />

//   //     <button
//   //       onClick={handleQuerySubmit}
//   //       className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
//   //       disabled={loading}
//   //     >
//   //       {loading ? 'Generating...' : 'Submit'}
//   //     </button>

//   //     {response && (
//   //       <div className="bg-gray-100 p-4 rounded mt-4 whitespace-pre-wrap">
//   //         <strong>Gemini Response:</strong>
//   //         <p>{response}</p>
//   //       </div>
//   //     )}
//   //   </div>
//   // );

//   return (
//     <div className="p-6 max-w-xl mx-auto rounded-2xl shadow-2xl space-y-5 bg-gradient-to-br from-white to-blue-50">
//       <h2 className="text-2xl font-extrabold text-center text-blue-700">CLH Mode 🚀</h2>
      
//       <textarea
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter your query here..."
//         className="w-full p-3 border-2 border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-xl transition-all duration-300"
//         rows={4}
//       />
  
//       <button
//         onClick={handleQuerySubmit}
//         className={`transition-all duration-300 ${
//           loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//         } text-white font-bold py-2 px-4 rounded-xl w-full shadow hover:shadow-md`}
//         disabled={loading}
//       >
//         {loading ? 'Generating...' : 'Submit'}
//       </button>
  
//       {response && (
//         <div className="bg-white border-l-4 border-blue-600 p-4 rounded-xl mt-4 shadow-inner transition-all duration-300">
//           <strong className="block text-blue-700 mb-2">CLH Response:</strong>
//           <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
//         </div>
//       )}
//     </div>
//   );
  
// };

// export default CLH;


//---------------trail

import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

const CLH = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const GEMINI_API_KEY = "AIzaSyBOI4-0Q3RQXlfICAW1MFGvBy2Vwsc9uz4";

  const handleQuerySubmit = async () => {
    if (!query.trim()) {
      setResponse('Please enter a query.');
      return;
    }

    setLoading(true);
    setResponse('');

    try {
      const result = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: query }],
              },
            ],
          }),
        }
      );

      const data = await result.json();
      const geminiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      setResponse(geminiText || 'No response received from Gemini.');
    } catch (error) {
      console.error('Error fetching Gemini response:', error);
      setResponse('An error occurred while fetching the response.');
    }

    setLoading(false);
  };

  // const downloadAsPDF = () => {
  //   const element = document.getElementById("gemini-output");
  //   if (element) {
  //     html2pdf().from(element).save("CLH_Response.pdf");
  //   }
  // };

  const downloadAsPDF = () => {
    const element = document.getElementById("gemini-output");
    if (element) {
      const opt = {
        margin:       0.5,
        filename:     'CLH_Response.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
  
      html2pdf().set(opt).from(element).save();
    }
  };
  

  return (
    <div className="p-6 max-w-xl mx-auto rounded-2xl shadow-2xl space-y-5 bg-gradient-to-br from-white to-blue-50">
      <h2 className="text-2xl font-extrabold text-center text-blue-700">CLH Mode 🚀</h2>

      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query here..."
        className="w-full p-3 border-2 border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-xl transition-all duration-300"
        rows={4}
      />

      <button
        onClick={handleQuerySubmit}
        className={`transition-all duration-300 ${
          loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        } text-white font-bold py-2 px-4 rounded-xl w-full shadow hover:shadow-md`}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Submit'}
      </button>

      {response && (
        <>
          <div
            id="gemini-output"
            className="bg-white border-l-4 border-blue-600 p-4 rounded-xl mt-4 shadow-inner transition-all duration-300 whitespace-pre-wrap"
          >
            <strong className="block text-blue-700 mb-2">CLH Response:</strong>
            <p className="text-gray-700">{response}</p>
          </div>
          <button
            onClick={downloadAsPDF}
            className="w-full bg-green-600 text-white p-3 rounded-lg mt-4 hover:bg-green-700 transition"
          >
            Download as PDF
          </button>
        </>
      )}
    </div>
  );
};

export default CLH;
