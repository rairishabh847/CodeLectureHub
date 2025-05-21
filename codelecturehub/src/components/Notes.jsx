//----------------------------------old 1 -----------------
// import { useState } from "react";

// const notes = [
//   {
//     title: "Introduction to C Language",
//     content: (
//       <p>C is a powerful general-purpose programming language. It was developed in 1972 by Dennis Ritchie at Bell Labs and is widely used for system programming, embedded systems, and application development.</p>
//     ),
//   },
//   {
//     title: "Basic Syntax",
//     content: (
//       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
//         {`#include <stdio.h>
// int main() {
//     printf("Hello, World!\n");
//     return 0;
// }`}
//       </pre>
//     ),
//   },
//   {
//     title: "Variables and Data Types",
//     content: (
//       <div>
//         <p>C supports various data types such as int, float, char, and double.</p>
//         <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
//           {`int age = 25;
// float pi = 3.14;
// char grade = 'A';`}
//         </pre>
//       </div>
//     ),
//   },
//   {
//     title: "Conditional Statements",
//     content: (
//       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
//         {`#include <stdio.h>
// int main() {
//     int num = 10;
//     if (num > 0) {
//         printf("Number is positive\n");
//     } else {
//         printf("Number is not positive\n");
//     }
//     return 0;
// }`}
//       </pre>
//     ),
//   },
//   {
//     title: "Loops in C",
//     content: (
//       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
//         {`#include <stdio.h>
// int main() {
//     for (int i = 0; i < 5; i++) {
//         printf("Iteration: %d\n", i);
//     }
//     return 0;
// }`}
//       </pre>
//     ),
//   },
//   {
//     title: "Functions in C",
//     content: (
//       <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto">
//         {`#include <stdio.h>
// void greet() {
//     printf("Hello from function!\n");
// }
// int main() {
//     greet();
//     return 0;
// }`}
//       </pre>
//     ),
//   },
// ];

// export default function Notes() {
//   const [activeNote, setActiveNote] = useState(null);

//   return (
//     <div className="bg-gray-100 text-gray-900 min-h-screen">
//       {/* Header */}
//       <header className="bg-blue-900 text-white p-5 text-center text-xl font-bold">
//         C Language Notes
//       </header>

//       {/* Content */}
//       <main className="max-w-3xl mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
//         {notes.map((note, index) => (
//           <div key={index} className="mt-6">
//             <h2
//               className="text-blue-900 text-xl font-semibold cursor-pointer hover:underline"
//               onClick={() => setActiveNote(activeNote === index ? null : index)}
//             >
//               {note.title}
//             </h2>
//             {activeNote === index && <div className="mt-2">{note.content}</div>}
//           </div>
//         ))}
//       </main>

//       {/* Footer */}
//       <footer className="text-center p-4 bg-blue-900 text-white mt-6">
//         &copy; 2024 CodeLecture Hub. All Rights Reserved.
//       </footer>
//     </div>
//   );
// }


//-------------------------------gemini in it below ------------------------------------------------



// import { useState } from "react";
// import CaseStudyGenerator from "./CaseStudyGenerator"; // Importing the CaseStudyGenerator

// const notes = [
//   { title: "Introduction to C Language", content: "C is a powerful general-purpose programming language developed by Dennis Ritchie in 1972." },
//   { title: "Basic Syntax", content: `#include <stdio.h>\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}` },
//   { title: "Variables and Data Types", content: "C supports int, float, char, and double as primary data types." },
//   { title: "Conditional Statements", content: `#include <stdio.h>\nint main() {\n    int num = 10;\n    if (num > 0) {\n        printf("Number is positive\\n");\n    }\n    return 0;\n}` },
//   { title: "Loops in C", content: `#include <stdio.h>\nint main() {\n    for (int i = 0; i < 5; i++) {\n        printf("Iteration: %d\\n", i);\n    }\n    return 0;\n}` },
//   { title: "Functions in C", content: `#include <stdio.h>\nvoid greet() {\n    printf("Hello from function!\\n");\n}\nint main() {\n    greet();\n    return 0;\n}` },
// ];

// export default function Notes() {
//   const [activeNote, setActiveNote] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedSearchResult, setSelectedSearchResult] = useState(null);

