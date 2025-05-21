import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import axios from "axios";

const Editor = () => {
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState("javascript");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  // Map language options for CodeMirror
  const languageExtensions = {
    javascript: javascript(),
    java: java(),
    c: cpp(),
  };

  const runCode = async () => {
    setOutput("Running...");
    
    if (language === "javascript") {
      try {
        let logOutput = "";
        const originalLog = console.log;
        console.log = (...args) => {
          logOutput += args.join(" ") + "\n";
        };

        new Function("input", code)(input);
        console.log = originalLog;
        setOutput(logOutput || "Code executed successfully (no output).");
      } catch (error) {
        setOutput("Error: " + error.message);
      }
    } else {
      // Use Judge0 API for Java and C
      const apiEndpoint = "https://emkc.org/api/v2/piston/execute";
      const payload = {
        language: language === "c" ? "c" : "java",
        version: "*",
        files: [{ content: code }],
        stdin: input,
      };

      try {
        const response = await axios.post(apiEndpoint, payload);
        setOutput(response.data.run.stdout || response.data.run.stderr || "No output.");
      } catch (error) {
        setOutput("Error executing code.");
      }
    }
  };

  return (
    <div style={{ padding: "20px", background: "#282c34", color: "white" }}>
      <h2>Code Editor</h2>

      {/* Language Selector */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ marginBottom: "10px",background: "#61dafb" ,color:"black", padding: "5px",borderRadius: "8px" , fontSize: "16px" }}
      >
        <option value="c">C</option>
        <option value="java">Java</option>
         <option value="javascript">JavaScript</option>
      </select>


      {/* Code Editor */}
      <CodeMirror
        value={code}
        height="300px"
        theme="dark"
        extensions={[languageExtensions[language]]}
        onChange={(value) => setCode(value)}
      />

      {/* Input Section */}
      <div style={{ marginTop: "10px" }}>
        <h3>Input:</h3>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter input values here..."
          style={{ width: "100%", height: "100px", background: "#222", color: "white", border: "none", padding: "5px" }}
        />
      </div>
      {/* Run Button */}
      <button
        onClick={runCode}
        style={{ marginBottom: "10px",background: "#61dafb" ,color:"black", padding: "5px",borderRadius: "8px", fontSize: "16px" }}
      >
        Run Code
      </button>

      {/* Output Section */}
      <div style={{ marginTop: "10px" }}>
        <h3>Output:</h3>
        <textarea
          value={output}
          readOnly
          style={{ width: "100%", height: "100px", background: "#222", color: "lightgreen", border: "none", padding: "5px" }}
        />
      </div>
    </div>
  );
};

export default Editor;

