//--------------------------------final with all change----------------
import React, { useState, useRef, useEffect } from "react";
import Lecture from "./Lecture";
import Editor from "./Editor";
import Notes from "./Notes";
const SplitView = () => {
  const sections = {
    lecture: <Lecture />,
    editor: <Editor />,
    notes: <Notes />,
  };

  const [leftSection, setLeftSection] = useState("lecture");
  const [rightSection, setRightSection] = useState("editor");
  const [leftWidth, setLeftWidth] = useState(50); // % of container width

  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // Start dragging
  const handleMouseDown = () => {
    isDragging.current = true;
    document.body.style.cursor = "col-resize";
  };

  // Stop dragging
  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      document.body.style.cursor = "default";
    }
  };

  // Update width on drag
  const handleMouseMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;

    if (newLeftWidth > 10 && newLeftWidth < 90) {
      setLeftWidth(newLeftWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden" ref={containerRef}>
      {/* Selectors */}
      <div className="flex justify-center gap-4 p-4 bg-gray-800 text-white shrink-0">
        <div>
          <label className="mr-2">Left Section:</label>
          <select
            value={leftSection}
            onChange={(e) => setLeftSection(e.target.value)}
            className="p-2 bg-gray-700 text-white rounded-md"
          >
            <option value="lecture">Lecture</option>
            <option value="editor">Editor</option>
            <option value="notes">Notes</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Right Section:</label>
          <select
            value={rightSection}
            onChange={(e) => setRightSection(e.target.value)}
            className="p-2 bg-gray-700 text-white rounded-md"
          >
            <option value="lecture">Lecture</option>
            <option value="editor">Editor</option>
            <option value="notes">Notes</option>
          </select>
        </div>
      </div>

      {/* Split View */}
      <div className="flex flex-grow w-full relative overflow-hidden">
        {/* Left Pane */}
        <div
          className="bg-gray-200 border-r border-gray-400 h-full"
          style={{ width: `${leftWidth}%` }}
        >
          <div className="h-full overflow-y-auto p-4">{sections[leftSection]}</div>
        </div>

        {/* Divider */}
        <div
          className="w-2 cursor-col-resize bg-gray-500 hover:bg-gray-700 transition-colors"
          onMouseDown={handleMouseDown}
        ></div>

        {/* Right Pane */}
        <div
          className="bg-gray-900 text-white h-full"
          style={{ width: `${100 - leftWidth}%` }}
        >
          <div className="h-full overflow-y-auto p-4">{sections[rightSection]}</div>
        </div>
      </div>
    </div>
  );
};

export default SplitView;