//   const filteredNotes = notes.filter(note => 
//     note.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="bg-gray-100 text-gray-900 min-h-screen">
//       {/* Header */}
//       <header className="bg-blue-900 text-white p-5 text-center text-xl font-bold">
//         C Language Notes
//       </header>

//       {/* Search Bar */}
//       <div className="max-w-3xl mx-auto mt-4 p-4">
//         <input
//           type="text"
//           placeholder="Search notes..."
//           className="w-full p-2 border border-gray-400 rounded-md"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Content */}
//       <main className="max-w-3xl mx-auto mt-4 p-6 bg-white shadow-md rounded-lg">
//         {filteredNotes.length > 0 ? (
//           filteredNotes.map((note, index) => (
//             <div key={index} className="mt-6">
//               <h2
//                 className="text-blue-900 text-xl font-semibold cursor-pointer hover:underline"
//                 onClick={() => setActiveNote(activeNote === index ? null : index)}
//               >
//                 {note.title}
//               </h2>
//               {activeNote === index && <p className="mt-2">{note.content}</p>}
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-600 text-center">No notes found.</p>
//         )}
//       </main>

//       {/* Case Study Generator Integration */}
//       {searchQuery && (
//         <div className="max-w-3xl mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
//           <h2 className="text-blue-900 text-xl font-semibold">AI-Generated Explanation</h2>
//           <p className="text-gray-600">Click below to generate an AI-powered explanation for:</p>
//           <button
//             className="mt-3 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
//             onClick={() => setSelectedSearchResult(searchQuery)}
//           >
//             Generate Explanation for "{searchQuery}"
//           </button>
//         </div>
//       )}

//       {selectedSearchResult && <CaseStudyGenerator query={selectedSearchResult} />}

//       {/* Footer */}
//       <footer className="text-center p-4 bg-blue-900 text-white mt-6">
//         &copy; 2024 CodeLecture Hub. All Rights Reserved.
//       </footer>
//     </div>
//   );
// }

//-------------------------------------new in below-------------------------


// import React, { useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// const questions = [
//   {
//     question: "1. Write a program to print the sum of two numbers.",
//     code: `#include <stdio.h>\nint main() {\n    int a = 10, b = 20;\n    int sum = a + b;\n    printf("Sum = %d\\n", sum);\n    return 0;\n}`,
//   },
//   {
//     question: "2. Write a program to find the largest of two numbers.",
//     code: `#include <stdio.h>\nint main() {\n    int a = 10, b = 20;\n    if (a > b) {\n        printf("%d is larger\\n", a);\n    } else {\n        printf("%d is larger\\n", b);\n    }\n    return 0;\n}`,
//   },
//   {
//     question: "3. Area and Circumference of Circle",
//     code: `#include <stdio.h>\n#define PI 3.1416\nint main() {\n    float r, area, circ;\n    printf("Enter radius: ");\n    scanf("%f", &r);\n    area = PI * r * r;\n    circ = 2 * PI * r;\n    printf("Area: %.2f, Circumference: %.2f\\n", area, circ);\n    return 0;\n}`,
//   },
//   {
//     question: "4. Centigrade to Fahrenheit",
//     code: `#include <stdio.h>\nint main() {\n    float C, F;\n    printf("Enter temperature in Celsius: ");\n    scanf("%f", &C);\n    F = (C * 9 / 5) + 32;\n    printf("Temperature in Fahrenheit: %.2f\\n", F);\n    return 0;\n}`,
//   },
//   {
//     question: "5. Swap Using Third Variable",
//     code: `#include <stdio.h>\nint main() {\n    int a, b, temp;\n    printf("Enter two numbers: ");\n    scanf("%d%d", &a, &b);\n    temp = a;\n    a = b;\n    b = temp;\n    printf("After swap: a = %d, b = %d\\n", a, b);\n    return 0;\n}`,
//   },
//   {
//     question: "6. Check if two numbers are equal",
//     code: `#include <stdio.h>\nint main() {\n    int a, b;\n    printf("Enter two numbers: ");\n    scanf("%d %d", &a, &b);\n    if (a == b) {\n        printf("Numbers are equal\\n");\n    } else {\n        printf("Numbers are not equal\\n");\n    }\n    return 0;\n}`,
//   },
//   {
//     question: "7. Find greatest of three numbers",
//     code: `#include <stdio.h>\nint main() {\n    int a, b, c;\n    printf("Enter three numbers: ");\n    scanf("%d %d %d", &a, &b, &c);\n    if (a >= b && a >= c) {\n        printf("%d is greatest\\n", a);\n    } else if (b >= a && b >= c) {\n        printf("%d is greatest\\n", b);\n    } else {\n        printf("%d is greatest\\n", c);\n    }\n    return 0;\n}`,
//   },
//   {
//     question: "8. Even or Odd",
//     code: `#include <stdio.h>\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if (num % 2 == 0) {\n        printf("Even\\n");\n    } else {\n        printf("Odd\\n");\n    }\n    return 0;\n}`,
//   },
//   {
//     question: "9. Leap Year",
//     code: `#include <stdio.h>\nint main() {\n    int year;\n    printf("Enter year: ");\n    scanf("%d", &year);\n    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {\n        printf("Leap year\\n");\n    } else {\n        printf("Not a leap year\\n");\n    }\n    return 0;\n}`,
//   },
//   {
//     question: "10. Grade Calculation",
//     code: `#include <stdio.h>\nint main() {\n    int marks[5], sum = 0;\n    float percentage;\n    char grade;\n    for (int i = 0; i < 5; i++) {\n        printf("Enter marks for subject %d: ", i + 1);\n        scanf("%d", &marks[i]);\n        sum += marks[i];\n    }\n    percentage = sum / 5.0;\n    if (percentage >= 90) {\n        grade = 'A';\n    } else if (percentage >= 80) {\n        grade = 'B';\n    } else if (percentage >= 60) {\n        grade = 'C';\n    } else {\n        grade = 'D';\n    }\n    printf("Percentage: %.2f%%, Grade: %c\\n", percentage, grade);\n    return 0;\n}`,
//   },
//   {
//     question: "11. Calculator using switch",
//     code: `#include <stdio.h>\nint main() {\n    float a, b;\n    char op;\n    printf("Enter two numbers and operator (+ - * /): ");\n    scanf("%f %c %f", &a, &op, &b);\n    switch (op) {\n        case '+':\n            printf("Result = %.2f\\n", a + b);\n            break;\n        case '-':\n            printf("Result = %.2f\\n", a - b);\n            break;\n        case '*':\n            printf("Result = %.2f\\n", a * b);\n            break;\n        case '/':\n            if (b != 0) {\n                printf("Result = %.2f\\n", a / b);\n            } else {\n                printf("Division by zero error\\n");\n            }\n            break;\n        default:\n            printf("Invalid operator\\n");\n    }\n    return 0;\n}`,
//   },
//   {
//     question: "12. Sum up to given number",
//     code: `#include <stdio.h>\nint main() {\n    int n, sum = 0;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        sum += i;\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}`,
//   },
//   {
//     question: "13. Factorial of a number",
//     code: `#include <stdio.h>\nint main() {\n    int n, fact = 1;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        fact *= i;\n    }\n    printf("Factorial = %d\\n", fact);\n    return 0;\n}`,
//   },
//   {
//     question: "14. Sum of even and odd numbers up to N",
//     code: `#include <stdio.h>\nint main() {\n    int n, even = 0, odd = 0;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        if (i % 2 == 0) {\n            even += i;\n        } else {\n            odd += i;\n        }\n    }\n    printf("Even Sum = %d, Odd Sum = %d\\n", even, odd);\n    return 0;\n}`,
//   },
//   {
//     question: "15. Fibonacci series",
//     code: `#include <stdio.h>\nint main() {\n    int n, a = 0, b = 1, c;\n    printf("Enter number of terms: ");\n    scanf("%d", &n);\n    printf("Fibonacci: %d %d ", a, b);\n    for (int i = 2; i < n; i++) {\n        c = a + b;\n        printf("%d ", c);\n        a = b;\n        b = c;\n    }\n    printf("\\n");\n    return 0;\n}`,
//   },
//   {
//     question: "16. Prime number check",
//     code: `#include <stdio.h>\nint main() {\n    int n, i, flag = 1;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    for (i = 2; i <= n / 2; i++) {\n        if (n % i == 0) {\n            flag = 0;\n            break;\n        }\n    }\n    if (n == 1) flag = 0;\n    if (flag) {\n        printf("Prime\\n");\n    } else {\n        printf("Not prime\\n");\n    }\n    return 0;\n}`,
//   },
//   {
//     question: "17. Sum of digits",
//     code: `#include <stdio.h>\nint main() {\n    int n, sum = 0;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    while (n != 0) {\n        sum += n % 10;\n        n /= 10;\n    }\n    printf("Sum of digits: %d\\n", sum);\n    return 0;\n}`,
//   },
//   {
//     question: "18. Reverse of number",
//     code: `#include <stdio.h>\nint main() {\n    int n, rev = 0;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    while (n != 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    printf("Reversed Number: %d\\n", rev);\n    return 0;\n}`,
//   },
//   {
//     question: "26. Matrix Addition and Multiplication",
//     code: `#include <stdio.h>\nint main() {\n    int a[10][10], b[10][10], sum[10][10], mult[10][10], n;\n    printf("Enter order of matrices (n x n): ");\n    scanf("%d", &n);\n    printf("Enter elements of Matrix A:\\n");\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++)\n            scanf("%d", &a[i][j]);\n    printf("Enter elements of Matrix B:\\n");\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++)\n            scanf("%d", &b[i][j]);\n\n    // Addition\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++)\n            sum[i][j] = a[i][j] + b[i][j];\n\n    // Multiplication\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) {\n            mult[i][j] = 0;\n            for (int k = 0; k < n; k++)\n                mult[i][j] += a[i][k] * b[k][j];\n        }\n\n    printf("Sum Matrix:\\n");\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++)\n            printf("%d ", sum[i][j]);\n        printf("\\n");\n    }\n\n    printf("Product Matrix:\\n");\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++)\n            printf("%d ", mult[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}`,
//   },
//   {
//     question: "27. Sum of diagonal elements of mxn matrix",
//     code: `#include <stdio.h>\nint main() {\n    int a[10][10], m, n, sum = 0;\n    printf("Enter rows and columns: ");\n    scanf("%d%d", &m, &n);\n    printf("Enter matrix elements:\\n");\n    for (int i = 0; i < m; i++)\n        for (int j = 0; j < n; j++)\n            scanf("%d", &a[i][j]);\n    for (int i = 0; i < m && i < n; i++)\n        sum += a[i][i];\n    printf("Sum of diagonal elements: %d\\n", sum);\n    return 0;\n}`,
//   },
//   {
//     question: "28. Implement strlen, strcat, strcpy",
//     code: `#include <stdio.h>\nint my_strlen(char str[]) {\n    int len = 0;\n    while (str[len] != '\\0') len++;\n    return len;\n}\nvoid my_strcpy(char dest[], char src[]) {\n    int i = 0;\n    while ((dest[i] = src[i]) != '\\0') i++;\n}\nvoid my_strcat(char dest[], char src[]) {\n    int i = my_strlen(dest);\n    int j = 0;\n    while ((dest[i++] = src[j++]) != '\\0');\n}\nint main() {\n    char str1[100], str2[100];\n    printf("Enter first string: ");\n    gets(str1);\n    printf("Enter second string: ");\n    gets(str2);\n    printf("Length of first string: %d\\n", my_strlen(str1));\n    my_strcpy(str1, str2);\n    printf("After strcpy, first string: %s\\n", str1);\n    my_strcat(str1, str2);\n    printf("After strcat, first string: %s\\n", str1);\n    return 0;\n}}`,
//   },
//   {
//     question: "29. Train Info Structure and Sample Handling",
//     code: `#include <stdio.h>\n#include <string.h>\n\nstruct TIME {\n    int hour, minute;\n};\n\nstruct TRAIN_INFO {\n    int train_no;\n    char name[50];\n    struct TIME dep, arr;\n    char start_station[50];\n    char end_station[50];\n};\n\nint main() {\n    struct TRAIN_INFO trains[3] = {\n        {101, "Express", {10, 30}, {14, 15}, "Delhi", "Kanpur"},\n        {102, "Intercity", {11, 0}, {15, 45}, "Delhi", "Lucknow"},\n        {103, "Shatabdi", {12, 45}, {17, 30}, "Delhi", "Varanasi"}\n    };\n\n    printf("Trains departing from Delhi:\\n");\n    for (int i = 0; i < 3; i++)\n        if (strcmp(trains[i].start_station, "Delhi") == 0)\n            printf("%d - %s\\n", trains[i].train_no, trains[i].name);\n\n    return 0;\n}}`,
//   },
//   {
//     question: "30. Swap using pointers",
//     code: `#include <stdio.h>\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\nint main() {\n    int x = 10, y = 20;\n    swap(&x, &y);\n    printf("After swapping: x = %d, y = %d\\n", x, y);\n    return 0;\n}}`,
//   },
//   {
//     question: "31. Compare contents of two files",
//     code: `#include <stdio.h>\nint main() {\n    FILE *f1 = fopen("file1.txt", "r");\n    FILE *f2 = fopen("file2.txt", "r");\n    char ch1, ch2;\n    int same = 1;\n    if (!f1 || !f2) {\n        printf("File could not be opened.\\n");\n        return 1;\n    }\n    while ((ch1 = fgetc(f1)) != EOF && (ch2 = fgetc(f2)) != EOF) {\n        if (ch1 != ch2) {\n            same = 0;\n            break;\n        }\n    }\n    if (same && fgetc(f1) == EOF && fgetc(f2) == EOF)\n        printf("Files are identical.\\n");\n    else\n        printf("Files are different.\\n");\n    fclose(f1);\n    fclose(f2);\n    return 0;\n}}`,
//   },
//   {
//     question: "32. Search word in file and count",
//     code: `#include <stdio.h>\n#include <string.h>\nint main() {\n    FILE *f = fopen("text.txt", "r");\n    char word[100], temp[100];\n    int count = 0;\n    printf("Enter word to search: ");\n    scanf("%s", word);\n    if (!f) {\n        printf("File could not be opened.\\n");\n        return 1;\n    }\n    while (fscanf(f, "%s", temp) != EOF)\n        if (strcmp(temp, word) == 0)\n            count++;\n    if (count > 0)\n        printf("Word '%s' found %d times.\\n", word, count);\n    else\n        printf("Word not found.\\n");\n    fclose(f);\n    return 0;\n}}`,
//   },
// ];

// const Notes = () => {
//   const handleCopy = (code) => {
//     navigator.clipboard.writeText(code);
//     alert("Code copied to clipboard!");
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-4">
//       <h1 className="text-3xl font-bold mb-4 text-center">C Programming Notes</h1>
//       {questions.map((item, index) => (
//         <div key={index} className="bg-gray-800 p-4 mb-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
//           <div className="relative">
//             <button
//               onClick={() => handleCopy(item.code)}
//               className="absolute right-2 top-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
//             >
//               Copy
//             </button>
//             <SyntaxHighlighter language="c" style={vscDarkPlus} className="rounded-md">
//               {item.code}
//             </SyntaxHighlighter>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Notes;

//--------------------------FINAL CODE GEMINI WORKING-------------------
// components/notes.jsx
import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function Notes() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
   
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const fetchGeminiResult = async () => {
    if (!query.trim()) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Generate short introduction, then C code and example for: ${query}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await res.json();
      const content = data.candidates?.[0]?.content?.parts?.[0]?.text || "No result.";
      setResult(content);
    } catch (error) {
      console.error("Error fetching Gemini result:", error);
      setResult("Something went wrong while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const downloadAsPDF = () => {
    const element = document.getElementById("gemini-output");
    html2pdf().from(element).save("C_Notes.pdf");
  };

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const questions = [
  {
    question: "1. Write a program to print the sum of two numbers.",
    code: `#include <stdio.h>\nint main() {\n    int a = 10, b = 20;\n    int sum = a + b;\n    printf("Sum = %d\\n", sum);\n    return 0;\n}`,
  },
  {
    question: "2. Write a program to find the largest of two numbers.",
    code: `#include <stdio.h>\nint main() {\n    int a = 10, b = 20;\n    if (a > b) {\n        printf("%d is larger\\n", a);\n    } else {\n        printf("%d is larger\\n", b);\n    }\n    return 0;\n}`,
  },
  {
    question: "3. Area and Circumference of Circle",
    code: `#include <stdio.h>\n#define PI 3.1416\nint main() {\n    float r, area, circ;\n    printf("Enter radius: ");\n    scanf("%f", &r);\n    area = PI * r * r;\n    circ = 2 * PI * r;\n    printf("Area: %.2f, Circumference: %.2f\\n", area, circ);\n    return 0;\n}`,
  },
  {
    question: "4. Centigrade to Fahrenheit",
    code: `#include <stdio.h>\nint main() {\n    float C, F;\n    printf("Enter temperature in Celsius: ");\n    scanf("%f", &C);\n    F = (C * 9 / 5) + 32;\n    printf("Temperature in Fahrenheit: %.2f\\n", F);\n    return 0;\n}`,
  },
  {
    question: "5. Swap Using Third Variable",
    code: `#include <stdio.h>\nint main() {\n    int a, b, temp;\n    printf("Enter two numbers: ");\n    scanf("%d%d", &a, &b);\n    temp = a;\n    a = b;\n    b = temp;\n    printf("After swap: a = %d, b = %d\\n", a, b);\n    return 0;\n}`,
  },
  {
    question: "6. Check if two numbers are equal",
    code: `#include <stdio.h>\nint main() {\n    int a, b;\n    printf("Enter two numbers: ");\n    scanf("%d %d", &a, &b);\n    if (a == b) {\n        printf("Numbers are equal\\n");\n    } else {\n        printf("Numbers are not equal\\n");\n    }\n    return 0;\n}`,
  },
  {
    question: "7. Find greatest of three numbers",
    code: `#include <stdio.h>\nint main() {\n    int a, b, c;\n    printf("Enter three numbers: ");\n    scanf("%d %d %d", &a, &b, &c);\n    if (a >= b && a >= c) {\n        printf("%d is greatest\\n", a);\n    } else if (b >= a && b >= c) {\n        printf("%d is greatest\\n", b);\n    } else {\n        printf("%d is greatest\\n", c);\n    }\n    return 0;\n}`,
  },
  {
    question: "8. Even or Odd",
    code: `#include <stdio.h>\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if (num % 2 == 0) {\n        printf("Even\\n");\n    } else {\n        printf("Odd\\n");\n    }\n    return 0;\n}`,
  },
  {
    question: "9. Leap Year",
    code: `#include <stdio.h>\nint main() {\n    int year;\n    printf("Enter year: ");\n    scanf("%d", &year);\n    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {\n        printf("Leap year\\n");\n    } else {\n        printf("Not a leap year\\n");\n    }\n    return 0;\n}`,
  },
  {
    question: "10. Grade Calculation",
    code: `#include <stdio.h>\nint main() {\n    int marks[5], sum = 0;\n    float percentage;\n    char grade;\n    for (int i = 0; i < 5; i++) {\n        printf("Enter marks for subject %d: ", i + 1);\n        scanf("%d", &marks[i]);\n        sum += marks[i];\n    }\n    percentage = sum / 5.0;\n    if (percentage >= 90) {\n        grade = 'A';\n    } else if (percentage >= 80) {\n        grade = 'B';\n    } else if (percentage >= 60) {\n        grade = 'C';\n    } else {\n        grade = 'D';\n    }\n    printf("Percentage: %.2f%%, Grade: %c\\n", percentage, grade);\n    return 0;\n}`,
  },
  {
    question: "11. Calculator using switch",
    code: `#include <stdio.h>\nint main() {\n    float a, b;\n    char op;\n    printf("Enter two numbers and operator (+ - * /): ");\n    scanf("%f %c %f", &a, &op, &b);\n    switch (op) {\n        case '+':\n            printf("Result = %.2f\\n", a + b);\n            break;\n        case '-':\n            printf("Result = %.2f\\n", a - b);\n            break;\n        case '*':\n            printf("Result = %.2f\\n", a * b);\n            break;\n        case '/':\n            if (b != 0) {\n                printf("Result = %.2f\\n", a / b);\n            } else {\n                printf("Division by zero error\\n");\n            }\n            break;\n        default:\n            printf("Invalid operator\\n");\n    }\n    return 0;\n}`,
  },
  {
    question: "12. Sum up to given number",
    code: `#include <stdio.h>\nint main() {\n    int n, sum = 0;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        sum += i;\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}`,
  },
  {
    question: "13. Factorial of a number",
    code: `#include <stdio.h>\nint main() {\n    int n, fact = 1;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        fact *= i;\n    }\n    printf("Factorial = %d\\n", fact);\n    return 0;\n}`,
  },
  {
    question: "14. Sum of even and odd numbers up to N",
    code: `#include <stdio.h>\nint main() {\n    int n, even = 0, odd = 0;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        if (i % 2 == 0) {\n            even += i;\n        } else {\n            odd += i;\n        }\n    }\n    printf("Even Sum = %d, Odd Sum = %d\\n", even, odd);\n    return 0;\n}`,
  },
  {
    question: "15. Fibonacci series",
    code: `#include <stdio.h>\nint main() {\n    int n, a = 0, b = 1, c;\n    printf("Enter number of terms: ");\n    scanf("%d", &n);\n    printf("Fibonacci: %d %d ", a, b);\n    for (int i = 2; i < n; i++) {\n        c = a + b;\n        printf("%d ", c);\n        a = b;\n        b = c;\n    }\n    printf("\\n");\n    return 0;\n}`,
  },
  {
    question: "16. Prime number check",
    code: `#include <stdio.h>\nint main() {\n    int n, i, flag = 1;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    for (i = 2; i <= n / 2; i++) {\n        if (n % i == 0) {\n            flag = 0;\n            break;\n        }\n    }\n    if (n == 1) flag = 0;\n    if (flag) {\n        printf("Prime\\n");\n    } else {\n        printf("Not prime\\n");\n    }\n    return 0;\n}`,
  },
  {
    question: "17. Sum of digits",
    code: `#include <stdio.h>\nint main() {\n    int n, sum = 0;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    while (n != 0) {\n        sum += n % 10;\n        n /= 10;\n    }\n    printf("Sum of digits: %d\\n", sum);\n    return 0;\n}`,
  },
  {
    question: "18. Reverse of number",
    code: `#include <stdio.h>\nint main() {\n    int n, rev = 0;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    while (n != 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    printf("Reversed Number: %d\\n", rev);\n    return 0;\n}`,
  },
  {
    question: "26. Matrix Addition and Multiplication",
    code: `#include <stdio.h>\nint main() {\n    int a[10][10], b[10][10], sum[10][10], mult[10][10], n;\n    printf("Enter order of matrices (n x n): ");\n    scanf("%d", &n);\n    printf("Enter elements of Matrix A:\\n");\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++)\n            scanf("%d", &a[i][j]);\n    printf("Enter elements of Matrix B:\\n");\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++)\n            scanf("%d", &b[i][j]);\n\n    // Addition\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++)\n            sum[i][j] = a[i][j] + b[i][j];\n\n    // Multiplication\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) {\n            mult[i][j] = 0;\n            for (int k = 0; k < n; k++)\n                mult[i][j] += a[i][k] * b[k][j];\n        }\n\n    printf("Sum Matrix:\\n");\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++)\n            printf("%d ", sum[i][j]);\n        printf("\\n");\n    }\n\n    printf("Product Matrix:\\n");\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++)\n            printf("%d ", mult[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}`,
  },
  {
    question: "27. Sum of diagonal elements of mxn matrix",
    code: `#include <stdio.h>\nint main() {\n    int a[10][10], m, n, sum = 0;\n    printf("Enter rows and columns: ");\n    scanf("%d%d", &m, &n);\n    printf("Enter matrix elements:\\n");\n    for (int i = 0; i < m; i++)\n        for (int j = 0; j < n; j++)\n            scanf("%d", &a[i][j]);\n    for (int i = 0; i < m && i < n; i++)\n        sum += a[i][i];\n    printf("Sum of diagonal elements: %d\\n", sum);\n    return 0;\n}`,
  },
  {
    question: "28. Implement strlen, strcat, strcpy",
    code: `#include <stdio.h>\nint my_strlen(char str[]) {\n    int len = 0;\n    while (str[len] != '\\0') len++;\n    return len;\n}\nvoid my_strcpy(char dest[], char src[]) {\n    int i = 0;\n    while ((dest[i] = src[i]) != '\\0') i++;\n}\nvoid my_strcat(char dest[], char src[]) {\n    int i = my_strlen(dest);\n    int j = 0;\n    while ((dest[i++] = src[j++]) != '\\0');\n}\nint main() {\n    char str1[100], str2[100];\n    printf("Enter first string: ");\n    gets(str1);\n    printf("Enter second string: ");\n    gets(str2);\n    printf("Length of first string: %d\\n", my_strlen(str1));\n    my_strcpy(str1, str2);\n    printf("After strcpy, first string: %s\\n", str1);\n    my_strcat(str1, str2);\n    printf("After strcat, first string: %s\\n", str1);\n    return 0;\n}}`,
  },
  {
    question: "29. Train Info Structure and Sample Handling",
    code: `#include <stdio.h>\n#include <string.h>\n\nstruct TIME {\n    int hour, minute;\n};\n\nstruct TRAIN_INFO {\n    int train_no;\n    char name[50];\n    struct TIME dep, arr;\n    char start_station[50];\n    char end_station[50];\n};\n\nint main() {\n    struct TRAIN_INFO trains[3] = {\n        {101, "Express", {10, 30}, {14, 15}, "Delhi", "Kanpur"},\n        {102, "Intercity", {11, 0}, {15, 45}, "Delhi", "Lucknow"},\n        {103, "Shatabdi", {12, 45}, {17, 30}, "Delhi", "Varanasi"}\n    };\n\n    printf("Trains departing from Delhi:\\n");\n    for (int i = 0; i < 3; i++)\n        if (strcmp(trains[i].start_station, "Delhi") == 0)\n            printf("%d - %s\\n", trains[i].train_no, trains[i].name);\n\n    return 0;\n}}`,
  },
  {
    question: "30. Swap using pointers",
    code: `#include <stdio.h>\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\nint main() {\n    int x = 10, y = 20;\n    swap(&x, &y);\n    printf("After swapping: x = %d, y = %d\\n", x, y);\n    return 0;\n}}`,
  },
  {
    question: "31. Compare contents of two files",
    code: `#include <stdio.h>\nint main() {\n    FILE *f1 = fopen("file1.txt", "r");\n    FILE *f2 = fopen("file2.txt", "r");\n    char ch1, ch2;\n    int same = 1;\n    if (!f1 || !f2) {\n        printf("File could not be opened.\\n");\n        return 1;\n    }\n    while ((ch1 = fgetc(f1)) != EOF && (ch2 = fgetc(f2)) != EOF) {\n        if (ch1 != ch2) {\n            same = 0;\n            break;\n        }\n    }\n    if (same && fgetc(f1) == EOF && fgetc(f2) == EOF)\n        printf("Files are identical.\\n");\n    else\n        printf("Files are different.\\n");\n    fclose(f1);\n    fclose(f2);\n    return 0;\n}}`,
  },
  {
    question: "32. Search word in file and count",
    code: `#include <stdio.h>\n#include <string.h>\nint main() {\n    FILE *f = fopen("text.txt", "r");\n    char word[100], temp[100];\n    int count = 0;\n    printf("Enter word to search: ");\n    scanf("%s", word);\n    if (!f) {\n        printf("File could not be opened.\\n");\n        return 1;\n    }\n    while (fscanf(f, "%s", temp) != EOF)\n        if (strcmp(temp, word) == 0)\n            count++;\n    if (count > 0)\n        printf("Word '%s' found %d times.\\n", word, count);\n    else\n        printf("Word not found.\\n");\n    fclose(f);\n    return 0;\n}}`,
  },

];

  return (
    <div className="bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1px)] [background-size:20px_20px] min-h-screen flex items-center justify-center">
   
   <div className=" max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">C Programming Notes</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter C programming topic..."
        className="w-full p-3 border rounded-lg mb-4 shadow-sm"
      />
      <button
        onClick={fetchGeminiResult}
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Generating..." : "Search & Generate with Gemini"}
      </button>

      {result && (
        <>
          <div
            id="gemini-output"
            className="bg-white border rounded-lg p-5 mt-6 shadow whitespace-pre-wrap"
          >
            {result}
          </div>
          <button
            onClick={downloadAsPDF}
            className="w-full bg-green-600 text-white p-3 rounded-lg mt-4 hover:bg-green-700 transition"
          >
            Download as PDF
          </button>
        </>
      )}

      <h2 className="text-2xl font-semibold mt-10 mb-4">C Programs Collection</h2>
      <div className="space-y-6">
        {questions.map((item, index) => (
          <div key={index} className="relative border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold mb-2">{item.question}</h3>

            <div className="relative">
              <button
                onClick={() => copyToClipboard(item.code, index)}
                className="absolute right-2 top-2 text-gray-400 hover:text-black transition"
                title="Copy to clipboard"
              >
                {copiedIndex === index ? <FiCheck className="text-green-600" /> : <FiCopy />}
              </button>

              <SyntaxHighlighter
                language="c"
                style={vscDarkPlus}
                customStyle={{
                  borderRadius: "0.5rem",
                  paddingTop: "1.5rem", // for button spacing
                }}
              >
                {item.code}
              </SyntaxHighlighter>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
